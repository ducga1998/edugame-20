import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { Typography, Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const HeaderStudent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const [backgroundNav , setBackground] = React.useState('white')
  const handleClose = () => {
    setAnchorEl(null)
  }
  React.useEffect(() => {
      if(window.location.pathname.includes('editVideo')) {
        setBackground('#13263b')
      }
  })
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 99999,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 16px',
        backgroundColor: backgroundNav,
        boxShadow:
          '0 1px 2px 0 rgba(255,255,255,.1), 0 2px 6px 2px rgba(60,64,67,.15)',
      }}
    >
      <div>
        <Typography variant="h6" style={{ color: '#e15a00' }}>
          EduGame
        </Typography>
      </div>
      <div>
        <NavLink
          to="/"
          style={{
            fontSize: '16px',
            color: 'black',
            textDecoration: 'none',
            padding: '16px 10px',
            marginRight: '20px',
          }}
          activeStyle={{
            borderBottom: `4px solid #e15a00`,
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/library"
          style={{
            fontSize: '16px',
            color: 'black',
            textDecoration: 'none',
            padding: '16px 10px',
            marginRight: '20px',
          }}
          activeStyle={{
            borderBottom: `4px solid #e15a00`,
          }}
        >
          Library
        </NavLink>
        <NavLink
          to="/lesson"
          style={{
            fontSize: '16px',
            color: 'black',
            textDecoration: 'none',
            padding: '16px 10px',
            marginRight: '20px',
          }}
          activeStyle={{
            borderBottom: `4px solid #e15a00`,
          }}
        >
          Lesson
        </NavLink>
        <NavLink
          to="/tracking"
          style={{
            fontSize: '16px',
            color: 'black',
            textDecoration: 'none',
            padding: '16px 10px',
            marginRight: '20px',
          }}
          activeStyle={{
            borderBottom: `4px solid #e15a00`,
          }}
        >
          Tracking
        </NavLink>
      </div>
      <div>
        {/* <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton> */}

        <div
          onClick={handleMenu}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <Avatar
            style={{
              boxShadow: '1px 3px 2px rgba(0,0,0,.1)',
            }}
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <span
            style={{
              fontSize: '14px',
              marginLeft: '10px',
            }}
          >
            Boop
          </span>
        </div>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default HeaderStudent
