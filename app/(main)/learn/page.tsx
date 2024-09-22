import FeedWrapper from "@/components/feedWrapper";
import StickyWrapper from "@/components/stickyWrapper";
import React from "react";
import Header from "./header";
import UserProgress from "@/components/userProgress";

export default function LearnPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{
            title: "Spanish",
            imageSrc: "/es.svg",
          }}
          hearts={5}
          points={100}
          hasActiveSubscription={true}
        ></UserProgress>
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  );
}
