import * as config from '../../config';

var mailgun = require('mailgun-js')({ apiKey: config.mg_api_key, domain: config.mg_domain })

class EmailContext implements IEmailContext {

    sendEmail(to: string, from: string, subject: string, body: string): Promise<void> {

        const emailMessage = {
            from: from,
            to: to,
            subject: subject,
            text: body
        };

        return new Promise((resolve, reject) => {
            mailgun.messages().send(emailMessage, function (error, body) {
                if(error == null)
                    resolve(body);
                reject({error, body});
            });
        });
    }

}

export default EmailContext;