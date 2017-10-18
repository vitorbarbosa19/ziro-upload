import React from 'react'
import { Image } from 'cloudinary-react'
import Spinner from './Spinner'
import {
	containerStyle,
	buttonStyle,
	inputStyle,
	overlayAlertDialog,
	uploadAlertDialog
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
  'Muse',
  'Doce Flor',
  'Morina'
]

export default class UploadImage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			brand: '',
			isImgModalOpen: false,
			uploadSuccess: false,
			defaultOption: 'Escolha uma marca',
			uploadMsg: ''
		}
		this.uploadImg = this.uploadImg.bind(this)
		this.selectBrand = this.selectBrand.bind(this)
		this.userUploadError = this.userUploadError.bind(this)
		this.userUploadSuccess = this.userUploadSuccess.bind(this)
	}
	uploadImg() {
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
				theme: 'minimal',
				stylesheet: `
					#cloudinary-widget .panel {
						height: 100vh !important;
					}
					#cloudinary-navbar .source.active {
						border-bottom: 3px solid #303E4D !important;
					}
					#cloudinary-widget .button {
						font-size: 18px !important;
						border-radius: 25px !important;
						color: #FFF !important;
						background-color: #303E4D !important;
						border: 2px solid #303E4D !important;
					}
					.widget .powered_by_cloudinary {
						display: none !important;
					}
				`
			},
				(error, result) => {
					if(error) {
						this.userUploadError(error.message)
					}
					else {
						this.userUploadSuccess()
					}
				}
			)
		}
	}
	userUploadError(errorMsg) { //creating separate methods to make sure setState is called only once. Was getting console error of callback calling setState multiple times
		if(this.state.isImgModalOpen) {
			if(errorMsg === 'User closed widget') {
				this.setState({
					uploadSuccess: false,
					isImgModalOpen: false,
					defaultOption: this.state.brand,
				})				
			}
			else {
				this.setState({
					uploadSuccess: false,
					isImgModalOpen: false,
					defaultOption: this.state.brand,
					uploadMsg: 'Ocorreu um erro no upload'
				})
			}
		}
	}
	userUploadSuccess() {
		if(this.state.isImgModalOpen) {	
			this.setState({
				brand: '',
				uploadSuccess: true,
				uploadMsg: 'Upload realizado com sucesso!',
				isImgModalOpen: false
			})
			document.getElementById('text-alert-dialog').classList.add('text-alert-active')
			document.getElementById('overlay-alert-dialog').classList.add('overlay-alert-active')
			window.setTimeout( () => {
				document.getElementById('text-alert-dialog').classList.add('text-alert-inactive')
				document.getElementById('overlay-alert-dialog').classList.add('overlay-alert-inactive')
			}, 3000)
		}
	}
	selectBrand(event) {
		this.setState({
			brand: event.target.value,
			defaultOption: 'Escolha uma marca'
		})
	}
	render() {
		return (
		  <span>
		  	{this.state.isImgModalOpen ? <div className='main-container' style={containerStyle}><Spinner /></div> :
		  		<div style={containerStyle}>
			      <Image
			        cloudName='ziro'
			        width='80' 
			        publicId='upload-icon_wgq6yp'
			        version='1507872043'
			        format='png'
			        secure='true'
			      />
		  			<select style={inputStyle} onChange={this.selectBrand}>
		  				<option>{this.state.defaultOption}</option>
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
		  			<div style={overlayAlertDialog} id='overlay-alert-dialog'>
		  				<div style={uploadAlertDialog} id='text-alert-dialog'>
			  				{this.state.uploadMsg === 'Upload realizado com sucesso!' ?	
			  					<Image
										cloudName='ziro'
				        		width='40' 
				        		publicId='ok-icon_bskbxm'
						        version='1508212647'
						        format='png'
						        secure='true'	
			  					/>
			  					:
			  					<Image
										cloudName='ziro'
				        		width='40' 
				        		publicId='error-icon_dqsgnx'
						        version='1508212649'
						        format='png'
						        secure='true'	
			  					/>
			  				}
			  					{this.state.uploadMsg}
		  				</div>
		  			</div>
		  		</div>
		  	}
		  </span>
		)
	}
}