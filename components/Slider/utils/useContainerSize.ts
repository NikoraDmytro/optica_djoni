import { useRef, useState, useLayoutEffect, ReactElement } from "react";

export const useContainerWidth = (defaultWidth: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(defaultWidth);

  useLayoutEffect(() => {
    function getContainerWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    }

    getContainerWidth();

    addEventListener("resize", getContainerWidth);
    return () => removeEventListener("resize", getContainerWidth);
  }, []);

  return { containerWidth, containerRef };
};
