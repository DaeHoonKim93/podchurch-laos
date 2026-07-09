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

        {/* 하단 카운트다운 고정 바 */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(10,22,40,0.88)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 20px 24px',
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

      </main>
    </>
  );
}
