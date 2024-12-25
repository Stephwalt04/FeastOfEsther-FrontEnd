import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Founder from "./Components/Founder/Founder";
import Event from "./Components/Events/Event";
import RegistrationForm from "./Components/Registration Form/RegistrationForm";
import Contact from "./Components/Contact/Contact";
import Layout from "./Components/Layout/Layout";
import CreateEvent from "./Components/EventForm/CreateEvent";
import EditEvent from "./Components/EventForm/EditEvent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/events" element={<Event />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/donate" element={<RegistrationForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/event/new" element={<CreateEvent />} />
            <Route path="/event/:id/edit" element={<EditEvent />} />
            <Route path="/event/create" element={<CreateEvent />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
