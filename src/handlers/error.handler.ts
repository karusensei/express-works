import { Request, Response } from "express"
import {Exception} from "../exceptions/exception"



export function errorHandler(err: Exception, req: Request, res: Response) {
	res.status(err.status ?? 500)
	res.json(err ?? "ERROR-HANDLER => DEFAULT MESSAGE")
}
