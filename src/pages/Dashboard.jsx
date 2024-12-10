import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import { Box } from '@mui/material'
import Stack from '@mui/material/Stack';



export default function Dashboard() {
  return (
    <div>
    <Stack spacing={1}>
    <Navbar />
    <Box sx={{ display: 'flex', mt: 4 }}>
       <Sidenav />
       <Box component="main" sx={{ flexGrow: 1, p: 3}}>
       <h1>Dashboard</h1>
       </Box>
    </Box>

    
    </Stack> 
    
    
   
    </div>
  )
}
