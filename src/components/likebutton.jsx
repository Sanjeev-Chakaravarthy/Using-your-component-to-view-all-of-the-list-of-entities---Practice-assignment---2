import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        backgroundColor: liked ? "red" : "gray",
        color: "white",
        border: "none",
        padding: "8px 12px",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    >
      {liked ? "Liked ❤️" : "Like 🤍"}
    </button>
  );
}

export default LikeButton;
