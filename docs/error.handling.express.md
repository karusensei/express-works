## Gestion des erreurs sur Express
```typescript
// main.ts
...
app.post("/", parseData, handleParsedData, endingProcess)
app.use(errorLogger, errorHandler)
...
```

### 2 Étapes

# Étape 1 - Logging de l'erreur

```typescript
// handlers/error.logger.ts
...
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

...
```


# Étape Finale - Renvoi de la réponse au client

```typescript
export function errorHandler(err: Exception, req: Request, res: Response) {
	res.status(err.status ?? 500)
	res.json(err ?? "ERROR-HANDLER => DEFAULT MESSAGE")
}
```