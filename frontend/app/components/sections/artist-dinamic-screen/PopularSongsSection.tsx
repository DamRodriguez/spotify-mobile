import { ArtistDinamicScreenDataType } from "@/app/(player-group)/(tabs)/home/artist-dinamic-screen/[id]";
import SongItem from "@/components/music/SongItem";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { HomeListSectionType } from "@/types/homeListSection";

type PopularSongsSectionProps = {
  songs: ArtistDinamicScreenDataType["songs"];
  sectionId: string;
  sectionType: HomeListSectionType;
}

const PopularSongsSection = ({ songs, sectionId, sectionType }: PopularSongsSectionProps) => {
  return (
    <ThemedView style={{ gap: 10 }}>
      <ThemedText
        style={{
          fontSize: fontSize.h7,
          color: colors.neutral[1000],
          fontWeight: 800
        }}
      >
        Populares
      </ThemedText>
      <ThemedView>
        {songs.map((item, index) => (
          <SongItem
            key={index}
            data={item}
            index={index + 1}
            sectionId={sectionId}
            sectionType={sectionType}
            enumerateSongs
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
};

export default PopularSongsSection;