import React from 'react'
import axios from 'axios'
import {
	containerStyle,
	buttonStyle
} from './styles/styles'

export default class IgBot extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			igImages: null
		}
		this.fetchIgImages = this.fetchIgImages.bind(this)
	}
	fetchIgImages(event) {
		event.preventDefault() //prevents navigation to #
		axios.get(`https://zirobot.now.sh/?quantity=${4}&account_name=${'luziafazzollioficial'}`)
			.then( (response) => {
				console.log(response.data)
				this.setState({
					igImages: response.data
				})
			})
			.catch( (error) => {
				console.log(error)
			})
	}
	componentDidUpdate() {
		const imagesUrls = document.getElementsByClassName('autoClick')
		Array.prototype.map.call(imagesUrls, (imageUrl) => {
			imageUrl.click() //force a click on the <a> tag so that the download triggers
		})
	}
	render() {
		return (
			<div style={containerStyle}>
				<a 
					style={buttonStyle} 
					href='#'
					onClick={this.fetchIgImages}>
						Iniciar bot
				</a>
				{this.state.igImages ?
					this.state.igImages.map( (image, index) => (
						<a 
							className='autoClick'
							style={{ visibility: 'hidden' }}
							key={index}
							href={image}
							download={`ziromoda-${index}`}> {/*this property 'forces' the download of the image whose link is in the href property when the <a> tag is clicked */}
						</a>
					))
				:
					null
				}
			</div>
		)
	}
}