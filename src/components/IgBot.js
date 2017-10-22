import React from 'react'
import axios from 'axios'
import { buttonStyle } from './styles/styles'
import botApi from '../utils/botApi'

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
		botApi.fetchImages(this.props.igAccounts, this.props.numberOfImagesToDownload)
			.then( (response) => {
				console.log(response)
				this.setState({
					igImages: response
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
			<div style={{marginBottom: '70px'}}>
				<a 
					style={buttonStyle} 
					href='#'
					onClick={this.fetchIgImages}>
						Iniciar Bot
				</a>
				{this.state.igImages ?
					this.state.igImages.map( (brand) => {
						return brand.map( (image, index) => {
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
					})
				:
					null
				}
			</div>
		)
	}
}