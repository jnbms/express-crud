// import expres from 'express'
import userdb from '../model/model.js'

const create = (req,res) => {
    if(!req.body){
        res.status(400).send({message: 'content can not be emtpy'})
        return
    }
    const user = new userdb({
        name: req.body.name,
        email: req.body.email
    })
    user
    .save(user)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"some error occurred while creating a create operation"
        })
    })
}
const find = (req,res) => {

}
const update = (req,res) => {

}
const remove = (req,res) => {

}


export {create,find,update,remove}