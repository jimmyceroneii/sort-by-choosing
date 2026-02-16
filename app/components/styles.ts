export const styles: Record<string, React.CSSProperties> = {
	cardContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},

	card: {
		padding: '50px',
		border: '2px solid black',
		margin: '10px',
		borderRadius: '5px',
		height: '250px',
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},

	choiceButton: {
		backgroundColor: 'white',
		padding: '10px',
	},

	choiceText: {
		fontSize: '20px',
	},

	inputContainer: {
		padding: '50px',
		maxWidth: '600px',
		margin: '0 auto',
		textAlign: 'center',
	},

	textarea: {
		width: '100%',
		height: '150px',
		padding: '10px',
		fontSize: '16px',
		marginBottom: '20px',
		border: '2px solid black',
		borderRadius: '5px',
	},

	submitButton: {
		backgroundColor: 'black',
		color: 'white',
		padding: '15px 30px',
		fontSize: '18px',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
	},

	error: {
		color: 'red',
		marginBottom: '10px',
	},
}