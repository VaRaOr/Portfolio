import React from 'react'
import '../styles/Main.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import DownloadIcon from '@mui/icons-material/Download';

function Main() {
  return (
    <div className='MainContainer'>
    <div className='glass'> 
    
      <div className='text'>
        <h1>Ortiña Valentin</h1>
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
          <a href='../assets/CV Ortiña Valentin.pdf' download style={{color:'black'}} >
          <div className='buttonM'>
            {/* <DownloadIcon /> */}
            <img src='https://i.imgur.com/Y2nAydb.png' alt='CV Download' style={{width:'1.5rem', height:'1.5rem'}}/> 
          </div>
          </a>
        </div>
      {/* <img src='https://i.imgur.com/C0PS6K9.gif' style={{height:'auto',  width:'3rem', borderRadius:'50%'}} /> */}
      </div>
      </div>
    </div>
  )
}

export default Main