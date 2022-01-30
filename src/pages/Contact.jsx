import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Contact() {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  const inputClasses = 'w-full px-3 py-2  bg-white rounded-md shadow-md focus:outline-0 dark:text-black';

  return (
    <div className="container sm:py-12 mx-auto max-w-[600px] dark:text-white w-3/4">
      <div className="w-full mb-2 text-center fcc">
        <p className="py-6 text-2xl font-bold leading-relaxed tracking-wide font-mono3 lg:w-2/3">GET IN TOUCH</p>
      </div>
      <div className="w-full">
        <form ref={form} onSubmit={sendEmail} className="w-full fcc" data-testid="contactForm">
          <div className="w-full fcc xs:flex-row">
            <div className="w-full xs:w-1/2 xs:mr-2">
              <div className="relative">
                <label htmlFor="name" className="text-sm leading-7 font-mono3 ">
                    NAME
                </label>
                <input type="text" id="name" name="user_name" className={inputClasses} />
              </div>
            </div>
            <div className="w-full xs:w-1/2 xs:ml-2">
              <div className="relative">
                <label htmlFor="email" className="text-sm leading-7 font-mono3 ">
                    EMAIL
                </label>
                <input type="email" id="email" name="user_email" className={inputClasses} />
              </div>
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="relative">
              <label htmlFor="message" className="text-sm leading-7 font-mono3 ">
                  MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-48 px-3 py-1 bg-white rounded-lg shadow-lg outline-none resize-none font-a4 focus:border-0 dark:text-black"
              ></textarea>
            </div>
          </div>
          <div className="w-full p-2 mt-4">
            <button className="flex px-4 py-2 mx-auto text-lg bg-white rounded-md shadow-md dark:text-black hover:bg-amber-50 font-a2">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
