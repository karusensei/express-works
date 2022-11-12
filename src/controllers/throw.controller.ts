import { Request, Response, NextFunction } from "express"
import { ParsingException, HandlingException } from "../exceptions/exception"
import { ipv4filter } from "../filters"


const syncErrorEmitter = (chance: number) => {
	if ((Math.random() * 100) < chance) {
		console.log("syncFakeThrownGenerator => SYNC-ERROR")
		throw new Error("SYNC-ERROR")
	}
}

const DataModel = {
	"@timestamp": new Date()
}

export function parseData(req: Request, res: Response, next: NextFunction) {
	try {
		const data = Object.assign(DataModel, req.body)
		data.array = (data.array as Array<string>).filter(el => ipv4filter(el))
		res.payload = data
		syncErrorEmitter(50)
		next()
	} catch (error) {
		next(new ParsingException())
	}
}

export function handleParsedData(req: Request, res: Response, next: NextFunction) {
	try {
		syncErrorEmitter(50)
		next()
	} catch (error) {
		next(new HandlingException())
	}
}

export function endingProcess(req: Request, res: Response) {
	res.json(res.payload)
}




