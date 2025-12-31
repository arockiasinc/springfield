import { useEffect } from "react";

export default function SeoMetaDetails({ slug }) {

  const seoMap = {
    "kitchen-cabinets": {
      title: "Custom Cabinets in Winnipeg | Kitchen, Bath & Closet Experts | Springfield Woodworking",
      description:
        "Custom cabinets in Winnipeg for kitchens, bathrooms, and closets. Any size, any style, built to fit your space. Get a free quote today.",
      keywords:
        " Custom Cabinets in Winnipeg, Custom Bathroom Cabinets , Custom Closet Cabinets Winnipeg, Custom Cabinet Makers, custom built cabinets Winnipeg, custom cabinetry in Winnipeg, custom cabinetry"
    },
    "bathroom-cabinets": {
      title: "Custom Bathroom Cabinets Winnipeg | Springfield Woodworking",
      description:
        "Custom Bathroom Cabinets by Springfield Woodworking. Stylish, space-saving designs crafted for a perfect fit and long-lasting quality.",
      keywords:
        "Custom Storage Bathroom Cabinets Winnipeg, custom bathroom cabinets Winnipeg, Modern Custom Bathroom Cabinets Winnipeg, High-Quality Bathroom Cabinets Winnipeg, Custom Bathroom Cabinets"
    },
    "cabinet-doors": {
      title: "Cabinet Doors for Kitchens and Bathrooms | Springfield Woodworking",
      description:
        "cabinet doors for kitchens and bathrooms crafted for durability, style, and a perfect fit. Upgrade your space with premium workmanship.",
      keywords:
        "cabinet doors, custom cabinet doors for kitchen and bathroom"
    },
      "new-home-cabinets": {
      title: "Custom-Built Cabinets for Kitchens, Baths & Storage | Springfield Woodworking",
      description:
        "Custom-built cabinets designed for style, function, and a perfect fit. We Expert in craftsmanship for kitchens, bathrooms, and storage spaces.",
      keywords:
        "Custom-built cabinets, Custom kitchen cabinets, Custom bathroom cabinets, Custom storage cabinets Winnipeg, Custom cabinets Winnipeg, Custom-built cabinets Winnipeg, Kitchen cabinet makers Winnipeg, Affordable custom cabinets, Custom cabinetry Winnipeg"
    },
    "get-started": {
      title: "Get Started | Springfield Woodworking",
      description:
        "High-quality custom cabinet doors for kitchens and bathrooms.",
      keywords:
        ""
    },
    "gallery": {
      title: "Gallery | Springfield Woodworking",
      description:
        "View the spring field wood working gallery for custom woodwork showcases.",
      keywords:
        ""
    },
    "contact": {
      title: "Contact Springfield Woodworking in Winnipeg",
      description:
        "Contact Springfield woodworking - Phone: 204 222 8797  - or visit our Winnipeg showroom to check out some of the models.",
      keywords:
        ""
    }
  };

  const seo = seoMap[slug] || {
    title: "Springfield Woodworking",
    description: "Custom cabinetry and woodworking solutions.",
    keywords: "woodworking, cabinets, custom furniture"
  };

  useEffect(() => {
    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords);
  }, [slug]);

  const setMeta = (name, content) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  return null; // 👈 important (SEO only)
}
