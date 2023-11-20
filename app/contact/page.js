import React from 'react'
import Header from '../(components)/header/header'
import Input from '../(components)/input/input'
import Button from '../(components)/button/button'

export default function Contact() {
  return (
    <>
     <Header title="Contact Us"/>   
     <section class="loacation">
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.62046307584!2d72.92448722511955!3d31.423759041318238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700491769640!5m2!1sen!2s"
            width="600" height="450" style={{border:0, allowfullscreen:"", loading:"lazy"}}></iframe>
    </section>

    <section class="contact-us">
        <div class="row">
            <div class="content-col">
                <div>
                    <i class="fa fa-home"></i>
                    <span>
                        <h5>NH9 Road, ABC Building</h5>
                        <p>Ghaziabad, Uttar Pradesh, IN</p>
                    </span>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <span>
                        <h5>+91 7445546525</h5>
                        <p>Monday To Saturday, 9AM To 6PM</p>
                    </span>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <span>
                        <h5>xyz@email.com</h5>
                        <p>Email Us Yor Query</p>
                    </span>
                </div>
            </div>
            <div class="content-col">
                <form>
                    <Input type="text" placeholder="Enter Name"/>
                    <Input type="email" placeholder="Enter Email"/>
                    <Input type="text" placeholder="Enter Subject"/>
                    <textarea rows="8" placeholder="Message" required></textarea>
                    <Button title="Send Massage"/>
                </form>
            </div>
        </div>
    </section>

    </>
  )
}
