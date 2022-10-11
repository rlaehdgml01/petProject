import React,{useRef} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Register() {
  /*const id = useRef();
  const password = useRef();
  const checkId = () => {
    fetch(url).then((res)=>{
      id.current.setCustomValidity("이미 있는 id 입니다.")
    })
  }*/
  return (<>
    <Container maxWidth="sm">
        <br/>
        <Typography component="h1" variant='h4'>
            회원가입
        </Typography>
    <div>
      <table>
      <tr>
          <td>
            <TextField label="이름" fullWidth name="name" type="text"/>
          </td>
        </tr>
        <tr>
          <td>
            <TextField label="연락처" fullWidth name='phoneNumber'/>
          </td>
        </tr>
        
        <tr>
          <td>
            <TextField label="이메일" fullWidth name='email'/>
          </td>
        </tr>
        <tr>
          <td>
            <TextField label="비밀번호" fullWidth name='password' />
          </td>
        </tr>
        <tr>
          <td>
            <TextField label="비밀번호 확인" fullWidth/>
          </td>
        </tr>
        <tr>
          <td>    
            <TextField label="닉네임" fullWidth name='id'/>
            <Button variant='outlined' sx={{mt:2}}>닉네임 중복 검사</Button>
          </td>
        </tr>
        <tr>
          <td>
            <TextField label="주소" fullWidth/>
            <Button variant='outlined' sx={{mt:2, alignItems:'right'}}>주소 찾아보기</Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button variant='contained' fullWidth>가입하기</Button>
          </td>
        </tr>

      </table>
    </div>
    </Container>
  </>)
}
