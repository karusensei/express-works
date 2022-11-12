import bodyParser from "body-parser"
import express from "express"
import morgan from "morgan"
import * as dotenv from "dotenv"
import { parseData, handleParsedData, endingProcess } from "./controllers/throw.controller"
import { errorHandler } from "./handlers/error.handler"
import { errorLogger } from "./handlers/error.logger"

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(morgan("dev"))


app.post("/", parseData, handleParsedData, endingProcess)
app.use(errorLogger, errorHandler)


app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${process.env.PORT}`)
})

app.listen()

