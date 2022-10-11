import React from 'react'
import '../../resource/main.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';

export default function Sidebar() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 5,
        scale: 1,
        height: '60%',
      },
    }}
  >
    <Paper elevation={2} >
        <Box sx={{padding:'2rem'}}>
        <Typography component='h1' variant='h4' >
            펫케어 서비스 정기 구독
        </Typography>
        <span>
            매 월 추가 비용, 조건 없이 1회 서비스 이용권과
            장기간 케어 서비스 10%할인 혜택을 드립니다!<br/>
        </span>
        <Typography component='h1' variant='h4' align='right'>
                49900₩ / 월
        </Typography>
        <Fab sx={{
      position: "absolute",
      right: (theme) => theme.spacing(2)}} variant='string'>구독</Fab>
        </Box>
    </Paper>
  </Box>
  )
}
