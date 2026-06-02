import Header from '@/components/Header';
import MembersClient from '@/components/MembersClient';
import members from '@/data/members.json';

export default function MembersPage() {
  return (
    <>
      <Header title="팀원 소개" />
      <main>
        <div style={{ padding: '16px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            사진을 탭하면 상세 정보를 볼 수 있어요
          </p>
        </div>
        <MembersClient members={members} />
      </main>
    </>
  );
}
