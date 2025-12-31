import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import Button from "../components/Buttons";
import SeoMetaDetails from "../components/SeoMetaDetails";

export default function Gallery() {
  const isotope = useRef(null);
  const lightbox = useRef(null);
  const [galleryItems, setGalleryItems] = useState([]);

  // LOAD IMAGES FROM BACKEND
  useEffect(() => {
    axios
      .get("http://localhost/springfield_react/admin/api/get_gallery.php")
      .then((res) => {
        setGalleryItems(res.data);
      })
      .catch((err) => console.log("Error loading gallery:", err));
  }, []);

  // INIT ISOTOPE + GLIGHTBOX
  useEffect(() => {
    if (galleryItems.length === 0) return;

    const grid = document.querySelector(".isotope-container");

    imagesLoaded(grid, () => {
      isotope.current = new Isotope(grid, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        percentPosition: true,
        masonry: { columnWidth: ".isotope-item" },
      });
    });

    const filters = document.querySelectorAll(".portfolio-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        filters.forEach((el) => el.classList.remove("filter-active"));
        this.classList.add("filter-active");
        const filterValue = this.getAttribute("data-filter");
        isotope.current?.arrange({ filter: filterValue });
      });
    });

    lightbox.current = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
    });

    return () => {
      isotope.current?.destroy();
      lightbox.current?.destroy();
    };
  }, [galleryItems]);

  // Convert category -> CSS class
  const getFilterClass = (type) => {
    return "filter-" + type.toLowerCase();
  };

  return (
    <>
    <SeoMetaDetails slug="gallery"/>
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="container">
          <h1 className="text-center">Gallery</h1>
        </div>
      </div>

      <section id="portfolio" className="portfolio section">
        <div className="container">
          
          {/* Admin Edit Button */}
          <Button
            onClick={() =>
              (window.location.href = "http://localhost/springfield_react/admin/gallery.php")
            }
          >
            Edit
          </Button>

          <div className="isotope-layout" data-layout="masonry">
            
            {/* FILTER BUTTONS */}
            <ul className="portfolio-filters isotope-filters text-center mb-4">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-kitchen">Kitchen</li>
              <li data-filter=".filter-bathroom">Bathroom</li>
              <li data-filter=".filter-furniture">Furniture</li>
              <li data-filter=".filter-showroom">Showroom</li>
            </ul>

            {/* GALLERY GRID */}
            <div className="row gy-4 isotope-container">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className={`col-lg-2 col-md-2 portfolio-item isotope-item ${getFilterClass(
                    item.type
                  )}`}
                >
                  <div className="portfolio-content">
                    <img
                      src={item.full_url}
                      className="img-fluid"
                      alt={item.title}
                    />

                    <div className="portfolio-info">
                      <h4>{item.title}</h4>

                      <a
                        href={item.full_url}
                        className="glightbox preview-link"
                        data-gallery="gallery-images"
                        title={item.title}
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* ❌ No Images Found */}
              {galleryItems.length === 0 && (
                <p className="text-center">No images available.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
