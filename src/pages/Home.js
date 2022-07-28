import React, { useState, useRef  } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
  FormGroup,
  MenuItem ,
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ElementsBoard from "./ElementsBoard"


const Home = (props) => {



  const dataTypeList = ["SQL", "JSON", "CSV", "EXCEL(.xls)"]

  const [dataType, setDataType] = useState('');

  const handleChangeDataType = (event) => {
    setDataType(event.target.value);
  };


  const nextId = useRef(4);
  const [item, setItem] = useState([
    {
      id: 1,
      value: "Id"
    },
    {
      id: 2,
      value: "Name"
    },
    {
      id: 3,
      value: "Age"
    }
  ])

  const onRemove = id => {
    setItem(item.filter(i => i.id !== id));
  };

  const add = () => {
    const nextItem = {
      id: nextId.current
    };
    setItem(item.concat(nextItem));
    nextId.current += 1;
  }

  return (
    <div>
    <FormControl>
      <ElementsBoard item={item} onRemove={onRemove}/>
      <Button onClick={add}>Add Column</Button>
      <TextField select label="Datatype" variant="outlined" value={dataType} onChange={handleChangeDataType} required>
                {dataTypeList.map(list => <MenuItem key={list} value={list}>{list}</MenuItem>)}
      </TextField>
      <TextField name="dataSize" label="DataSize(1~5000)" variant="outlined" type="number" required defaultValue="100" InputProps={{ inputProps: { min: 1, max: 5000 } }}/>
      <Button type="submit" fullWidth>Generate Data</Button>
    </FormControl>
    </div>
  );
};

export default Home;