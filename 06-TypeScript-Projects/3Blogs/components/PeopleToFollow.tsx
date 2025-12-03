import UserCard from "./UserCard";

type Person = {
  name: string;
  following: boolean;
}

const peopleToFollow: Person[] = [
  { name: "Alena Gouse", following: false }, 
  { name: "Ruben Bator", following: true }, 
  { name: "Aspen Stanton", following: false }, 
  { name: "Madelyn George", following: false }, 
];

const PeopleToFollow = () => {
  return (
    <div>
      <h3>👥 People who to follow</h3>
      <div>
        {peopleToFollow.map((person, index) => (
          <UserCard key={index} person={person}/>
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;