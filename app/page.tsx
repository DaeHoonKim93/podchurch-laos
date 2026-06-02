import Header from '@/components/Header';
import Countdown from '@/components/Countdown';

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 52px)', display: 'flex', flexDirection: 'column' }}>

        {/* 히어로 섹션 */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '48px 28px 40px',
          gap: 32,
        }}>

          {/* 크로스 아이콘 */}
          <div style={{
            width: 52, height: 52,
            border: '1.5px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="9" y="2" width="4" height="18" rx="2" fill="rgba(255,255,255,0.7)" />
              <rect x="2" y="7" width="18" height="4" rx="2" fill="rgba(255,255,255,0.7)" />
            </svg>
          </div>

          {/* 타이틀 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', marginBottom: 10 }}>
              2026
            </div>
            <h1 style={{
              fontSize: 26, fontWeight: 800, color: '#fff',
              lineHeight: 1.25, letterSpacing: '-0.01em', marginBottom: 6,
            }}>
              POD CHURCH<br />라오스 아웃리치
            </h1>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
              LAOS OUTREACH
            </div>
          </div>

          {/* 주제 말씀 */}
          <div style={{
            maxWidth: 300, textAlign: 'center',
            padding: '20px 20px',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 14,
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{
              fontSize: 14, color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.8, fontStyle: 'italic', marginBottom: 12,
              wordBreak: 'keep-all',
            }}>
              "너희 중 한 사람이 천 명을 쫓으리니 이는 너희의 하나님 여호와 그가 너희를 위하여 싸우심이라"
            </div>
            <div style={{ fontSize: 11, color: '#4ade80', fontWeight: 600, letterSpacing: '0.05em' }}>
              여호수아 23:10
            </div>
          </div>

          {/* 카운트다운 */}
          <Countdown />

          {/* 출발 날짜 */}
          <div style={{
            fontSize: 11, color: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span>✈</span>
            <span>2026년 7월 11일 라오스 출발</span>
          </div>
        </div>

        {/* 하단 네비 바 */}
        <nav style={{
          display: 'flex',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(10,22,40,0.95)',
        }}>
          {[
            { href: '/members', icon: '♟', label: '팀원' },
            { href: '/teams', icon: '◈', label: '사역팀' },
            { href: '/schedule', icon: '◷', label: '일정' },
            { href: '/missions', icon: '✓', label: '미션' },
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
