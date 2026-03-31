import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorScale = useMotionValue(1);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });
  const springScale = useSpring(cursorScale, { stiffness: 300, damping: 30 });

  
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const elements = document.querySelectorAll("a, button, .card, li");

    const onMouseEnter = () => {
      cursorScale.set(1.5); 
      setHovered(true);    
    };
    const onMouseLeave = () => {
      cursorScale.set(1);
      setHovered(false);
    };

    elements.forEach(el => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      elements.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        scale: springScale,
      }}
      className={`fixed pointer-events-none w-4 h-4 rounded-full z-50 bg-white shadow-lg border border-dashed
        ${hovered ? 'bg-white/50 border-gray/50' : ''} 
        `}
    />
  );
}