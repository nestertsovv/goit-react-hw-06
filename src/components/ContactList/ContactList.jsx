import { Contact } from "components";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { filtersSelector } from "../../redux/filtersSlice";
import s from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(filtersSelector);

  const getFilteredData = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = getFilteredData();

  return (
    <>
      <ul className={s.list}>
        {filteredData.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
      {contacts.length !== 0 && filteredData.length === 0 && (
        <div>
          Not find contact with <span className={s.empty}>{filter}</span>
        </div>
      )}
    </>
  );
};
