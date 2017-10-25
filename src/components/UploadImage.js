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

export default class UploadImage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			brand: '',
			isImgModalOpen: false,
			uploadSuccess: false,
			defaultOption: 'Escolha uma marca...',
			uploadMsg: ''
		}
		this.uploadImg = this.uploadImg.bind(this)
		this.selectBrand = this.selectBrand.bind(this)
		this.userUploadError = this.userUploadError.bind(this)
		this.userUploadSuccess = this.userUploadSuccess.bind(this)
	}
	uploadImg(event) {
		event.preventDefault() //prevents navigating to #
		if(this.state.brand === 'Escolha uma marca...' || this.state.brand === '')
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
		this.forceUpdate()
		this.setState({
			brand: event.target.value,
			defaultOption: 'Escolha uma marca...'
		})
	}
	render() {
		return (
		  <span>
		  	{this.state.isImgModalOpen ? <div className='main-container' style={containerStyle}><Spinner /></div> :
		  		<div style={containerStyle}>
		  			<Image
			      	style={{marginBottom: '10px'}}
			        cloudName='ziro'
			        width='80'
			        publicId='cloud-icon_vo0ruo'
			        version='1508723944'
			        format='png'
			        secure='true'
			      />
			      <h1 style={{color: '#303e4d'}}>Upload</h1>
			      <p style={{textAlign: 'center', marginBottom: '40px'}}>Escolha uma marca da lista e faça o upload usando imagens salvas em seu dispositivo</p>
		  			<select style={inputStyle} onChange={this.selectBrand}>
		  				<option>{this.state.defaultOption}</option>
			  			{this.props.allBrandNames ? 
			  				this.props.allBrandNames.map( (brandName, index) => {
				  				return (
				  					<option
				  						key={index}
				  						value={brandName}
				  						>{brandName}
				  					</option>
				  				)
			  				})
			  			:
			  				null
			  			}
		  			</select>
		  			<a style={buttonStyle} href='#' onClick={this.uploadImg}>Iniciar upload</a>
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