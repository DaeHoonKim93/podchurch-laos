import Header from '@/components/Header';
import schedule from '@/data/schedule.json';

const colorMap: Record<string, { accent: string; dot: string }> = {
  blue:   { accent: '#60a5fa', dot: '#3b82f6' },
  teal:   { accent: '#34d399', dot: '#10b981' },
  purple: { accent: '#a78bfa', dot: '#8b5cf6' },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}/${d.getDate()} (${['일','월','화','수','목','금','토'][d.getDay()]})`;
}

export default function SchedulePage() {
  return (
    <>
      <Header title="전체 일정" />
      <main style={{ padding: '16px' }}>
        {schedule.map((phase) => {
          const c = colorMap[phase.color] ?? { accent: '#94a3b8', dot: '#64748b' };
          return (
            <div key={phase.phase} style={{ marginBottom: 28 }}>
              {/* 페이즈 헤더 */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: c.dot }} />
                <div style={{ fontSize: 13, fontWeight: 700, color: c.accent, letterSpacing: '0.03em' }}>
                  {phase.phase}
                </div>
              </div>

              {/* 타임라인 아이템 */}
              <div style={{ paddingLeft: 16, borderLeft: `1px solid ${c.dot}30` }}>
                {phase.items.map((item, i) => (
                  <div key={i} style={{
                    position: 'relative',
                    paddingBottom: i < phase.items.length - 1 ? 16 : 0,
                    paddingLeft: 16,
                  }}>
                    {/* 타임라인 dot */}
                    <div style={{
                      position: 'absolute', left: -5, top: 4,
                      width: 9, height: 9, borderRadius: '50%',
                      background: c.dot, border: '2px solid var(--bg)',
                    }} />

                    <div style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 10, padding: '10px 14px',
                    }}>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 3 }}>
                        {formatDate(item.date)}
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 2 }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
