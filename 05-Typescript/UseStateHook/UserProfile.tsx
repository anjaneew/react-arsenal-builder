import { useState } from 'react';

interface UserProfile {
        name: string;
        age: number;
        email: string;
}

const UserProfile = () => {
     // Define a state variable for user profile
    const [profile, setProfile] = useState<UserProfile>({
        name: "",
        age: 0,
        email: "",
    });

    const updateName = (name: string) => {
        setProfile((prevProfile) => ({...prevProfile, name}));
    };

    //Input values are always strings.
    //HTML inputs return string values. So Age must convert string to number.
    const updateAge = (age: string) => {
        setProfile((prevProfile) => ({...prevProfile, age: Number(age)}));
    };

    const updateEmail = (email: string) => {
        setProfile((prevProfile) => ({...prevProfile, email}));
    };

  return (
    <div>
        <h2>UserProfile</h2>
        <h4>Input fields</h4>
        <input
            type="text"
            placeholder="Name"
            value={profile.name}
            onChange={(e)=> updateName(e.target.value)}
        />
        <br/>
        <input
            type="number"
            placeholder="Age"
            value={profile.age > 0 ? profile.age : ""}
            onChange={(e)=> updateAge(e.target.value)}
        />
        <br/>
        <input
            type="text"
            placeholder="Email"
            value={profile.email}
            onChange={(e)=> updateEmail(e.target.value)}
        />
        <br/><br/>
        <h3>Profile Summary</h3>
        <p>Name:{profile.name}</p>
        <p>Age:{profile.age}</p>
        <p>Email:{profile.email}</p>
    </div>
  );
};

export default UserProfile;