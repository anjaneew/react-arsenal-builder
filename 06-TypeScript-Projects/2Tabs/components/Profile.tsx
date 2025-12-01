import { useState } from "react";
import Tabs from "./Tabs";

const Profile = () => {

  const [bannerUrl, setBannerUrl] = useState("https://picsum.photos/id/9/1500/400");

  const [profileUrl, setProfileUrl] = useState("https://picsum.photos/id/2/100");

  //Handlers for image changes
  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      //The line of code is used in JavaScript 
      // to create a temporary URL that points to a Blob or File object.
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div>
        <img src={bannerUrl} alt="Background" />
        <button>
          <label>
            Profile
          </label>
          <input 
            id="banner-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>
      <br/>
      {/**Channel Logo*/}
      <div>
        <img src={profileUrl} alt="Channel Logo"/>
        <button>
          <label>
            📷
          </label>
          <input id="profle-upload" type="file" accept="image/*" className="hidden" onChange={handleProfileChange} />
        </button>

        {/*Channel Details*/}
        <div>
          <h2>Anjanee Sewvandika</h2>
          <p>Web Developer</p>
          <p>This is a short description of the YouTube channel. It gives an
            overview of the content and what viewers can expect.
          </p>
          <button>Subscribe</button>
        </div>
      </div>
      <Tabs/>
    </div>
  );
};

export default Profile;