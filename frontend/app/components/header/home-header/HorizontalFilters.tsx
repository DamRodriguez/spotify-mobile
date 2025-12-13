import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 999,
  },
  text: {
    fontSize: fontSize.b1,
  }
});

const HorizontalFilters = () => {
  const [filter, setFilter] = useState("Todas")

  const horizontalFiltersData = [
    {
      text: "Todas"
    },
    {
      text: "Wrapped"
    },
    {
      text: "Música"
    },
    {
      text: "Podcasts"
    },
    {
      text: "Prueba"
    },
    {
      text: "Otra prueba"
    }
  ]

  return (
    <FlashList
      data={horizontalFiltersData}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      keyExtractor={(_, index) => String(index)}
      extraData={filter}
      ItemSeparatorComponent={() => <ThemedView style={{ width: 10 }} />}
      style={{
        flexDirection: "row",
        alignItems: "center",
        flex: 1
      }}
      renderItem={({ item }) => {
        const getBgColor = () => {
          if (filter !== item.text) return colors.quaternary[600];
          if (item.text === "Wrapped") return colors.neutral[1000];
          return colors.green[200];
        };

        const getTextColor = () => {
          if (filter !== item.text) return colors.neutral[1000];
          if (filter === item.text && item.text === "Wrapped") return colors.neutral[100];
          return colors.neutral[100];
        };

        return (
          <ItemWrapper
            onPress={() => setFilter(item.text)}
            style={[{
              backgroundColor: getBgColor(),
              borderWidth: item.text === "Wrapped" ? 1 : 0,
              borderColor: colors.neutral[1000],
            }, styles.container]}
          >
            <ThemedText style={[{
              color: getTextColor(),
              fontWeight: item.text === "Wrapped" ? "700" : "regular",
            }, styles.text]}>
              {item.text}
            </ThemedText>
          </ItemWrapper>
        );
      }}
    />
  );
};

export default HorizontalFilters;