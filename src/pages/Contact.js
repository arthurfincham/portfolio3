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
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="container px-5 py-12 mx-auto max-w-[600px]">
      <div className="w-full mb-2 text-center fcc">
        <p className="py-6 text-2xl font-bold leading-relaxed tracking-wide font-mono3 lg:w-2/3">GET IN TOUCH</p>
      </div>
      <div className="w-full">
        <form ref={form} onSubmit={sendEmail} className="w-full fcc">
          <div className="w-full fcc xs:flex-row">
            <div className="w-full xs:w-1/2 xs:mr-2">
              <div className="relative">
                <label htmlFor="name" className="text-sm leading-7 font-mono3 ">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 font-a4 focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="w-full xs:w-1/2 xs:ml-2">
              <div className="relative">
                <label htmlFor="email" className="text-sm leading-7 font-mono3 ">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 font-a4 focus:ring-indigo-200"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative">
              <label htmlFor="message" className="text-sm leading-7 font-mono3 ">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-32 px-3 py-1 text-base leading-6 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 font-a4 focus:ring-indigo-200"
              ></textarea>
            </div>
          </div>
          <div className="w-full p-2">
            <button className="flex px-4 py-2 mx-auto text-lg border-[.1em] rounded-lg hover:bg-amber-200/50 border-black rounded font-a2 focus:outline-none bg-blue-gradient">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
