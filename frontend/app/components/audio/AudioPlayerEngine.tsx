import { useEffect } from "react";
import { useAudioPlayer } from "expo-audio";
import useSongItem from "@/features/redux/song-item/useSongItem";
import useSongProgress from "@/features/redux/song-progress/useSongProgress";
import { setAudioInstance } from "@/utils/audio/audioInstance";

export const AudioPlayerEngine = () => {
  const { songData } = useSongItem();
  const { resetProgress, setProgress } = useSongProgress();

  const player = useAudioPlayer(songData?.mp3);

  useEffect(() => {
    setAudioInstance(player);
  }, [player]);

  useEffect(() => {
    resetProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songData.id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress({
        position: player.currentTime ?? 0,
        duration: player.duration ?? 0,
      })
    }, 500);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

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