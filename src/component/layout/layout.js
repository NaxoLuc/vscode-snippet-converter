import React from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'
import { NavigationDrawer } from '../navigation-drawer/navigation-drawer';
import Box from '@mui/material/Box';

export const Layout = ({child}) => {
    const [isOpen, setIsOpen] = React.useState(true);
  return (
    <Box sx={{ display: 'flex' }}>
    <Header setIsOpen={setIsOpen} />
      <NavigationDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        {child}
      <Footer />
    </Box>
  );
}
