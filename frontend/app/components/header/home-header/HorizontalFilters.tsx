import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { flashListDefaults } from "@/config/flashListDefaults";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 999,
    justifyContent: "center"
  },
  text: {
    fontSize: fontSize.b3,
  }
});

type Filter = "Todas" | "Wrapped" | "Música" | "Podcasts";

type HorizontalFiltersData = {
  text: Filter;
}

const HorizontalFilters = () => {
  const [filter, setFilter] = useState<Filter>("Todas")

  const horizontalFiltersData: HorizontalFiltersData[] = [
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
  ]

  return (
    <FlashList
      {...flashListDefaults}
      data={horizontalFiltersData}
      horizontal
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
          return colors.mainGreen;
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
              fontWeight: item.text === "Wrapped" ? 600 : 500,
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