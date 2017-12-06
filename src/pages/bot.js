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
	async componentDidMount() {
		const brandsData = await axios.get('https://zirobot.herokuapp.com/accounts')
		const accountsToScrape = brandsData.data.values.splice(1, brandsData.data.values.length).map( (row) => {
			return row[1]
		})
		//const test = ["limonemodas", "averarafashion", "talguistore", "luziafazzollioficial", "coinageoficial", "doceflorsp", "kessesoficial", "nuxxoficial", "amissimaoficial", "uniquechicoficial", "morinafashion", "donnaritzoficial", "karmanioficial"]
		//const test = ["limonemodas"]
		const test = ["limonemodas", "averarafashion", "talguistore", "luziafazzollioficial", "coinageoficial"]
		const images = await Promise.all(test.map( async (igAccount) => {
			return await axios.get(`https://zirobot.herokuapp.com/scrape?account=${igAccount}`)
		}))
		console.log(images)
	}
	render() {
		return (
			<div style={containerStyle}>		
				<UserInfo 
					numberOfImagesToDownload={4}
					updateNumberOfImagesToDownload={this.updateNumberOfImagesToDownload}
				/>
			</div>
		)
	}
}
