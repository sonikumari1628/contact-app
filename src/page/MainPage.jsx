import React, { useState } from 'react';
import './MainPage.scss';
import { Box, Stack } from '@mui/material';

import LeftBar from '../components/LeftBar/leftBar.js';
import RightBar from '../components/RightBar/RightBar.jsx';
import data from '../file/data.json';

const MainPage = () => {
  const [selectContact, setSelectContact] = useState(null);
  const [jsonData, setJsonData] = useState([...data])

  const handleSelectContact = (contact) => {
    setSelectContact(contact);
  };
  console.log(selectContact);

  const updateContact = (updatedContact) => {
    const contactIndex = jsonData.findIndex((contact) => contact.id === updatedContact.id);

    // if (contactIndex !== -1) {
    //   const updatedData = [...jsonData];
    //   updatedData[contactIndex] = updatedContact;
    //   setJsonData(updatedData);
    // }

  }

  return (
    <Stack  >
        <LeftBar onSelectContact={handleSelectContact} />
        <RightBar className='rightBar' SelectContact={selectContact} onEdit={updateContact}/>
    </Stack>
  )
}

export default MainPage;