// components/SmoothScrollLayout.tsx
'use client';

import React, { useEffect, ReactNode } from 'react';
import useLenis from '../../utils/useLenis';

interface SmoothScrollLayoutProps {
  children: ReactNode;
}

export default function SmoothScrollLayout({ children }: SmoothScrollLayoutProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    
    lenis.scrollTo(0);
    
    const onScrollStart = ({ direction }: { direction: number }) => {
      console.log('Scroll iniciado:', direction > 0 ? 'para baixo' : 'para cima');
    };
    
    lenis.on('scroll', onScrollStart);
    
    return () => {
      lenis.off('scroll', onScrollStart);
    };
  }, [lenis]);

  return (
    <div className="smooth-scroll-container">
      {children}
    </div>
  );
}