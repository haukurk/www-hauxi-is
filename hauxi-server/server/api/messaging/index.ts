import * as express from 'express';
import * as Celebrate from 'celebrate';
import * as BodyParser from 'body-parser';

import MessageService from '../../services/MessageService';

const { Joi } = Celebrate;

// Body schema for sending messages.
const sendMessageSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string(),
  message: Joi.string().required(),
  phone: Joi.string()
});

const messagingEndpoints = ({ emailContext }) => {
  const router = express.Router();
  const service: MessageService = new MessageService(emailContext, "haukur@hauxi.is");

  router.use(BodyParser.json());

  router.post('/send', Celebrate({ body: sendMessageSchema }), (req, res, next) => {
      service.sendEmailMessage(req.body.name, req.body.phone, req.body.email, req.body.message)
      .then(() => res.send({ code: "EMAIL_SENT", message: "Message successfully sent" }))
      .catch((error) => res.status(500).send(
            { 
              code: "ERROR_SENDING_MAIL", 
              message: "Error sending the email.", 
              exception: error 
            }));
  });

  router.use(Celebrate.errors());

  return router;
};

export = messagingEndpoints;