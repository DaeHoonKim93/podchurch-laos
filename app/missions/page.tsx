import Header from '@/components/Header';
import missions from '@/data/missions.json';

const typeStyle: Record<string, { icon: string; color: string; bg: string }> = {
  bible:    { icon: '✦', color: '#60a5fa', bg: 'rgba(96,165,250,0.08)' },
  exercise: { icon: '◎', color: '#34d399', bg: 'rgba(52,211,153,0.08)' },
  prayer:   { icon: '✿', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)' },
};

export default function MissionsPage() {
  return (
    <>
      <Header title="오늘의 미션" />
      <main style={{ padding: '16px' }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 20, lineHeight: 1.6 }}>
          매주 3가지 미션을 함께 완수해요.<br />출발 전까지 함께 준비해요!
        </p>

        {missions.map((week) => (
          <div key={week.week} style={{ marginBottom: 24 }}>
            <div style={{
              fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.08em', marginBottom: 10,
              textTransform: 'uppercase',
            }}>
              {week.label}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {week.missions.map((mission) => {
                const s = typeStyle[mission.type];
                return (
                  <div key={mission.id} style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 16px',
                    background: s.bg,
                    border: `1px solid ${s.color}20`,
                    borderRadius: 12,
                  }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: `${s.color}15`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16, color: s.color, flexShrink: 0,
                    }}>
                      {s.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 2 }}>
                        {mission.title}
                      </div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
                        {mission.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
