import { CloseIcon } from "@/components/icons/common";
import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ListItemsSection from "./ListItemsSection";
import MessagesList from "./MessagesList";

const styles = StyleSheet.create({
  container: {
    borderColor: colors.softSlate,
    borderBottomWidth: 1,
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.softSlate
  },
  usernameContainer: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center"
  },
  usernameTextContainer: {
    gap: 6
  },
  usernameText: {
    color: colors.neutral[1000],
    fontWeight: 600,
    fontSize: fontSize.h7
  },
  seeProfileText: {
    color: colors.neutral[800],
    fontSize: fontSize.b3
  },
  contentSection: {
    gap: 10,
    paddingBottom: 50
  },
  profileImage: {
    width: 45,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 999
  },
  messagesTitle: {
    color: colors.neutral[1000],
    fontSize: fontSize.h7,
    fontWeight: 600,
    marginBottom: 20
  },
  messagesSection: {
    gap: 40,
  },
  newMessageIcon: {
    borderRadius: 999,
    backgroundColor: colors.softGray,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  newMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  newMessageText: {
    color: colors.neutral[1000],
    fontSize: fontSize.b3,
  }
});

type ProfileDrawerProps = {
  onClose: () => void;
}

const ProfileDrawer = (props: ProfileDrawerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView
      style={[{
        marginBottom: insets.bottom,
        marginTop: insets.top,
      }, styles.container]}
    >
      <ThemedView style={styles.profileContainer}>
        <ThemedView style={styles.usernameContainer}>
          <ItemWrapper
            onPress={() => { }}
          >
            <OptimizedImage
              source={{}}
              style={styles.profileImage}
            />
          </ItemWrapper>
          <ThemedView style={styles.usernameTextContainer}>
            <ThemedText style={styles.usernameText}>
              username
            </ThemedText>
            <ItemWrapper
              onPress={() => { }}
            >
              <ThemedText style={styles.seeProfileText}>
                Ver perfil
              </ThemedText>
            </ItemWrapper>
          </ThemedView>
        </ThemedView>
        <ItemWrapper onPress={props.onClose}>
          <CloseIcon />
        </ItemWrapper>
      </ThemedView>

      <MessagesList
        onEndReached={() => { }}
        isLoadingMore={false}
        topSections={
          <ThemedView style={styles.messagesSection}>
            <ListItemsSection />
            <ThemedText style={styles.messagesTitle}>
              Mensajes
            </ThemedText>
          </ThemedView>
        }
      />
    </ThemedView>
  );
};

export default ProfileDrawer;