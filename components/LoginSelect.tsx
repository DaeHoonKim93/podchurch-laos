'use client';

import { useState } from 'react';

const MEMBERS = [
  '서동군', '김주희', '최희원', '강동현', '박혜미',
  '최수빈', '김희영', '엄소연', '윤다나', '김대훈',
  '조혜선', '김사라', '이경민', '한도경', '김여은',
  '서영선', '김연정', '박채린', '김다인', '소예영',
];

interface LoginSelectProps {
  onLogin: (name: string) => void;
}

export default function LoginSelect({ onLogin }: LoginSelectProps) {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState(false);

  const handleEnter = () => {
    if (!selected) {
      setError(true);
      return;
    }
    localStorage.setItem('podchurch-user', selected);
    onLogin(selected);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a1628',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '32px 24px',
    }}>
      {/* 로고 */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.3em', marginBottom: 10 }}>
          2026
        </div>
        <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: 6 }}>
          POD CHURCH
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
          라오스 아웃리치 🇱🇦
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginTop: 10, letterSpacing: '0.15em' }}>
          LAND OF SHALOM
        </div>
      </div>

      {/* 선택 박스 */}
      <div style={{
        width: '100%', maxWidth: 340,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16, padding: '24px 20px',
      }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 6, textAlign: 'center' }}>
          샬롬 🌿
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: 20 }}>
          본인 이름을 선택해주세요
        </div>

        {/* 이름 선택 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
          {MEMBERS.map((name) => (
            <button
              key={name}
              onClick={() => { setSelected(name); setError(false); }}
              style={{
                padding: '8px 14px',
                borderRadius: 20,
                border: selected === name
                  ? '1.5px solid #4ade80'
                  : '1px solid rgba(255,255,255,0.1)',
                background: selected === name
                  ? 'rgba(74,222,128,0.12)'
                  : 'rgba(255,255,255,0.03)',
                color: selected === name ? '#4ade80' : 'rgba(255,255,255,0.6)',
                fontSize: 13,
                fontWeight: selected === name ? 700 : 400,
                cursor: 'pointer',
                transition: 'all 0.15s',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {name}
            </button>
          ))}
        </div>

        {/* 에러 */}
        {error && (
          <div style={{ fontSize: 12, color: '#f87171', textAlign: 'center', marginBottom: 12 }}>
            이름을 선택해주세요 🙏
          </div>
        )}

        {/* 입장 버튼 */}
        <button
          onClick={handleEnter}
          style={{
            width: '100%', padding: '14px',
            background: selected ? '#4ade80' : 'rgba(255,255,255,0.06)',
            color: selected ? '#0a1628' : 'rgba(255,255,255,0.3)',
            border: 'none', borderRadius: 12,
            fontSize: 14, fontWeight: 700,
            cursor: selected ? 'pointer' : 'default',
            transition: 'all 0.2s',
          }}
        >
          {selected ? `${selected}으로 입장하기 →` : '이름을 선택해주세요'}
        </button>
      </div>

      {/* 하단 말씀 */}
      <div style={{
        marginTop: 32, textAlign: 'center',
        padding: '0 16px',
      }}>
        <div style={{
          fontSize: 15, color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.9, fontStyle: 'italic',
          wordBreak: 'keep-all', marginBottom: 8,
        }}>
          "너희 중 한 사람이 천 명을 쫓으리니<br />
          이는 너희의 하나님 여호와 그가<br />
          너희를 위하여 싸우심이라"
        </div>
        <div style={{ fontSize: 13, color: '#4ade80', fontWeight: 600, letterSpacing: '0.05em' }}>
          여호수아 23:10
        </div>
      </div>
    </div>
  );
}
