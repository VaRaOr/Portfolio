import React from 'react'
import '../styles/Main.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
function Main() {
  return (
    <div className='MainContainer'>
      <div className='text'>
        <h1>Ortiña Valentin</h1>
        <h3>Desarrolador Full-stack MERN & Mobile Apps</h3>
        <div className='buttonContainer'>
          <div className='buttonM'>
            <LinkedInIcon />
          </div>
          <div className='buttonM'>
            <GitHubIcon />
          </div>
          <div className='buttonM'>
            <DownloadIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main