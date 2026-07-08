import Header from '@/components/Header';
import PrayersClient from '@/components/PrayersClient';
import prayersData from '@/data/prayers.json';

export default function PrayersPage() {
  return (
    <>
      <Header title="우리의 기도" />
      <main>
        <PrayersClient data={prayersData} />
      </main>
    </>
  );
}
