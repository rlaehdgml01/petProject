import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Login() {
  return (
    <Container component="main" maxWidth="sm">
        <Typography component="h1" variant="h4">
          로그인
        </Typography><br/>
        <TextField label="Email 주소" required fullWidth name='email' autoComplete='email'/>
        <TextField label="Password" type="password" required fullWidth name='password' autoComplete='current-password' margin='normal'/>
        <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="로그인 정보 기억하기"/>
        <Button type='submit' variant='outlined' fullWidth>로그인</Button>
        <Grid container sx={{mt:2}}>
          <Grid item xs>
            <Link>비밀번호를 잊으셨나요?</Link>
          </Grid>
          <Grid item>
            <Link href='./register'>아이디가 없으신가요? 지금 가입하세요!!</Link>
          </Grid>  
        </Grid>
    </Container>
  )
}
