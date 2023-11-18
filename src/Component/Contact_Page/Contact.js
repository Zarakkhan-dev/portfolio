import React from 'react'

const contact = () => {
  return (
   <>
      <div className="title relative  text-center  mt-20">
        <h1 className="front  font-extrabold text-[55px]  relative z-10 uppercase tracking-[-1%]">
          {" "}
          Get in 
          <span className="span-tag text-[#ffb400] font-extrabold uppercase "> touch</span>
        </h1>
        <h1 className="absolute top-[-50%] w-[100%] text-[14vh] text-[#222222] font-extrabold z-0 uppercase">
         Contact
        </h1>
      </div>
        <section className="Contact-Section">
            <div className="Contact-info">
                <h1 className='text-[25px] font-extrabold uppercase'>Don't be Shy !</h1>
                <p className='my-3 w-[80%] text-[16px]'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <section className="address">
                    <div className="address-logo"></div>
                    <div className="my-address">
                        <h2>Address point</h2>
                        <p>Faisal Town , Faisalabad</p>
                    </div>
                </section>
                <section className="mail">
                    <div className="email-logo"></div>
                    <h2>Mail me</h2>
                    <p><a href="mailto:zarakkkhan23630@gmail.com">Zarakkhan23630@gmail.com</a></p>
                </section>
                <section className="call">
                    <div className="call-logo"></div>
                    <h2>call me</h2>
                    <p><a href="dialto:+923101758072"></a>+92 310 1758072</p>
                </section>
                <section className="social-icon">
                    <div className="facebook"></div>
                    <div className="whatsapp"></div>
                    <div className="github"></div>
                    <div className="instagram"></div>
                </section>
            </div>
            <div className="Contact-form">

                <form >
                    <div className="your-info">
                        <input type="text" name="name" id="name" placeholder='YOUR NAME'  />
                        <input type="email" name="email" id="email" placeholder='YOUR EMAIL' />
                    </div>
                    <div className="Subject-field">
                    <input type="text" name="subject" id="subject" placeholder='YOUR SUBJECT' />
                    </div>
                    <textarea name="text" id="message" cols="30" rows="8" placeholder='YOUR MESSAGE'></textarea>
                </form>
            </div>
        </section>
   </>
  )
}

export default contact
