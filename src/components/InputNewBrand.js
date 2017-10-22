import React from 'react'
import { Image } from 'cloudinary-react'
import { inputStyle } from '../components/styles/styles'

export default (props) => (
 	<div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
	 	<input 
	 		style={inputStyle} 
	 		type='text'
	 		value={props.newAccountName}
	 		onChange={props.newAccount}
	 		placeholder='Adicionar marca...'
	 	/>
		<Image
			style={{marginBottom: '0', marginLeft: '15px'}}
			cloudName='ziro'
			width='27' 
			publicId='plus_p9anqu'
			version='1508611817'
			format='png'
			secure='true'
			onClick={props.saveNewAccount}
		/>
	</div>
)
