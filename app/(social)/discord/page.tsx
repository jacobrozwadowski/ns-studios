"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "http://neuronstudios.org/api/discord",
        width: 1200,
        height: 630,
        alt: "Neuron Studios",
      },
    ],
  },
};

export default function DiscordPage() {
  const { push } = useRouter();

  useEffect(() => {
    push("https://discord.com/invite/NsFZszEvGm");
  }, []);
  return <p></p>;
}
