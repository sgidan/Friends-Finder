let friendsData = require("../data/friends.js");



module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        if (err) throw err;
        // res.send(friends);
    });



    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        friends.push(req.body);
        res.json(true);
        
    });
    
};