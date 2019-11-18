import { useEffect, RefObject } from 'react';

export default function useBlurBackground(cond: boolean, ref: RefObject<HTMLElement>) {
  useEffect(() => {
    if (cond && ref && ref.current) {
      ref.current.style.filter = 'blur(10px)';
    }
    const oldRef = ref;
    return () => {
      if (oldRef && oldRef.current) {
        oldRef.current.style.filter = '';
      }
    };
  }, [cond, ref]);
}
