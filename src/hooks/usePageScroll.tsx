// React
import { useEffect } from 'react';

// React router
import { useLocation } from 'react-router-dom';

export default function usePageScroll() {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash.replace('#', '') || 'hero';
    const section = document.getElementById(hash);

    console.log(hash);
    console.log(section);
    setTimeout(() => {
      window.scrollTo({
        top:
          section && hash === 'skills'
            ? section.offsetTop
            : section
            ? section.offsetTop - 80
            : 0,
        behavior: 'smooth',
      });
    }, 10);
  });
  return null;
}
