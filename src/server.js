import express from 'express';
import {connectToMongo} from './mongoose';
import  hitApi  from './jobs/hitApi.redisJob';

const app = express();
connectToMongo();

app.use(hitApi);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api-1', (req, res) => {
  res.send('you hit api-1');
});
app.get('/api-2', (req, res) => {
  res.send('you hit api-2');
});
app.get('/api-3', (req, res) => {
  res.send('you hit api-3');
});


app.listen(3000, () => console.log('Server listening on port 3000!'));