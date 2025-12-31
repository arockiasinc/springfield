import { useState } from "react";

export default function Faq({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container section-title">
        
        <p>
          <span>Frequently Asked Questions - </span>{" "}
          <span className="description-title">Springfield Woodworking, Winnipeg</span>
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-container">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? "faq-active" : ""}`}
                >
                  <h3 onClick={() => toggleFAQ(index)}>{item.question}</h3>
                  <div className="faq-content">
                    <p>{item.answer}</p>
                  </div>
                  <i
                    className="faq-toggle bi bi-chevron-right"
                    onClick={() => toggleFAQ(index)}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
