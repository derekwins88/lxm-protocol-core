import express from 'express';
import { initiateProtocol, finalizeProtocol } from './controller.js';

const app = express();
app.use(express.json());

app.post('/initiate', initiateProtocol);
app.post('/finalize', finalizeProtocol);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`LXM Protocol Core running on port ${PORT}`);
});
