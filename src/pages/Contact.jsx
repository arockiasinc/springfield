import ContactForm from "../components/ContactForm"
import SeoMetaDetails from "../components/SeoMetaDetails";
export default function Contact(){
    return <>
    <SeoMetaDetails slug="contact" />
    <div className="page-title aos-init aos-animate" data-aos="fade">
    
      <div className="container">
        <h1 className="text-center">Contact</h1>
        </div>
        </div>
        <ContactForm/>
        </>
}