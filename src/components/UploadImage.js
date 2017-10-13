import React from 'react'

const containerStyle = {
	'height': '70vh',
	'display': 'flex',
	'flexDirection': 'column',
	'justifyContent': 'center',
	'alignItems': 'center'
}

const buttonStyle = {
	'padding': '10px 25px',
	'border-radius': '25px',
	'background-color': '#303e4d',
	'color': '#fff',
	'zIndex': '0'
}

const inputStyle = {
	'width': '80%',
	'text-align': 'center',
	'margin-bottom': '10px',
	'padding': '10px',
	'border-radius': '3px',
	'border': '2px solid rgba(48, 62, 77, 0.7)',
	'zIndex': '0'
}

const successAlertActive = {
	'display': 'block',
	'position': 'absolute',
	'zIndex': '1',
	'padding': '10%',
	'borderRadius': '3px',
	'background-color': '#C5E99B',
	'color': '#fff',
	'opacity': '1',
	'transition': 'all 0.6s ease-in-out'
}

const successAlertInactive = {
	'opacity': '0'
}

export default class UploadImage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			marca: '',
			isImgModalOpen: false,
			uploadSuccess: false
		}
		this.uploadImg = this.uploadImg.bind(this)
		this.salvarMarca = this.salvarMarca.bind(this)
	}
	uploadImg(event) {
		event.preventDefault()
		if(this.state.marca === '')
			alert('Coloque o nome da marca')
		else {
			this.setState({
				isImgModalOpen: true
			})
			cloudinary.openUploadWidget({
				cloud_name: 'ziro',
				upload_preset: 'default',
				tags: [this.state.marca],
				folder: this.state.marca,
				theme: 'minimal'
			},
				result => {
					if(result === null)
						this.setState({
							marca: '',
							uploadSuccess: true
						})
					this.setState({
						isImgModalOpen: false
					})
				}
			)
		}
	}
	salvarMarca(event) {
		this.setState({
			marca: event.target.value
		})
	}
	render() {
		return (
		  <span>
		  	{this.state.isImgModalOpen ? <div className='main-container' style={containerStyle}>Loading...</div> :
		  		<div style={containerStyle}>
		  			{/*<div style={this.state.uploadSuccess ? successAlertActive : successAlertInactive}>Upload realizado com sucesso</div>*/}
		  			<img style={{ 'maxWidth': '15%' }} src='https://res.cloudinary.com/ziro/image/upload/s--1-aamUA2--/v1507872043/upload-icon_wgq6yp.png' />
		  			<input style={inputStyle} type='text' value={this.state.marca} onChange={this.salvarMarca} placeholder='Upload para qual marca?' />
		  			<a style={buttonStyle} href='#' onClick={this.uploadImg}>Iniciar upload de imagens</a>
		  		</div>
		  	}
		  </span>
		)
	}
}