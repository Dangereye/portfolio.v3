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
    if (id) {
      gsap.fromTo(
        id,
        {
          ...from,
        },
        {
          ...to,
          scrollTrigger: {
            trigger,
            start: 'top center',
            markers: false,
          },
        }
      );
    }
    // eslint-disable-next-line
  }, [id]);

  return null;
}
