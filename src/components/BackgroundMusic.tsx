"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.1);
  const volumeRef = useRef(0.1);

  const applyOutputVolume = (nextVolume: number, muted: boolean) => {
    const audio = audioRef.current;
    if (!audio) return;

    const effectiveVolume = muted ? 0 : nextVolume;

    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = effectiveVolume;
      // Keep element volume max when Web Audio gain controls loudness.
      audio.volume = 1;
      return;
    }

    audio.volume = effectiveVolume;
  };

  const resumeAudioContextIfNeeded = async () => {
    const context = audioContextRef.current;
    if (!context || context.state !== "suspended") return;

    try {
      await context.resume();
    } catch {
      // Ignore and retry on next interaction.
    }
  };

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = true;
    setIsMuted(true);
    applyOutputVolume(volumeRef.current, true);

    const AudioContextCtor =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (AudioContextCtor && !audioContextRef.current) {
      try {
        const context = new AudioContextCtor();
        const source = context.createMediaElementSource(audio);
        const gain = context.createGain();
        source.connect(gain);
        gain.connect(context.destination);
        audioContextRef.current = context;
        gainNodeRef.current = gain;
        applyOutputVolume(volumeRef.current, true);
      } catch {
        // Fallback to element volume if Web Audio graph is unavailable.
      }
    }

    const windowInteractionEvents: Array<keyof WindowEventMap> = [
      "pointerdown",
      "keydown",
      "touchstart",
      "scroll",
      "wheel"
    ];
    const documentInteractionEvents: Array<keyof DocumentEventMap> = ["scroll", "touchmove", "wheel"];

    const startMutedPlayback = async () => {
      if (!audio.muted) {
        audio.muted = true;
        setIsMuted(true);
      }
      applyOutputVolume(volumeRef.current, true);

      if (!audio.paused) return;
      try {
        await audio.play();
      } catch {
        // Will retry on visibility/focus/interaction.
      }
    };

    const unlockPlaybackFromInteraction = async () => {
      if (volumeRef.current === 0) return;

      audio.muted = false;
      setIsMuted(false);
      applyOutputVolume(volumeRef.current, false);
      await resumeAudioContextIfNeeded();

      if (!audio.paused) {
        removeInteractionListeners();
        return;
      }

      try {
        await audio.play();
        removeInteractionListeners();
      } catch {
        // Keep listeners active and retry on next interaction.
      }
    };

    const addInteractionListeners = () => {
      windowInteractionEvents.forEach((eventName) => {
        window.addEventListener(eventName, unlockPlaybackFromInteraction, { passive: true });
      });
      documentInteractionEvents.forEach((eventName) => {
        document.addEventListener(eventName, unlockPlaybackFromInteraction, { passive: true, capture: true });
      });
    };

    const removeInteractionListeners = () => {
      windowInteractionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, unlockPlaybackFromInteraction);
      });
      documentInteractionEvents.forEach((eventName) => {
        document.removeEventListener(eventName, unlockPlaybackFromInteraction, { capture: true });
      });
    };

    const retryWhenTabBecomesActive = () => {
      if (document.visibilityState !== "visible") return;
      void startMutedPlayback();
    };

    addInteractionListeners();
    window.addEventListener("focus", retryWhenTabBecomesActive);
    window.addEventListener("pageshow", retryWhenTabBecomesActive);
    document.addEventListener("visibilitychange", retryWhenTabBecomesActive);
    audio.addEventListener("canplay", retryWhenTabBecomesActive);

    void startMutedPlayback();

    return () => {
      removeInteractionListeners();
      window.removeEventListener("focus", retryWhenTabBecomesActive);
      window.removeEventListener("pageshow", retryWhenTabBecomesActive);
      document.removeEventListener("visibilitychange", retryWhenTabBecomesActive);
      audio.removeEventListener("canplay", retryWhenTabBecomesActive);
      if (audioContextRef.current) {
        void audioContextRef.current.close();
        audioContextRef.current = null;
        gainNodeRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    applyOutputVolume(volume, isMuted);
  }, [volume, isMuted]);

  const toggleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !audio.muted;
    audio.muted = nextMuted;
    setIsMuted(nextMuted);
    applyOutputVolume(volume, nextMuted);

    if (!nextMuted && audio.paused) {
      try {
        await resumeAudioContextIfNeeded();
        await audio.play();
      } catch {
        // If browser blocks playback, keep control state and wait for user action.
      }
    }
  };

  const handleVolumeChange = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    setVolume(value);
    const shouldMute = value === 0;
    audio.muted = shouldMute;
    setIsMuted(shouldMute);
    applyOutputVolume(value, shouldMute);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/anna-vissi-everything.mp3" loop preload="auto" playsInline />
      <div className="fixed right-4 top-[4.3rem] z-50 flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/85 px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-slate-200 shadow-[0_12px_35px_rgba(15,23,42,0.9)] backdrop-blur transition">
        <button
          type="button"
          onClick={() => void toggleMute()}
          aria-pressed={isMuted}
          aria-label={isMuted ? "Turn music on" : "Turn music off"}
          className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 transition hover:border-cyan-400/70 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          {isMuted ? "Music On" : "Music Off"}
        </button>
        <label className="flex items-center gap-2">
          <span className="text-[0.6rem] tracking-[0.16em] text-slate-400">Vol</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(event) => handleVolumeChange(Number(event.target.value))}
            aria-label="Music volume"
            className="h-1.5 w-24 cursor-pointer accent-cyan-400"
          />
        </label>
      </div>
    </>
  );
}

