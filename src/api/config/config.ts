import * as dotenv from "dotenv";
dotenv.config({ path: './local.env' })


const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    //poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const DB_USER = process.env.DB_USER || 'superuser';
const DB_PASS = process.env.DB_PASS || 'supersecretpassword1';
const DB_HOST = process.env.DB_HOST || `localhost`;
const DB_PORT = process.env.DB_PORT || `27017`;
const DB_NAME = process.env.DB_NAME || `test`;

const MONGO = {
    host: DB_HOST,
    password: DB_PASS,
    name: DB_NAME,
    username: DB_USER,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://yasinymous:tsfamonramurat55123@cluster0.kal7p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    //url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    //url: `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,

};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};


export default config;