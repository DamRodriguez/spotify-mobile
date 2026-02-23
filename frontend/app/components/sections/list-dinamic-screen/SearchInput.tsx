import { SearchIcon } from "@/components/icons/common";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { TextInput } from "react-native";

type SearchInputProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
  return (
    <ThemedView
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 6,
        overflow: "hidden",
        backgroundColor: colors.neutral["10"],
        paddingHorizontal: 12,
        gap: 10,
        minHeight: 40,
        paddingRight: 60,
        marginBottom: 25,
      }}
    >
      <SearchIcon />
      <TextInput
        placeholder="Buscar en ésta página"
        value={props.inputValue}
        onChangeText={value => { props.setInputValue(value); }}
        placeholderTextColor={colors.softWhite}
        style={{
          color: colors.neutral[1000],
          fontSize: fontSize.b2,
          width: "100%",
          fontWeight: 500
        }}
      />
    </ThemedView>
  );
};

export default SearchInput;