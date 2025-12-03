const topics: string[] = [
  "Technology",
  "Design Thinking",
  "Crypto",
  "NFT",
  "Personal Growth",
  "Reading",
];

const TopTopics = () => {
  return (
    <div>
      <h3>🏷️ Topics for you</h3>
      <div>
        {topics.map((topic, index) => (
          <span key={index}>{topic}</span>
        ))}
      </div>
    </div>
  );
};

export default TopTopics;