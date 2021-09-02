import axios from 'axios'

const homeRoutes = (req,res) => {
    axios.get("http://localhost:3000/api/users/")
        .then(function(response){
            res.render('index',{users:response.data})
            console.log(response.data)
        })
        .catch(err => {
            res.send(err)
        })
}
const addUser = (req,res) => {
    res.render('add_user')
}
// updateUser
 

export {homeRoutes, addUser}
