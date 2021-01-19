import { useState, useEffect } from 'react';

export default function useGodMode(handler: () => void) {
  const [keys, setKeys] = useState<string[]>([]);
  const isGodMode = keys.join('') === 'IDDQD';

  useEffect(() => {
    let timeout: any;

    window.document.onkeydown = (e) => {
      if (!e.key || e.key.length > 1) {
        // Don't handle modifier keys and other weird stuff
        return;
      }
      setKeys((currentKeys) => [...currentKeys, e.key.toUpperCase()]);
      clearTimeout(timeout);
      timeout = setTimeout(() => setKeys([]), 5000);
    };

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isGodMode) {
      handler();
      setKeys([]);
    }
  }, [isGodMode, handler]);

  return isGodMode;
}
