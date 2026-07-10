import { useEffect } from 'react';

export function useScrollToTop(dependency) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [dependency]);
}