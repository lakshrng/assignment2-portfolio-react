import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  return (
    <section className="contact-page page-shell">
      <div className="page-header">
        <p className="eyebrow">Get in touch</p>
        <h1>Contact</h1>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <h2>Let’s build something meaningful.</h2>
          <p>
            I enjoy collaborating on product-driven work, creative interfaces, and full-stack
            ideas that solve real user problems.
          </p>
          <ul>
            <li>Phone: 88055900290</li>
            <li>Email: lakshrng@gmail.com</li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
