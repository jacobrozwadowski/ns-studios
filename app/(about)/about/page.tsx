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

export default function Homepage() {
  return (
    <>
      <div className="overflow-y-hidden">
        <Container className="">
          <HeroTitle>Specialized within E-Sports</HeroTitle>

          <div className="">
            <p className="text-md">
              Neuron Studios first birthed from the spark of an idea,
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

            <SecondaryTitle className="mt-12">
              Software we specialize in:
            </SecondaryTitle>
            <ul className="ml-5 list-disc text-md">
              <li>Maya</li>
              <li>Unreal Engine 5</li>
              <li>Adobe Creative Cloud</li>
              <li>Blender</li>
              <li>3D Studio Max</li>
              <li>Cinema 4D</li>
            </ul>
          </div>
        </Container>
      </div>

      <div
        className={classNames(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#fff650] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
    </>
  );
}
