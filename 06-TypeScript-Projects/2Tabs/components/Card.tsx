interface CardProps {
  title:string;
  description: string;
  image: string;
  link: string;
}

const Card = ({title, description, image, link}: CardProps) => {
  return (
    <div>
      <img src={image} alt={title}/>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>Learn more</a>
      </div>
    </div>
  );
};

export default Card;