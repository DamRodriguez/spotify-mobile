import HorizontalListTitleAndText, { HorizontalListTitleAndTextData } from '../../other/HorizontalListTitleAndText';

const YourPlaylistsSection = () => {
  const yourPlaylistsItems: HorizontalListTitleAndTextData[] = [
    {
      id: 1,
      image: "",
      title: "title",
      subtitle: "subtitle"
    },
    {
      id: 2,
      image: "",
      title: "title",
      subtitle: "subtitle"
    },
    {
      id: 3,
      image: "",
      title: "title",
      subtitle: "subtitle"
    },
    {
      id: 4,
      image: "",
      title: "title",
      subtitle: "subtitle"
    },
    {
      id: 5,
      image: "",
      title: "title",
      subtitle: "subtitle"
    }
  ]

  return (
    <HorizontalListTitleAndText
      title="Tus playlists"
      data={yourPlaylistsItems}
    />
  );
};

export default YourPlaylistsSection;