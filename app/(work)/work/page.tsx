import { Suspense } from "react";
import { Container } from "../../../components/container";
import { HeroTitle, HeroSubtitle } from "../../../components/hero";
import LoadingSpinner from "../../../components/ux/loading";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "http://neuronstudios.org/api/work",
        width: 1200,
        height: 630,
        alt: "Neuron Studios",
      },
    ],
  },
};

export default function WorkPage() {
  return (
    <Container>
      <HeroTitle className="pt-5">Our Work</HeroTitle>
      <HeroSubtitle className="-mt-5">
        Here you will find our most successful projects.
      </HeroSubtitle>
      <h1 className="ml-1 text-2xl font-bold tracking-tighter">
        Nike x Faze Clan
      </h1>
      <video
        muted
        autoPlay
        loop
        src="/nikexfaze.mp4"
        className="
        rounded-xl
        border
        border-white/20
        "
      ></video>
      <div className="h-11"></div>
      <h1 className="mt-11 ml-1 text-2xl font-bold tracking-tighter">
        Saudi E-Leagues
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <video
          muted
          autoPlay
          loop
          src="/saudieleague.mp4"
          className="
        rounded-xl
        border
        border-white/20
        "
        ></video>
      </Suspense>
      <h1 className="mt-11 ml-1 text-2xl font-bold tracking-tighter"></h1>
      <Suspense fallback={<LoadingSpinner />}>
        <img
          src="/img/ETHR0116-edit-f1.png"
          alt="img1"
          className="rounded-xl border border-white/20"
        />
      </Suspense>
      <h1 className="mt-11 ml-1 text-2xl font-bold tracking-tighter"></h1>
      <Suspense fallback={<LoadingSpinner />}>
        <img
          src="/img/FmaJvjzaUAIdJbj.png"
          alt="img2"
          className="rounded-xl border border-white/20"
        />
      </Suspense>
      <h1 className="mt-11 ml-1 text-2xl font-bold tracking-tighter"></h1>
      <Suspense fallback={<LoadingSpinner />}>
        <img
          src="/img/HighresScreenshot00009.png"
          alt="img2"
          className="rounded-xl border border-white/20"
        />
      </Suspense>
      <h1 className="mt-11 ml-1 text-2xl font-bold tracking-tighter"></h1>
      <Suspense fallback={<LoadingSpinner />}>
        <img
          src="/img/HighresScreenshot00004.png"
          alt="img2"
          className="rounded-xl border border-white/20"
        />
      </Suspense>

      <div className="h-11"></div>
    </Container>
  );
}
