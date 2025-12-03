type Trends = {
  title: string;
  author: string;
}

const trends: Trends[] = [
  { 
    title: "Be the Person You Are on Vacation", 
    author: "Maren Torff"
  },
  { 
    title: "Hate NFTs? I have some bad news...", 
    author: "Zain Levin"
  },
  { 
    title: "The real impact of dark UX patterns", 
    author: "Lindsey Curtis"},
];

const TrendList = () => {
  return (
    <div>
      <h3>📈 Today's top trends</h3>
      <ul>
        {trends.map((trend, index) => (
        <li key={index}>
          <span>{trend.title}</span>
          <span>{trend.author}</span>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendList;