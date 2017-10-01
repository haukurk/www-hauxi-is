import * as React from 'react';
import * as validator from 'validator';
import { Button, Header, Container, Form, Input, TextArea } from 'semantic-ui-react';
import './styles.css';

export default class ContactForm extends React.Component<IContactFormProps, IContactFormState> {

  constructor(props: IContactFormProps) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      message: ''
    };
  }

  /**
   * Handle changes in input fields.
   */
  handleChange = (e: Event, { name, value }: {name: string, value: string}): void => {
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Container className="contactRow" text={true}>
        <Header className="contactHeader">.. or you can just <b>contact me</b></Header>
        <Form className="contactForm" size="tiny" inverted={true} error={true}>
            <Form.Group widths="equal">
              <Form.Field 
                control={Input}
                name="name"
                label="Name"
                placeholder="Name"
                onChange={this.handleChange} 
                error={validator.whitelist(this.state.name, '/^[a-zA-Z ]+$/') ? false : true}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field 
                control={Input}
                name="email"
                label="Email address"
                placeholder="Your email address (optional)" 
                onChange={this.handleChange} 
                error={validator.isEmail(this.state.email) || validator.isEmpty(this.state.email) ? false : true}
              />
              <Form.Field 
                control={Input} 
                name="phone" 
                label="Phone number" 
                placeholder="Your phone number (optional)" 
                onChange={this.handleChange}
                error={validator.isLength(this.state.phone, 7) || validator.isEmpty(this.state.phone) ? false : true}
              />
            </Form.Group>
            <Form.Field 
              control={TextArea}
              name="message"
              label="Message"
              placeholder="What is on your mind?"
              onChange={this.handleChange} 
              error={this.state.message.length > 10 ? false : true}
            />
            <Form.Field control={Button}>Send me this awesome message</Form.Field>
        </Form>
      </Container>
    );
  }
}