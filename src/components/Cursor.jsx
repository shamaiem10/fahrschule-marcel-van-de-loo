import React, { useEffect, useRef } from 'react';

export default function Cursor({ reduced }) {
  const core = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (reduced) return; // Respect reduced motion
    const c = core.current;
    const r = ring.current;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      if (c) c.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      if (r) r.style.transform = `translate(${rx - 14}px, ${ry - 14}px)`;
      anim = requestAnimationFrame(loop);
    };
    let anim = requestAnimationFrame(loop);
    window.addEventListener('mousemove', move);
    document.body.style.cursor = 'none';
    return () => {
      cancelAnimationFrame(anim);
      window.removeEventListener('mousemove', move);
      document.body.style.cursor = '';
    };
  }, [reduced]);

  return (
    <>
      <div ref={core} className={`cursor-core${reduced ? ' hidden' : ''}`} />
      <div ref={ring} className={`cursor-ring${reduced ? ' hidden' : ''}`} />
    </>
  );
}
