import { Header } from '@/app/components/layout/Header';
import SectionSearchBar from '@/app/components/layout/SectionSearchBar';
import Description from './components/layout/Description';

export default function Home() {
  return (
    <div>
      <section>
        <Header />
        <SectionSearchBar />
        <Description />
      </section>
    </div>
  );
}
