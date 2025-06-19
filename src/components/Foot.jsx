import React from 'react'
import './Top.css'

export default function Foot() {
  return (
    <div className="foot">
        <div class="foot1">
          <h1>Waves Studio</h1>
          <h3>This website is still under construction, check back later for more content!</h3>
        </div>
        <div class="foot2">
          <a href="https://www.instagram.com/we.are.waves.studio/" target="_blank" className='foota'><p>Instagram</p></a>
          <p>・</p>
          <a href="https://discord.gg/QxWjN7BV65" target="_blank" className='foota'><p>Discord</p></a>
          <p>・</p>
          <a href="https://www.youtube.com/@thewavesstudio" target="_blank" className='foota'><p>Youtube</p></a>
        </div>
        <div class="foot3">
          <p>© 2025 Waves Studio, All rights reserved</p>
          
        </div>
    </div>
  )
}