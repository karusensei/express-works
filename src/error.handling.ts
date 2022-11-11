import { Request, Response, NextFunction } from "express"
import Exception from "./exceptions/exception"
import ParsingException from "./exceptions/parsing.exception"
import { ipv4filter } from "./filters"


const DataModel =  {
	"@timestamp" : new Date()
}

export function parseData(req: Request, res: Response, next: NextFunction) {
	try {
		const data = Object.assign( DataModel, req.body)
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		data.array = (data.array as Array<string>).filter( el => ipv4filter(el))
		res.payload = data
		next()
	} catch (error) {
		next(new ParsingException("Parsing Error", 400))
	}
}

export function handleParsedData(req: Request, res: Response, next: NextFunction) {
	try {
		next()
	} catch (error) {
		if ( ! (error instanceof Exception)) {
			next(new Exception("Handling Error", 501))
		} else {
			next(error)
		}
	}
}

export function endingProcess(req: Request, res: Response) {
	res.send(res.payload)
}




