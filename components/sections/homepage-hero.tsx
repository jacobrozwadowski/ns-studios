import Image from "next/image";
import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="https://x.com/NeuronStudios/status/1725936058775253322?s=20"
      target="_blank"
      variant="secondary"
      size="small"
    >
      <span>Neuron Studios – 2023 Showreel</span> <Highlight>→</Highlight>
    </Button>
    <HeroTitle className="flex w-full translate-y-[-1rem] animate-fade-in justify-center opacity-0 [--animation-delay:200ms]">
      <Image src="/neuron_text.png" alt="neuron" height={100} width={1000} />
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      We are Neuron Studios.
      <br className="hidden md:block" />
      Animation, Modelling, Lighting, Stage visualisers & VFX.
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/showreel"
      variant="primary"
      size="large"
    >
      <span>Watch Showreel </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
