var insertUser = function(db, callback, data) {
    db.collection('User').insertOne(data, function(err, result) {
        callback() //=> None bocking
    })
};

// data is array
var getAllUser = function(db, callback, data) {
    var cursor = db.collection('User').find();
    cursor.each(function(err, doc) {
        if (doc != null) {
            data.push(doc) //=> Push User info into array
        } else {
            callback()
        }
    })
};

var findUser = function(db, callback, filter, data) {
    var cursor = db.collection('User').find({ "name": filter });
    cursor.each(function(err, doc) {
        if (doc != null) {
            data.push(doc);
        } else {
            callback()
        }
    })
};

var updateUser = function(db, callback, filter, data) {
    var cursor = db.collection('User').updateOne({ "id": filter }, //=> Filter
        {
            $set: { "name": data }, //=> Update
            $currentDate: { "lastModifited": true }
        },
        function(err, results) {
            callback()
        }
    )
};

var deleteUser = function(db, callback, filter) {
    db.collection('User').deleteOne({ "id": filter },
        function(err, results) {
            callback();
        }
    )
};

//Public
exports.insertUser = insertUser;
exports.getAllUser = getAllUser;
exports.findUser = findUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;