import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const {
    breakpoints: { keys, values },
  } = useTheme();

  const getBreakpoint = (windowWidth: number): string =>
    keys.find(
      (key, i, arr) =>
        windowWidth >= values[key] && windowWidth < values[arr[i + 1]]
    ) || keys[keys.length - 1];

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const breakpoint = getBreakpoint(windowWidth);
  const isMobile = ['xs', 'sm'].includes(breakpoint);

  return {
    isMobile,
    windowWidth,
    breakpoint,
  };
};

export default useWindowWidth;
