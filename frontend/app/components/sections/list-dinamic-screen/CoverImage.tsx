import { ListDinamicScreenDataType } from "@/app/(app)/(player-group)/(tabs)/home/list-dinamic-screen/[type]/[id]";
import OptimizedImage from "@/components/image/OptimizedImage";
import ThemedView from "@/components/themed/ThemedView";

type CoverImageProps = {
  frontImage: ListDinamicScreenDataType["frontImage"];
}

const CoverImage = ({ frontImage }: CoverImageProps) => {
  const mainImageSize = "70%";

  return (
    <ThemedView
      style={{
        marginBottom: 10,
        alignItems: "center",
        elevation: 20
      }}
    >
      {frontImage instanceof Array ? (
        <ThemedView
          style={{
            backgroundColor: "#fff",
            borderRadius: 6,
            width: mainImageSize,
            aspectRatio: 1,
            flexWrap: "wrap",
            overflow: "hidden"
          }}
        >
          {frontImage.map((image, index) => (
            <OptimizedImage
              key={index}
              source={image}
              style={{
                width: "50%",
                height: "50%",
              }}
            />
          ))}
        </ThemedView>
      ) : (
        <OptimizedImage
          source={frontImage}
          style={{
            width: mainImageSize,
            aspectRatio: 1,
            alignSelf: "center",
            borderRadius: 6,
          }}
        />
      )}
    </ThemedView>
  );
};

export default CoverImage;