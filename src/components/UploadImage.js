import React from 'react'

const containerStyle = {
	'display': 'flex',
	'flexDirection': 'column',
	'justifyContent': 'center',
	'alignItems': 'center'
}

export default class UploadImage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			marca: ''
		}
		this.uploadImg = this.uploadImg.bind(this)
		this.salvarMarca = this.salvarMarca.bind(this)
	}
	uploadImg(event) {
		event.preventDefault()
		if(this.state.marca === '')
			alert('Coloque o nome da marca')
		else {
			cloudinary.openUploadWidget({
				cloud_name: 'ziro',
				upload_preset: 'default',
				tags: [this.state.marca]
			},
				result => console.log(result)
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
		  <div style={containerStyle}>
		  	<input type='text' value={this.state.marca} onChange={this.salvarMarca} placeholder='Upload para qual marca?' />
		  	<a href='#' onClick={this.uploadImg}>Fazer upload de imagens</a>
		  </div>
		)
	}
}