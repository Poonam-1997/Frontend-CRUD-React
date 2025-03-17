import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, FormControl, TextField } from '@mui/material';
import axios from 'axios';


export default function EditPage() {
  const { id } = useParams();
const navigate = useNavigate();
  const [newData, setNewdata] = useState({
    id: undefined,
    name: undefined,
    age: undefined
  });

  const editData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`)
      console.log(response)
      return response.data
    } catch (e) {
      console.log("Error : ", e)
    }
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, {
      name: newData.name,
      age: newData.age,
    })
    .then((response) => {
      if (response.status === 200) {
        navigate("/", { state: { updatedUser: response.data } });
      }
      })

  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await editData(id);
      if (data) {
        setNewdata(data); // Ensure state is updated after API response
      }
    };
    fetchData();
  }, [id]);



  const handleChange = (e) => {
    console.log(newData);
    const { name, value } = e.target;
    setNewdata({ ...newData, [name]: value });
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="id"
          variant="outlined"
          type = "number"
          fullWidth
          name="id"
          value={newData.id}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
        />
        <br />
        <TextField
          label="name"
          variant="outlined"
          fullWidth
          name="name"
          value={newData.name}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <br />
        <TextField
          label="age"
          variant="outlined"
          type = "number"
          fullWidth
          name="age"
          value={newData.age}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>


  )
}
