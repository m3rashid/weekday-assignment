import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

import { Dispatch } from "../types";
import { getJobs } from "../store/job/actions";
import { JobAction } from "../store/job/helpers";

function useInfiniteScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const dispatch: Dispatch<JobAction> = useDispatch();

  useEffect(() => {
    /**
     * @description The interesection observer checks which parts of the target element are visible in the viewport. And we can use this to trigger an action when the target element is visible.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
     */
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          /**
           * @description When the target element is visible, we dispatch the getJobs action to fetch more jobs
           */
          dispatch(getJobs() as any);
        }
      },
      { threshold: 1 }
    );

    /**
     * @description The targetRef is the element that we want to observe. In this case, it is an empty div element at the end of all the job cards
     */
    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      /**
       * @description We need to unobserve the target element when the component is unmounted to avoid memory leaks
       */
      if (targetRef.current) observer.unobserve(targetRef.current);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef]);

  return { targetRef };
}

export default useInfiniteScroll;
