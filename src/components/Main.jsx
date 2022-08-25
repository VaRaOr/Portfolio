import React from 'react'
import '../styles/Main.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import cv from '../assets/CV_Ortiña_Valentin.pdf'

function Main() {
  console.log('xd');
  return (
    <div className='MainContainer'>
    <div className='glass'> 
    
      <div className='text'>
        <h1>Valentin Ortiña</h1>
        <h3 style={{color:'#08fdd8'}}>Desarrolador Full-stack MERN & Mobile Apps</h3>
        <div className='buttonContainer'>

        <a href='https://www.linkedin.com/in/valentinorti%C3%B1a1502/' target="_blank" rel="noopener noreferrer" style={{color:'black'}}>
          <div className='buttonM'>
            <LinkedInIcon />
          </div>
          </a>
          <a href='https://github.com/VaRaOr' target="_blank" rel="noopener noreferrer" style={{color:'black'}}>
          <div className='buttonM'>
            <GitHubIcon />
          </div>
          </a>
          <a href={cv} download style={{color:'black'}} >
          <div className='buttonM'>
            {/* <DownloadIcon /> */}
            <img src='https://i.imgur.com/Y2nAydb.png' alt='CV Download' style={{width:'1.5rem', height:'1.5rem'}}/> 
          </div>
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Main