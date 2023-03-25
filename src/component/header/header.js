import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

export const Header = ({ setIsOpen }) => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    VS Code Snippets Converter
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
