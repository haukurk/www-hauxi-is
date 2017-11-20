import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState } from '../../state/index';
import { messageActions } from '../../state/ducks/message';
import ContactForm from '../../components/general/ContactForm';

const mapStateToProps = (state: RootState) : any => ({
  isRequesting: state.message.requesting
});

const mapDispatchToProps = (dispatch: any) : { sendMessage: messageActions.SendMessageFunc} => bindActionCreators({
  sendMessage: messageActions.sendMessage,
}, dispatch);

export const ContactFormConnected = connect(mapStateToProps, mapDispatchToProps)(ContactForm);

export default ContactFormConnected;