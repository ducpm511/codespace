import React, { useState, useEffect, useReducer } from 'react';
import emailjs from '@emailjs/browser';

const ContactFormSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitStatusMsg, setSubmitStatusMsg] = useState('')

    const initParams = {
        from_name: '',
        from_email: '',
        from_phone_number: '',
        message: '',
        course: '',
    }
    const formReducer = (formState, action) => {
        let newState = formState
        switch (action.type) {
            case 'from_name':
                newState.from_name = action.event.target.value;
                break;
            case 'from_email':
                newState.from_email = action.event.target.value;
                break;
            case 'from_phone_number':
                newState.from_phone_number = action.event.target.value;
                break;
            case 'course':
                newState.course = action.event.target.value;
                break;
            case 'message':
                newState.message = action.event.target.value;
                break;
            default:
                break;
        }
        // console.log(newState)
        return newState;
    }
    const [formState, dispatchForm] = useReducer(formReducer, initParams);
    const sendEmail = () => {
        setIsSubmitted(true);
        const serviceId = 'service_bqf98h2';
        const publicKey = 'RI2UR8GSJxlmoDXOf';
        const templateId = 'template_286hzcn';
        try {
            if (formState.from_name != '' && formState.from_phone_number != '') {
                emailjs.send(serviceId, templateId, formState, publicKey).then((result) => {
                    setSubmitStatusMsg('Gửi thành công, cám ơn quý khách đã liên hệ với chúng tôi');
                    console.log(result.text)
                }, (error) => {
                    setSubmitStatusMsg('Gửi không thành công, xin quý khách vui lòng thử lại');
                    console.log(error.text);
                });
            }

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="contact-form">
            <form action="#">
                <div className="row">
                    <div className="col-xl-6">
                        <div className={`contact-from-input mb-20 ${formState.from_name == '' && isSubmitted ? 'input-error' : ''}`}>
                            <input type="text" name='from_name' onChange={(e) => dispatchForm({ type: 'from_name', event: e })} placeholder="Tên liên hệ" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className={`contact-from-input mb-20 ${formState.from_phone_number == '' && isSubmitted ? 'input-error' : ''}`}>
                            <input type="text" name='from_phone_number' onChange={(e) => dispatchForm({ type: 'from_phone_number', event: e })} placeholder="Số điện thoại" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-from-input mb-20">
                            <input type="text" name='from_email' onChange={(e) => dispatchForm({ type: 'from_email', event: e })} placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-from-input mb-20">
                            <input type="text" name='course' onChange={(e) => dispatchForm({ type: 'course', event: e })} placeholder="Khoá học quan tâm" />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-from-input mb-20">
                            <textarea placeholder="Lời nhắn" onChange={(e) => dispatchForm({ type: 'message', event: e })} name="message"></textarea>
                        </div>
                    </div>
                    {
                        (formState.from_name == '' || formState.from_phone_number == '') && isSubmitted ?
                            <span style={{ 'color': '#ffb013' }}><i>Quý khách vui lòng điền tên và số điện thoại</i></span>
                            :
                            <></>
                    }
                    {
                        submitStatusMsg != '' ?
                        <span style={{ 'color': '#223675' }}><i>{submitStatusMsg}</i></span>
                        :
                        <></>
                    }
                    <div className="colxl-2 ">
                        <div className="cont-btn mb-20">
                            <a style={{ 'cursor': 'pointer' }} onClick={sendEmail} className="cont-btn">Gửi</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactFormSection;