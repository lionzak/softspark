// components/Sparks.tsx
"use client";
import { useEffect, useState } from "react";

const shapes = [
  { type: "circle", color: "bg-green-400" },
  { type: "triangle", color: "text-pink-500" },
];

export default function Sparks() {
type SparkItem = {
    type: "circle" | "triangle";
    color: string;
    left: number;
    top: number;
    duration: number;
    delay: number;
    size: number;
};

const [items, setItems] = useState<SparkItem[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map(() => {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      return {
        ...shape,
        type: shape.type as "circle" | "triangle",
        left: Math.random() * 100, // percentage
        top: Math.random() * 100,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 5,
        size: 8 + Math.random() * 21,   
      };
    });
    setItems(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.type === "circle" ? "rounded-full" : ""} ${item.color}`}
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            animation: `float ${item.duration}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
            clipPath: item.type === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
          }}
        />
      ))}
    </div>
  );
}
