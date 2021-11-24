import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import config from './api/config/config';
import { productRoutes, categoryRoutes, sliderRoutes, userRoutes } from './api/routes';
import db from './api/models';

const port = config.server.port || 3001;

const app: Express = express();


app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/** DB CONNECT */
db.mongoose.connect(config.mongo.url)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.log("Connection error", err);
    process.exit();
});


/** Routes */
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/sliders', sliderRoutes);
app.use('/users', userRoutes);


/** Error handling */
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});



app.listen(port, () =>  {
  console.log(`Server is running ${config.server.hostname}:${port}`);
});
module.exports = app;

