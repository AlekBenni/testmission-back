const {Router} = require("express")
const SmallDAta = require("../model/smallData")
const router = Router()

router.post('/', async(req, res) => {
    const newData = req.body
    try{
        await SmallDAta.create(newData, (err, data) => {
            if(err){
                res.status(500).send({message:"Bad Request"})
            }else{
                res.status(200).send(data)
            }
        })
    }catch{
        res.status(500).send({message:"Bad Request"})
    }
})

router.get('/', async(req, res) => {
    try{
        await SmallDAta.find((err, data) => {
            if(err){
                res.status(500).send({message:"Bad Request"})
            }else{
                res.status(200).send(data)
            }
        })
    }catch{
        res.status(500).send({message:"Bad Request"})
    }
})

module.exports = router