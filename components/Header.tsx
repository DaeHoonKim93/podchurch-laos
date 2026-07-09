'use client';

import { useState } from 'react';
import Drawer from './Drawer';
import { useAuth } from './AuthProvider';

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { userName, logout } = useAuth();

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 30,
        display: 'flex', alignItems: 'center',
        padding: '0 16px',
        height: 52,
        background: 'rgba(10,22,40,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        {/* 햄버거 버튼 */}
        <button
          onClick={() => setDrawerOpen(true)}
          aria-label="메뉴 열기"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px 8px 8px 0', display: 'flex', flexDirection: 'column',
            gap: 4, marginRight: 12,
          }}
        >
          <span style={{ display: 'block', width: 20, height: 1.5, background: 'rgba(255,255,255,0.8)', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 14, height: 1.5, background: 'rgba(255,255,255,0.8)', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 20, height: 1.5, background: 'rgba(255,255,255,0.8)', borderRadius: 2 }} />
        </button>

        {title ? (
          <span style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{title}</span>
        ) : (
          <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
            POD CHURCH
          </span>
        )}

        {/* 우측: 사용자 이름 + 로그아웃 */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontSize: 11, color: '#4ade80', fontWeight: 600,
            background: 'rgba(74,222,128,0.1)',
            padding: '3px 10px', borderRadius: 20,
          }}>
            {userName}
          </span>
          <button
            onClick={logout}
            style={{
              background: 'none', border: 'none',
              color: 'rgba(255,255,255,0.25)', fontSize: 11,
              cursor: 'pointer', padding: '3px 6px',
            }}
          >
            나가기
          </button>
        </div>
      </header>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
