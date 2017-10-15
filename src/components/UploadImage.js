import React from 'react'
import { Image } from 'cloudinary-react'
import Spinner from './Spinner'
import {
	containerStyle,
	buttonStyle,
	inputStyle,
	successAlertActive,
	successAlertInactive
} from './styles/styles'

const allBrands = [
  'Luzia Fazzolli',
  'Di Collani',
  'Unique Chic',
  'Nuxx',
  'Donna Ritz',
  'Blessed',
  'Innocense',
  'Ave Rara',
  'Karmani',
  'Amissima',
  'Lovlity',
  'Linny',
  'Hush',
  'Loubucca',
  'Champagne',
  'Muse'
]

export default class UploadImage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			brand: '',
			isImgModalOpen: false,
			uploadSuccess: false
		}
		this.uploadImg = this.uploadImg.bind(this)
		this.selectBrand = this.selectBrand.bind(this)
	}
	uploadImg(event) {
		event.preventDefault()
		if(this.state.brand === 'Escolha uma marca' || this.state.brand === '')
			alert('Escolha uma marca da lista')
		else {
			this.setState({
				isImgModalOpen: true
			})
			cloudinary.openUploadWidget({
				cloud_name: 'ziro',
				upload_preset: 'default',
				tags: [this.state.brand.toLowerCase()],
				theme: 'minimal'
			},
				result => {
					if(result === null)
						this.setState({
							brand: '',
							uploadSuccess: true
						})
					this.setState({
						isImgModalOpen: false
					})
				}
			)
		}
	}
	selectBrand(event) {
		this.setState({
			brand: event.target.value
		})
	}
	render() {
		return (
		  <span>
		  	{this.state.isImgModalOpen ? <div className='main-container' style={containerStyle}><Spinner /></div> :
		  		<div style={containerStyle}>
		  			{/*<div style={this.state.uploadSuccess ? successAlertActive : successAlertInactive}>Upload realizado com sucesso</div>*/}
			      <Image
			        cloudName='ziro'
			        width='80' 
			        publicId='upload-icon_wgq6yp'
			        version='1507872043'
			        format='png'
			        secure='true'
			      />
		  			<select style={inputStyle} onChange={this.selectBrand}>
		  				<option>Escolha uma marca</option>
			  			{allBrands.sort().map( (brandName, index) => {
			  				return (
			  					<option
			  						key={index}
			  						value={brandName}
			  						>{brandName}
			  					</option>
			  				)
			  			})}
		  			</select>
		  			<a style={buttonStyle} href='#' onClick={this.uploadImg}>Iniciar upload de imagens</a>
		  		</div>
		  	}
		  </span>
		)
	}
}