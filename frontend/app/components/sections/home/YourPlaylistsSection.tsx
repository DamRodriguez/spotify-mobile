import { yourPlaylistsItems } from '@/data/home';
import HorizontalListTitleAndText from '../../other/HorizontalListTitleAndText';

const YourPlaylistsSection = () => {
  return (
    <HorizontalListTitleAndText
      title="Tus playlists"
      data={yourPlaylistsItems}
    />
  );
};

export default YourPlaylistsSection;