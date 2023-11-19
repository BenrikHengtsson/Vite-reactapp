import React from 'react'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { PrimaryButton } from './general/PrimaryButton'

// Gillar Formik, men inte YUP, lättare att skriva kod själv från grunden för att få kod att agera som man Vill.
// Troligtvis behöver jag läsa på mer om Yup, innan det blir riktigt användbart för en
// Kunde inte få samma problem som Hans i videon heller, ang hans problem med den dynamiska uppdateringen, min uppdateras direkt,
//  men jag vill egentligen att den ska agera mindre dynamiskt, likt "problemet" i videon..
// även svårt att få fram ett felmeddelande genom detta exempel. Samt hur fan får man igång prettier, allt ser förjävligt ut.

const ContactForm = () => {  
const [errorMessage, SetErrorMessage] = useState('')
const [SentMessage, SetSentMessage] = useState('')
const invisibleLetterSpacing = <p className="nonVisible">boo!</p>; 
// dåligt försök att inte få allt att röra på sig error uppdateras dynamiskt..

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

    onSubmit: async (values, { resetForm }) => {
        // console.log(values)
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(values)
        })
        switch (result.status) {
            case 200:
                alert('Message succesfully sent!')
                SetSentMessage(<h2>Thanks for your question! We will get back to you soon.</h2>)
                resetForm();
                break;

            case 400:
                SetErrorMessage(<h2>Request unsuccessful, please try again.</h2>)
                break;    
        }
    }
    }
)

  return (
    
    <section className='contactForms'>
    <div className='container'>
        <div className='centerContent'>
            <div className='sectionTitle'>
                <h2>
                Leave us a message for any information
                </h2>
            </div>
        </div>
        <div className='errorForm'>{errorMessage}</div>
        <div>{SentMessage}</div>

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
                <div className='input-checkbox-group'>
                    <input type="checkbox" name="Terms"  value={form.values.Terms} onChange={form.handleChange} onBlur={form.handleBlur} />
                    <label>I agree that Crito has permission to use this conversation for educational purposes.</label>
                </div>
    
                <div className='centerContent'>
                    <button className='btnPrimary' type='submit' disabled={!form.values.Terms}>Send Message <i className="fa-solid fa-arrow-up-right-from-square"></i
        ></button>
                </div>

            </form>


            </div>    
    </div>
    </section>
    
  )
}

export default ContactForm