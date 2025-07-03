import { useRef } from "react";

export function useDoubleClickCard(onDoubleClick: (id: string) => void) {
  const clickCount = useRef(0);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);

  const handlePress = (id: string) => {
    clickCount.current++;

    if (clickCount.current === 2) {
      if (clickTimer.current) clearTimeout(clickTimer.current);
      clickCount.current = 0;
      onDoubleClick(id);
    } else {
      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 300);
    }
  };

  return handlePress;
}
