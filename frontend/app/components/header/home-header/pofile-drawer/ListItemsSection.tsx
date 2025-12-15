import { MegaphoneIcon, PlusIcon, RecentIcon, SettingsIcon, SpotifyIcon, StatisticsIcon, ThunderboltIcon } from "@/components/icons/profileDrawer";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listItemsContainer: {
    padding: 16,
    gap: 30
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },
  listItemText: {
    color: colors.neutral[1000],
    fontSize: fontSize.h7,
    fontWeight: "500"
  },
});

const ListItemsSection = () => {
  const listItems = [
    {
      icon: <PlusIcon />,
      text: "Agregar cuenta",
      onPress: () => { }
    },
    {
      icon: <SpotifyIcon />,
      text: "Tu Premium",
      onPress: () => { }
    },
    {
      icon: <ThunderboltIcon />,
      text: "Novedades",
      onPress: () => { }
    },
    {
      icon: <StatisticsIcon />,
      text: "Estadísticas de reproducción",
      onPress: () => { }
    },
    {
      icon: <RecentIcon />,
      text: "Contenido reciente",
      onPress: () => { }
    },
    {
      icon: <MegaphoneIcon />,
      text: "Tus avisos",
      onPress: () => { }
    },
    {
      icon: <SettingsIcon />,
      text: "Configuración y privacidad",
      onPress: () => { }
    }
  ]

  return (
    <ThemedView style={styles.listItemsContainer}>
      {listItems.map((item, index) => {
        return (
          <ItemWrapper
            key={index}
            style={styles.listItem}
          >
            {item.icon}
            <ThemedText
              style={styles.listItemText}
            >
              {item.text}
            </ThemedText>
          </ItemWrapper>
        )
      })}
    </ThemedView>
  );
};

export default ListItemsSection;