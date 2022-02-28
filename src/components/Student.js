import * as React from 'react';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import { Container,Paper,Button } from '@mui/material';
import { useState,useEffect } from 'react';
export default function Student() 
{
    const paperStyle ={padding:'50px 20px',width:600,margin:"20px auto"}
    const[name,setName] = useState('');
    const[address,setAddress] = useState('');
    const[students,setStudent]=useState([])
    const handleClick=(e)=>{
        e.preventDefault()
        const student  = {name,address}
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
    }).then(()=>{
        console.log("new student added")})}
useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setStudent(result);
    }
)
},[])
  return (
      <Container>
          <Paper elivation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><ul>Add Student</ul></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Student name" variant="outlined"  value={name} onChange={(e)=>setName(e.target.value)}/>
        <TextField id="outlined-basic" label="Student address" variant="outlined" value={address} onChange={(e)=>setAddress(e.target.value)}/>
        <Button variant="text" color="secondary" onClick={handleClick}>Submit</Button>
    </Box>
    </Paper>
    <h1>Students</h1>
    <Paper elevation={3} style={paperStyle}>
      {students.map(student=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
              Id:{student.id}<br/>
              Name:{student.name}<br/>
              Address:{student.address}
               </Paper>
      ))}
    </Paper>
    </Container>
  );
}
