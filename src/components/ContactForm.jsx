import React from 'react'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { PrimaryButton } from './general/PrimaryButton'

const ContactForm = () => {  
const [errorMessage, SetErrorMessage] = useState('')
const invisibleLetterSpacing = <p className="nonVisible">boo!</p>;

const form = useFormik( {
    initialValues: {
        name: '',
        Email: '',
        Message: '',
    },

    validationSchema: Yup.object( {
        name: Yup.string()
        .required("Must include a name.")
        .min(2,"Name should include least 2 characters."),
        Email: Yup.string()
        .required("Email is required.")
        .matches(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "Use a valid email address."),
        Message: Yup.string()
        .required("Type a message is required.")
        .min(10,"The message should include a minimum of 10 characters.")
    } ),

    onSubmit: (values) => {
        console.log(values)
    }

    }


)

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

            <form onSubmit={form.handleSubmit} noValidate>
                <p className={form.errors.name ? 'errorForm': ''}>{form.errors.name ? form.errors.name : invisibleLetterSpacing}</p>
                <div className='input-group'>
                    <input type="text" name='name' placeholder='Name *' value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur}/>
                </div>
                <p className={form.errors.Email ? 'errorForm': ''}>{form.errors.Email ? form.errors.Email : invisibleLetterSpacing }</p>
                <div className='input-group'>
                    <input type="text" name="Email" placeholder="Email *" value={form.values.Email} onChange={form.handleChange} onBlur={form.handleBlur} />
                </div>
                <p className={form.errors.Message ? 'errorForm': ''}>{form.errors.Message ? form.errors.Message : invisibleLetterSpacing}</p>
                <div className='input-group inputMessage'>
                    <input type="text" name="Message" placeholder="Message *" value={form.values.Message} onChange={form.handleChange} onBlur={form.handleBlur} />
                </div>
    
                <div className='centerContent'>
                    <button type='submit'>köööör</button>
                </div>

            </form>


            </div>    
    </div>
    </section>
  )
}

export default ContactForm