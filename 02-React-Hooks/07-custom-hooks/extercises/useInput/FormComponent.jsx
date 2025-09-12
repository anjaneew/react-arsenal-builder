import useInput from "./useInput.jsx";

const FormComponent = () => {

  const name = useInput("");
  const email = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name.value}, Email: ${email.value}`);
  };

/** Spread operator: {...name} shorthand mean both
 * value={name.value} onChange={name.onChange}  */

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h3>FormComponent</h3>
      <div>
        <label>Name: 
          <input type="text" {...name}/>
        </label>
      </div>
      <div>
        <label>Email: 
          <input type="email" {...email}/>
        </label>
      </div>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}



export default FormComponent