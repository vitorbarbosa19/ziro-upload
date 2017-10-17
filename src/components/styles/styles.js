
export const containerStyle = {
	height: '70vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'karla',
	fontSize: '14px'
}

export const buttonStyle = {
	padding: '10px 25px',
	borderRadius: '25px',
	backgroundColor: '#303e4d',
	color: '#fff',
	zIndex: '0',
	boxShadow: '0px 2px 6px 1px rgba(0,0,0,0.1), 0px 2px 6px 1px rgba(0,0,0,0.1)'
}

export const inputStyle = {
	width: '80%',
	textAlign: 'center',
	textAlignLast: 'center',
	marginBottom: '10px',
	padding: '10px',
	borderRadius: '3px',
	border: '2px solid rgba(48, 62, 77, 0.7)',
	zIndex: '0',
	backgroundColor: '#fff',
	color: 'rgba(48, 62, 77, 0.95)',
	boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.1), 0px 2px 6px 0px rgba(0,0,0,0.1)'
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
	top: '50%',
	left: '0',
	margin: '-127px 30px 0', //half the size of the element, after including borders and padding
	zIndex: '1',
	padding: '60px 30px',
  borderRadius: '3px',
	backgroundColor: '#FFF',
	color: '#303E4D',
	fontSize: '21px',
	fontWeight: '600',
	textAlign: 'center',
	transition: 'all 0.6s ease-in-out',
	boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.1), 0px 2px 6px 0px rgba(0,0,0,0.1)'
}
