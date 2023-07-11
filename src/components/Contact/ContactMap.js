import React from 'react';

const ContactMap = () => {
    return (
        <div className="google-map-area contact-map pt-100 mb-30">
            <div className='mb-5'>
                <h3>Chi nhánh Thành phố Bà Rịa</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.058369406576!2d107.17916498564026!3d10.496065037595972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31757351fe4fc8f9%3A0x40c4be169b86626d!2sSunrise!5e0!3m2!1svi!2s!4v1689058639382!5m2!1svi!2s"></iframe>
            </div>
            <div style={{"marginTop": "3rem"}}>
                <h3 className='mt-5'>Chi nhánh xã Phước Hưng, Long Điền, BR - VT</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.088424403846!2d107.20728989999999!3d10.4145517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317575dc061df327%3A0x399363fec5e1c221!2zQ29kZVNwYWNlIC0gVHLGsOG7nW5nIMSRw6BvIHThuqFvIEPDtG5nIG5naOG7hyB2w6AgTOG6rXAgdHLDrG5o!5e0!3m2!1svi!2s!4v1689058993585!5m2!1svi!2s"></iframe>
            </div>
        </div>

    );
};

export default ContactMap;