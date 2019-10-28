exports.getIndex = (req, res, next) => {
    console.log('Index page');
    res.json({
        message: "YEAH"
    })
}

