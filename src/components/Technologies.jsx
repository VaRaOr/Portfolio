import React from 'react'
import '../styles/technologies.css'
import tec from '../JSON/tec.json'

function Technologies() {
    return (
        <div className='tecContainer'>
            <h2 id='about'>Tecnologías</h2>
            <div className='divTech'>
                {tec.map(item =>
                    <div className='divImagesTech' key={item.id}>
                        <img className='imgTech' alt={item.name} src={item.img} />
                        <p>{item.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Technologies