import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const useBreakpointDown = () => {
  const theme = useTheme();
  const query = `(max-width: ${theme.breakpoints.values.md}px)`;
  const isMobile = useMediaQuery(theme.breakpoints.up('md'));
  const [matches, setMatches] = useState(isMobile);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

export default useBreakpointDown;
