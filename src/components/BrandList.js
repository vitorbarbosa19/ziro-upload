import React from 'react'
import { Image } from 'cloudinary-react'
import Spinner from './Spinner'

export default (props) => (
 	<ul>
 		{props.igAccounts.map( (account, index) => {
 			return (
 				<li
 					key={index}
 					style={{
 						display: 'flex',
 						justifyContent: 'flex-end',
 						alignItems: 'center'
 					}}>
 						/{account}
 						{ props.loading ?
 							<Spinner
 								style={{
	 								margin: '0 0 0 80px'
	 							}}				 
 								width='14px'
 								height='14px'
 							/>
 						:
	 						<Image
	 							style={{
	 								margin: '0 0 0 80px'
	 							}}
	 							onClick={props.fetchIgImages.bind(null, account)} //this syntax lets me bind the method to the value of the account
								cloudName='ziro'
		        		width='14' 
		        		publicId='download-icon_nhqczk'
				        version='1508716258'
				        format='png'
				        secure='true'	
	 						/>
 						}
 						<Image
 							style={{
 								margin: '0 0 0 20px'
 							}}
 							onClick={props.removeAccount.bind(null, account)} //this syntax lets me bind the method to the value of the account
							cloudName='ziro'
	        		width='14' 
	        		publicId='error-icon_dqsgnx'
			        version='1508212649'
			        format='png'
			        secure='true'	
 						/>
 				</li>
 			)
 		})}
 	</ul>
)
