"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/anna-vissi-everything.mp3" loop preload="auto" />
      <button
        type="button"
        onClick={() => void togglePlayback()}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Turn music off" : "Turn music on"}
        className="fixed right-4 top-[4.3rem] z-50 inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/85 px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-slate-200 shadow-[0_12px_35px_rgba(15,23,42,0.9)] backdrop-blur transition hover:border-cyan-400/70 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        {isPlaying ? "Music Off" : "Music On"}
      </button>
    </>
  );
}

