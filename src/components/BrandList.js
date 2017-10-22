import React from 'react'
import { Image } from 'cloudinary-react'

export default (props) => (
 	<ul>
 		{props.igAccounts.map( (account, index) => {
 			return (
 				<li
 					key={index}
 					style={{
 						display: 'flex',
 						justifyContent: 'space-between',
 						alignItems: 'center'
 					}}>
 						/{account}
 						<Image
 							style={{
 								marginLeft: '80px'
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
