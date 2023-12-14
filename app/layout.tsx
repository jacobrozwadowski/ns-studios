"use client";

import { Metadata } from "next";
import { Container } from "../components/container";
import { Header } from "../components/header";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/loading-screen";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <title>Neuron Studios</title>
        <meta
          name="description"
          content="Neuron Studios first birthed from the spark of an idea, 
	evolving into a passionate collective of creatives. 
	Specializing in 3D visualization, VFX, stage design and more, 
	we breathe life into narratives that captivate. 
	Years of experience, dedication and love for our craft made us who we are and 
	we will continue to push the boundaries through innovation and creativity crafting past the impossible."
        />
        <meta name="robots" content="noindex" />
      </head>
      <body>
        <div>
          <Header />
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
