import Image from "next/image";

export default function Loading() {
  return (
    <div className="bg-black h-screen w-screen overflow-y-hidden">
      <Image src={"/fortnite"} alt="neuron_loader" height={1200} width={630} />
    </div>
  );
}
