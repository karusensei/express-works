/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Express } from "express-serve-static-core"

declare global {
	namespace Express {
		interface Request {
			payload: any
			data: any
		}
		interface Response {
			payload: any
			data: any
		}
	}
}