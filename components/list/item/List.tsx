import { FlatList, View } from "react-native";
import React, { useRef } from "react";
import Item from "./Item";

type ListProps = {
  data: { id: number; name: string }[];
  onDoubleClick: (id: string) => void;
  onSingleClickReset: () => void;
};

export default function List({
  data,
  onDoubleClick,
  onSingleClickReset,
}: ListProps) {
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
        onSingleClickReset();
      }, 300);
    }
  };
  return (
    <>
      <View className="h-[250px]">
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Item
              id={item.id.toString()}
              content={item.name}
              onPress={handlePress}
            />
          )}
          className="flex gap-y-4 p-4 bg-semilight"
        />
      </View>
    </>
  );
}
