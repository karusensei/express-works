import Exception from "./exception"

export default class ParsingException extends Exception {
	status: number
	message: string
	type = "Parsing error"
	constructor(message: string, status = 400) {
		super(message, status)
		this.status = status
		this.message = message
	}
}