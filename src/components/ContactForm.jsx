import React from 'react'
import { PrimaryButton } from './general/PrimaryButton'

const ContactForm = () => {
  return (
    <section className='contactForm'>
    <div className='container'>
        <div className='centerContent'>
            <div className='sectionTitle'>
                <h2>
                Leave us a message for any information
                </h2>
            </div>
        </div>
        <div className='contactForm'>
            <form noValidate>
                <div className='input-group'>
                    {/* <label>Name</label> */}
                    <input type="text" placeholder='Name *' />
                </div>
                <div className='input-group'>
                    {/* <label>Email</label> */}
                    <input type="text" placeholder='Email *'/>
                </div>
                <div className='input-group inputMessage'>
                    {/* <label>Message</label> */}
                    <input type="text" placeholder='Message *'/>
                </div>
                <div className='input-checkbox-group centerContent'>
                    <input type="checkbox" />
                    <label > Crito har rätt att kontakta och använda konversation i förbättring & upplärnings ändamål enligt Gdpr yolo 2012. </label>
                </div>
                <div className='centerContent'>
                < PrimaryButton/>
                </div>

            </form>
            </div>    
    </div>
    </section>
  )
}

export default ContactForm