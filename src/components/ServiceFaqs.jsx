import { SERVICE_FAQS } from '../seo/faqContent';

export default function ServiceFaqs({ pathname }) {
  const faqs = SERVICE_FAQS[pathname];

  if (!faqs?.length) return null;

  return (
    <section className="service-faq-section container" aria-labelledby="service-faq-title">
      <div className="service-faq-header">
        <span className="section-tag-modern-light">BUYER QUESTIONS</span>
        <h2 id="service-faq-title">Frequently Asked Questions</h2>
        <p>Clear answers to common questions about planning, building, securing, and scaling this type of technology system.</p>
      </div>
      <div className="service-faq-list">
        {faqs.map((faq) => (
          <details className="service-faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
