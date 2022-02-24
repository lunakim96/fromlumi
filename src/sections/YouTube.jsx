import React from "react";

const Youtube = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="360px"
        height="200px"
        src={`https://www.youtube.com/embed/-O_aWIJTYC8`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default Youtube;
