// import expres from 'express'
import Userdb from '../model/model.js'
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
    userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Erro Occurred while retiving user information"})
    })
}
const update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: "data to update can do not be empty"})
    }
    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body,{ useFineAndModify: false})
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error Update user information"})

        })
}
const remove = (req,res) => {
    const id = req.params.id
    Userdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message:"User was deleted successfully"
                })
            }
        })
        .catch(err=>{
            res.satus(500).send({
                message: 'could not delete User with id = ' + id 
            })
        })
}


export {create,find,update,remove}