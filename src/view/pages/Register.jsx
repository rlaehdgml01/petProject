import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Register() {
  return (<>
    <Container maxWidth="sm">
        <Typography component="h1" variant='h4'>
            회원가입
        </Typography>
    <form>
      <table>
        
        <tr>
          <td>
            <TextField label="이메일" required fullWidth name='email'/>
          </td>
        </tr>
        <tr>
          <td>
            <TextField label="비밀번호" required fullWidth name='password'/>
          </td>
        </tr>
        <tr>
          <td>
            <TextField label="비밀번호 확인" required fullWidth/>
          </td>
        </tr>
        <tr>
          <td>    
            <TextField label="닉네임" required fullWidth/>
            <Button variant='outlined' sx={{mt:1}}>닉네임 중복 검사</Button>
          </td>
        </tr>
        <tr>
          <td>
            <TextField label="주소" fullWidth/>
            <Button variant='outlined' sx={{mt:1, alignItems:'right'}}>주소 찾아보기</Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button variant='contained' fullWidth>가입하기</Button>
          </td>
        </tr>

      </table>
    </form>
    </Container>
  </>)
}
