import { dailyReleasesItems } from '@/data/home';
import BasicHorizontalList from '../../other/BasicHorizontalList';

const DailyReleasesSection = () => {
  return (
    <BasicHorizontalList
      title="Viernes de lanzamientos"
      data={dailyReleasesItems}
    />
  );
};

export default DailyReleasesSection;