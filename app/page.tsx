"use client"

import { useEffect, useLayoutEffect, useState } from "react";

import Loader from "@/components/loader/Loader";
import TextAfterLoader from "@/components/text-after-loader/TextAfterLoader";
import { gsap } from 'gsap';

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoaderFinished(prev => !prev)
          console.log(1);

        },
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  useEffect(() => {
    console.log(loaderFinished && timeline);

  }, [])


  return <main>{loaderFinished ? <TextAfterLoader /> : <Loader timeline={timeline} />}</main>
}
