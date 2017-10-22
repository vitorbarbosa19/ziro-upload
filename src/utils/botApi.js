import React from 'react'
import axios from 'axios'

export default {
	fetchImages: (igAccountNames, numberOfImages) => {
		return axios.all( igAccountNames.map( (accountName) => {
			return axios.get(`https://zirobot.now.sh/?quantity=${numberOfImages}&account_name=${accountName}`)
				.then( (response) => {
					if(response.status === 200) {
						return response.data
					}
				})
				.catch( (error) => {
					console.log(error)
				})
		}))
	},
}