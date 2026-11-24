import { HomeHero } from '@/components/home/HomeHero';
import { HomeWorks } from '@/components/home/HomeWorks';
import { HomeLines } from '@/components/home/HomeLines';
import { HomeProcess } from '@/components/home/HomeProcess';
import { HomeTeam } from '@/components/home/HomeTeam';
import { HomeFaq } from '@/components/home/HomeFaq';
import { HomeContact } from '@/components/home/HomeContact';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWorks />
      <HomeLines />
      <HomeProcess />
      <HomeTeam />
      <HomeFaq />
      <HomeContact />
    </>
  );
}
