export const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'karla',
	fontSize: '14px'
}

export const buttonStyle = {
	fontSize: '13px',
	padding: '8px 20px',
	borderRadius: '25px',
	backgroundColor: '#303e4d',
	color: '#fff',
	zIndex: '0',
	boxShadow: '0px 2px 6px 1px rgba(0,0,0,0.1), 0px 2px 6px 1px rgba(0,0,0,0.1)'
}

export const inputStyle = {
	WebkitAppearance: 'none',
	fontSize: '12px',
	width: '200px',
	textAlign: 'center',
	textAlignLast: 'center',
	margin: '0 0 8px 0',
	padding: '6px',
	borderRadius: '2px',
	border: '1px solid rgba(48, 62, 77, 0.9)',
	zIndex: '0',
	backgroundColor: '#fff',
	color: 'rgba(48, 62, 77, 0.75)',
	boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.1)'
}

export const overlayAlertDialog = {
	pointerEvents: 'none', //makes the elements below this div clickable
	display: 'flex',
	justifyContent: 'center',
	position: 'absolute',
	top: '0',
	width: '100%',
	height: '100%',
	backgroundColor: 'rgba(0,0,0,0.4)',
	zIndex: '1',
	opacity: '0',
	transition: 'all 0.6s ease',
}

export const uploadAlertDialog = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'absolute',
	top: '35%',
	zIndex: '1',
	padding: '30px',
  borderRadius: '3px',
	backgroundColor: '#FFF',
	color: '#303E4D',
	fontSize: '18px',
	fontWeight: '600',
	textAlign: 'center',
	transition: 'all 0.6s ease-in-out',
	boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.1), 0px 2px 6px 0px rgba(0,0,0,0.1)'
}
