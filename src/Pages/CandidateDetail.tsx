import { Table, TableRow ,TableCell,Input,InputLabel, Select, MenuItem, FormControl, Button} from '@material-ui/core';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import CommonButton from './CommonButton';

const CondidateDetail:React.FC=()=>{
    const [language,setLanguage]=useState('');
    const [name,setName]=useState('');
    const [gender,setGender]=useState('');
    const navigate=useNavigate();
   
    const getDataLanguage=(e:any)=>{
    setLanguage(e.target.value);
    }

    const getDataName=(e:any)=>{
        setName(e.target.value);
    }

    const getDataGender=(e:any)=>{
        setGender(e.target.value);
    }
    
     const submitButton=()=>{
          navigate('/questionDetails',{state:{language:language}});     
     }

    return(
        <div>
           <Table>
               <TableRow>
                   <TableCell><InputLabel>Name:</InputLabel></TableCell>
                   <TableCell>
                       <Input data-testid="name" name="name" value={name} placeholder='Enter Name' onChange={getDataName}/>
                   </TableCell>
               </TableRow>
               <TableRow>
                   <TableCell><InputLabel>Select Gender:</InputLabel></TableCell>
                <FormControl  style={{ maxWidth: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={getDataGender}
                    value={gender}
                    >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                </Select>
                </FormControl>
               </TableRow>
               <TableRow>
                   <TableCell><InputLabel>Select Language:</InputLabel></TableCell>
                <FormControl  style={{ maxWidth: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={getDataLanguage}
                    value={language}
                    >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Hindi">Hindi</MenuItem>
                </Select>
                </FormControl>
               </TableRow>
               <TableRow>
                   <TableCell colSpan={2}>
                       <CommonButton data-testid="condidateDetailSubmit" title="Submit" color="primary" onClick={submitButton}/>
                   </TableCell>
               </TableRow>
           </Table>
        </div>
    );
}
export default CondidateDetail;