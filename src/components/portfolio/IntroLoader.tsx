import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "portfolio_intro_shown";

export const IntroLoader = ({ onDone }: { onDone: () => void }) => {
  const [visible, setVisible] = useState(true);
  const [canDismiss, setCanDismiss] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const dismiss = () => {
    if (!visible || !canDismiss) return;
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, "1");
    setTimeout(onDone, 650);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // enable dismissal once the video has started playing (small buffer so
    // users don't skip before seeing anything)
    const v = videoRef.current;
    const onPlaying = () => {
      setTimeout(() => setCanDismiss(true), 200);
    };
    if (v) {
      v.addEventListener("playing", onPlaying);
      // kick off play programmatically in case autoplay attribute is blocked
      v.play().catch(() => setCanDismiss(true));
    }
    return () => {
      document.body.style.overflow = "";
      if (v) v.removeEventListener("playing", onPlaying);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
          onClick={dismiss}
          className="fixed inset-0 z-[100] cursor-pointer select-none overflow-hidden"
          style={{ background: "var(--coinly-cream)" }}
        >
          <video
            ref={videoRef}
            src="/intro.mp4"
            poster="/intro-poster.jpg"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* subtle vignette so wordmark stays readable */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 55%, rgba(42,50,66,0.25) 100%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.6 } }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none"
            style={{ color: "var(--coinly-deep-blue)" }}
          >
            <div className="flex items-center justify-center gap-1.5 text-3xl md:text-4xl font-black tracking-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]">
              <span>Sanjavan</span>
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: "var(--coinly-orange)" }}
              />
            </div>
            <motion.p
              animate={{ opacity: canDismiss ? [0.5, 1, 0.5] : 0.2 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="mt-3 text-xs font-bold uppercase tracking-[0.25em]"
            >
              {canDismiss ? "click anywhere to enter" : "loading..."}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const useIntroLoader = () => {
  const [show, setShow] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SESSION_KEY) !== "1";
  });
  return { show, dismiss: () => setShow(false) };
};
