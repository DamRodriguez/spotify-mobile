import { EditIcon, MixIcon, OrderIcon, PencilIcon, PlusIcon } from "@/components/icons/horizontalButtons";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

type HorizontalButtonsProps = {
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderRadius: 999,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.quaternary[600],
    gap: 5
  },
  text: {
    fontSize: fontSize.b3,
    color: colors.neutral[1000],
    fontWeight: 500,
  }
});

const HorizontalButtons = (props: HorizontalButtonsProps) => {
  const [filter, setFilter] = useState("Todas")

  const HorizontalButtonsData = [
    {
      icon: PlusIcon,
      text: "Agregar"
    },
    {
      icon: MixIcon,
      text: "Mixear"
    },
    {
      icon: EditIcon,
      text: "Editar"
    },
    {
      icon: OrderIcon,
      text: "Ordenar"
    },
    {
      icon: PencilIcon,
      text: "Nombre y datos"
    },
  ]

  return (
    <FlashList
      data={HorizontalButtonsData}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      keyExtractor={(_, index) => String(index)}
      extraData={filter}
      ItemSeparatorComponent={() => <ThemedView style={{ width: 10 }} />}
      contentContainerStyle={[{
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
      }, props.style]}
      renderItem={({ item }) => {
        const Icon = item.icon;
        return (
          <ItemWrapper
            onPress={() => setFilter(item.text)}
            style={styles.container}>
            <Icon />
            <ThemedText style={styles.text}>
              {item.text}
            </ThemedText>
          </ItemWrapper>
        );
      }}
    />
  );
};

export default HorizontalButtons;