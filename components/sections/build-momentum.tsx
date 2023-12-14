"use client";

import Link from "next/link";
import { Button } from "../button";
import { Features } from "../features";
import { ChevronIcon } from "../icons/chevron";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const BuildMomentum = () => {
  return (
    <Features color="255,241,41" colorDark="102,97,0">
      <Features.Main
        title={
          <>
            Our Work
            <br />
          </>
        }
        image="/hireus.svg"
        imageSize="large"
        text="Focus on what you want, and check out our Portfolio."
      />
      <div className="flex justify-center">
        <Button variant={"primary"} size={"large"}>
          <Link href="/work" className="flex items-center space-x-4">
            References <ChevronIcon />
          </Link>
        </Button>
      </div>
    </Features>
  );
};
