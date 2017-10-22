import React from 'react'
import { allBrandAccounts } from '../utils/allBrands'
import IgBot from '../components/IgBot'
import InputNewBrand from '../components/InputNewBrand'
import BrandList from '../components/BrandList'
import { containerStyle, inputStyle } from '../components/styles/styles'

if(document.domain !== 'localhost') {
	document.domain = 'ziro.online'
	console.log(document.domain)
}

export default class Bot extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			igAccounts: null,
			newAccountName: '',
			numberOfImagesToDownload: 1
		}
		this.newAccount = this.newAccount.bind(this)
		this.saveNewAccount = this.saveNewAccount.bind(this)
		this.removeAccount = this.removeAccount.bind(this)
		this.updateNumberOfImagesToDownload = this.updateNumberOfImagesToDownload.bind(this)
	}
	componentWillMount() {
		this.setState({
			igAccounts: allBrandAccounts
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
	render() {
		return (
			<div style={containerStyle}>
				<h1>Bot</h1>
				<p style={{textAlign: 'center'}}>Confira abaixo a lista de marcas, faça as modificações necessárias e inicie o Bot</p>
				<IgBot 
					igAccounts={this.state.igAccounts}
					numberOfImagesToDownload={this.state.numberOfImagesToDownload}
				/>
				<h1>Marcas</h1>
				<p style={{width: '270px', textAlign: 'center', margin: '0 auto'}}>Para cada marca listada, o Bot irá baixar um total de&nbsp;
					<input 
						className='input-number-of-photos'
						style={inputStyle}
						type='text'
						value={this.state.numberOfImagesToDownload}
						onChange={this.updateNumberOfImagesToDownload}
					/> fotos
				</p>
				<InputNewBrand newAccountName={this.state.newAccountName} saveNewAccount={this.saveNewAccount} newAccount={this.newAccount} />
				<BrandList igAccounts={this.state.igAccounts} removeAccount={this.removeAccount} />
			</div>
		)
	}
}
