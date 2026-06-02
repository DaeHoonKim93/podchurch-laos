'use client';

import { useState } from 'react';
import Drawer from './Drawer';

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

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

        {title && (
          <span style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>
            {title}
          </span>
        )}

        {/* 로고 (title 없을 때) */}
        {!title && (
          <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
            POD CHURCH
          </span>
        )}
      </header>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
