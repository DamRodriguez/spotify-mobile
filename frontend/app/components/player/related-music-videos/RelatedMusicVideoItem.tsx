import { PlayerSongImage } from "@/app/(app)/(player-group)/player";
import { PlayIcon, VerticalDotsIcon } from "@/components/icons/common";
import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { formatTime } from "@/utils/formatTime";

export type RelatedMusicVideoData = {
  id: string,
  image: PlayerSongImage,
  songName: string,
  songDuration: number
}

type RelatedMusicVideoItemProps = {
  data: RelatedMusicVideoData;
  artistName: string;
}

const RelatedMusicVideoItem = ({ data, artistName }: RelatedMusicVideoItemProps) => {
  return (
    <ItemWrapper
      style={{
        width: 230,
        gap: 8
      }}
    >
      <ThemedView
        style={{
        }}
      >
        <OptimizedImage
          source={data.image}
          style={{
            width: "100%",
            height: 140,
            borderRadius: 5
          }}
        />
        <ThemedView
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            margin: 15,
            padding: 4,
            borderRadius: 99,
            backgroundColor: colors.neutral[1000],
          }}
        >
          <ThemedView
            style={{ left: 2 }}
          >
            <PlayIcon size={24} />
          </ThemedView>
        </ThemedView>
        <ThemedView
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: colors.opaqueBlack,
            padding: 4,
            borderRadius: 4,
            margin: 15
          }}
        >
          <ThemedText
            style={{
              color: colors.neutral[1000],
              fontSize: fontSize.b3,
              fontWeight: 700
            }}
          >
            {formatTime(data.songDuration, true)}
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 8
        }}
      >
        <ThemedView style={{ gap: 4 }}>
          <ThemedText
            numberOfLines={1}
            style={{
              color: colors.neutral[1000],
              fontWeight: 600,
              fontSize: fontSize.b2,
              width: "95%"
            }}
          >
            {data.songName}
          </ThemedText>
          <ThemedText
            numberOfLines={1}
            style={{
              color: colors.opaqueWhite,
              fontSize: fontSize.b2,
              width: "95%"
            }}
          >
            {artistName}
          </ThemedText>
        </ThemedView>
        <ItemWrapper
          onPress={() => { }}
        >
          <VerticalDotsIcon color={colors.opaqueWhite} />
        </ItemWrapper>
      </ThemedView>
    </ItemWrapper>
  );
};

export default RelatedMusicVideoItem;