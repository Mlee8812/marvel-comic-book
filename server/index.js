/* const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT||8080;


const cors = require('cors')
const crypto = require('crypto')
const axios = require('axios')
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const ts = new Date().getTime();
const privateKey = process.env.MARVEL_PRIVATE_KEY
const publicKey = process.env.MARVEL_PUBLIC_KEY


const hash = crypto.createHash('md5').update(ts+privateKey+publicKey).digest('hex')



app.listen(port, ()=>{
    console.log(`The server is running on ${port}`)

})


app.post('/', async(req, res)=>{
    const {characterName} = req.body
    const info = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${characterName}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    res.send(info.data)

})
app.post('/:characterId', async(req, res)=>{
    const {id} = req.body
    const infoId = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?id=${id}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    res.send(infoId.data)

}) */

const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;

const cors = require('cors');
const crypto = require('crypto');
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const privateKey = process.env.MARVEL_PRIVATE_KEY;
const publicKey = process.env.MARVEL_PUBLIC_KEY;

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
});

app.post('/', async (req, res) => {
    try {
        const { characterName } = req.body;
        const ts = new Date().getTime();
        const hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');
        const info = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${characterName}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        res.send(info.data);
    } catch (error) {
        res.status(500).send('Error fetching character data');
    }
});

app.post('/:characterId', async (req, res) => {
    try {
        const { characterId } = req.params;
        const ts = new Date().getTime();
        const hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');
        const infoId = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?id=${characterId}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        res.send(infoId.data);
    } catch (error) {
        res.status(500).send('Error fetching character data by ID');
    }
});
