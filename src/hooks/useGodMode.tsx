import React, { useState, useEffect } from 'react';

export default function useGodMode(handler: () => void) {
  const [keys, setKeys] = useState<string[]>([]);
  const isGodMode = keys.join('') === 'IDDQD';

  useEffect(() => {
    let timeout: number | undefined;

    window.document.onkeydown = (e) => {
      setKeys((currentKeys) => [...currentKeys, e.key.toUpperCase()]);
      clearTimeout(timeout);
      timeout = setTimeout(() => setKeys([]), 5000);
    };
  }, []);

  useEffect(() => {
    if (isGodMode) {
      handler();
      setKeys([]);
    }
  }, [isGodMode, handler]);

  return isGodMode;
}
