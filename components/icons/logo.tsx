import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => (
  <Image
    className="mr-2"
    src="/neuron.png"
    alt="Neuron Logo"
    height={18}
    width={18}
  />
);
