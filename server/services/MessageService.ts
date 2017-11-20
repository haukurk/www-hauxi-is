/**
 * Message service, that handles message sending etc from the systems. 
 */
export default class MessageService {

    _emailContext : IEmailContext;
    _recipentEmail : string;

    /**
     * Constructor 
     * @param emailContext 
     * @param recEmail 
     */
    constructor(emailContext : IEmailContext, recEmail : string) {
        this._emailContext = emailContext;
        this._recipentEmail = recEmail
    }

    /**
     * Get the recipent email address.
     */
    getRecipent() {
        return this._recipentEmail;
    }
    
    /**
     * Construct an email and send it
     * @param name Full name of the sender
     * @param phone Phone number of the sender
     * @param email Email address of the sender
     * @param message Message that you want to send
     */
    sendEmailMessage(name: string, phone: string, email: string, message: string): Promise<void> 
    {
        const textBody: string = `${name} is sending you a message: ${message}. <br> <br>He left his number: ${phone}`;
        let fullEmail : string;
        if ( typeof email !== 'undefined' && email ) {
            fullEmail = `${name} <${email}>`;
        }
        else {
            fullEmail = `${name} <no-reply@hauxi.is>`;
        }
        const subject: string = `${name} is sending you a message`;

        return this._emailContext.sendEmail(this._recipentEmail, fullEmail, subject, textBody);
    }
        
}