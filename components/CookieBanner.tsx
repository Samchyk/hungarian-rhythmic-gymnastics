'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-foreground text-background p-4 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex-1 min-w-64">
          <p className="text-sm">
            Sütik és nyomon követés: A webhely sütiket használ az élmény javítása érdekében.{' '}
            <Link href="/cookies" className="underline hover:no-underline">
              Cookie Szabályzat
            </Link>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-foreground/20 text-background rounded hover:bg-foreground/30 transition text-sm"
          >
            Elutasítás
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition text-sm font-semibold"
          >
            Elfogadás
          </button>
        </div>
      </div>
    </div>
  );
}
