import PostCard from "./components/PostCard";

function App() {
  const posts = [
    {
      id: 1,
      profilePic: "https://randomuser.me/api/portraits/women/50.jpg",
      username: "Alice",
      postContent: "Enjoying a great day at the beach! 🌊☀️",
    },
    {
      id: 2,
      profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
      username: "Bob",
      postContent: "Just finished an amazing book! 📖✨",
    },
    {
      id: 3,
      profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
      username: "Emma",
      postContent: "Loving the new recipe I tried today! 🍲😋",
    },
  ];

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      textAlign: "center",
    }}>
      <h1 style={{ color: "white", marginBottom: "20px" }}>Social Media Feed</h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default App;
