'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Member } from '@/types';

const teamColors: Record<string, { bg: string; text: string; badge: string }> = {
  '워십팀':   { bg: '#2d1b69', text: '#a78bfa', badge: 'rgba(167,139,250,0.15)' },
  '미디어팀': { bg: '#0f3d2e', text: '#34d399', badge: 'rgba(52,211,153,0.15)' },
  '어린이팀': { bg: '#3d2200', text: '#fbbf24', badge: 'rgba(251,191,36,0.15)' },
  '기도팀':   { bg: '#3d0f1f', text: '#f472b6', badge: 'rgba(244,114,182,0.15)' },
};

function getInitials(name: string) {
  return name.slice(-2);
}

function TeamBadge({ team }: { team: string }) {
  const c = teamColors[team] ?? { bg: '#1e293b', text: '#94a3b8', badge: 'rgba(148,163,184,0.15)' };
  return (
    <span style={{
      display: 'inline-block',
      fontSize: 10, fontWeight: 600,
      padding: '2px 8px', borderRadius: 20,
      background: c.badge, color: c.text,
    }}>
      {team}
    </span>
  );
}

function MemberPopup({ member, onClose }: { member: Member; onClose: () => void }) {
  const c = teamColors[member.team] ?? { bg: '#1e293b', text: '#94a3b8', badge: 'rgba(148,163,184,0.15)' };

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
          background: '#0f1e36',
          borderRadius: '20px 20px 0 0',
          border: '1px solid rgba(255,255,255,0.08)',
          borderBottom: 'none',
          paddingBottom: 'env(safe-area-inset-bottom)',
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
        <div style={{ padding: '12px 0 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 36, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
        </div>

        {/* 프로필 헤더 */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '16px 20px 16px',
        }}>
          <div style={{
            width: 60, height: 60, borderRadius: '50%',
            overflow: 'hidden', flexShrink: 0,
            border: `2px solid ${c.text}40`,
            position: 'relative',
            background: c.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Image
              src={member.photo}
              alt={member.name}
              fill
              style={{ objectFit: 'cover' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <span style={{ fontSize: 18, fontWeight: 700, color: c.text, position: 'relative', zIndex: 1 }}>
              {getInitials(member.name)}
            </span>
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
              {member.name}
            </div>
            <TeamBadge team={member.team} />
          </div>
          <button
            onClick={onClose}
            style={{
              marginLeft: 'auto', background: 'rgba(255,255,255,0.06)',
              border: 'none', color: 'rgba(255,255,255,0.5)',
              width: 30, height: 30, borderRadius: '50%',
              cursor: 'pointer', fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        {/* 한줄 소개 */}
        {member.intro && (
          <div style={{
            margin: '0 20px 0',
            padding: '10px 14px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: 10,
            fontSize: 13, color: 'rgba(255,255,255,0.6)',
            fontStyle: 'italic',
          }}>
            {member.intro}
          </div>
        )}

        {/* 상세 정보 */}
        <div style={{ padding: '16px 20px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { icon: '♪', label: '좋아하는 찬양', value: member.hymn },
            { icon: '✦', label: '약속의 말씀', value: member.verse },
            { icon: '✿', label: '기도제목', value: member.prayer },
          ].map((item, i) => (
            <div key={i}>
              <div style={{
                display: 'flex', gap: 12, padding: '14px 0',
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}>
                <span style={{ fontSize: 14, color: c.text, flexShrink: 0, marginTop: 1 }}>
                  {item.icon}
                </span>
                <div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 4, letterSpacing: '0.05em' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                    {item.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MembersClient({ members }: { members: Member[] }) {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <div style={{ padding: '16px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 12,
      }}>
        {members.map((member) => {
          const c = teamColors[member.team] ?? { bg: '#1e293b', text: '#94a3b8', badge: '' };
          return (
            <div
              key={member.id}
              onClick={() => setSelected(member)}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.15s',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {/* 사진 영역 */}
              <div style={{
                height: 110, background: c.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <span style={{
                  fontSize: 28, fontWeight: 700, color: c.text,
                  position: 'relative', zIndex: 1,
                }}>
                  {getInitials(member.name)}
                </span>
              </div>

              {/* 이름 + 팀 */}
              <div style={{ padding: '10px 12px 12px' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 5 }}>
                  {member.name}
                </div>
                <TeamBadge team={member.team} />
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <MemberPopup member={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
