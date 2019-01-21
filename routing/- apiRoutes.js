//Refernced code peovided by class exerercise 16-HotResteraunt and 14-StarWars


module.exports = function (app, data) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        return res.json(data);
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        for (var i = 0; i < newFriend.scores.length; i++) {
            var string = newFriend.scores[i];
            var int = parseInt(string);
            newFriend.scores.splice(i, 1, int);
        }

        data.push(newFriend);
        res.json(newFriend);
    });
}
