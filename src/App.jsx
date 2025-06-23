import React, { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  

  const addContact = () => {
    if (!name.trim() || !phone.trim()) {
      alert('Name and phone number cannot be empty.');
      return;
    }

    if (!/^\d+$/.test(phone)) {
      alert('Phone number must contain only numbers.');
      return;
    }

    const initials = name
      .split(' ')
      .map((n) => n[0]?.toUpperCase())
      .join('');

    const newContact = {
      id: Date.now(),
      name,
      phone,
      initials,
    };

    setContacts([...contacts, newContact]);
    setName('');
    setPhone('');
  };

  const removeContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };


  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4 ">CONTACT</h1>

{/* SEARCH BAR */}
  <div className="max-w-2xl mx-auto mb-6 relative">
   <input
      type="text"
      placeholder="Search Contact"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-4 py-2 border rounded-md shadow-sm"/>
      
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
         🔍
      </span>
      </div>

{/* CONTACT FORM */}
  <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow mb-10">
    <div className="mb-4">
      <label className="block font-semibold mb-1">Name</label>
      <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      className="w-full border px-3 py-2 rounded-md"
      placeholder="Contact Name"/>
     </div>
      
      <div className="mb-4">
        <label className="block font-semibold mb-1">Phone Call</label>
        <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        className="w-full border px-3 py-2 rounded-md"
        placeholder="08xxxxxxxx"/>
        </div>
        
        <button
          onClick={addContact}
          className="w-full bg-black font-bold text-white py-2 rounded-md hover:bg-gray-800"
        >
          ADD
        </button>
      </div>

{/* LIST */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 px-4 ">
    {filteredContacts.map((contact) => (
  <div
    key={contact.id}
    className="w-full max-w-m mx-auto bg-white p-2 rounded-2xl shadow cursor-pointer flex flex-col items-center justify-start transition duration-200 transform hover:-translate-y-2 hover:shadow-lg active:translate-y-1 active:shadow-sm h-64">
   
    <button
      onClick={() => removeContact(contact.id)}
      className="absolute top-2 right-3 text-white font-bold text-xl  duration-300
    rounded-full bg-black w-7 h-7 flex items-center justify-center">×
    </button>

{/* AVA */}
  <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-4">
    {contact.initials}
  </div>

  <h2 className="font-bold text-lg text-center">{contact.name}</h2>
  <p className="text-gray-600 text-center mb-3">{contact.phone}</p>

{/* FORM ICON */}
  <div className="flex gap-4 mt-auto">
    <button title="Call" className="text-blue-600 hover:text-blue-800 text-xl">
      📞
    </button>

    <button title="Message" className="text-green-600 hover:text-green-800 text-xl">
      ✉️
    </button>

    <button title="Video Cal" className="text-purple-600 hover:text-purple-800 text-xl">
      📹
    </button>
</div>
</div>
  ))}
</div>
</div>
);
};

export default App;
