// React
import { useEffect } from 'react';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useAnimation(
  id: string | null,
  trigger: string,
  from: {},
  to: {}
) {
  useEffect(() => {
    // useAnimation(element id,trigger id,{from options},{to options})
    if (id) {
      gsap.fromTo(
        id,
        {
          ...from,
          scrollTrigger: {
            trigger,
            start: 'top center',
            markers: false,
          },
        },
        { ...to }
      );
    }
  }, [id]);

  return null;
}
