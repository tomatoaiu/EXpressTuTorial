const osmosis = require('osmosis');
const express = require('express')

const app = express()

app.use(express.static('public'));

app.get('/ogp', (req, res) => {
    console.log(req.query.url);
    osmosis
    .get(req.query.url)
    .set({
        ogTitle: 'meta[property="og:title"]@content',
        ogDescription: 'meta[property="og:description"]@content',
        ogUrl: 'meta[property="og:url"]@content',
        ogImage: 'meta[property="og:image"]@content',
    })
    .data(item => {
        res.send(item)
    });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
