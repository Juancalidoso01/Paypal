"use client";

import { useEffect, useRef, useState } from "react";

const RING_SIZE = 44;
const RING_LERP = 0.42;

export function PpCursorAmbient() {
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [finePointer, setFinePointer] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(pointer: fine)").matches,
  );
  const target = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const onChange = () => setFinePointer(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const showRing = !reduceMotion && finePointer === true;

  useEffect(() => {
    if (reduceMotion) return;

    target.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 3,
    };
    ringPos.current = { ...target.current };
    setGlow({ ...target.current });

    const offset = RING_SIZE / 2;
    requestAnimationFrame(() => {
      const el = ringRef.current;
      if (el) {
        el.style.transform = `translate3d(${ringPos.current.x - offset}px, ${
          ringPos.current.y - offset
        }px, 0)`;
        el.style.opacity = "1";
      }
    });

    const onMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      setGlow((prev) => {
        const k = 0.14;
        return {
          x: prev.x + (target.current.x - prev.x) * k,
          y: prev.y + (target.current.y - prev.y) * k,
        };
      });

      ringPos.current.x += (target.current.x - ringPos.current.x) * RING_LERP;
      ringPos.current.y += (target.current.y - ringPos.current.y) * RING_LERP;

      const el = ringRef.current;
      if (el) {
        el.style.transform = `translate3d(${ringPos.current.x - offset}px, ${
          ringPos.current.y - offset
        }px, 0)`;
        el.style.opacity = "1";
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion]);

  return (
    <>
      {!reduceMotion && (
        <div
          className="pp-cursor-glow"
          style={{
            transform: `translate3d(${glow.x - 280}px, ${glow.y - 280}px, 0)`,
          }}
          aria-hidden
        />
      )}

      {showRing && (
        <div
          ref={ringRef}
          className="pp-cursor-ring pointer-events-none fixed left-0 top-0 z-[100]"
          aria-hidden
        />
      )}
    </>
  );
}
