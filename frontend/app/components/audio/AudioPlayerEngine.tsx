import { useEffect } from "react";
import { useAudioPlayer } from "expo-audio";
import useSongItem from "@/features/redux/song-item/useSongItem";

export const AudioPlayerEngine = () => {
  const { songData } = useSongItem();

  const player = useAudioPlayer(songData?.mp3);

  useEffect(() => {
    if (!songData?.mp3) return;

    player.seekTo(0);

    if (songData.isPlaying) {
      player.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songData.resetKey]);

  useEffect(() => {
    if (!songData?.mp3) return;

    if (songData.isPlaying) {
      player.play();
    } else {
      player.pause();
    }
  }, [songData.isPlaying, songData.mp3, player]);

  return null;
};