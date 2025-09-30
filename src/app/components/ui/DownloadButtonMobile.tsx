
"use client";
import React, { useState } from "react";
import { Download } from "lucide-react";

const DownloadButtonMobile = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [stage, setStage] = useState("idle"); // idle, morphing, folding, flying, complete

  const handleDownload = async () => {
    setStage("morphing");

    setTimeout(() => setStage("folding"), 300);
    setTimeout(() => setStage("flying"), 800);

    setIsDownloading(true);

    try {
      const response = await fetch("/ashique-resume.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Ashique-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setTimeout(() => {
        setStage("complete");
        setTimeout(() => {
          setStage("idle");
          setIsDownloading(false);
        }, 1500);
      }, 1500);
    } catch (error) {
      console.error("Download failed:", error);
      setStage("idle");
      setIsDownloading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`fixed right-6 bottom-6 z-50 lg:hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg flex items-center justify-center overflow-hidden transition-all duration-500 ${
          stage === "idle" ? "w-14 h-14 rounded-full hover:scale-110" : ""
        } ${stage === "morphing" ? "w-32 h-14 rounded-2xl" : ""} ${
          stage === "folding" ? "w-24 h-32 rounded-lg" : ""
        } ${
          stage === "flying"
            ? "w-16 h-20 rounded-lg translate-y-[-300px] translate-x-[200px] rotate-45 opacity-0"
            : ""
        } ${stage === "complete" ? "w-14 h-14 rounded-full scale-110" : ""}`}
        style={{
          transition:
            stage === "flying"
              ? "all 1s cubic-bezier(0.34, 1.56, 0.64, 1)"
              : "all 0.5s ease",
        }}
      >
        {stage === "idle" && (
          <Download className="w-6 h-6 text-[#FFFFFF]/80" strokeWidth={2.5} />
        )}

        {stage === "morphing" && (
          <div className="flex items-center gap-2 px-2">
            <Download className="w-5 h-5 text-[#FFFFFF]/80" strokeWidth={2.5} />
            <span className="text-sm font-medium text-[#FFFFFF]/80">Resume</span>
          </div>
        )}

        {stage === "folding" && (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Paper folding effect */}
            <div className="absolute inset-2 bg-white/80 rounded transform origin-top animate-fold">
              <div className="flex flex-col items-center justify-center h-full gap-1">
                <div className="w-8 h-1 bg-[#FFFFFF]/20 rounded" />
                <div className="w-10 h-1 bg-[#FFFFFF]/20 rounded" />
                <div className="w-6 h-1 bg-[#FFFFFF]/20 rounded" />
              </div>
            </div>
          </div>
        )}

        {stage === "flying" && (
          <div className="relative w-full h-full bg-white/80 rounded shadow-2xl" />
        )}

        {stage === "complete" && (
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
            <svg
              className="w-7 h-7 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </button>

      <style jsx>{`
        @keyframes fold {
          0% {
            transform: perspective(400px) rotateX(0deg);
          }
          50% {
            transform: perspective(400px) rotateX(-90deg);
          }
          100% {
            transform: perspective(400px) rotateX(-180deg);
          }
        }
        .animate-fold {
          animation: fold 0.6s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default DownloadButtonMobile;
