import Header from '@/components/Header';
import Countdown from '@/components/Countdown';

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ position: 'relative', height: 'calc(100vh - 52px)', overflow: 'hidden' }}>

        {/* 배경 이미지 - 기도편지 풀스크린 */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/prayer-card.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }} />

        {/* 하단 바 */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
        }}>
          {/* 카운트다운 */}
          <div style={{
            background: 'rgba(10,22,40,0.88)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 20px 12px',
          }}>
            <div style={{
              fontSize: 11, color: 'rgba(255,255,255,0.4)',
              textAlign: 'center', marginBottom: 12,
              letterSpacing: '0.1em',
            }}>
              ✈ 라오스 출발까지
            </div>
            <Countdown />
          </div>

          {/* 네비 바 */}
          <nav style={{
            display: 'flex',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(10,22,40,0.95)',
          }}>
            {[
              { href: '/', icon: '⌂', label: '홈' },
              { href: '/members', icon: '♟', label: '팀원소개' },
              { href: '/prayers', icon: '✿', label: '우리의기도' },
              { href: '/scores', icon: '♪', label: '예배악보' },
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
        </div>

      </main>
    </>
  );
}
