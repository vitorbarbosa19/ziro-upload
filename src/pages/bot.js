import React from 'react'
import axios from 'axios'
import botApi from '../utils/botApi'
import InputNewBrand from '../components/InputNewBrand'
import BrandList from '../components/BrandList'
import PremiumBrandList from '../components/PremiumBrandList'
import NonPremiumBrandList from '../components/NonPremiumBrandList'
import UserInfo from '../components/UserInfo'
import { containerStyle } from '../components/styles/styles'

export default class Bot extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			igPremiumAccounts: null,
			igNonPremiumAccounts: null,
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
			allIgAccounts: this.props.allBrandAccounts,
			igPremiumAccounts: this.props.onlyPremiumBrandAccounts,
			igNonPremiumAccounts: this.props.onlyNonPremiumBrandAccounts
		})
	}
	newAccount(event) {
		this.setState({
			newAccountName: event.target.value
		})
	}
	saveNewAccount() {
		this.setState( (prevState) => {
			allIgAccounts: prevState.allIgAccounts.splice(0, 0, this.state.newAccountName)
		})
	}
	removeAccount(accountName) {
		this.setState( (prevState) => {
			allIgAccounts: prevState.allIgAccounts.splice(prevState.allIgAccounts.indexOf(accountName), 1)
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
				<UserInfo 
					numberOfImagesToDownload={this.state.numberOfImagesToDownload}
					updateNumberOfImagesToDownload={this.updateNumberOfImagesToDownload}
				/>
				<PremiumBrandList
					igPremiumAccounts={this.state.igPremiumAccounts}
					removeAccount={this.removeAccount}
					fetchIgImages={this.fetchIgImages}
					loading={this.state.loading}					
				/>
				<NonPremiumBrandList
					igNonPremiumAccounts={this.state.igNonPremiumAccounts}
					removeAccount={this.removeAccount}
					fetchIgImages={this.fetchIgImages}
					loading={this.state.loading}					
				/>
				{/*<BrandList 
					allIgAccounts={this.state.allIgAccounts} 
					removeAccount={this.removeAccount}
					fetchIgImages={this.fetchIgImages}
					loading={this.state.loading}
				/>
				<InputNewBrand 
					newAccountName={this.state.newAccountName} 
					saveNewAccount={this.saveNewAccount} 
					newAccount={this.newAccount}
				/>*/}
			</div>
		)
	}
}
