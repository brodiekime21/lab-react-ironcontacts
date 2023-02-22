import contacts from "./contacts.json";
import './App.css';
import ContactList from "./components/ContactList";

function App() {
  return (

    <div className="App">
    <h1>Iron Contacts</h1>
        <ContactList data={contacts}/>
    </div>
  );
}

export default App;
