import React from 'react';
import Form from './form';
import { FormattedMessage } from 'react-intl';

const Contact = () => {
  return (
    <section id="contact" className="max-w-3xl px-6 py-12 mx-auto sm:px-10 lg:px-0 sm:py-20 md:py-20 lg:py-32">
      <header className="mb-10 md:mb-20">
        <h2 className="mb-4 text-3xl text-white dark:text-gray-800 md:text-5xl font-header">
          <FormattedMessage id="contact.title"/>
        </h2>
        <p className="text-xl text-white dark:text-gray-800 md:text-2xl">
          <FormattedMessage id="contact.intro"/>
        </p>
      </header>
      <Form/>
    </section>
  );
}

export default Contact;