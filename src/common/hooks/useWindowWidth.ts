import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const {
    breakpoints: { keys, values },
  } = useTheme();

  const theBiggestSize = keys[keys.length - 1];

  const getBreakpoint = (windowWidth: number): string =>
    keys.find((key, i, arr) => {
      const breakpoint = values[key];
      const nextBreakpoint = values[arr[i + 1]];

      return windowWidth >= breakpoint && windowWidth < nextBreakpoint;
    }) || theBiggestSize;

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const breakpoint = getBreakpoint(windowWidth);
  const isTabletOrSmaller = ['xs', 'ms', 'sm'].includes(breakpoint);
  const isMobileOrSmaller = ['xs'].includes(breakpoint);

  return {
    isTabletOrSmaller,
    isMobileOrSmaller,
    windowWidth,
    breakpoint,
  };
};

export default useWindowWidth;
