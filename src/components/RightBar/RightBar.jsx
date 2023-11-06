import { Avatar, Box, Button, Stack, TextField, Typography } from '@mui/material'
import './RightBar.scss';
import React, { useState } from 'react'
import { deepOrange } from '@mui/material/colors';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import data from '../../file/data.json';

const RightBar = ({ SelectContact, onEdit }) => {
    const [edit, setEdit] = useState(false);
    const [edited, setEdited] = useState({ ...SelectContact });

    const handleEdit = () => {
        setEdit(true);
    }

    const handleSave = () => {
        onEdit(edited);
        setEdit(false);
    }

    const handleCancel = () => {
        setEdit(false);
        setEdited({ ...SelectContact });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdited({
            ...edited,
            [name]: value,
        })
    };


    return (
        <Box className='rightBar '>
            {SelectContact ? (
                <Box position='relative' >
                    <Box className="bgColor" position='relative' />
                    <Stack position='absolute' className='boxAbs'>
                        {edit ? (
                            <>
                                <Button onClick={handleSave}>Save</Button>
                                <Button onClick={handleCancel}>Cancel</Button>
                            </>
                        ) : (
                            <Button className='edit' onClick={handleEdit}>Edit</Button>
                        )}
                        <Avatar
                            sx={{ bgcolor: deepOrange[500] }}
                            alt={SelectContact['Display Name']}
                            src="/"
                            className='avatar'
                        />
                    </Stack>
                    <Typography className='name2'>
                        {edit ? (
                            <TextField name="Name" value={edited['Display Name']} onChange={handleChange} />
                        ) : (SelectContact['Display Name'])}
                    </Typography>
                    <Box sx={{ mt: "30px", ml: "100px" }}>
                        <Typography sx={{ mb: "20px", fontSize: "25px", fontWeight: 600 }}>Contact Info</Typography>
                        <Stack direction='row' spacing={2} sx={{ mb: "20px" }}>
                            <PhoneIcon />
                            {edit ? (
                                <TextField name="Phone" value={edited['Home Phone']} onChange={handleChange} />
                            ) : (
                                <Typography sx={{fontSize:"20px"}} >{SelectContact['Home Phone']}</Typography>
                            )}

                            
                        </Stack>
                        <Stack direction='row' spacing={2}>
                            <MailIcon />
                            {edit ? (
                                <TextField name="E-mail Address" value={edited['E-mail Address']} onChange={handleChange} />
                            ) : (
                                <Typography  sx={{fontSize:"20px"}} >{SelectContact['E-mail Address']}</Typography>
                            )}
                            
                        </Stack>
                    </Box>
                </Box>
            ) : <h1 className='text'>Please Select Contact Name</h1>}
        </Box>
    )
}

export default RightBar;
