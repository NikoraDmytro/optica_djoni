import { useEffect, useState } from "react";

export const useCarousel = (items: any[]) => {
  const length = items.length;

  const loopedList = [items[length - 2], items[length - 1], ...items, items[0], items[1]];

  const firstIndex = 2;
  const lastIndex = loopedList.length - 3;

  const [current, setCurrent] = useState(firstIndex);

  const fromTheStart = (index: number) => {
    setCurrent(firstIndex - 1);

    setTimeout(() => {
      setCurrent(index);
    });
  };

  const fromTheEnd = (index: number) => {
    setCurrent(lastIndex + 1);

    setTimeout(() => {
      setCurrent(index);
    });
  };

  const changeCurrent = (index: number) => {
    index =
      index > lastIndex ? firstIndex : index < firstIndex ? lastIndex : index;

    if (lastIndex - current + index - firstIndex < current - index) {
      fromTheStart(index);
      return;
    }

    if (lastIndex - index + current - firstIndex < index - current) {
      fromTheEnd(index);
      return;
    }

    setCurrent(index);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeCurrent(current + 1);
    }, 3000);

    return () => clearTimeout(timeout);
  });

  return {
    current,
    lastIndex,
    loopedList,
    firstIndex,
    changeCurrent,
  };
};
