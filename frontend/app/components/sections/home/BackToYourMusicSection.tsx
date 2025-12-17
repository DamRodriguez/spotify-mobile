import BasicHorizontalList, { BasicHorizontalListData } from '../../other/BasicHorizontalList';

const BackToYourMusicSection = () => {
  const backToYourMusicItems: BasicHorizontalListData[] = [
    {
      id: 1,
      image: "",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
    },
    {
      id: 2,
      image: "",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
    },
    {
      id: 3,
      image: "",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
    },
    {
      id: 4,
      image: "",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
    },
    {
      id: 5,
      image: "",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
    }
  ]

  return (
    <BasicHorizontalList
      title="Vuelve a tu música"
      data={backToYourMusicItems}
    />
  );
};

export default BackToYourMusicSection;