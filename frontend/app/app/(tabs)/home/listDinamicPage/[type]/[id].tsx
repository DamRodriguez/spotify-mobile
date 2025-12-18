import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { HomeListSection } from '@/types/homeListSection';
import { useLocalSearchParams } from 'expo-router';

const ListDinamicPage = () => {
  const { type, id } = useLocalSearchParams<{
    type: HomeListSection;
    id: string;
  }>();

  return (
    <>
      <ThemedView>
        <ThemedText style={{ color: "#fff" }}>
          {type}
        </ThemedText>
        <ThemedText style={{ color: "#fff" }}>
          {id}
        </ThemedText>
      </ThemedView >
    </>
  );
};

export default ListDinamicPage;