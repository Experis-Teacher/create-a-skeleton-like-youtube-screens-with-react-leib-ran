import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <div>
      <SkeletonTheme color="grey" highlightColor="#444">
        <p>
          <Skeleton height={172} width={306} count={1} />
        </p>
      </SkeletonTheme>

      <SkeletonTheme color="grey" highlightColor="#444">
        <p>
          <Skeleton circle={true} height={40} width={40} count={1} />
        </p>
      </SkeletonTheme>

      <SkeletonTheme color="gray" highlightColor="#444">
        <p>
          <Skeleton height={42} width={306} count={1} />
        </p>
      </SkeletonTheme>
      <SkeletonTheme color="gray" highlightColor="#444">
        <p>
          <Skeleton height={19} width={90} count={1} />
        </p>
      </SkeletonTheme>
      <SkeletonTheme color="gray" highlightColor="#444" style={{ margin: "2" }}>
        <p>
          <Skeleton height={21} width={306} count={1} />
        </p>
      </SkeletonTheme>
      <SkeletonTheme color="white">
        <p>
          <Skeleton height={21} width={320} count={1} />
        </p>
      </SkeletonTheme>

      {/* <SkeletonTheme color="gray" highlightColor="#444">
        <p>
          <Skeleton height={2} width={960} count={1} />
        </p>
      </SkeletonTheme> */}
    </div>
  );
};

export default SkeletonCard;
