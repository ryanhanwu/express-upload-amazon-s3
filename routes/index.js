/*
 * GET home page.
 */

exports.index = function(req, res) {
    res.render('index', {
        title: 'Express Upload to Amazon S3 Demo'
    });
};