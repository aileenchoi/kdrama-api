const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 3000

// Kdramas
const kdramas = {   
    'goblin': {
        'title': 'goblin',
        'dateOfRelease': 'December 2, 2016',
        'genre': 'Romance, Fantasy, Drama',
        'writer': 'Kim Eun-Sook',
        'rating': 9,
        'actors': 'Gong Yoo, Kim Go-Eun',
        'numberOfEpisodes': 16,
        'website': 'Viki',
        'synopsis': 'When Kim Shin is faced with death instead of honor after fighting a mighty battle, God turns Kim Shin into a goblin instead, tasked with protecting certain people from the life of misery. But immortality is wearing on Kim Shin, and he longs to find the prophesied human bride who can set his soul free.'
    },

    'crash landing on you': {
        'title': 'crash landing on you',
        'dateOfRelease': 'December 14, 2019',
        'genre': ['Romance, Drama'],
        'writer': 'Park Ji-Eun',
        'rating': 9,
        'actors': ['Hyun Bin, Son Ye-Jin'],
        'numberOfEpisodes': 16,
        'website': 'netflix',
        'synopsis': 'The absolute top secret love story of a chaebol heiress who made an emergency landing in North Korea because of a paragliding accident and a North Korean special officer who falls in love with her and who is hiding and protecting her.'
    }, 
    
    'itaewon class': {
        'title': 'itaewon class',
        'dateOfRelease': 'January 31, 2020',
        'genre': 'Romance, Drama',
        'writer': 'Gwang Jin',
        'rating': 8.5,
        'actors': 'Park Seo-Joon, Kim Da-Mi',
        'numberOfEpisodes': 16,
        'website': 'netflix',
        'synopsis': 'In a colorful Seoul neighborhood, an ex-con and his friends fight a mighty foe to make their ambitious dreams for their street bar a reality.'
    },

    'unknown': {
        'title': 'unknown',
        'dateOfRelease': 'unknown',
        'genre': 'unknown',
        'writer': 'unknown',
        'rating': 0,
        'actors': 'unknown',
        'numberOfEpisodes': 0,
        'website': 'unknown',
        'synopsis': 'unknown'
    }
}   

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:title', (req, res)=> {
    const dramaTitle = request.params.title.toLowerCase()
    if( kdramas[dramaTitle] ){
        res.json(kdramas[dramaTitle])
    } else {
        res.json(kdramas['unknown'])
    }
})

app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
})