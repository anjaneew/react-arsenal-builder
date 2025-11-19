import React, { useState } from "react";

interface ContactFormState {
  name: string;
  email: string;
}

const ContactForm = () => {

  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({...prevState, [name]: value}));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({name : "" , email: ""});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>ContactForm</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;