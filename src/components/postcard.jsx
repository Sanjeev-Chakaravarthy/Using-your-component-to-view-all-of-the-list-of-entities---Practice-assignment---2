import LikeButton from "./likebutton";

function PostCard({ profilePic, username, postContent }) {
  return (
    <div style={styles.card}>
      <img src={profilePic} alt="Profile" style={styles.profilePic} />
      <h3>{username}</h3>
      <p>{postContent}</p>
      <LikeButton />
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    textAlign: "center",
    width: "300px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  profilePic: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default PostCard;
