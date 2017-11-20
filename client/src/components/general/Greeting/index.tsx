import * as React from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react';
import HaukurLogo from './img/haukur-cartoon.png';
import './styles.css';

export default class FrontInformation extends React.Component {
  render() {
    return (
      <Container className="frontInformationCard" text={true}>
        <Grid>
            <Grid.Column width={4}>
            <Image src={HaukurLogo} className="haukurCartoonCharacter" />
        </Grid.Column>
        <Grid.Column width={12} className="headingColumn">
                <Header className="heading">Hi, I'm <b>Haukur Kristinsson</b></Header>
                <span className="headingSubText">.. a software engineer and a technology enthusiast</span>
        </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
