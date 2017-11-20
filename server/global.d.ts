// Types and Interfaces specific for this project.

/**
 * Email Context Interface
 */
interface IEmailContext {
    sendEmail(to: string, from : string, subject: string, body: string): Promise<void>;
}

/**
 * Config Type
 */
type Config = {
    mg_api_key: string,
    mg_domain: string,
}