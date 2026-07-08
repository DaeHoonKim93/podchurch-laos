'use client';

import { useState } from 'react';

interface Prayer {
  no: number;
  date: string;
  name: string;
  prayer: string;
}

interface PrayersData {
  dates: string[];
  prayers: Record<string, Prayer[]>;
}

function PrayerPopup({ prayer, onClose }: { prayer: Prayer; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex', alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 430,
          maxHeight: '80vh',
          background: '#0f1e36',
          borderRadius: '20px 20px 0 0',
          border: '1px solid rgba(255,255,255,0.08)',
          borderBottom: 'none',
          paddingBottom: 'env(safe-area-inset-bottom)',
          display: 'flex', flexDirection: 'column',
          animation: 'slideUp 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        `}</style>

        {/* 핸들 바 */}
        <div style={{ padding: '12px 0 0', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ width: 36, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
        </div>

        {/* 헤더 */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '16px 20px', flexShrink: 0,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'rgba(74,222,128,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, color: '#4ade80', flexShrink: 0,
          }}>
            ✿
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 2 }}>
              {prayer.name}
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>
              {prayer.date}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              marginLeft: 'auto', background: 'rgba(255,255,255,0.06)',
              border: 'none', color: 'rgba(255,255,255,0.5)',
              width: 30, height: 30, borderRadius: '50%',
              cursor: 'pointer', fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* 기도문 내용 */}
        <div style={{
          padding: '0 20px 28px', overflowY: 'auto',
          fontSize: 14, color: 'rgba(255,255,255,0.85)',
          lineHeight: 1.8, whiteSpace: 'pre-wrap',
        }}>
          {prayer.prayer}
        </div>
      </div>
    </div>
  );
}

export default function PrayersClient({ data }: { data: PrayersData }) {
  const [activeDate, setActiveDate] = useState(data.dates[0] ?? '');
  const [selected, setSelected] = useState<Prayer | null>(null);

  const prayers = data.prayers[activeDate] ?? [];

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 52px)' }}>
      {/* 왼쪽 날짜 탭 */}
      <nav style={{
        width: 76, flexShrink: 0,
        borderRight: '1px solid rgba(255,255,255,0.06)',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 52px)',
        position: 'sticky', top: 52,
      }}>
        {data.dates.map((date) => {
          const isActive = date === activeDate;
          return (
            <button
              key={date}
              onClick={() => setActiveDate(date)}
              style={{
                display: 'block', width: '100%',
                padding: '14px 8px',
                background: isActive ? 'rgba(74,222,128,0.08)' : 'transparent',
                border: 'none',
                borderLeft: isActive ? '2px solid #4ade80' : '2px solid transparent',
                color: isActive ? '#4ade80' : 'rgba(255,255,255,0.5)',
                fontWeight: isActive ? 700 : 400,
                fontSize: 13,
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                transition: 'all 0.15s',
              }}
            >
              {date}
            </button>
          );
        })}
      </nav>

      {/* 오른쪽 기도문 카드 목록 */}
      <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {prayers.length === 0 && (
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', padding: '20px 0', textAlign: 'center' }}>
            등록된 기도문이 없습니다.
          </div>
        )}
        {prayers.map((prayer) => (
          <div
            key={prayer.no}
            onClick={() => setSelected(prayer)}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 14,
              padding: '14px 16px',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
              transition: 'border-color 0.15s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: '#4ade80' }}>✿</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>
                {prayer.name}
              </span>
            </div>
            <div style={{
              fontSize: 12, color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {prayer.prayer}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <PrayerPopup prayer={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
