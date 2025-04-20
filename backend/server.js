import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRoutes from './routes/userRoutes.js';
import {sessionMiddleware , initializePassport} from './config/sessionConfig.js'
import credentialsRoutes from './routes/credentialsRoutes.js';
import accountRoutes  from './routes/accountRoutes.js';
import userManagerRoutes from './routes/userManagerRoutes.js';

dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(sessionMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/public", express.static("public"));
initializePassport(app);

const port = process.env.PORT;
const url = process.env.URL;


app.use('/users',usersRoutes);
app.use('/generate', credentialsRoutes);
app.use('/accounts', accountRoutes);
app.use('/manageUsers', userManagerRoutes);

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON : ${url}`);
    
})