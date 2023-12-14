import classNames from "classnames";
import { Container } from "../../../components/container";
import { StarsIllustration } from "../../../components/icons/stars";
import { BuildMomentum } from "../../../components/sections/build-momentum";
import { Clients } from "../../../components/sections/clients";
import { EnjoyIssueTracking } from "../../../components/sections/enjoy-issue-tracking";
import { HomepageHero } from "../../../components/sections/homepage-hero";
import {
  HeroTitle,
  HeroSubtitle,
  SecondaryTitle,
} from "../../../components/hero";
import { Button } from "../../../components/button";
import Link from "next/link";
import { TwitterIcon, XIcon } from "lucide-react";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <div className="mt-16">
        <Container className="">
          <HeroTitle>About us</HeroTitle>

          <p className="text-md">
            <span className="font-bold text-yellow">Neuron Studios</span> first
            birthed from the spark of an idea,
            <br />
            evolving into a passionate collective of creatives. <br />
            Specialiting in 3D visualuzation, VFX, stage design anre more,{" "}
            <br />
            we breathe life into narratives that captivate. <br />
            Years of experience, dedication and love for our craft made us who
            we are and <br />
            we will continue to push the boundaries through innovation and
            creativity <br />
            crafting past the impossible.
          </p>
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-gradient mt-12 text-4xl font-bold md:text-6xl">
              Software we specialize in
            </h1>

            <Image
              width={850}
              height={250}
              src="/logos/logos.png"
              alt="logos"
              className="-ml-17"
            />
          </div>
        </Container>
      </div>
    </>
  );
}
