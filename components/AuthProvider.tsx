'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import LoginSelect from './LoginSelect';

interface AuthContextType {
  userName: string;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({ userName: '', logout: () => {} });

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('podchurch-user');
    setUserName(saved || '');
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem('podchurch-user');
    setUserName('');
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0a1628',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>로딩 중...</div>
      </div>
    );
  }

  if (!userName) {
    return <LoginSelect onLogin={(name) => setUserName(name)} />;
  }

  return (
    <AuthContext.Provider value={{ userName, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
