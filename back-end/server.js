const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');
// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
    id: String,
    name: String,
    Position: String,
    Team: String,
  /*  Stat: integer,*/
    image: String,
});
const rosterSchema = new mongoose.Schema({
    id: String,
    name: String,
    Position: String,
    Team: String,
    image: String,
})
const Roster = mongoose.model('Roster', rosterSchema);

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);


// connect to the database
mongoose.connect('mongodb://localhost:27017/football', {
  useNewUrlParser: true
});

// Create a new item in the league: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
    const item = new Item({
    name: req.body.name,
    Position: req.body.Position,
    Team: req.body.Team,
    Stat: req.body.Stat,
    image: 'logo.png',
  });
    try {
      console.log("in items post")
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
// app.post('/api/roster', async (req, res) => {
//     const roster = new Roster({
//         id: req.body.id,
//         players: [],
//     });
//     try {
//         await roster.save();
//         res.send(roster);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// });
app.post('/api/teamroster', async (req, res) => {
        const player = new Roster({
            name: req.body.name,
            Position: req.body.Position,
            Team: req.body.Team,
            Stat: req.body.Stat,
            image: 'logo.png',
        });
    try {
        console.log("in roster post")
        await player.save();
        res.send(player);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/items', async (req, res) => {
    try {
        let items = await Item.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
app.get('/api/roster', async (req, res) => {
    try {
        let items = await Roster.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
app.delete('/api/items/:id', async (req, res) => {
    try {
        await Item.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
app.delete('/api/roster/:id', async (req, res) => {
    try {
        await Roster.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//app.put('/api/items', async (req, res) => {
//    const item = new Product({
//        name: "testing"
//    });
//    try {
//        await item.save();
//        res.send(item);
//    } catch (error) {
//        console.log(error);
//        res.sendStatus(500);
//    }
//});
app.put('/api/items/:id', async (req, res) => {
    try {
        console.log("in edit");
        let item = await Item.findOne({
            _id: req.params.id,
        });
        item.name = req.body.name;
        item.save();
        console.log(item);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});



app.listen(3000, () => console.log('Server listening on port 3000!'));
