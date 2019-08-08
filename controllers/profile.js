const handleProfile = (req, res, db) => {
    const {id} = req.params;
    let found = false;
    db.select('*').from('users').where({
        id: id
    })
    .then(user => {
        if(user.length){
            res.json(user[0]);
        } else {
            res.status(400).json('Not Found')
        }
        
    })
    .catch(err => res.status(400).json('Not Found'))
    // if(!found) {
    //     res.status(400).json('user cannot be found');
    // }
}

module.exports = {
    handleProfile : handleProfile
};