import { Header } from '@/app/components/layout/Header';
import SectionSearchBar from '@/app/components/layout/SectionSearchBar';
import Description from './components/layout/Description';
import SectionNumber from './components/layout/SectionNumber';
import SectionCards from './components/layout/SectionCards';
import JoinUsSection from './components/layout/JoinUsSection';

export default function Home() {
  return (
    <div>
      <section>
        <Header />
        <SectionSearchBar />
        <Description />
        <SectionNumber />
        <SectionCards />
        <JoinUsSection />
      </section>
    </div>
  );
}
