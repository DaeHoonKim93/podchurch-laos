import Header from '@/components/Header';
import Countdown from '@/components/Countdown';

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 52px)', display: 'flex', flexDirection: 'column' }}>

        <div style={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 52px)',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/prayer-card.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }} />

          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.92) 100%)',
          }} />

          <div style={{
            position: 'relative', zIndex: 1,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: '48px 28px 40px',
            gap: 28,
          }}>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', marginBottom: 10 }}>
                2026
              </div>
              <h1 style={{
                fontSize: 28, fontWeight: 800, color: '#fff',
                lineHeight: 1.25, letterSpacing: '-0.01em', marginBottom: 6,
                textShadow: '0 2px 12px rgba(0,0,0,0.5)',
              }}>
                POD CHURCH<br />라오스 아웃리치
              </h1>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em' }}>
                LAND OF SHALOM
              </div>
            </div>

            <Countdown />

            <div style={{
              fontSize: 11, color: 'rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span>✈</span>
              <span>2026년 7월 11일 라오스 출발</span>
            </div>
          </div>
        </div>

        <nav style={{
          display: 'flex',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(10,22,40,0.95)',
          position: 'sticky', bottom: 0,
        }}>
          {[
            { href: '/members', icon: '♟', label: '팀원' },
            { href: '/teams', icon: '◈', label: '사역팀' },
            { href: '/schedule', icon: '◷', label: '일정' },
            { href: '/prayers', icon: '✿', label: '기도' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '10px 4px 12px',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none', fontSize: 10, gap: 4,
              }}
            >
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </main>
    </>
  );
}
