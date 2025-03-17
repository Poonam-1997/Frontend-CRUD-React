import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import pen from "../assets/pen-solid.svg";
import trash from "../assets/trash-can-solid.svg";
import { Link, Route } from 'react-router-dom';


const iconlist = [
    {text: 'Edit', icon: pen, route: '/edit'},
    {text: 'Delete', icon: trash, route: '/Delete'},
];


export default function Tables({rows} ) {
  return (
   <TableContainer component={Paper}>
    <Table sx = {{minWidth:650}} aria-label = "simple table">
      <TableHead>
        <TableRow>
            <TableCell>
                ID
            </TableCell>
            <TableCell>
                Name
            </TableCell>
            <TableCell>
                Age
            </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
           {rows.map((row) => (
                    <TableRow key = {row.id} >

  
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.age}</TableCell>
                        <TableCell>
                           <div style = {{ display:'flex', gap:'10px'}}>
                            {iconlist.map((item,index) =>(
                              <Link key = {index} to = {`${item.route}/${row.id}`} style={{ textDecoration: 'none' }}>
                            <img  src={item.icon} alt={item.text} style = {{width: '25px',height: '25px'}}/>
                            </Link>
                        ))}
                           </div>
                        
                           </TableCell>
                    </TableRow>
           ))}
      </TableBody>



    </Table>


   </TableContainer>
  )
}
