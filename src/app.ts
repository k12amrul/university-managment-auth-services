import express, { Application, urlencoded } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extends: true }))

app.get('/', (req: Request, res: any) => {
  res.send('Hello World!')
})

export default app
