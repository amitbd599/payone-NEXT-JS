'use client'

// CustomCursor.js
import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 2,
        delay: 0.1,
        visibility: "visible",
        ease: "expo.out",
      });

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.5,
        visibility: "visible",
        ease: "expo.out",
      });
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    const smalls = document.querySelectorAll(".cursor-small");
    const bigs = document.querySelectorAll(".cursor-big");

    smalls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(dot, { scale: 8, backgroundColor: "#fff" });
        gsap.to(cursor, { visibility: "hidden", opacity: 0 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(dot, { scale: 1, backgroundColor: "#fff" });
        gsap.to(cursor, { visibility: "visible", opacity: 1 });
      });
    });

    bigs.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(dot, { scale: 36, backgroundColor: "#fff" });
        gsap.to(cursor, { visibility: "hidden", opacity: 0 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(dot, { scale: 1, backgroundColor: "#fff" });
        gsap.to(cursor, { visibility: "visible", opacity: 1 });
      });
    });

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className='cursor'></div>
      <span ref={dotRef} className='dot'></span>
    </>
  );
};

export default CustomCursor;
