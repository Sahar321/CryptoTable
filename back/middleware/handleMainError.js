const handleMainError = (err, req, res, next) => {
    console.log(err);
    res.status(500).send('Internal Server Error');
    }
    
module.exports = handleMainError