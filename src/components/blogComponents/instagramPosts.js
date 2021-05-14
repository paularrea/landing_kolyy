import { InstagramMedia } from "react-instagram-media";

import React from "react";

const InstagramPosts = () => {
  return (
      <>
      <h3>Entérate también en Instagram</h3>
    <InstagramMedia
      uri="https://www.instagram.com/p/CO0moiLJQS_/"
      renderItem={({ display_url, video_url, type, caption }) => {
        if (type === "video") {
          return (
            <video poster={display_url} controls>
              <source src={video_url} type="video/mp4" />
            </video>
          );
        }

        return <img src={display_url} alt={caption} />;
      }}
      renderMediaList={(children) => <div className="swiper">{children}</div>}
      renderError={() => <div>I have failed to parse it</div>}
      renderLoading={() => <div>Loading</div>}
    />
    </>
  );
};

export default InstagramPosts;
