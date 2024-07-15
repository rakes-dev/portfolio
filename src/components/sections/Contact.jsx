import React from 'react';

const Contact = () => {
  return (
    <section aria-label="Subscribe example">
      <div className="container">
        <article>
          <hgroup>
            <h2>Contact Me</h2>
            <h3>Get in touch</h3>
          </hgroup>
          <form className="grid">
            <input type="text" id="firstname" name="firstname" placeholder="First Name" aria-label="First Name" required />
            <input type="email" id="email" name="email" placeholder="Email" aria-label="Email" required />
            <button type="submit" onClick={(e) => e.preventDefault()}>Subscribe</button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default Contact;
