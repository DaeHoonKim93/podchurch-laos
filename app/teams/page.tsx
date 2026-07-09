import Header from '@/components/Header';
import teams from '@/data/teams.json';

const colorMap: Record<string, { accent: string; bg: string; leaderBg: string }> = {
  teal:   { accent: '#34d399', bg: 'rgba(52,211,153,0.08)',   leaderBg: 'rgba(52,211,153,0.15)' },
  amber:  { accent: '#fbbf24', bg: 'rgba(251,191,36,0.08)',   leaderBg: 'rgba(251,191,36,0.15)' },
  blue:   { accent: '#60a5fa', bg: 'rgba(96,165,250,0.08)',   leaderBg: 'rgba(96,165,250,0.15)' },
  purple: { accent: '#a78bfa', bg: 'rgba(167,139,250,0.08)',  leaderBg: 'rgba(167,139,250,0.15)' },
  coral:  { accent: '#f472b6', bg: 'rgba(244,114,182,0.08)',  leaderBg: 'rgba(244,114,182,0.15)' },
  green:  { accent: '#4ade80', bg: 'rgba(74,222,128,0.08)',   leaderBg: 'rgba(74,222,128,0.15)' },
  pink:   { accent: '#fb7185', bg: 'rgba(251,113,133,0.08)',  leaderBg: 'rgba(251,113,133,0.15)' },
};

export default function TeamsPage() {
  return (
    <>
      <Header title="사역팀 소개" />
      <main style={{ padding: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {teams.map((team) => {
            const c = colorMap[team.color] ?? colorMap.teal;
            return (
              <div key={team.id} style={{
                background: c.bg,
                border: `1px solid ${c.accent}25`,
                borderRadius: 16,
                padding: '16px 18px',
              }}>
                {/* 팀 이름 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: c.accent, flexShrink: 0,
                  }} />
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>
                    {team.name}
                  </div>
                  <div style={{
                    marginLeft: 'auto',
                    fontSize: 11, color: 'rgba(255,255,255,0.35)',
                  }}>
                    {team.members.length + 1}명
                  </div>
                </div>

                {/* 팀원 배지 */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {/* 팀장 */}
                  <span style={{
                    fontSize: 12, padding: '4px 12px',
                    background: c.leaderBg,
                    color: c.accent,
                    borderRadius: 20,
                    fontWeight: 700,
                    border: `1px solid ${c.accent}40`,
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}>
                    👑 {team.leader}
                  </span>
                  {/* 팀원 */}
                  {team.members.map((m) => (
                    <span key={m} style={{
                      fontSize: 12, padding: '4px 12px',
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.7)',
                      borderRadius: 20,
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
