import express from 'express'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import storyRouter from './src/routes/storyRouter.js'
import commentRouter from './src/routes/commentRouter.js'


const app = express();

const PORT = 4000;

app.use(express.json());
app.use(cors());
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use('/api/stories', storyRouter)
app.use('/api/comments', commentRouter)


  // app.use(express.static(path.join(__dirname, '../../client/dist')));
  // app.use('*', (req, res) => {
  //   res.sendFile('index.html', { root: path.join(__dirname, '../../client/dist') });
  // });

app.use('*', (req, res) => res.status(404).json({message: '404: Page Not Found'}));


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});