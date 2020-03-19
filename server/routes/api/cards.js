const express = require('express')
const router = express.Router()
const validateCardsInput = require('../../validations/cards')
const Card = require('../../models/cards')

router.post('/', (req, res) => {
    const domain = req.protocol + '://' + req.get('host')
    req.body.domain = domain
    const { errors, isValid } = validateCardsInput(req.body)
    if (!isValid) {
        return res.status(404).json(errors)
    }
    const newCard = new Card(req.body)
    newCard
        .save()
        .then(card =>
            res.json({
                message: 'Card has been created successul',
                card,
            })
        )
        .catch(err => console.log(err))
      })

router.get('/', (req, res, next) => {
    Card.find(function(err, card) {
        if (err) {
            var err = new Error('error occured')
            return next(err)
        }
        res.status(200).json({ message: 'Cards Retrieved Successfully', card })
    })
})

module.exports = router
