import express, { Request, Response} from 'express';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Monorepo');
});

app.listen(port, () => {
  console.log(`@monorepo-test/backend listening on port ${port}`);
});
