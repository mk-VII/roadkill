import User from '../model/User';

exports.create = function(req, res) {
    var profile = new User({
        //populate fields...
    });

    profile.save();

    res.redirect(301, '/');
}

exports.getUser = function(req, res) {
    res.render('newuser', { title: 'roadKill - New User'});
}