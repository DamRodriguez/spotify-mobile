import React from 'react';
import ItemWrapper from '../other/ItemWrapper';
import { PauseIcon, PlayIcon } from '../icons/common';
import { colors } from '@/themes/colors';
import useSongItem from '@/features/redux/song-item/useSongItem';

type TogglePlayButtonProps = {
  size?: number;
}

const TogglePlayButton = (props: TogglePlayButtonProps) => {
  const { songData, togglePlay } = useSongItem();
  const handleTogglePlayButton = () => {
    togglePlay();
  }
  return (
    <>
      {songData.isPlaying ? (
        <ItemWrapper
          onPress={handleTogglePlayButton}
        >
          <PauseIcon size={props.size} />
        </ItemWrapper>
      ) : (
        <ItemWrapper
          onPress={handleTogglePlayButton}
        >
          <PlayIcon size={props.size ? props.size : 26} color={colors.neutral[1000]} />
        </ItemWrapper>
      )}
    </>
  );
};

export default TogglePlayButton;