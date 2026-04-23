import { HeroV2 } from '@/components/sections/HeroV2';
import { Marquee } from '@/components/ui/Marquee';
import { AboutV2 } from '@/components/sections/AboutV2';
import { WorksV2 } from '@/components/sections/WorksV2';
import { StackV2 } from '@/components/sections/StackV2';
import { ProcessV2 } from '@/components/sections/ProcessV2';
import { FounderV2 } from '@/components/sections/FounderV2';
import { FaqV2 } from '@/components/sections/FaqV2';
import { CtaV2 } from '@/components/sections/CtaV2';

export default function Home() {
  return (
    <>
      <HeroV2 />
      <Marquee />
      <AboutV2 />
      <WorksV2 />
      <StackV2 />
      <ProcessV2 />
      <FounderV2 />
      <FaqV2 />
      <CtaV2 />
    </>
  );
}
