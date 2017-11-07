import React from 'react'
import { Image } from 'cloudinary-react'
import { inputStyle } from './styles/styles'

export default (props) => (
  <div>
		<Image
			style={{
				margin: '0 auto 10px'
			}}
			cloudName='ziro'
			width='80' 
			publicId='bot-icon_mql5c1'
    	version='1508723946'
    	format='png'
    	secure='true'	
		/>
		<h1 style={{color: '#303e4d'}}>Bot</h1>
		<p style={{textAlign: 'center'}}>Adicione ou remova uma marca da lista. Para cada marca, o Bot irá baixar um total de&nbsp;
			<input 
				className='input-number-of-photos'
				style={inputStyle}
				type='text'
				value={props.numberOfImagesToDownload}
				onChange={props.updateNumberOfImagesToDownload}
			/> foto(s)
		</p>
	</div>
)
