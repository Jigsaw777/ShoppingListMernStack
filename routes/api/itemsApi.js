const express = require("express")
const router = express.Router()

//item model
const Item = require("../../models/Item")

// @GET api
router.get('/', (req, resp) => {
    Item.find().sort({date: -1}).then(items => resp.json(items))
})

// @POST api
router.post('/', (req, resp) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save().then(item => resp.json(item)).catch(err => console.log(err))
})

// @DELETE api
router.delete('/:id', (req, resp) => {
    Item.findById(req.params.id)
        .then(item =>
            item.remove()
                .then(() => resp.json({success: true})))
        .catch(err => resp.status(404).json({success: false}))
})

module.exports = router