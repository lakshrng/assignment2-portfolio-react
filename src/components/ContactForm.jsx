import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (nextValues) => {
    const nextErrors = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!emailPattern.test(nextValues.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!nextValues.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };

    setValues(nextValues);

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitted(true);
    setValues(initialValues);
  };

  const validationErrors = validateForm(values);
  const isSubmitDisabled =
    !values.name.trim() ||
    !values.email.trim() ||
    !values.message.trim() ||
    Object.keys(validationErrors).length > 0;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows="5"
          placeholder="Write your message"
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      <button type="submit" className="primary-button" disabled={isSubmitDisabled}>
        Send Message
      </button>

      {submitted && <p className="success-message">Message sent successfully.</p>}
    </form>
  );
}
