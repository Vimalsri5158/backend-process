import express from 'express';

import cors from 'cors';

import connectToDb from './db-utils/mongoose-connection.js';

import studentRouter from './routes/students.js';

const app = express();

    const PORT = process.env.PORT || 5000;
    await connectToDb();

    app.use(cors())
    app.use(express.json());
    
    app.use('/students', studentRouter);
    
    app.listen(PORT, () => console.log('Server is running on port', PORT));

