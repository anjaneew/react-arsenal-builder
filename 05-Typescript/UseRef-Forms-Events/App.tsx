import Form from "./components/Form";
import ContactForm from "./components/ContactForm";
import EventHandling from "./components/EventHandling";
import FocusInput from "./components/FocusInput";

const App = () => {
  return (
    <div>
      <h1>UseRef, Forms & Events</h1>
      <Form/>
      <FocusInput/>
      <ContactForm/>
      <EventHandling/>
    </div>
  );
};

export default App;