'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Member {
  id: number;
  name: string;
  team: string;
  photo: string;
  nameDesc: string;
  intro: string;
  favoriteFood: string;
  podHope: string;
  hymn: string;
  verse: string;
  prayer: string;
  laosHope: string;
}

const teamColors: Record<string, { bg: string; text: string; badge: string }> = {
  '목사님':   { bg: '#1a2a1a', text: '#4ade80', badge: 'rgba(74,222,128,0.15)' },
  '팀장':     { bg: '#1a1a2e', text: '#60a5fa', badge: 'rgba(96,165,250,0.15)' },
  '총무':     { bg: '#1a1a2e', text: '#60a5fa', badge: 'rgba(96,165,250,0.15)' },
  '회계':     { bg: '#1a1a2e', text: '#60a5fa', badge: 'rgba(96,165,250,0.15)' },
  '워십팀':   { bg: '#2d1b69', text: '#a78bfa', badge: 'rgba(167,139,250,0.15)' },
  '예배팀':   { bg: '#2d1b69', text: '#a78bfa', badge: 'rgba(167,139,250,0.15)' },
  '미디어팀': { bg: '#0f3d2e', text: '#34d399', badge: 'rgba(52,211,153,0.15)' },
  '어린이캠프사역팀': { bg: '#3d2200', text: '#fbbf24', badge: 'rgba(251,191,36,0.15)' },
  '기도팀':   { bg: '#3d0f1f', text: '#f472b6', badge: 'rgba(244,114,182,0.15)' },
  '보수사역팀': { bg: '#1a2a3a', text: '#60a5fa', badge: 'rgba(96,165,250,0.15)' },
  '중보기도팀': { bg: '#3d0f1f', text: '#f472b6', badge: 'rgba(244,114,182,0.15)' },
  '드라마팀': { bg: '#2d1b69', text: '#a78bfa', badge: 'rgba(167,139,250,0.15)' },
  '댄싱팀':   { bg: '#3d1a1a', text: '#fb7185', badge: 'rgba(251,113,133,0.15)' },
};

function getTeamColor(team: string) {
  const firstTeam = team.split('/')[0].trim();
  return teamColors[firstTeam] ?? { bg: '#1e293b', text: '#94a3b8', badge: 'rgba(148,163,184,0.15)' };
}

function getInitials(name: string) {
  return name.slice(-2);
}

function DetailRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  if (!value) return null;
  return (
    <div style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1, width: 20, textAlign: 'center' }}>{icon}</span>
      <div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 4, letterSpacing: '0.05em' }}>
          {label}
        </div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
          {value}
        </div>
      </div>
    </div>
  );
}

function MemberPopup({ member, onClose }: { member: Member; onClose: () => void }) {
  const c = getTeamColor(member.team);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
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
          maxHeight: '88vh',
          display: 'flex', flexDirection: 'column',
          animation: 'slideUp 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }`}</style>

        {/* 핸들 */}
        <div style={{ padding: '12px 0 0', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ width: 36, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
        </div>

        {/* 프로필 헤더 */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '14px 20px 14px', flexShrink: 0,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
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
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
              {member.name}
            </div>
            <div style={{ fontSize: 11, color: c.text }}>{member.team}</div>
            {member.nameDesc && member.nameDesc !== '-' && (
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 3 }}>
                이름의 뜻: {member.nameDesc}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.06)', border: 'none',
              color: 'rgba(255,255,255,0.5)', width: 30, height: 30,
              borderRadius: '50%', cursor: 'pointer', fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}
          >✕</button>
        </div>

        {/* 스크롤 영역 */}
        <div style={{ overflowY: 'auto', padding: '4px 20px 28px' }}>
          <DetailRow icon="👤" label="자기소개" value={member.intro} />
          <DetailRow icon="🍜" label="좋아하는 음식" value={member.favoriteFood} />
          <DetailRow icon="🏠" label="POD에서의 소망" value={member.podHope} />
          <DetailRow icon="♪" label="좋아하는 찬양" value={member.hymn} />
          <DetailRow icon="✦" label="약속의 말씀" value={member.verse} />
          <DetailRow icon="🙏" label="라오스 기도제목" value={member.prayer} />
          <DetailRow icon="✈" label="라오스에서의 소망" value={member.laosHope} />
        </div>
      </div>
    </div>
  );
}

export default function MembersClient({ members }: { members: Member[] }) {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
        {members.map((member) => {
          const c = getTeamColor(member.team);
          return (
            <div
              key={member.id}
              onClick={() => setSelected(member)}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14, overflow: 'hidden',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {/* 사진 */}
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
                <span style={{ fontSize: 28, fontWeight: 700, color: c.text, position: 'relative', zIndex: 1 }}>
                  {getInitials(member.name)}
                </span>
              </div>
              {/* 이름 + 팀 */}
              <div style={{ padding: '10px 12px 12px' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 5 }}>
                  {member.name}
                </div>
                <div style={{
                  fontSize: 10, fontWeight: 600,
                  padding: '2px 8px', borderRadius: 20,
                  background: c.badge, color: c.text,
                  display: 'inline-block',
                }}>
                  {member.team.split('/')[0].trim()}
                </div>
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
