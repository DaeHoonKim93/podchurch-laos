'use client';

import { useEffect, useState } from 'react';

const DEPARTURE = new Date('2026-07-11T00:00:00+09:00');

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, departed: false });

  useEffect(() => {
    function calc() {
      const now = new Date();
      const diff = DEPARTURE.getTime() - now.getTime();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0, departed: true });
        return;
      }
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTime({ days, hours, minutes, seconds, departed: false });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  if (time.departed) {
    return (
      <div style={{ textAlign: 'center', color: '#4ade80', fontSize: 18, fontWeight: 700 }}>
        지금 라오스에서 사역 중!
      </div>
    );
  }

  const units = [
    { label: '일', value: time.days },
    { label: '시간', value: time.hours },
    { label: '분', value: time.minutes },
    { label: '초', value: time.seconds },
  ];

  return (
    <div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: 12, letterSpacing: '0.1em' }}>
        출발까지
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        {units.map(({ label, value }) => (
          <div key={label} style={{ textAlign: 'center', minWidth: 52 }}>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 10,
              padding: '10px 4px 6px',
            }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                {String(value).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>
                {label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
