import React from "react";

interface YouTubeVideoProps {
  url: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ url }) => {
  const videoId = url.split("v=")[1];
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <video controls width="560" height="315">
      <source src={videoUrl} type="video/mp4" />
      Votre navigateur ne supporte pas la balise vidéo.
    </video>
  );
};

export default YouTubeVideo;
