import * as React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';

import SocialIcon from '../SocialIcon';
import './styles.css';

export default class SocialInformation extends React.Component {
  render() {
    return (
      <Container className="socialInformationRow" text={true}>
        <Header className="socialHeader"><b>You can find me on the web</b></Header>
        <Grid className="socialIconGrids" textAlign="center" stretched={true} columns={5}>
        <Grid.Row className="socialIcons">
            <SocialIcon name="facebook" link="https://www.facebook.com/haukur.kristinsson" />
            <SocialIcon name="twitter" link="https://twitter.com/haukurk" />
            <SocialIcon name="linkedin" link="https://is.linkedin.com/in/haukurk/" />
            <SocialIcon name="github" link="https://github.com/haukurk" />
            <SocialIcon name="stackoverflow" link="http://stackoverflow.com/users/3830822/haukur-kristinsson" />
        </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
