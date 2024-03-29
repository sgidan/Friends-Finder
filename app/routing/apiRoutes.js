let friendsData = require("../data/friends.js");



module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });



    app.post("/api/friends", function (req, res) {
        console.log("----------what is-----", JSON.stringify(req.body));

        console.log(req.body['scores[]']);
    


        let userAns = req.body['scores[]'];
        let bestIndex = 0;

        friendsData.forEach(function (afriend, index) {
            let totalDiff = 0;
            let currentDiff = Number.MAX_SAFE_INTEGER;

            for (i = 0; i < userAns.length; i++) {
                let friendsScore = afriend.scores[i];
                let userScore = userAns[i];

                totalDiff += Math.abs(friendsScore - userScore);
            }

            if (totalDiff < currentDiff) {
                currentDiff = totalDiff;
                bestIndex = index;
               
            }
        });
        friendsData.push(req.body);
        res.json(friendsData[bestIndex]);
    });

}




