import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import carsRoutes from './routes/cars.js';
import travelApplicationsRoutes from './routes/travelApolications.js';
import reportsRoutes from './routes/reports.js';

const app =  express();

app.use(bodyParser.json( {limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded( {limit: "32mb", extended: true}));
app.use(cors());
app.use("/cars", carsRoutes);
app.use("/travelApplications", travelApplicationsRoutes)
app.use("/reports", reportsRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
