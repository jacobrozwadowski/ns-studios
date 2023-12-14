import { NikeLogo } from "../logos/nike";

import { LeagueOfLegendsLogo } from "../logos/leagueoflegends";
import { FazeLogo } from "../logos/fazeclan";

export const Clients = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl">
      <span className="text-primary-text">
        Powering the world’s best companies.
      </span>
    </p>

    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[12rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      <FazeLogo />
      <NikeLogo className="hidden md:block" />
      <LeagueOfLegendsLogo />
    </div>
  </>
);
