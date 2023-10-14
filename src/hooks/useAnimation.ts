// React
import { useEffect } from 'react';

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useAnimation(
  id: string | null,
  trigger: string,
  newOptions?: {},
  newTriggers?: {}
) {
  const animation = {
    id,
    options: {
      scrollTrigger: {
        trigger,
        start: 'top center',
        markers: false,
        ...newTriggers,
      },
      opacity: 0,
      y: 300,
      stagger: 0,
      duration: 0.8,
      delay: 0,
      ease: 'ease-in-out',
      ...newOptions,
    },
  };

  useEffect(() => {
    if (animation.id) {
      const animate = gsap.from(animation.id, {
        ...animation.options,
      });

      return () => {
        animate.kill();
      };
    }
  }, [id, trigger, newOptions, newTriggers, animation.id, animation.options]);

  return { animation };
}
