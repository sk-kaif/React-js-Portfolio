import React, { useRef} from 'react'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'

const Form = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gmk5knb', 'template_t0uryma', form.current, 'YeJR9Re_EDH4fYSYA')
      .then((result) => {
          // console.log(result.text);
          e.target.reset()
          alert('Email Sent !!! ')
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="form md:mb-24 w-[90%] flex flex-col-reverse gap-4 md:gap-0 md:max-w-6xl mx-auto lg:gap-4 md:flex-row mt-28">

      <div className="fromCon md:w-[60%] p-4 md:p-8 bg-[--card-bg] rounded-2xl"  >
        <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
          <input type="text" name="your_name" autoComplete='off' placeholder="Name" className="p-2 rounded-lg outline-none border-none bg-[#4D555B]"/>
          <input type="email" name="your_email" autoComplete='off' placeholder="E-mail" className="p-2 rounded-lg outline-none border-none bg-[#4D555B]" />
          <textarea name="message" rows="6" placeholder="Type your message" className="p-2 rounded-lg outline-none border-none bg-[#4D555B]"></textarea>
          <button type="submit" className="p-2 text-white rounded-lg bg-[--primary-color]">Send Message</button>
        </form>
      </div>



      <div className="conetnt md:w-[40%] p-4 md:p-6 flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[--text-color]">Get in touch ✨</h1>
        <span className="w-full border-t border-[#999] h-1"></span>
        <p className="text-xl text-[--text-color]">
        If you are looking for a Web Developer with skills and experience, please feel free to get in touch with me..
        </p>
        <div className="conact">
          <h2 className="text-[--primary-color] font-bold">WANT TO CALL ME?</h2>
          <Link to='tel:9920489366' target="_blank" rel="noopener noreferrer" className="text-xl text-[--text-color] break-words">9920489366</Link>
        </div>
        <div className="email">
          <h2 className="text-[--primary-color] font-bold">JUST WANT TO EMAIL ME?</h2>
          <Link to='mailto:shk.mohd.kaif@email.com'target="_blank" rel="noopener noreferrer" className="text-xl text-[--text-color] break-words">shk.mohd.kaif@gmail.com</Link>
        </div>
      </div>
    </div>
  )
}

export default Form