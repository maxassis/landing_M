/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

interface CustomLenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  wheelMultiplier?: number;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  [key: string]: any;
}

export default function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const options: CustomLenisOptions = {
      duration: 2.0,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 2,
      touchMultiplier: 2,
      lerp: 0.1,
      gestureOrientation: 'vertical',
    };

    const lenisInstance = new Lenis(options as any);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    const getHeaderOffset = (): number => {
      const desktopHeader = document.querySelector('header.lg\\:flex');
      const mobileHeader = document.querySelector('header.lg\\:hidden');

      const desktopVisible = desktopHeader && getComputedStyle(desktopHeader).display !== 'none';
      const mobileVisible = mobileHeader && getComputedStyle(mobileHeader).display !== 'none';

      if (desktopVisible && desktopHeader) return desktopHeader.clientHeight;
      if (mobileVisible && mobileHeader) return mobileHeader.clientHeight;

      return 0;
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a[href^="#"]');

      if (anchorElement) {
        e.preventDefault();
        const href = anchorElement.getAttribute('href');
        if (!href) return;

        const offset = -getHeaderOffset();

        if (href === '#') {
          lenisInstance.scrollTo(0, { offset });
          return;
        }

        const targetElement = document.querySelector(href);
        if (targetElement) {
          lenisInstance.scrollTo(targetElement as any, { offset });
        }
      }
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          const offset = -getHeaderOffset();
          setTimeout(() => {
            lenisInstance.scrollTo(targetElement as any, { offset });
          }, 100);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('hashchange', handleHashChange);

    // Initial scroll if URL has hash
    if (window.location.hash) handleHashChange();

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('hashchange', handleHashChange);
      lenisInstance.destroy();
    };
  }, []);

  return lenis;
}
