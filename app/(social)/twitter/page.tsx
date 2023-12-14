"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TwitterPage() {
  const { push } = useRouter();

  useEffect(() => {
    push("https://twitter.com/neuronstudios");
  }, []);
  return <p></p>;
}
