import React from 'react'
import axios from 'axios'

export default {
	allBrandNamesAndAccounts: () => {
		return axios.get('https://zirodata.now.sh?type=fornecedores')
	}
}
