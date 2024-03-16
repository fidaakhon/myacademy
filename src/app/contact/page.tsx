'use client';

import React, { useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import emailjs from '@emailjs/browser';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

function MusicSchoolContactUs() {
  const [data, setData] = useState({
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);


  const sendMail = (templateParams: any) => {
    setIsProcessing(true);
    emailjs.send("acadmy_id", "template_lo78qyg", templateParams, "dfaY-Aoga6ddrbtcd")
      .then((result) => {
        console.log("Email sent successfully");
        setIsProcessing(false);
        setData({
          email: '',
          message: ''
        });
        setIsSent(true);
      }, (error) => {
        setIsProcessing(false);
        console.log(error.text);
      });
  }

  const submitHandler = (e: any) => {
    e.preventDefault();
    sendMail(data);
  }


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative" onClick={() => setIsSent(false)}>
      {' '}
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {' '}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <div className="icons flex flex-col sm:flex-row sm:justify-between justify-center px-8">
          <p className='text-white font-bold text-lg mb-4'><WhatsAppIcon className="text-5xl text-white" />: +92 3410573577 </p>
          <div className="socialicons flex justify-between px-7  gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FacebookRoundedIcon className="text-5xl text-white" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <InstagramIcon className="text-5xl text-white" />
            </a>
          </div>
        </div>
        <form onSubmit={submitHandler} className="space-y-4 mt-4">
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Your email address"
            className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            rows={5}
            required
          ></textarea>
          {isSent && (
            <p className="text-white text-sm">
              Your email has been sent successfully.
            </p>
          )}
          {isProcessing && (
            <p className="text-white text-sm">Sending your email...</p>
          )}

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;