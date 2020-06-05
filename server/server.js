const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

// const uuid = require('uuid');

const data = [
    {
        "id": "0",
        "answer": "You should be 70% done by now",
        "image": "http://localhost:8080/daniil.jpg"
    },
    {
        "id": "1",
        "answer": "Pineapple is good on pizza, fight me, question answered",
        "image": "http://localhost:8080/amy.jpg"
    },
    {
        "id": "2",
        "answer": "You are so close! You almost there! You can do this!",
        "image": "http://localhost:8080/tiffany.jpg"
    },
    {
        "id": "3",
        "answer": "Duck....Duck....GOOSE! Sorry, what was the question?",
        "image": "http://localhost:8080/anna.jpg"
    },
    {
        "id": "4",
        "answer": "Does a bear shit in the woods?",
        "image": "http://localhost:8080/ben.jpg"
    },
    {
        "id": "5",
        "answer": "England doesn't have a kidney bank, but it does have a Liverpool",
        "image": "http://localhost:8080/reece.jpg"
    },
    {
        "id": "6",
        "answer": "Bruh.....",
        "image": "http://localhost:8080/nikki-nor.jpg"
    },
    {
        "id": "7",
        "answer": "Lets pop another shrimp on the barbie?",
        "image": "http://localhost:8080/nikki-sharp.jpg"
    },
    {
        "id": "8",
        "answer": "Did you hear about the guy whose whole left side was cut off? He’s all right now",
        "image": "http://localhost:8080/josh.jpg"
    },
    {
        "id": "9",
        "answer": "I can’t believe I got fired from the calendar factory. All I did was take a day off",
        "image": "http://localhost:8080/alireza.jpg"
    },
    {
        "id": "10",
        "answer": "What do you call a bee that can’t make up its mind? A maybe",
        "image": "http://localhost:8080/asker.jpg"
    },
    {
        "id": "11",
        "answer": "I tried to sue the airline for losing my luggage. I lost my case",
        "image": "http://localhost:8080/brandon.jpg"
    },
    {
        "id": "12",
        "answer": "Jill broke her finger today, but on the other hand she was completely fine",
        "image": "http://localhost:8080/elise.jpg"
    },
    {
        "id": "13",
        "answer": "A cross-eyed teacher couldn’t control his pupils",
        "image": "http://localhost:8080/ericka.jpg"
    },
    {
        "id": "14",
        "answer": "When everything is coming your way, you're in the wrong lane",
        "image": "http://localhost:8080/frederico.jpg"
    },
    {
        "id": "15",
        "answer": "She had a photographic memory but never developed it",
        "image": "http://localhost:8080/jessica.jpg"
    },
    {
        "id": "16",
        "answer": "I wasn’t originally going to get a brain transplant, but then I changed my mind",
        "image": "http://localhost:8080/hank.jpg"
    },
    {
        "id": "17",
        "answer": "There was a kidnapping at school yesterday. Don’t worry, though - he woke up",
        "image": "http://localhost:8080/jiyo.jpg"
    },
    {
        "id": "18",
        "answer": "What washes up on tiny beaches? Microwaves",
        "image": "http://localhost:8080/kumail.jpg"
    },
    {
        "id": "19",
        "answer": "Two fish are in a tank, one says to the other 'how do you drive this thing?'",
        "image": "http://localhost:8080/paulo.jpg"
    },
    {
        "id": "20",
        "answer": "The guy who invented the door knocker got a no-bell prize",
        "image": "http://localhost:8080/quandeel.jpg"
    },
    {
        "id": "21",
        "answer": "The other day I tried to make a chemistry joke, but got no reaction",
        "image": "http://localhost:8080/raheim.jpg"
    },
    {
        "id": "22",
        "answer": "German sausage jokes are just the wurst",
        "image": "http://localhost:8080/randall.jpg"
    },
    {
        "id": "23",
        "answer": "Need an ark? I Noah guy",
        "image": "http://localhost:8080/rio.jpg"
    },
    {
        "id": "24",
        "answer": "Sleeping comes so naturally to me, I could do it with my eyes closed",
        "image": "http://localhost:8080/tarek.jpg"
    },
    {
        "id": "25",
        "answer": "I used to be indecisive; now I'm not so sure",
        "image": "http://localhost:8080/zohan.jpg"
    }

    
]




app.get('/', (req, res) => {
    res.json(data)
});




app.use(express.static('public'));

app.listen(8080, () => {
    console.log('Listening on 8080 local server yay!')

})