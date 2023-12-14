"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <Features color="255,241,41" colorDark="102,97,0">
      <Features.Main
        title={
          <>
            The Studio
            <br />
            you'll enjoy working with
          </>
        }
        image="/padding-global.svg"
        text="Hire us, discuss idea in context, and breeze through your work in views tailored to you."
      />
      <Features.Grid
        features={[
          {
            icon: AutomatedBacklogIcon,
            title: "Quality.",
            text: "We aim to deliver our services at highest quality.",
          },

          {
            icon: CustomViewsIcon,
            title: "Tell us what you don't like.",
            text: "We'll create your idea how you want it.",
          },
          {
            icon: DiscussionIcon,
            title: "Discussion.",
            text: "Collaborate without any issues.",
          },
        ]}
      />
    </Features>
  );
};
