import { useRef } from "react";
import { useRouter } from "expo-router";
import { useSelectedItem } from "../../stores/useSelectedItem";

export default function useDoubleClickNavigation(path: string) {
  const router = useRouter();
  const { store } = useSelectedItem();
  const clickCount = useRef(0);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);

  const handlePress = (id: string) => {
    clickCount.current++;

    if (clickCount.current === 2) {
      store(id);
      if (clickTimer.current) clearTimeout(clickTimer.current);
      clickCount.current = 0;
      router.push(path);
    } else {
      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 300);
    }
  };

  return handlePress;
}
