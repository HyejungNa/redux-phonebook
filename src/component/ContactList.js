import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { ContactList, keyword } = useSelector((state) => state);

  // Filter contacts based on the keyword
  const filteredContacts = ContactList.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <SearchBox />
      {filteredContacts.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;

// import React, { useEffect, useState } from 'react';
// import SearchBox from './SearchBox';
// import ContactItem from './ContactItem';
// import { useSelector } from 'react-redux';

// const ContactList = () => {
//   const ContactList = useSelector((state) => state.ContactList);
//   return (
//     <div>
//       <SearchBox />
//       {ContactList.map((item) => (
//         <ContactItem item={item} />
//       ))}
//     </div>
//   );
// };

// export default ContactList;
