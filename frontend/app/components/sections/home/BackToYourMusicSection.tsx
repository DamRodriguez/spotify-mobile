import { backToYourMusicItems } from '@/data/home';
import BasicHorizontalList from '../../other/BasicHorizontalList';

const BackToYourMusicSection = () => {
  return (
    <BasicHorizontalList
      title="Vuelve a tu música"
      data={backToYourMusicItems}
    />
  );
};

export default BackToYourMusicSection;