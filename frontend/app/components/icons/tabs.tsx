import Svg, { Path } from "react-native-svg";

export const HomeIcon = ({ fill = "#fff" }: { fill?: string }) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 42 42"
    >
      <Path
        fill={fill}
        d="M2.68 15.726c-.1.039-.16.09-.18.149l.18-.149zm-.18.149v20.627c0 2.509.49 2.998 3 2.998h7c2.51 0 3-.461 3-3v-8h9v8.031c0 2.51.51 2.979 3 2.969c.04.031 7 0 7 0c2.529 0 3-.526 3-2.997V16.495c0-.08-.09-.15-.27-.23L20 1.5L2.68 15.726l-.18.149z"
      />
    </Svg>
  );
};

export const SearchIcon = ({ fill = "#fff" }: { fill?: string }) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 512 512"
    >
      <Path
        fill={fill}
        d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.1-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208M208 352a144 144 0 1 0 0-288a144 144 0 1 0 0 288"
      />
    </Svg>
  )
}

export const LibraryIcon = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <Path
        fill="#000000"
        d="M5.5 3A1.5 1.5 0 0 1 7 4.5v15A1.5 1.5 0 0 1 5.5 21h-2A1.5 1.5 0 0 1 2 19.5v-15A1.5 1.5 0 0 1 3.5 3h2Zm6 0A1.5 1.5 0 0 1 13 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 8 19.5v-15A1.5 1.5 0 0 1 9.5 3h2Zm7.281 3.124l3.214 12.519a1.5 1.5 0 0 1-1.08 1.826l-1.876.48a1.5 1.5 0 0 1-1.826-1.08L13.999 7.354a1.5 1.5 0 0 1 1.08-1.826l1.876-.483a1.502 1.502 0 0 1 1.826 1.08Z"
      />
    </Svg>
  )
}

export const PlusIcon = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 16 16"
    >
      <Path
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75"
      />
    </Svg>
  )
}
