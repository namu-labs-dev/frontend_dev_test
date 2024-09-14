import React from "react";
import { VoteBannerAtom } from "~/components/Atoms/VoteBannerAtom/VoteBannerAtom";
import VoteForm from "~/components/Components/VoteForm/VoteForm";

type Props = {
  bannerProps: React.ComponentProps<typeof VoteBannerAtom>;
  voteFormProps: React.ComponentProps<typeof VoteForm>;
};

export const VoteContentModule = (props: Props) => {
  return (
    <div>
      <VoteBannerAtom {...props.bannerProps} />
      <VoteForm {...props.voteFormProps} />
    </div>
  );
};
