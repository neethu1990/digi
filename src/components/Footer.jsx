import React from 'react'
import { Navbar } from 'react-bootstrap'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div >

       <Navbar expand="lg" className="bg-dark" >
        <div style={{margin:'auto'}}>
        <a href="http://www.linkedin.com/in/neethu-sunder-25231b90"><LinkedInIcon/></a>
        <a href="https://github.com/neethu1990"><GitHubIcon /></a>
        <a href="http://mailto:neethusunder18@gmail.com"><EmailIcon /></a><br />
        <p> &copy; 2023. All Rights Reserved.</p>
        </div>
      </Navbar>
    </div>
  )
}

export default Footer