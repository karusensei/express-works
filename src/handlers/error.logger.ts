import { Request, Response, NextFunction } from "express"
import {Exception} from "../exceptions/exception"




// Fake promise rejection
const asyncErrorEmitter = (chance: number) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if ((Math.random() * 100) > chance) {
				resolve("Logged!")
			} else {
				reject("ERROR-EMITTER => Reject")
			}
		}, 0)
	})
}



export function errorLogger(err: Exception, req: Request, res: Response, next: NextFunction) {
	asyncErrorEmitter(0).then(() => {
		console.log("ERROR-LOGGER => OK")
		err.report = "OK"
		res.status(500).json({err})
	}).catch((error) => {
		console.log("ERROR-LOGGER => ERR")
		err.report = error
		next(err)
	})
}
