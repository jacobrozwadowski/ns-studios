"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DiscordPage() {
  const { push } = useRouter();

  useEffect(() => {
    push("https://discord.com/invite/NsFZszEvGm");
  }, []);
  return <p></p>;
}
