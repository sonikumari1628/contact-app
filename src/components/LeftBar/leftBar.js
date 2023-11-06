/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './LeftBar.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Box, Card, InputBase, Paper, TextField, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import data from '../../file/data.json';
import debounce from 'lodash/debounce';


const leftBar = ({ onSelectContact }) => {
  const [contact, setContact] = useState(data);
  const [search, setSearch] = useState('');

  const [active, setActive] = useState(null);

  useEffect (() => {
    const debounceData = debounce(async () => {
        const searchData = data.filter((contact) => {
          const displayName = contact['Display Name'].toLowerCase();
          const searchTerm = search.toLowerCase();
          return displayName.includes(searchTerm) || contact['Home Phone'].includes(search);
          
        });
      setContact(searchData);
      }, 300);
      debounceData();
      
      return () =>{
        debounceData.cancel();
      };
  }, [search]);
  

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleContact = (contact) => {
    onSelectContact(contact);
  };


  return (
    <Box className='leftBar'>
      <Box className='cont'>
        <Paper
            className='search'>
          <InputBase
            sx={{ fontSize: "20px", width: "70%", ml: "30px" }}
            placeholder="Search"  
            onChange={handleSearch}
          />
          <SearchOutlinedIcon
            sx={{ color: "black", pt:"5px"}}
          />
        </Paper>
      </Box>
        {contact.map((contact, index) => {
          return (
            <Card className='card1' key={index} onClick={() => handleContact(contact)}>
            <Avatar
              sx={{ bgcolor: deepOrange[500] }}
              alt={contact['Display Name']}
              src="/"
              >
            </Avatar>
            <Typography className='name'>{contact['Display Name']}</Typography>
          </Card>
         ) })
        }
    </Box>
  )
}

export default leftBar