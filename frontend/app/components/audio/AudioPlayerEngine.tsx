import { useEffect } from 'react';
import { useAudioPlayer } from 'expo-audio';
import useSongItem from '@/features/redux/song-item/useSongItem';

export const AudioPlayerEngine = () => {
  const { songData } = useSongItem();

  const player = useAudioPlayer(songData?.mp3);

  useEffect(() => {
    if (!songData) return;

    if (songData.isPlaying) {
      player.play();
    } else {
      player.pause();
    }
  }, [songData.isPlaying, songData, player]);

  return null;
};