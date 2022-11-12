export abstract class Exception extends Error {
	status = 500
	cause = "GENERIC-ERROR"
	report :unknown = {}

	constructor(cause?: string) {
		super(cause)
		this.cause = cause ?? this.cause
	}
}


export class ParsingException extends Exception {
	status = 400
	cause = "PARSING-ERROR"

	constructor(cause?: string) {
		super(cause)
		this.cause = cause ?? this.cause
	}
}

export class HandlingException extends Exception {
	status = 500
	cause = "HANDLING-ERROR"

	constructor(cause?: string) {
		super(cause)
		this.cause = cause ?? this.cause
	}
}

export class LoggingException extends Exception {
	status = 502
	cause = "LOGGING-ERROR"

	constructor(cause?: string) {
		super(cause)
		this.cause = cause ?? this.cause
	}

}