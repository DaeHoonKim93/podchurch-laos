import Header from '@/components/Header';
import ScoresClient from '@/components/ScoresClient';
import scoresData from '@/data/scores.json';

export default function ScoresPage() {
  return (
    <>
      <Header title="예배 악보" />
      <main>
        <ScoresClient sessions={scoresData} />
      </main>
    </>
  );
}
