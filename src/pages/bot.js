import React from 'react'
import axios from 'axios'
import { Image } from 'cloudinary-react'
import botApi from '../utils/botApi'
import InputNewBrand from '../components/InputNewBrand'
import BrandList from '../components/BrandList'
import { containerStyle, inputStyle } from '../components/styles/styles'

export default class Bot extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			igAccounts: null,
			newAccountName: '',
			numberOfImagesToDownload: 5,
			igImages: null,
			downloadImages: true,
			loading: false
		}
		this.newAccount = this.newAccount.bind(this)
		this.saveNewAccount = this.saveNewAccount.bind(this)
		this.removeAccount = this.removeAccount.bind(this)
		this.updateNumberOfImagesToDownload = this.updateNumberOfImagesToDownload.bind(this)
		this.fetchIgImages = this.fetchIgImages.bind(this)
	}
	componentDidMount() {
		this.setState({
			igAccounts: this.props.allBrandAccounts
		})
	}
	newAccount(event) {
		this.setState({
			newAccountName: event.target.value
		})
	}
	saveNewAccount() {
		this.setState( (prevState) => {
			igAccounts: prevState.igAccounts.splice(0, 0, this.state.newAccountName)
		})
	}
	removeAccount(accountName) {
		this.setState( (prevState) => {
			igAccounts: prevState.igAccounts.splice(prevState.igAccounts.indexOf(accountName), 1)
		})
	}
	updateNumberOfImagesToDownload(event) {
		this.setState({
			numberOfImagesToDownload: event.target.value
		})
	}
	componentDidUpdate() {
		if(this.state.downloadImages) {
			const imagesUrls = document.getElementsByClassName('autoClick')
			Array.prototype.map.call(imagesUrls, (imageUrl) => {
				imageUrl.click() //force a click on the <a> tag so that the download triggers
			})
			this.setState({
				downloadImages: false
			})
		}
	}
	fetchIgImages(accountName) {
		this.setState({
			loading: true
		})
		botApi.fetchImagesOneAccount(accountName, this.state.numberOfImagesToDownload)
			.then( (response) => {
				console.log(response.data)
				this.setState({
					igImages: response.data,
					downloadImages: true,
					loading: false
				})
			})
			.catch( (error) => {
				console.log(error)
				alert(error)
			})
	}
	render() {
		return (
			<div style={containerStyle}>
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
				{this.state.igImages ?
					this.state.igImages.map( (image, index) => {
						return (
							<a 
								className='autoClick'
								style={{ visibility: 'hidden' }}
								key={index}
								href={image}
								download={`${image}-${index}.jpg`}> {/*this property 'forces' the download of the image whose link is in the href property when the <a> tag is clicked */}
							</a>
						)
					})
				:
					null
				}
				<h1 style={{color: '#303e4d'}}>Bot</h1>
				<p style={{textAlign: 'center'}}>Adicione ou remova uma marca da lista. Para cada marca, o Bot irá baixar um total de&nbsp;
					<input 
						className='input-number-of-photos'
						style={inputStyle}
						type='text'
						value={this.state.numberOfImagesToDownload}
						onChange={this.updateNumberOfImagesToDownload}
					/> foto(s)
				</p>
				<InputNewBrand 
					newAccountName={this.state.newAccountName} 
					saveNewAccount={this.saveNewAccount} 
					newAccount={this.newAccount}
				/>
				<BrandList 
					igAccounts={this.state.igAccounts} 
					removeAccount={this.removeAccount}
					fetchIgImages={this.fetchIgImages}
					loading={this.state.loading}
				/>
			</div>
		)
	}
}
