import express from 'express';
import * as soap from 'soap';
import { soap as SoapServer } from 'express-soap';
import path from 'path';
import fs from 'fs';
import ProductsRoutes from './products/routes';
import SoapServices from './soap/services';

const app = express();

app.use(express.raw({ type: () => true }));
app.set('PORT', process.env.PORT ?? 5000);

const wsdlPath = path.join(process.cwd(), 'myService.wsdl');
const wsdlFile = fs.readFileSync(wsdlPath, 'utf8');

const soapOptions = {
  path: '/soap-srv',
  services: SoapServices,
  wsdl: wsdlFile,
};

app.use('/products', ProductsRoutes);
// app.use('/soap-srv', SoapServer(soapOptions));

soap.listen(app, '/soap', SoapServices, wsdlFile, err => {
  if (err) throw err;
});

export default app;
