import { Request, Response, NextFunction } from "express"
import Exception from "../exceptions/exception"



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Exception, req: Request, res: Response, _next: NextFunction) {
	try {
		res.status(err.status).json(err.message ?? "Reported to elastic")
	} catch (error) {
		res.status(err.status).json((error as Exception).message)
	}
}
