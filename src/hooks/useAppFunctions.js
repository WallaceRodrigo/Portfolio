import { useEffect, useMemo, useState } from 'react';

function useAppFunctions() {
  const [active, setActive] = useState(false);
  const darkLightModeLocalStorageValidation = (localStorage
    .getItem('darkLightMode') || 'dark');
  const [darkLightMode, setMode] = useState(darkLightModeLocalStorageValidation);

  useEffect(() => {
    const darkLightModeLocalStorage = () => {
      localStorage.setItem('darkLightMode', darkLightMode);
    };
    darkLightModeLocalStorage();
  }, [darkLightMode]);

  const value = useMemo(() => ({
    active, setActive,
  }), [active]);

  const valueMode = useMemo(() => ({
    darkLightMode, setMode,
  }), [darkLightMode]);

  return {
    value, valueMode, darkLightMode,
  };
}

export default useAppFunctions;
