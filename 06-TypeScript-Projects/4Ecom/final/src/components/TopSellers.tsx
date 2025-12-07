import { useState, useEffect } from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

const TopSellers = () => {

  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const authorsData: Author[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));
        setAuthors(authorsData);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchData();
  }, []);

  const handleFollowClick = (index: number) => {
    setAuthors((prevAuthors) => 
      prevAuthors.map((author, i) => 
      i === index ? {...author, isFollowing: !author.isFollowing }: author));
  };

  return (
    <div>
      <h2>Top Sellers</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            <section>
              <img src={author.image} alt={author.name}/>
              <span>{author.name}</span>
            </section>
            <button onClick={() => handleFollowClick(index)}>
              {author.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;