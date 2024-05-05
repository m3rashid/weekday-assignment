import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

import { Dispatch } from "../types";
import { getJobs } from "../store/job/actions";
import { JobAction } from "../store/job/helpers";

function useInfiniteScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const dispatch: Dispatch<JobAction> = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(getJobs() as any);
        }
      },
      { threshold: 1 }
    );
    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef]);

  return { targetRef };
}

export default useInfiniteScroll;
