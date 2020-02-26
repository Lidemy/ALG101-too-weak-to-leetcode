import React from 'react'
import logo from './logo.png'

export default ({ children }) => (
  <div style={{
  	width: '80%'
  }}>
    {children}
    <div
    	style={{
    		position: 'absolute',
    		bottom: '20px',
    		left: '50%',
    		transform: 'translateX(-50%)',
    		fontSize: '18px',
    		display: 'flex',
    		alignItems: 'center'
    	}}>
    	<img src={logo} alt='logo' style={{
    		width: '20px',
    		height: '20px',
    	}}></img>
    	<p style={{
    		display: 'inline-block',
    		marginLeft: '10px'
    	}}>Lidemy</p>
    </div>
  </div>
)