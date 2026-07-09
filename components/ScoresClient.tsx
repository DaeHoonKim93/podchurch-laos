'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Song {
  order: number;
  title: string;
  file: string;
}

interface ScoreSession {
  id: string;
  date: string;
  day: string;
  session: string;
  folder: string;
  songs: Song[];
}

function ScorePopup({ song, folder, onClose }: { song: Song; folder: string; onClose: () => void }) {
  const ext = song.file.split('.').pop()?.toLowerCase();
  const isJpg = ext === 'jpg' || ext === 'jpeg';
  const src = `/${folder}/${song.file}`;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.9)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        {/* 헤더 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 20px',
          background: 'rgba(0,0,0,0.8)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          flexShrink: 0,
        }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{song.title}</div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)', border: 'none',
              color: '#fff', width: 32, height: 32,
              borderRadius: '50%', cursor: 'pointer', fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
        </div>

        {/* 악보 이미지 */}
        <div style={{
          flex: 1, overflow: 'auto',
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          padding: '12px',
        }}>
          <img
            src={src}
            alt={song.title}
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
          />
        </div>

        <div style={{
          textAlign: 'center', padding: '10px',
          fontSize: 11, color: 'rgba(255,255,255,0.25)', flexShrink: 0,
        }}>
          두 손가락으로 확대할 수 있어요
        </div>
      </div>
    </div>
  );
}

export default function ScoresClient({ sessions }: { sessions: ScoreSession[] }) {
  // 날짜 목록 (중복 제거)
  const dates = Array.from(new Set(sessions.map(s => s.date)));
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedSong, setSelectedSong] = useState<{ song: Song; folder: string } | null>(null);

  const currentSessions = sessions.filter(s => s.date === selectedDate);

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 52px)', overflow: 'hidden' }}>

      {/* 왼쪽 날짜 탭 */}
      <div style={{
        width: 68, flexShrink: 0,
        background: 'rgba(0,0,0,0.3)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        overflowY: 'auto',
        paddingTop: 8, paddingBottom: 8,
      }}>
        {dates.map((date) => {
          const isActive = date === selectedDate;
          const session = sessions.find(s => s.date === date);
          const [month, day] = date.split('/');
          return (
            <div
              key={date}
              onClick={() => setSelectedDate(date)}
              style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '10px 4px',
                cursor: 'pointer',
                borderLeft: isActive ? '2px solid #fbbf24' : '2px solid transparent',
                background: isActive ? 'rgba(251,191,36,0.06)' : 'transparent',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <div style={{ fontSize: 9, color: isActive ? '#fbbf24' : 'rgba(255,255,255,0.3)', marginBottom: 2 }}>
                {month}월
              </div>
              <div style={{
                fontSize: 16, fontWeight: 700,
                color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                lineHeight: 1,
              }}>
                {day}
              </div>
              <div style={{
                marginTop: 4, fontSize: 9,
                color: isActive ? '#fbbf24' : 'rgba(255,255,255,0.35)',
              }}>
                ({session?.day})
              </div>
            </div>
          );
        })}
      </div>

      {/* 오른쪽 악보 목록 */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
        {currentSessions.map((session) => (
          <div key={session.id} style={{ marginBottom: 16 }}>
            {/* 오전/저녁 구분 */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              marginBottom: 8, padding: '8px 12px',
              background: session.session === '오전'
                ? 'rgba(251,191,36,0.06)' : 'rgba(167,139,250,0.06)',
              border: `1px solid ${session.session === '오전' ? 'rgba(251,191,36,0.2)' : 'rgba(167,139,250,0.2)'}`,
              borderRadius: 10,
            }}>
              <span style={{ fontSize: 14 }}>
                {session.session === '오전' ? '🌅' : '🌙'}
              </span>
              <span style={{
                fontSize: 13, fontWeight: 700,
                color: session.session === '오전' ? '#fbbf24' : '#a78bfa',
              }}>
                {session.session} 예배
              </span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }}>
                {session.songs.length}곡
              </span>
            </div>

            {/* 악보 카드 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {session.songs.map((song) => (
                <div
                  key={song.order}
                  onClick={() => setSelectedSong({ song, folder: session.folder })}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 12,
                    cursor: 'pointer',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'rgba(251,191,36,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, color: '#fbbf24', fontWeight: 700, flexShrink: 0,
                  }}>
                    {song.order}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>
                      {song.title}
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
                    악보 보기 →
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 악보 팝업 */}
      {selectedSong && (
        <ScorePopup
          song={selectedSong.song}
          folder={selectedSong.folder}
          onClose={() => setSelectedSong(null)}
        />
      )}
    </div>
  );
}
