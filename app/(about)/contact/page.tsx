import Link from "next/link";
import { Button } from "../../../components/button";
import { Container } from "../../../components/container";
import { HeroSubtitle, HeroTitle } from "../../../components/hero";
import { TwitterIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <Container>
      <HeroTitle>Hire us</HeroTitle>
      <HeroSubtitle>E-Mail: inquiries@neuronstudios.org</HeroSubtitle>
      <div className="space-x-4">
        <Button>
          <Link href="/discord" target="_blank">
            Discord
          </Link>
        </Button>
        <Button>
          <Link href="/twitter" target="_blank">
            X (Formerly Twitter)
          </Link>
        </Button>
      </div>
    </Container>
  );
}
