import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";

const NoContent = () => {
  return (
    <ThemedView style={{ padding: 16 }}>
      <ThemedText style={{ color: "#fff" }}>
        No se encontró el contenido solicitado.
      </ThemedText>
    </ThemedView>
  );
};

export default NoContent;