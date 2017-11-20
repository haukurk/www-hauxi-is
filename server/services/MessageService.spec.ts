import { expect } from 'chai';
import * as TypeMoq from "typemoq";
import 'mocha';

import MessageService from './MessageService';

describe('Message Service', () => { 

  let mockedEmailContext: TypeMoq.IMock<IEmailContext> = TypeMoq.Mock.ofType<IEmailContext>(); 
  mockedEmailContext.setup((x: any) => x.then).returns(() => undefined); // Needed for promises.

  beforeEach(() => {
    mockedEmailContext.reset()
  })

  it('sending an message should call email context correctly (and only once)', () => {

    const service = new MessageService(mockedEmailContext.object, "haukur@hauxi.is");
    service.sendEmailMessage("Jón Jónsson", "+354 8338282", "test@email.com", "Strange message");
    mockedEmailContext.verify(x => x.sendEmail(TypeMoq.It.isAny(), TypeMoq.It.isAny(), TypeMoq.It.isAny(), TypeMoq.It.isAny()), TypeMoq.Times.exactly(1));
    
  });

  it('service should send email to correct recipent and send to it when sending messages', () => {

    const service = new MessageService(mockedEmailContext.object, "boo@foo.is");
    expect(service._recipentEmail).equal("boo@foo.is");
    service.sendEmailMessage("Jón Jónsson", "+354 8338282", "test@email.com", "Strange message");
    mockedEmailContext.verify(x => x.sendEmail("boo@foo.is", TypeMoq.It.isAny(), TypeMoq.It.isAny(), TypeMoq.It.isAny()), TypeMoq.Times.exactly(1));

  })

  it('service should construct a correct body', () => {

    const service = new MessageService(mockedEmailContext.object, "haukur@hauxi.is");
    service.sendEmailMessage("Jón Jónsson", "+354 8338282", "test@email.com", "Strange message");
    const expectedBody = "Jón Jónsson is sending you a message: Strange message. <br> <br>He left his number: +354 8338282"
    mockedEmailContext.verify(x => x.sendEmail(TypeMoq.It.isAny(), TypeMoq.It.isAny(), TypeMoq.It.isAny(), expectedBody), TypeMoq.Times.exactly(1));

  });

  it('service should construct a correct email from address', () => {
    
      const service = new MessageService(mockedEmailContext.object, "haukur@hauxi.is");
      service.sendEmailMessage("Jón Jónsson", "+354 8338282", "test@email.com", "Strange message");
      const expectedBody = "Jón Jónsson is sending you a message: Strange message. <br> <br>He left his number: +354 8338282"
      mockedEmailContext.verify(x => x.sendEmail(TypeMoq.It.isAny(), "Jón Jónsson <test@email.com>", TypeMoq.It.isAny(), TypeMoq.It.isAny()), TypeMoq.Times.exactly(1));
  
  });

  it('service should construct a correct email from address if no email specified', () => {
    
      const service = new MessageService(mockedEmailContext.object, "haukur@hauxi.is");
      service.sendEmailMessage("Jón Jónsson", "+354 8338282", undefined, "Strange message");
      const expectedBody = "Jón Jónsson is sending you a message: Strange message. <br> <br>He left his number: +354 8338282"
      mockedEmailContext.verify(x => x.sendEmail(TypeMoq.It.isAny(), "Jón Jónsson <no-reply@hauxi.is>", TypeMoq.It.isAny(), TypeMoq.It.isAny()), TypeMoq.Times.exactly(1));
  
  });

  it('service should construct a correct subject', () => {
    
      const service = new MessageService(mockedEmailContext.object, "haukur@hauxi.is");
      service.sendEmailMessage("Jón Jónsson", "+354 8338282", "test@email.com", "Strange message");
      const expectedBody = "Jón Jónsson is sending you a message: Strange message. <br> <br>He left his number: +354 8338282"
      mockedEmailContext.verify(x => x.sendEmail(TypeMoq.It.isAny(), TypeMoq.It.isAny(), "Jón Jónsson is sending you a message", TypeMoq.It.isAny()), TypeMoq.Times.exactly(1));
  
  });

});