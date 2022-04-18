import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontacts } from "./redux/action/action";
import "./App.css";
import ContactCard from "./components/ContactCard";
import { Link, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(getcontacts());
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [idd, setId] = useState("");
  console.log(idd);
  const getuser = (contact) => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setId(contact._id);
  };

  return (
    <div className="App">
      <Link to={"/"}>
        <button> contact list</button>{" "}
      </Link>{" "}
      <Link to={"/add-contact"}>
        {" "}
        <button>add contact </button>{" "}
      </Link>
      <Routes>
        <Route
          path="/"
          element={contacts.map((el) => (
            <ContactCard el={el} getuser={getuser} />
          ))}
        />

        <Route
          path="/add-contact"
          element={
            <AddContact
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
            />
          }
        />

        <Route
          path="/edit-contact"
          element={
            <EditContact
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              id={idd}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
