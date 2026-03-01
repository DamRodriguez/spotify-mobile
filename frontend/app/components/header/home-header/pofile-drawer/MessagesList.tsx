import { NewMessageIcon } from "@/components/icons/profileDrawer";
import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ListFooterSpinner from "@/components/other/ListFooterSpinner";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { flashListDefaults } from "@/config/flashListDefaults";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { formatDayMonth } from "@/utils/formatDayMonth";
import { FlashList } from "@shopify/flash-list";
import { ImageSourcePropType, StyleSheet } from "react-native";
import userImage from "@/assets/images/other/user.png"

const styles = StyleSheet.create({
  messageImage: {
    width: 45,
    height: 45,
    borderRadius: 999
  },
  messageItemContainer: {
    flexDirection: "row",
    gap: 10
  },
  messageItemUsernameText: {
    color: colors.neutral[1000],
    fontSize: fontSize.b3,
    fontWeight: 400,
  },
  messageItemStatusText: {
    color: colors.neutral[800],
    fontSize: fontSize.b3,
  },
  messageItemDateText: {
    color: colors.neutral[800],
    fontSize: fontSize.b3,
  },
  messageItemFooterContainer: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center"
  },
  messageItemTextsContainer: {
    justifyContent: "center",
    gap: 4
  },
  messageItemFooterSeparator: {
    color: colors.neutral[800]
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
    marginTop: 20
  },
  newMessageText: {
    color: colors.neutral[1000],
    fontSize: fontSize.b3,
  }
});

type MessagesListProps = {
  topSections: React.ReactElement;
  onEndReached: () => void;
  isLoadingMore: boolean;
};

type messageItemData = {
  image: string | ImageSourcePropType;
  username: string;
  status: "Enviado" | "Recibido";
  date: string;
}

const MessagesList = (props: MessagesListProps) => {
  const messagesItems: messageItemData[] = [
    {
      image: "",
      username: "pedro123",
      status: "Recibido",
      date: "2025-03-12",
    },
    {
      image: "",
      username: "pepito_9",
      status: "Enviado",
      date: "2025-02-09",
    },
    {
      image: "",
      username: "juan1perz",
      status: "Recibido",
      date: "2025-05-24",
    },
    {
      image: "",
      username: "alfonso99",
      status: "Recibido",
      date: "2025-01-10",
    },
    {
      image: "",
      username: "damrod_",
      status: "Enviado",
      date: "2025-12-01",
    },
    {
      image: "",
      username: "pedro2",
      status: "Recibido",
      date: "2025-02-09",
    },
  ]

  return (
    <ThemedView style={{ flex: 1 }}>
      <FlashList
        {...flashListDefaults}
        onEndReached={props.onEndReached}
        ListHeaderComponent={props.topSections}
        data={messagesItems}
        keyExtractor={(_, index) => String(index)}
        ItemSeparatorComponent={() => <ThemedView style={{ height: 20 }} />}
        contentContainerStyle={{
          paddingBottom: 40,
          padding: 16,
        }}
        ListFooterComponent={
          <>
            <ListFooterSpinner isLoadingMore={props.isLoadingMore} />
            <ItemWrapper
              onPress={() => { }}
              style={styles.newMessageContainer}
            >
              <ThemedView style={styles.newMessageIcon}>
                <NewMessageIcon />
              </ThemedView>
              <ThemedText style={styles.newMessageText}>
                Nuevo mensaje
              </ThemedText>
            </ItemWrapper>
          </>
        }
        ListEmptyComponent={<></>}
        renderItem={({ item, index }) => (
          <ItemWrapper
            key={index}
            style={styles.messageItemContainer}
          >
            <OptimizedImage
              source={userImage}
              style={styles.messageImage}
            />
            <ThemedView style={styles.messageItemTextsContainer}>
              <ThemedText style={styles.messageItemUsernameText}>
                {item.username}
              </ThemedText>
              <ThemedView style={styles.messageItemFooterContainer}>
                <ThemedText style={styles.messageItemStatusText}>
                  {item.status}
                </ThemedText>
                <ThemedText style={styles.messageItemFooterSeparator}>
                  •
                </ThemedText>
                <ThemedText style={styles.messageItemDateText}>
                  {formatDayMonth(item.date)}
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </ItemWrapper>
        )}
      />
    </ThemedView>
  );
};



export default MessagesList;
