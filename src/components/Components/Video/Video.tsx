import { useRef, useState } from "react";
import { VideoProgress } from "../VideoProgress/VideoProgress";

type Props = {
  foo?: string;
  videoSrc: string;
};

export function Video(props: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(20);

  function handlePlayPause() {
    //
  }

  return (
    <div>
      <VideoProgress
        progress={progress}
        handlePlayPause={handlePlayPause}
        isPlaying={isPlaying}
      />
    </div>
  );
}
