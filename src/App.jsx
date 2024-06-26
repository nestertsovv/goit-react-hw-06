import { ContactForm, SearchBox, ContactList } from "components";
import { selectContacts } from "./redux/contactsSlice";
import { useSelector } from "react-redux";
import "./styles/reset.css";
import s from "./App.module.css";

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <SearchBox />}
      <ContactList />
      {contacts.length === 0 && <div>There is no contacts</div>}
    </div>
  );
}

export default App;
