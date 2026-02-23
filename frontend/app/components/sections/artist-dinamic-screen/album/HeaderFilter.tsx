import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { sizes } from "@/constants/sizes";
import { AlbumItemType } from "./AlbumItem";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { formatAlbumType } from "@/utils/formatAlbumType";

type HeaderFilterProps = {
  availableTypes: AlbumItemType[];
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
}

const HeaderFilter = ({ availableTypes, activeFilter, setActiveFilter }: HeaderFilterProps) => {
  return (
    <>
      {availableTypes.length > 1 && (
        <ThemedView
          style={{
            flexDirection: "row",
            gap: 10,
            paddingHorizontal: sizes.mainPadding,
            paddingVertical: 12,
          }}
        >
          {availableTypes.map((type) => {
            const isActive = activeFilter === type;

            return (
              <ItemWrapper
                key={type}
                onPress={() =>
                  setActiveFilter(activeFilter === type ? null : type)
                }
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 14,
                  borderRadius: 99,
                  backgroundColor: isActive ? colors.mainGreen : colors.opaqueGray,
                }}
              >
                <ThemedText
                  style={{
                    color: isActive ? "#000" : "#fff",
                    fontSize: fontSize.b2,
                  }}
                >
                  {formatAlbumType(type)}
                </ThemedText>
              </ItemWrapper>
            );
          })}
        </ThemedView>
      )}
    </>
  );
};

export default HeaderFilter;