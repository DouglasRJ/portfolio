"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Background from "./background";
import Introduction from "./introduction";
import Navigation from "./navigation";

interface SkeletonProps {
  children: React.ReactNode;
}

export default function Skeleton({ children }: SkeletonProps) {
  const [centered, setCentered] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCentered(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (centered) return;

    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [centered]);
  return (
    <div className="fixed h-[calc(100dvh)] w-screen overflow-hidden">
      <Background />
      <div className="relative h-full w-full p-4 md:p-8">
        <Introduction centered={centered} />
        <Navigation showDetails={showDetails} />
        <div
          className={`absolute bottom-4 right-8 h-[80%] w-[60%] overflow-scroll transition-all duration-[1500ms] ease-in-out md:w-[85%] ${
            showDetails ? "opacity-1" : "opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
