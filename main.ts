import app from './app'
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";

function main() {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput)); 

  app.listen(3000, 'localhost', () => {
    console.log('Server running at port 3000')
  })
}

main()