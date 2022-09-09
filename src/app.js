import express, {} from 'express'
import { router } from './routes/routes.js'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import 'dotenv/config'

try {
  
    const app = express()
  
    // Helmet helps you secure your Express apps by setting various HTTP headers
    app.use(helmet())
  
    // Body parser for post request
    app.use(bodyParser.json())
  
    // Register routes.
    app.use('/', router)
  
    // Listen on PORT
    app.listen(process.env.PORT, function () {
      console.log(`App listening on port ${process.env.PORT}!`)
      if (process.env.NODE_ENV === 'production') {
        console.log('App is running in production mode')
      } else {
        console.log('App is running in development mode')
      }
    })
  
    // Error handler.
    app.use(function (err, req, res, next) {
      if (process.env.NODE_ENV === 'production') {
        return res
          .status(err.status)
          .json({
            status: err.status,
            message: err.message
          })
      }
  
      return res
        .status(err.status)
        .json({
          status: err.status,
          message: err.message,
          cause: err.cause
            ? {
                status: err.cause.status,
                message: err.cause.message,
                stack: err.cause.stack
              }
            : null,
          stack: err.stack
        })
    })
  } catch (error) {
    console.error(error)
    process.exitCode = 1
  }