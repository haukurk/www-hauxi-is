import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';

import './styles.css';

export default class SocialIcon extends React.Component<ISocialIconProps, {}> {
  render() {

    let iconName;
    switch (this.props.name) {
        case 'facebook':
            iconName = 'facebook-f';
            break;
        case 'stackoverflow':
            iconName = 'stack-overflow';
            break;
        case 'linkedin':
            iconName = 'linkedin';
            break;
        case 'twitter':
            iconName = 'twitter';
            break;
        case 'github':
            iconName = 'github';
            break;
        default:
            throw Error('Unknown Social Icon ' + this.props.name);
    }

    return (
        <div className="socialIconWrapper">
            <a href={this.props.link}>
                <FontAwesome
                    className="socialIcon"
                    name={iconName}
                    size="lg"
                />
            </a>
        </div>
    );
  }
}
