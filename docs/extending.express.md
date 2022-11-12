## Extension des objets express (Request, Response)

### Fichiers :

	{projectRoot}/@types/express.d.ts
```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Express } from "express-serve-static-core"

declare global {
	namespace Express {
		interface Request {
			payload: any	// Nouvelle propriété
			data: any		// Nouvelle propriété
		}
		interface Response {
			payload: any	// Nouvelle propriété
			data: any		// Nouvelle propriété
		}
	}
}
```
---
	{projectRoot}/tsconfig.json
```typescript
{
	"compilerOptions": {
		"target": "ES2022",
		"module": "CommonJS",
		"declaration": true,
		"outDir": "./dist",
		"rootDir": "./src",
		"strict": true,
		"noImplicitAny": true,
		"preserveConstEnums": true,
		"sourceMap": true,
		"esModuleInterop": true,
		"skipLibCheck": true,
		"downlevelIteration": true,
		"forceConsistentCasingInFileNames": true,
		"typeRoots": [
			"./node_modules/@types",
			"./@types"
		]
	},
	"ts-node": {
		"files": true
	},
	"include": [
		"./@types",
		"./src"
	]
}
```
---

Il est désormais possible d'appeler :
 * `Express.Request.payload`
 * `Express.Request.data`
 * `Express.Response.payload`
 * `Express.Response.data`