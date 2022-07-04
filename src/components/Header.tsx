import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  SxProps,
  Theme,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

type HeaderMenuItem = {
  name: string
  path: string
}

type HeaderProps = {
  title: string
  titlePath: string
  menuItems: HeaderMenuItem[]
}

/**
 * A header component showing
 * Code inspired from the Material UI example "App bar with responsive menu":
 * https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu
 */
const Header = (props: HeaderProps) => {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  /**
   * Writing the title in the header, with link to titlePath.
   * @param titleProps props to modify the look and style of the title
   * @returns a title element
   */
  const Title = (titleProps: {
    sx?: SxProps<Theme> // provide additional sx-props to underlying Typography
    size: 'large' | 'medium' // if the Typography should use variant "h6" or "h5"
  }) => {
    const defaultSx = {
      mr: 2,
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }
    return (
      <Typography
        variant={titleProps.size === 'large' ? 'h6' : 'h5'}
        noWrap
        component={Link}
        to={props.titlePath}
        sx={{ ...defaultSx, ...titleProps.sx }}
      >
        {props.title}
      </Typography>
    )
  }

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Title size="large" sx={{ display: { xs: 'none', md: 'flex' } }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {props.menuItems.map(menuItem => (
                <MenuItem
                  key={menuItem.name}
                  onClick={() => {
                    handleCloseNavMenu()
                    navigate(menuItem.path)
                  }}
                >
                  <Typography textAlign="center">{menuItem.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
          <Title
            size="medium"
            sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}
          />
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {props.menuItems.map(menuItem => (
              <Button
                key={menuItem.name}
                onClick={() => navigate(menuItem.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {menuItem.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
