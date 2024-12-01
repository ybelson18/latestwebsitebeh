'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export function LeadBot() {
  useEffect(() => {
    // This will run only on the client side
    console.log('LeadBot component mounted');
  }, []);

  return (
    <>
      <div id="lead-bot"></div>
      <Script 
        strategy="afterInteractive"
        type="text/javascript" 
        src="https://leadtrap.ai/platform/script?partner_id=e3e25fe8-6171-4c92-afa2-b043c8dcbc95"
        onLoad={() => {
          console.log('LeadTrap script loaded in client component');
        }}
        onError={(e) => {
          console.error('Error loading LeadTrap script in client component:', e);
        }}
      />
    </>
  );
}
