import React from 'react';

const Contact = () => {
  return (
    <section aria-label="Subscribe example" className='mt-10' >
      <div className="bg-black rounded-md p-10">
        <article>
          <div className='text-area'>
            <h2 className='text-5xl'>CONTACT ME</h2>
            <h3>Get in touch</h3>
          </div>
          <form className="grid">
            <input type="text" id="name" name="name" placeholder="Name" aria-label="First Name" required />
            <input type="email" id="email" name="email" placeholder="Email" aria-label="Email" required />
            <button type="submit" onClick={(e) => e.preventDefault()}>Subscribe</button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default Contact;
