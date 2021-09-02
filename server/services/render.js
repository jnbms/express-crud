
const homeRoutes = (req,res) => {
    res.render('index',{
        online:true
    })
}
const addUser = (req,res) => {
    res.render('add_user')
}
// updateUser
 

export {homeRoutes, addUser}
