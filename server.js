import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('hi')
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));