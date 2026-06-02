import Header from '@/components/Header';
import teams from '@/data/teams.json';

const colorMap: Record<string, { accent: string; bg: string }> = {
  purple: { accent: '#a78bfa', bg: 'rgba(167,139,250,0.08)' },
  teal:   { accent: '#34d399', bg: 'rgba(52,211,153,0.08)' },
  amber:  { accent: '#fbbf24', bg: 'rgba(251,191,36,0.08)' },
  coral:  { accent: '#f472b6', bg: 'rgba(244,114,182,0.08)' },
};

export default function TeamsPage() {
  return (
    <>
      <Header title="사역팀 소개" />
      <main style={{ padding: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {teams.map((team) => {
            const c = colorMap[team.color] ?? { accent: '#94a3b8', bg: 'rgba(148,163,184,0.08)' };
            return (
              <div key={team.id} style={{
                background: c.bg,
                border: `1px solid ${c.accent}25`,
                borderRadius: 16,
                padding: '18px 18px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: `${c.accent}20`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16, color: c.accent,
                  }}>◈</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{team.name}</div>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 12, lineHeight: 1.6 }}>
                  {team.description}
                </p>
                <div style={{
                  padding: '10px 12px',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: 8, marginBottom: 12,
                  fontSize: 12, color: 'rgba(255,255,255,0.5)',
                }}>
                  <span style={{ color: c.accent, fontWeight: 600, marginRight: 6 }}>사역:</span>
                  {team.role}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {team.members.map((m) => (
                    <span key={m} style={{
                      fontSize: 11, padding: '3px 10px',
                      background: `${c.accent}15`,
                      color: c.accent, borderRadius: 20,
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
