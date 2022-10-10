import React, { useEffect } from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function PetRegister() {
    //const fetchData = () =>{
    //    fetchData(url).then();
    //}
    //useEffect(()=>{
    //    fetchData()
    //},[]);
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
      setGender(event.target.value);
    };
  return (
    <Container maxWidth="sm">
        <Typography component="h1" variant='h4'>
            반려동물 등록
        </Typography>
    <form>
        <TableStyled>
            <TrStyled><TdStyled><TextField label="이름" required fullWidth/></TdStyled></TrStyled>
            <TrStyled><TdStyled><TextField label="나이" required fullWidth/></TdStyled></TrStyled>
            <TrStyled><TdStyled><TextField label="품종" required fullWidth/></TdStyled></TrStyled>
            <TrStyled><TdStyled>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">성별</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="Gender"
                        onChange={handleChange}>
                        <MenuItem value='male'>남</MenuItem>
                        <MenuItem value='female'>여</MenuItem>
                    </Select>
                </FormControl>
                <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="중성화 유뮤" margin='normal'/>
            </TdStyled></TrStyled>
            <TrStyled><TdStyled>
                <FormControlLabel control={
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" /><PhotoCamera />
                </IconButton>
            } label="사진 업로드"/>
            </TdStyled></TrStyled>
            <TrStyled><TdStyled><TextField label="기타 참고사항" fullWidth /></TdStyled></TrStyled>
        </TableStyled>
        <Button type='submit' size='large' variant='outlined' fullWidth/*onClick={fetchData}*/>등록</Button>
    </form>
    </Container>
  )
}

const TdStyled = styled.td`
    width: 80%;
    padding: 1rem;
`
const TrStyled = styled.tr`
    padding: 1rem 0;
`
const TableStyled = styled.table`
    border: 1px solid #eee;
    margin-bottom: 2rem;
`
