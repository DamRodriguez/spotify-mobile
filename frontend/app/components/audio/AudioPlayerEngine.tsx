import { useEffect } from "react";
import { useAudioPlayer } from "expo-audio";
import useSongItem from "@/features/redux/song-item/useSongItem";
import useSongProgress from "@/features/redux/song-progress/useSongProgress";
import { setAudioInstance } from "@/utils/audio/audioInstance";

export const AudioPlayerEngine = () => {
  const { currentSong, songState } = useSongItem();
  const { resetProgress, setProgress } = useSongProgress();

  const player = useAudioPlayer();

  useEffect(() => {
    setAudioInstance(player);
  }, [player]);

  useEffect(() => {
    // if (!currentSong?.mp3) return;

    let cancelled = false;

    const load = () => {
      try {
        player.replace(currentSong.mp3);

        if (cancelled) return;

        player.seekTo(0);

        resetProgress();

        if (songState.isPlaying) {
          player.play();
        }
      } catch (e) {
        console.warn("Audio load error:", e);
      }
    };

    load();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong?.mp3, songState.resetKey]);

  useEffect(() => {
    if (!currentSong?.mp3) return;

    const control = () => {
      try {
        if (songState.isPlaying) {
          player.play();
        } else {
          player.pause();
        }
      } catch (e) {
        console.warn("Playback control error:", e);
      }
    };

    control();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songState.isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress({
        position: player.currentTime ?? 0,
        duration: player.duration ?? 0,
      });
    }, 500);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

  return null;
};