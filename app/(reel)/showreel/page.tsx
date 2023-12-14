"use client";

import { Container } from "../../../components/container";
import { ReelController } from "../../../components/video/reel-controller";
import { Features } from "../../../components/features";
import { Hero, HeroTitle } from "../../../components/hero";
import { Button, Highlight } from "../../../components/button";

export default function ShowReelPage() {
  return (
    <div className="absolute w-full">
      {/*        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0"
          href="https://x.com/NeuronStudios/status/1725936058775253322?s=20"
          target="_blank"
          variant="secondary"
          size="small"
        >
          <span>Watch showreel on X</span> <Highlight>→</Highlight>
        </Button>
        <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Neuron Studio
          <br className="hidden md:block" />
          2023 Showreel
        </HeroTitle> */}
      <ReelController />
    </div>
  );
}
