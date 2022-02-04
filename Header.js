import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Header(){
    return <div className='header'> 
    <div className='header_left'>
        <IconButton>
            <MenuIcon/>
        </IconButton>
        <img src='https://thumbs.dreamstime.com/b/gmail-logo-google-llc-apps-official-new-logotypes-vector-icon-email-service-developed-redesigned-version-eps-file-201198491.jpg' alt=''></img>
    </div>
    <div className='header_middle'>
        <SearchIcon/>
        <input placeholder='Search mail' type='text'></input>
    </div>
    <div className='header_right'></div>
    </div>
}

export default Header;