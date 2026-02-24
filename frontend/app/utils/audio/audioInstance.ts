import { AudioPlayer } from "expo-audio";

let playerInstance: AudioPlayer | null = null;

export const setAudioInstance = (player: AudioPlayer) => {
  playerInstance = player;
};

export const getAudioInstance = (): AudioPlayer => {
  if (!playerInstance) {
    throw new Error("AudioPlayer not initialized yet");
  }
  return playerInstance;
};