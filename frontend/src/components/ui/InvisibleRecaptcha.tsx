import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    grecaptcha: any;
    onloadCallback: () => void;
    executeRecaptcha: () => void;
  }
}

export default function InvisibleRecaptcha({
  siteKey,
  onVerify,
}: {
  siteKey: string;
  onVerify: (token: string) => void;
}) {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    window.executeRecaptcha = () => {
      if (window.grecaptcha && widgetIdRef.current !== null) {
        window.grecaptcha.execute(widgetIdRef.current);
      }
    };

    const loadRecaptcha = () => {
      if (window.grecaptcha && recaptchaRef.current && widgetIdRef.current === null) {
        widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: siteKey,
          size: 'invisible',
          callback: onVerify,
        });
      }
    };

    if (window.grecaptcha) {
      loadRecaptcha();
    } else {
      window.onloadCallback = loadRecaptcha;
    }
  }, [siteKey, onVerify]);

  return <div ref={recaptchaRef}></div>;
}
