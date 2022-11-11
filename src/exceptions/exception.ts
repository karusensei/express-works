export default class Exception extends Error {
	status: number
	message: string
	constructor(
		message = "Exception catched !",
		status = 500
	) {
		super(message)
		this.message = message
		this.status = status
	}
}