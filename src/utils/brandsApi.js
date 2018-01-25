import React from 'react'
import axios from 'axios'

export default {
	allBrandNamesAndAccounts: () => {
		return axios.get('https://ziro-data.now.sh?type=fornecedores')
	}
}
