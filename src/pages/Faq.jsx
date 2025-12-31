import { useEffect, useState } from "react";
import Faq from "../components/Faq";
import Button from "../components/Buttons";

export default function FaqPage() {

  const [faqItems, setFaqItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/springfield_react/admin/api/get_faq.php")
      .then((res) => res.json())
      .then((data) => {
        setFaqItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="container">
          <h1 className="text-center">FAQ</h1>
        </div>
      </div>

      {loading ? (
        <p className="text-center py-5">Loading FAQs...</p>
      ) : (
        <Faq items={faqItems} />
      )}
       <Button onClick={() => window.location.href = `http://localhost/springfield_react/admin/faqs.php`}>
                Add/Edit
      </Button>
    </>
  );
}
