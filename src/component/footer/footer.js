import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
        <Typography variant="caption" sx={{ flexGrow: 1, textAlign: 'center' }}>
        © NaxoLuc 2023
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
