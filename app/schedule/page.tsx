import Header from '@/components/Header';
import Image from 'next/image';

export default function SchedulePage() {
  return (
    <>
      <Header title="전체 일정" />
      <main style={{ padding: '16px' }}>

        {/* 날짜 안내 */}
        <div style={{
          marginBottom: 16,
          padding: '12px 14px',
          background: 'rgba(74,222,128,0.06)',
          border: '1px solid rgba(74,222,128,0.2)',
          borderRadius: 10,
        }}>
          <div style={{ fontSize: 12, color: '#4ade80', fontWeight: 600, marginBottom: 2 }}>
            ✈ 현지 일정
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
            2026년 7월 11일(토) ~ 15일(수)
          </div>
        </div>

        {/* 일정표 이미지 */}
        <div style={{
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <Image
            src="/schedule.png"
            alt="라오스 아웃리치 일정표"
            width={800}
            height={600}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>

        {/* 핀치줌 안내 */}
        <div style={{
          marginTop: 10,
          textAlign: 'center',
          fontSize: 11,
          color: 'rgba(255,255,255,0.25)',
        }}>
          두 손가락으로 확대해서 볼 수 있어요
        </div>

      </main>
    </>
  );
}