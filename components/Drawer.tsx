'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: '/', label: '홈', icon: '⌂' },
  { href: '/members', label: '팀원 소개', icon: '♟' },
  { href: '/teams', label: '사역팀 소개', icon: '◈' },
  { href: '/schedule', label: '전체 일정', icon: '◷' },
  { href: '/prayers', label: '우리의 기도', icon: '🙏' },
];

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'rgba(0,0,0,0.6)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, bottom: 0,
          width: '72%', maxWidth: 280,
          background: 'linear-gradient(180deg, #0f1e36 0%, #0a1628 100%)',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          zIndex: 50,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex', flexDirection: 'column',
          padding: '0',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '52px 20px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', marginBottom: 4 }}>
            2026
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
            POD CHURCH<br />라오스 아웃리치
          </div>
        </div>

        {/* Menu Items */}
        <nav style={{ flex: 1, padding: '12px 0' }}>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '14px 20px',
                  color: isActive ? '#4ade80' : 'rgba(255,255,255,0.75)',
                  fontWeight: isActive ? 600 : 400,
                  fontSize: 15,
                  textDecoration: 'none',
                  borderLeft: isActive ? '2px solid #4ade80' : '2px solid transparent',
                  background: isActive ? 'rgba(74,222,128,0.06)' : 'transparent',
                  transition: 'all 0.15s',
                }}
              >
                <span style={{ fontSize: 17, opacity: 0.7, width: 20, textAlign: 'center' }}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          fontSize: 11, color: 'rgba(255,255,255,0.2)',
          lineHeight: 1.6,
        }}>
          "너희를 위하여 싸우심이라"<br />
          여호수아 23:10
        </div>
      </div>
    </>
  );
}
