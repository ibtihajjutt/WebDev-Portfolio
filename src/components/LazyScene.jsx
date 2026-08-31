import { Suspense, lazy, useEffect, useRef, useState } from "react";

const LazyScene = ({ loadComponent, fallback, className, ...props }) => {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return undefined;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  if (!shouldLoad) {
    return (
      <div ref={ref} className={className}>
        {fallback}
      </div>
    );
  }

  const LoadedComponent = lazy(loadComponent);

  return (
    <Suspense fallback={<div className={className}>{fallback}</div>}>
      <LoadedComponent {...props} />
    </Suspense>
  );
};

export default LazyScene;
