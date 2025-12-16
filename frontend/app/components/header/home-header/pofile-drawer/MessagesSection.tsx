import { NewMessageIcon } from "@/components/icons/profileDrawer";
import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  messagesSection: {
    padding: 16,
    gap: 25
  },
  messagesTitle: {
    color: colors.neutral[1000],
    fontSize: fontSize.h7,
    fontWeight: 600,
  },
  messageImage: {
    width: 45,
    height: 45,
    backgroundColor: "#fff",
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
  messageItemsContainer: {
    gap: 20
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
    gap: 10
  },
  newMessageText: {
    color: colors.neutral[1000],
    fontSize: fontSize.b3,
  }
});

const MessagesSection = () => {
  const messagesItems = [
    {
      image: "",
      username: "username",
      status: "Enviado",
      date: "3 oct",
    },
    {
      image: "",
      username: "username",
      status: "Enviado",
      date: "3 oct",
    },
    {
      image: "",
      username: "username",
      status: "Enviado",
      date: "3 oct",
    },
    {
      image: "",
      username: "username",
      status: "Enviado",
      date: "3 oct",
    },
    {
      image: "",
      username: "username",
      status: "Enviado",
      date: "3 oct",
    }
  ]

  return (
    <ThemedView style={styles.messagesSection}>
      <ThemedText style={styles.messagesTitle}>
        Mensajes
      </ThemedText>

      <ThemedView style={styles.messageItemsContainer}>
        {messagesItems.map((item, index) => {
          return (
            <ItemWrapper
              key={index}
              style={styles.messageItemContainer}
            >
              <OptimizedImage
                source={item.image}
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
                    {item.date}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            </ItemWrapper>
          )
        })}

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
      </ThemedView>
    </ThemedView>
  );
};

export default MessagesSection;