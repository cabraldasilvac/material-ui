import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
//import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/*  
              <MenuIcon />
              */}
                    </IconButton>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{ fontFamily: 'Raleway', flexGrow: 1 }}
                    >
                        Gerenciamento de Projetos - Descomplica
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
