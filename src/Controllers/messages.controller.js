const Messages = require('../Models/messages.model');

module.exports = {
    async index(req, res, next) {
        try {
            let Message = await Messages.find();
            res.status(200).send({
                "Messages": Message,
                "message": "success"
            });
        } catch (error) {
            next(error);
        }
    },

    async details(req, res, next) {
        try {
            let { _id } = req.params;
            _id = _id+'@c.us';

            if (!_id) {
                const error = new Error('_ID not specified');
                error.status = 400;
                next(error);
            }

            let Message = await Messages.find({ _id });

            res.status(200).send({
                "Message": Message,
                "message": "success"
            });
        } catch (error) {
            next(error);
        }
    },

    async createText(type, author, body, chatId) {

        let data = {type, author, body, chatId};

        Message = await Messages.create(data);
        console.log('criado')
        return;
    },
}