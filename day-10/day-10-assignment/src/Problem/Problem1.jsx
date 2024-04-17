import React, { useState } from 'react';

const ContactList = () => {
  // State for the list of contacts and form input fields
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');

  // Function to handle form submission and add a new contact
  const handleAddContact = (e) => {
    e.preventDefault();
    // Generate a unique ID for the new contact
    const newContactId = contacts.length + 1;
    // Create a new contact object
    const newContact = {
      id: newContactId,
      name: newContactName,
      email: newContactEmail
    };
    // Add the new contact to the list
    setContacts([...contacts, newContact]);
    // Clear the form fields
    setNewContactName('');
    setNewContactEmail('');
  };

  return (
    <div>
      {/* Form to add a new contact */}
      <form onSubmit={handleAddContact}>
        <input
          type="text"
          placeholder="Name"
          value={newContactName}
          onChange={(e) => setNewContactName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={newContactEmail}
          onChange={(e) => setNewContactEmail(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>

      {/* List of contacts */}
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>{contact.name}</strong>: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
