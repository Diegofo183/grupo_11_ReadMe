module.exports = ( req , res , next ) => { req.session.user? res.redirect('/') : next()}
