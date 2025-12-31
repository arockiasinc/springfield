-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2025 at 12:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `winnipage_springfield_admin`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `remember_token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `email`, `password`, `created_at`, `remember_token`) VALUES
(3, 'Admin', 'admin@example.com', '$2y$10$B4qlemh/hWw/KO/kQYjFDuCXI66toLPJRBlKv.yWRD9W5DDIiIc1e', '2025-11-12 07:57:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `client_slider`
--

CREATE TABLE `client_slider` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client_slider`
--

INSERT INTO `client_slider` (`id`, `title`, `image`, `created_at`) VALUES
(4, 'Business Council of Manitoba', '1763556407_business-council-of-manitoba.jpg', '2025-11-19 12:46:47'),
(5, 'Houzz', '1763556419_houzz.png', '2025-11-19 12:46:59'),
(6, 'A+ Rating', '1763556434_A+Rating.jpg', '2025-11-19 12:47:14'),
(7, 'BBB', '1763556444_bbb.jpg', '2025-11-19 12:47:24'),
(8, 'CFIB', '1763556454_cfib.jpg', '2025-11-19 12:47:34'),
(9, 'MHBA', '1763556476_mhba.jpg', '2025-11-19 12:47:56'),
(10, 'PPMA', '1763556487_ppma.jpg', '2025-11-19 12:48:07');

-- --------------------------------------------------------

--
-- Table structure for table `cms`
--

CREATE TABLE `cms` (
  `id` int(11) NOT NULL,
  `section_name` varchar(100) NOT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image` varchar(255) DEFAULT NULL,
  `type` enum('text','image','image_only','heading_only','headingimage') DEFAULT 'text'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cms`
--

INSERT INTO `cms` (`id`, `section_name`, `heading`, `content`, `updated_at`, `image`, `type`) VALUES
(1, 'about', 'We go beyond building cabinets to craft the spaces that bring your home together and hold your most treasured moments.', '<p>Homeowners across Winnipeg choose <strong>Springfield Woodworking</strong> for expertly crafted <strong>custom built cabinets</strong> and high-quality <strong>Custom Cabinets in Winnipeg</strong> that combine superior workmanship with reliable service. From kitchen cabinets to bathroom vanities, our team is known for clear communication, meeting deadlines, and delivering a smooth project experience from start to finish. Read our customer testimonials to discover why Springfield Woodworking is a trusted choice for custom cabinetry in Winnipeg.</p>\r\n', '2025-12-19 08:44:08', NULL, 'text'),
(2, 'features[1]', ' Engineered for Maximum Value', '<p>Precision engineering that calculates every cut—achieving 0% wood wastage and maximum value for you.</p>', '2025-11-17 12:13:28', NULL, 'text'),
(3, 'feature[2]', 'Expertly Engineered Cabinetry', '<p>From intricate concepts to dream creations, we build cabinets exactly the way you envision.</p>', '2025-11-17 12:13:56', NULL, 'text'),
(4, 'feature[3]', 'Built in The Springfield Colony, Delivered Nationwide', '<p>Serving customers nationwide from our state-of-the-art factory in The Springfield Colony</p>', '2025-11-17 12:16:55', NULL, 'text'),
(5, 'heres how we do it[1]', 'Book a consultation', '<p>Use the contact page on the website to contact one of our design specialists to book a consultation. And when you visit our showroom, you will discover our products and explore our demo kitchens before sitting down with your design specialist.</p>', '2025-11-19 10:24:39', '1763384559_custom-cabinet1.webp', 'image'),
(6, 'heres how we do it[2]', ' Designed to specification', '<p>Bring us your ideas and we\'ll design a functional plan for any space. We\'ll plan it accordingly to ensure your Custom Cabinets are a perfect fit for your needs.</p>', '2025-12-31 05:27:31', 'cms_6.jpg', 'image'),
(7, 'heres how we do it[3]', 'Choose your cabinets', '<p>All of our cabinets are handcrafted right here in Manitoba, so you\'ll never have to worry about shipping delays. We offer a wide selection of products to compliment your Custom Cabinets, including hardware, and countertops.</p>', '2025-11-19 10:42:01', '1763461168_custom-cabinet3.webp', 'image'),
(8, 'heres how we do it[4]', 'Installation', '<p>Your cabinets will be ready for installation by the given time and our installation team will assemble your space with precision craftsmanship, so you can start enjoying your Custom Cabinets sooner.</p>', '2025-11-19 10:42:12', '1763461217_custom-cabinet4.webp', 'image'),
(9, 'made in manitoba[1]', 'Custom Kitchen Cabinets', '<p>At Springfield Woodworking, all our cabinets are custom made — built for you as per your style and needs.</p>', '2025-11-19 10:42:45', '1763462062_custom-kitchen-cabinet.webp', 'image'),
(10, 'made in manitoba[3]', 'Bathroom Cabinets', '<p>We offer hundreds of options when it comes to cabinets for your bathrooms and laundry rooms.</p>', '2025-11-19 10:42:55', '1763462071_bathroom-cabinet.webp', 'image'),
(11, 'made in manitoba[4]', 'We can build you the kitchen cabinet of your dreams', '<p>You dream it, we design it.</p>', '2025-11-19 11:23:20', 'cms_11.webp', 'image'),
(12, 'footer-top', 'We can build you the kitchen cabinet of your dreams', '<p>You dream it, we design it.</p>', '2025-11-18 10:46:53', '', 'text'),
(13, 'middle-section', 'Meticulously designed and custom-built to suit your every need.', 'Transform Your Home.', '2025-11-19 10:12:30', '', 'text'),
(14, 'middle-section-bottom', 'Custom Built cabinets', 'It is a long established fact that reader will be distracted by the readable content of page when looking at its layout or not & do.', '2025-11-19 10:15:50', '', 'text'),
(15, 'middle-section-bottom', 'Here\'s how we do it?', '', '2025-11-19 10:41:12', '', 'heading_only'),
(16, 'middle-section-images', 'Custom Kitchen Cabinets', 'Kitchen cabinets built to fit your style and space', '2025-12-31 05:14:56', 'cms_16.webp', 'image'),
(17, 'middle-section-images[3]', 'Custom Bath Cabinets', 'Bath cabinets crafted with  elegant design, and long-lasting quality for modern bathrooms.', '2025-12-31 05:14:27', 'cms_17.webp', 'image'),
(18, 'middle-section-images[2]', 'Closets & Furniture', 'Stylish custom closets and furniture built to fit your needs.', '2025-12-31 05:14:06', 'cms_18.webp', 'image'),
(19, 'kitc-cabinet-page-sec-1', 'Custom Kitchen Cabinets Remodelling', '<p>Your kitchen should work as beautifully as it looks. That’s why our custom kitchen cabinets are thoughtfully designed around your needs, preferences, and daily routines. Instead of standard, mass-produced options, we create personalized cabinetry that elevates your kitchen’s appearance, improves organization, and makes the most of every available space—delivering a kitchen you’ll enjoy for years to come.</p>\r\n<p>Benefits of choosing Springfield Woodworking custom cabinets in Winnipeg includes: </p>', '2025-12-19 08:47:21', 'cms_19.jpg', 'image'),
(20, 'kitch-cabinet-page-feature1', 'Personalized Design', ' Choose your materials, finishes, colors, and hardware to match your style.', '2025-11-24 10:37:31', NULL, 'text'),
(21, 'kitch-cabinet-page-feature2', 'Optimized Storage', 'Get smart storage solutions that suit your daily routine.', '2025-11-24 10:37:31', NULL, 'text'),
(22, 'kitch-cabinet-page-feature3', 'Superior Craftsmanship', 'Our cabinets are built to last, combining quality materials with expert workmanship.', '2025-11-24 10:37:31', NULL, 'text'),
(23, 'kitch-cabinet-page-feature4', 'Perfect Fit', 'Every cabinet is measured and built specifically for your kitchen layout.', '2025-11-24 10:40:51', NULL, 'text'),
(24, 'kitch-cabinet-page-btm-section', 'Kitchen Remodelling Made Simple', '<p>From the first consultation to the final installation, our team works closely with you to ensure a smooth and stress-free kitchen remodelling experience. We take pride in our attention to detail, communication, and commitment to customer satisfaction.</p>\r\n<p>Whether you’re dreaming of a modern, sleek kitchen or a timeless, traditional look, Springfield Woodworking can bring your vision to life with custom kitchen cabinetry that enhances both form and function.\r\n</p>', '2025-12-19 08:48:29', NULL, 'text'),
(25, 'kitch-cabinet-page-btm-section2', 'Let’s Build Your Dream Kitchen', 'If you’re ready to start your Winnipeg kitchen remodelling project, contact us today for a free consultation. Discover how custom cabinets can transform your kitchen into a space that’s uniquely yours.', '2025-12-19 08:49:22', NULL, 'text'),
(26, 'bath-cabinet-page-sec-1', 'Custom Bathroom Cabinets for Winnipeg Bathroom Remodelling', '<p>Elevate your bathroom into a space of quiet luxury with Custom Bathroom Cabinets thoughtfully designed by Springfield Woodworking. Serving homeowners across Winnipeg, we craft elegant, made-to-measure cabinetry that blends refined design with lasting durability. From sophisticated vanities to beautifully organized storage solutions, our custom bathroom cabinets are built with moisture-resistant materials and meticulous craftsmanship, creating a timeless, serene bathroom that enhances both everyday comfort and long-term home value.</p>', '2025-12-19 08:49:59', 'cms_26.jpg', 'image'),
(27, 'bath-cabinet-page-sec-2', 'Our custom bathroom cabinetry can include:', '<li>Elegant, made-to-measure vanities with ample storage and your choice of premium countertop materials</li>\r\n<li>Linen towers and customized storage units designed to keep your bathroom organized and clutter-free\r\n</li>\r\n<li>Custom mirror frames and built-in features for a cohesive, seamless design\r\n</li>\r\n<li>Floating cabinets that create a clean, modern, and visually open look\r\n</li>\r\n<li>Every piece is expertly crafted to fit your space perfectly—eliminating wasted corners, awkward gaps, and cookie-cutter designs, while delivering a truly personalized bathroom experience.\r\n</li>', '2025-12-18 04:55:35', 'cms_27.webp', 'image'),
(28, 'bath-cabinet-page-feature1', 'Tailored Designs', 'Designs crafted to fit your specific bathroom layout and style preferences.', '2025-11-25 08:31:21', NULL, 'text'),
(29, 'bath-cabinet-page-feature2', 'Premium Materials', 'Moisture-resistant finishes and materials built for durability.', '2025-11-25 08:31:21', NULL, 'text'),
(30, 'bath-cabinet-page-feature3', 'Expert Installation', 'Installed with precision and attention to every detail to ensure a flawless finish.', '2025-11-25 08:31:21', NULL, 'text'),
(31, 'bath-cabinet-page-feature4', 'Professional Service', 'Friendly and reliable team guiding you from consultation to completion.', '2025-11-25 08:31:21', NULL, 'text'),
(32, 'bath-cabinet-page-btm-section', 'Transform Your Bathroom Today', '<p>When you choose Springfield Woodworking for your bathroom renovation in Winnipeg, you’re choosing quality craftsmanship and personalized service. We handle every step of the process — from design consultation to final installation — ensuring your new cabinetry complements your bathroom’s overall look and enhances everyday functionality.</p>\r\n<p>Our clients love us for tailored designs, premium materials, expert installation, and friendly service from start to finish.</p>', '2025-11-24 10:40:51', NULL, 'text'),
(33, 'bath-cabinet-page-btm-section2', 'Let’s Build Your Dream Bathroom', 'Whether you want a sleek, modern aesthetic or a warm, traditional feel, our custom bathroom cabinets bring your vision to life. Let’s make your bathroom as beautiful as it is practical.', '2025-11-24 10:40:51', NULL, 'text'),
(34, 'bath-cabinet-page-btm-section3', 'Why Choose Springfield Woodworking for Your Winnipeg Bathroom Remodel?', '<p>Choosing Springfield Woodworking for your bathroom renovation in Winnipeg means partnering with a team dedicated to exceptional craftsmanship and attentive, personalized service. From the initial design discussion to the final installation, we manage every detail with care and precision. Backed by <b>Professional Service</b> at every stage, we create custom cabinetry that enhances your bathroom’s aesthetic, improves functionality, and elevates the comfort of your everyday routine.\r\n\r\n</p>\r\n<p>Our goal is to create custom cabinetry that blends seamlessly with your bathroom’s design while improving storage, organization, and everyday usability—delivering a space that feels both beautiful and effortlessly functional.\r\n</p>', '2025-12-19 08:52:08', NULL, 'text'),
(35, 'cabinet-doors-page-top', 'Kitchen Cabinets Doors Winnipeg', 'Cabinet doors play a vital role in both the functionality and appearance of your cabinetry, making them a key element in any kitchen or bathroom design. Beyond keeping your space organized and protected, cabinet doors define the overall style and character of the room. Choosing the right design is especially important when planning kitchen cabinets Winnipeg homeowners are proud of or upgrading modern bathroom spaces. At Springfield Woodworking, we specialize in custom cabinet doors for kitchen and bathroom, offering a wide selection of styles, finishes, and colors, along with precise custom colour matching to complement your existing décor. Our experienced team is always available to provide expert guidance tailored to your needs. Browse our gallery for inspiration, or visit our showroom or call us to get started.\r\n', '2025-12-19 08:52:46', NULL, 'text'),
(36, 'new-home-cabinet-page', 'Elevate Your Home with Timeless Craftsmanship & Custom-Built Cabinets', '<p>\r\n                 Custom-built cabinets are more than simple storage—they represent refined craftsmanship and intentional design. Crafted with premium materials, precise construction, and close attention to detail, our custom kitchen cabinets, custom bathroom cabinets, and custom storage cabinets enhance both the beauty and functionality of your home. Clean lines, smooth finishes, and a tailored fit ensure each piece integrates seamlessly into your space while standing up to everyday use. At Springfield Woodworking, our custom-built cabinets are thoughtfully designed to complement your home’s architecture and reflect your personal style, delivering timeless elegance, durability, and quality you can see and feel every day.\r\n\r\n                </p>\r\n           \r\n                  <h3 class=\"font-h3\">Why Custom Cabinets Matter</h3>\r\n                <p>\r\n                Custom-built cabinets are more than storage—they are a cornerstone of your home’s design, functionality, and overall value. Here’s why they make a difference:\r\n\r\n                </p>\r\n                <ul class=\"fa-ul mt-3\">\r\n                  <li>\r\n                    <span class=\"fa-li\">\r\n                      <i class=\"fa-solid fa-check\"></i>\r\n                    </span>\r\n                    Perfect Fit for Every Space: Tailored to your home’s exact dimensions, ensuring no corner is wasted.\r\n\r\n                  </li>\r\n                      <li>\r\n                    <span class=\"fa-li\">\r\n                      <i class=\"fa-solid fa-check\"></i>\r\n                    </span>\r\n                Designed Around Your Lifestyle: Every shelf, drawer, and feature reflect how you live, cook, entertain, and organize.\r\n\r\n\r\n\r\n                  </li>\r\n                  <li>\r\n                    <span class=\"fa-li\">\r\n                      <i class=\"fa-solid fa-check\"></i>\r\n                    </span>\r\n                  Enhances Aesthetic Appeal: Seamlessly integrates with your interior style, from classic elegance to contemporary sophistication.\r\n\r\n\r\n                  </li>\r\n                  <li>\r\n                    <span class=\"fa-li\">\r\n                      <i class=\"fa-solid fa-check\"></i>\r\n                    </span>\r\n                   Durability & Quality: Expert craftsmanship and premium materials ensure longevity and lasting beauty.\r\n\r\n\r\n                  </li>\r\n                  <li>\r\n                    <span class=\"fa-li\">\r\n                      <i class=\"fa-solid fa-check\"></i>\r\n                    </span>\r\n                   Increases Home Value: Custom cabinetry elevates both the visual and financial worth of your property.\r\n\r\n\r\n                  </li>\r\n                \r\n                </ul>', '2025-12-19 08:55:21', 'cms_36.webp', 'image'),
(37, 'new-home-cabinet-page-bottom', 'Craftsmanship That Turns Vision Into Reality', '<p>\r\n                From the heart of your kitchen to the refined elegance of your living spaces, every cabinet we create embodies precision, sophistication, and timeless quality. Our artisans combine fine materials, innovative techniques, and meticulous attention to detail to deliver pieces that are both functional and breathtakingly beautiful.\r\n\r\n\r\n              </p>\r\n\r\n              <h3 class=\"font-h3 mt-4\">Make Your Dream Home a Reality</h3>\r\n              <p>\r\n                At Springfield Woodworking, we don’t just build cabinets—we create living spaces that inspire and delight. Experience the artistry of bespoke cabinetry that transforms your house into a home of elegance, comfort, and lasting values.\r\n\r\n\r\n              </p>', '2025-12-19 08:55:59', '', 'text'),
(38, 'measurements', '1. Walls', 'Measure along all walls corner to corner.', '2025-11-25 09:15:02', NULL, 'text'),
(39, 'measurements', '2. Doors', 'Measure from corner to outside edge of the door casing. Measure door from outside trim to outside trim (if there is trim on the door).', '2025-11-25 09:15:02', NULL, 'text'),
(40, 'measurements', '3. Window Width', 'Measure from corner to outside edge of window trim. Measure window outside of trim to outside of trim.', '2025-11-25 09:15:02', NULL, 'text'),
(41, 'measurements', '4. Window Height', 'Measure window from floor to outside of window trim. Measure the height of window from outside of trim to outside trim.', '2025-11-25 09:15:02', NULL, 'text'),
(42, 'measurements', '5. Sink Center', 'Measure from the corner to the center of your sink.', '2025-11-25 09:15:02', NULL, 'text'),
(43, 'measurements', '6. Appliance Location', 'If you are keeping your appliances, measure the width, height and depth of all of your appliances (fridge, stove, dishwasher, microwave). Measure from the corner to the edge of each appliance to note its location on the wall. If purchasing new appliance bring the new specifications with your measurements.', '2025-11-25 09:15:02', NULL, 'text'),
(44, 'measurements', '7. Outlets, Switches and Vents', 'Measure from the corner to any outlets, switches or vents that may interfere with the cabinet design.', '2025-11-25 09:15:02', NULL, 'text'),
(45, 'measurements', '8. Ceiling Height', 'Measure from the floor to the ceiling. If there are bulkheads measure from the floor to the bottom of the bulkhead, also the height and width of the bulkhead.', '2025-11-25 09:54:43', NULL, 'text'),
(46, 'About page', 'Get a beautiful new kitchen in Manitoba from Springfield Woodworking', '<p>Springfield Woodworking is based out of the Springfield Hutterite Colony, a rural community of roughly 110 people located east of Winnipeg, Manitoba. Although the company\'s <a href=\"contact\" data-discover=\"true\">70,000 square foot shop</a> is home to 60 employees and can produce 100 to 150 cabinets a day, the cabinet business is only one of the community\'s economic activities.</p><p>At Springfield Woodworking, we blend the best of traditional techniques and workmanship with modern materials and designs. We build custom cabinets in Manitoba for installation in homes, from Saskatchewan to Western Ontario. Our cabinets and countertops are beautiful, solid, and built to last.</p><p>Come visit our showroom in Winnipeg; our knowledgeable staff will help you choose the options that are right for your home and your budget. We have a huge range of wood species to choose from for cabinets and countertops; we even offer lightweight quartz counters! If you\'d like to know more about our services give us a <a href=\"tel:+1-204-222-8797;\">call today!</a></p>', '2025-11-25 10:16:59', 'cms_46.jpg', 'image'),
(47, 'About page', '', '', '2025-11-25 10:09:51', 'cms_47.webp', 'image_only'),
(48, 'aboutpage', 'Self-sufficiency: A Recipe For Success', '<p class=\"text-left pb-2\">Hutterite colonies, including Springfield, strive to be as self-sufficient as possible, and to that end the Springfield Colony also has a heavy agricultural focus, including a large-scale chicken operation, a hog farm, and 6,000 acres of soybeans, wheat, canola and barley (there are 130 Hutterite colonies in Manitoba, with others in Saskatchewan and Alberta, and in the northern Great Plains in the United States. See <a href=\"http://www.hutterites.org/\" target=\"_blank\">www.hutterites.org</a> for more history).</p><p class=\"text-left\">Springfield\'s cabinet business embraces technology while at the same time valuing a long-standing woodworking tradition. \"When we came to America, we were not farmers. We were craftsmen and tradespeople,\" says Pauly Kleinsasser, general manager of Springfield Woodworking.</p>', '2025-11-25 10:17:25', NULL, 'text'),
(49, 'aboutpage2', 'Custom Cabinets, Springfield', '<p class=\"text-left pb-2\">The woodworking operation started at Springfield in 1996 with hand-made furniture, then moved into cabinets, which became the complete focus by 2002. \"We started our business with custom bedroom furniture, and we thought this will always be a hobby shop, but it grew into a massive business,\" Kleinsasser says. \"Quality, honesty, and having a sense of humour made this business grow into our livelihood\".</p><p class=\"text-left\">Two Anderson CNC routers cut, drill, and optimize all parts in the shop. Springfield also does hand sanding, and has a Timesavers sander, Unique shaper/sander with Doucet return conveyor, SCM T130 shaper, and JLT Clamps clamp carrier. Other technology in the shop includes a Mereen-Johnson ripsaw, two Martin sliding table saws, an Altendorf table saw, an IMA Advantage 400 edgebander, a Gannomat Index 130 dowel inserter, and three Gannomat Concept 70 ECO case clamps. A TigerStop optimizing saw with defecting system was also added recently.</p>', '2025-11-25 09:54:43', NULL, 'text'),
(50, 'aboutpage3', 'Right People, Right Results', '<p class=\"text-left pb-2\">Kleinsasser says the right people are also the key to a company\'s success, and many of the employees have worked there for 10 years or more. Twenty-five community members work in the shop, while others are hired from outside the colony.</p><p class=\"text-left\">Younger colony members are rotated into different jobs and may have experience in the blacksmith shop, mechanic shop, hog barn or the cabinet shop. \"When I was growing up, every winter I was assigned to a different job,\" Kleinsasser says. \"Wherever you are, you learn how to solve problems. You know a little about everything.\"</p>', '2025-11-25 09:54:43', NULL, 'text'),
(51, 'aboutpage4', 'Cabinetry in Cottage Country', '<p class=\"text-left\">Many customers come to Springfield through word-of-mouth referrals. They include contractors, home builders, renovation specialists and a few dealers. A retail showroom in nearby Winnipeg has been open for several years, while the company also sells cabinets in Kenora, Ontario, and does a lot of summer cottage work in that vacation area.</p>', '2025-11-25 09:54:43', NULL, 'text'),
(52, 'homepage-section-middle', 'We provide a comprehensive suite of expertly crafted custom services tailored to your requirements', '', '2025-12-31 04:51:29', '', 'heading_only'),
(53, 'homepage-header-h1', 'Custom Cabinets in Winnipeg', '', '2025-12-31 04:51:29', '', 'heading_only');

-- --------------------------------------------------------

--
-- Table structure for table `doors`
--

CREATE TABLE `doors` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `uploaded_at` timestamp NULL DEFAULT current_timestamp(),
  `position` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doors`
--

INSERT INTO `doors` (`id`, `title`, `image_path`, `description`, `uploaded_at`, `position`) VALUES
(9, 'Alabaster', 'uploads/doors/Maple-Alabaster-Willow.jpg', 'Maple - Willow', '2024-07-18 12:27:59', 2),
(10, 'Alabaster', 'uploads/doors/Oak-Alabaster-DarkStone.jpg', 'Oak - Dark Stone', '2024-07-18 12:28:21', 3),
(11, 'Alder', 'uploads/doors/Adhara-Alder-Hazelnut.jpg', 'Adhara - Hazelnut', '2024-07-18 12:28:36', 5),
(12, 'Alabaster', 'uploads/doors/Walnut-Alabaster-Clear.jpg', 'Walnut - Clear', '2024-07-18 12:38:09', 4),
(15, 'Corvus', 'uploads/doors/Hickory-Corvus-Rustic.jpg', 'Hickory - Rustic', '2024-07-18 12:53:53', 8),
(16, 'AlderCorvus', 'uploads/doors/Knotty-AlderCorvus-Clear.jpg', 'Knotty - Clear', '2024-07-18 12:54:13', 9),
(18, 'Corvus', 'uploads/doors/Oak-Corvus-AppaloosaGlazed.jpg', 'Oak - Appaloosa Glazed', '2024-07-18 12:54:41', 11),
(19, 'Corvus', 'uploads/doors/Oak-Corvus-CharcoalAntique.jpg', 'Oak - Charcoal Antique', '2024-07-18 12:54:55', 12),
(26, 'Corvus', 'uploads/doors/Oak-Corvus-Stone.jpg', 'Oak - Stone', '2024-07-20 10:07:13', 13),
(27, 'Corvus', 'uploads/doors/OakCorvus-Millstone.jpg', 'Oak - Millstone', '2024-07-20 10:08:04', 14),
(28, 'Eddington', 'uploads/doors/Oak-Eddington-Chestnut.jpg', 'Oak - Chestnut', '2024-07-20 10:08:32', 15),
(29, 'Jasper', 'uploads/doors/Hickory-Jasper-DarkCherry.jpg', 'Hickory - Dark Cherry', '2024-07-20 10:08:54', 16),
(30, 'Jasper', 'uploads/doors/Maple-Jasper-DarkStone.jpg', 'Maple - Dark Stone', '2024-07-20 10:09:13', 17),
(31, 'Jasper', 'uploads/doors/Maple-Jasper-DecoratorsWhite.jpg', 'Maple - Decorators White', '2024-07-20 10:09:30', 18),
(32, 'Jasper', 'uploads/doors/Oak-Jasper-Charcoal.jpg', 'Oak - Charcoal', '2024-07-20 10:11:04', 19),
(33, 'Jasper', 'uploads/doors/RusticHickory-Jasper-Clear.jpg', 'RusticHickory - Clear', '2024-07-20 10:12:05', 20),
(34, 'Princeton', 'uploads/doors/RiftOak-Princeton-Midnight.jpg', 'RiftOak - Midnight', '2024-07-20 10:12:37', 21),
(35, 'Royalton', 'uploads/doors/Royalton-Chill.jpg', 'Chill', '2024-07-20 10:13:03', 22),
(36, 'Royalton', 'uploads/doors/Royalton-Twilight.jpg', 'Twilight', '2024-07-20 10:13:45', 23),
(37, 'Taurus', 'uploads/doors/Cherry-Taurus-DarkCherry.jpg', 'Cherry - Dark Cherry', '2024-07-20 10:14:11', 24),
(38, 'AlderTaurus', 'uploads/doors/Knotty-AlderTaurus-Toffee.jpg', 'Knotty - Toffee', '2024-07-20 10:15:47', 25),
(39, 'Taurus', 'uploads/doors/Oak-Taurus-Charcoal.jpg', 'Oak - Charcoal', '2024-07-20 10:16:12', 26),
(40, 'Taurus', 'uploads/doors/Oak-Taurus-FinishingWhite.jpg', 'Oak - Finishing White', '2024-07-20 10:16:46', 27),
(41, 'Vega', 'uploads/doors/Maple-Vega-Charcoal.jpg', 'Maple - Charcoal', '2024-07-20 10:17:10', 29),
(42, 'Vega', 'uploads/doors/Oak-Vega-DarkCherry.jpg', 'Oak - Dark Cherry', '2024-07-20 10:18:07', 28),
(43, 'Viking', 'uploads/doors/Hickory-Viking-Tuscan.jpg', 'Hickory - Tuscan', '2024-07-20 10:18:19', 30),
(44, 'Viking', 'uploads/doors/Maple-Viking-Arctic.jpg', 'Maple - Arctic', '2024-07-20 10:21:17', 31),
(45, 'Viking', 'uploads/doors/Maple-Viking-Chestnut.jpg', 'Maple - Chestnut', '2024-07-20 10:21:34', 32),
(46, 'Viking', 'uploads/doors/Maple-Viking-PalaminoGlazed.jpg', 'Maple - Palamino Glazed', '2024-07-20 10:22:40', 33),
(47, 'Viking', 'uploads/doors/Oak-Viking-EspressoAntique.jpg', 'Oak - Espresso Antique', '2024-07-20 10:23:12', 34),
(48, 'Worthington', 'uploads/doors/Hickory-Worthington-Clear.jpg', 'Hickory - Clear', '2024-07-20 10:23:46', 35),
(49, 'Worthington', 'uploads/doors/Hickory-Worthington-WarmEspresso.jpg', 'Hickory - Warm Espresso', '2024-07-20 10:24:19', 36),
(50, 'Amber', 'uploads/doors/Maple-Amber-SeriousGrey.jpg', 'Maple - Serious Grey', '2025-07-09 09:26:29', 6),
(52, 'Corvus', 'uploads/doors/Maple-Corvus-ChateeauxMochaGlazed.jpg', 'Maple - Chateaux Mocha Glazed', '2025-07-09 09:32:09', 10),
(53, 'Corvus', 'uploads/doors/Maple-Corvus-ChateeauxMochaGlazed.jpg', 'Maple - Chateaux Mocha Glazed', '2025-07-09 09:38:06', 0);

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `question`, `answer`, `created_at`) VALUES
(1, 'What makes Springfield Woodworking in Winnipeg unique for custom cabinets?', 'At Springfield Woodworking, we specialize in luxury custom cabinetry that is tailored to your home’s architecture and your personal style. Serving Winnipeg homeowners, our craftsmanship ensures perfect fit, exceptional quality, and timeless elegance for every project.', '2025-11-25 10:31:23'),
(2, 'Why choose custom cabinets over pre-made options?', 'Custom cabinets from Springfield Woodworking are designed specifically for your space, lifestyle, and needs. Unlike standard options, they maximize storage, enhance aesthetic appeal, and offer long-lasting durability—making them a smart investment for Winnipeg homes.', '2025-11-25 10:31:23'),
(3, 'Can Springfield Woodworking design cabinets for all rooms in my home?', 'Yes. We create custom cabinetry for kitchens, bathrooms, living rooms, home offices, closets, and more. Every piece is crafted to your exact specifications to seamlessly integrate with your Winnipeg home.', '2025-11-25 10:31:23'),
(4, 'What materials are used in your custom cabinets?', 'We use premium hardwoods, engineered wood, veneers, and high-quality finishes. Each material is carefully selected for beauty, durability, and lasting performance, reflecting the high standards of Springfield Woodworking in Winnipeg.', '2025-11-25 10:31:23'),
(5, 'Can I customize the style, color, and hardware of my cabinets?', 'Absolutely. Every detail is customizable—from layout and finish to hardware and accents—ensuring your cabinets reflect your vision and complement your Winnipeg home’s décor.', '2025-11-25 10:31:23'),
(6, 'How long does it take to build and install custom cabinets?', 'Projects typically take 6–12 weeks from consultation to installation, depending on complexity. Springfield Woodworking works closely with clients in Winnipeg to ensure timely delivery and flawless installation.', '2025-11-25 10:31:23'),
(7, 'Do you provide installation services in Winnipeg?', 'Yes. Our expert installation team ensures that every cabinet is fitted perfectly, operates smoothly, and meets our luxury-quality standards.', '2025-11-25 10:31:23'),
(8, 'Are custom cabinets more expensive than standard options?', 'While custom cabinets are an investment, Springfield Woodworking ensures exceptional value, unmatched craftsmanship, and long-term durability. The result is high-end cabinetry that elevates your Winnipeg home.', '2025-11-25 10:31:23'),
(9, 'Can Springfield Woodworking help with design ideas?', 'Definitely. Our team provides professional design guidance, helping you choose layouts, materials, and finishes that create functional and visually stunning cabinetry tailored to your Winnipeg home.', '2025-11-25 10:31:23'),
(10, 'Do you serve clients outside Winnipeg?', 'Yes. While based in Winnipeg, Springfield Woodworking offers custom cabinetry solutions across Manitoba and beyond, providing nationwide support for design, fabrication, and installation.', '2025-11-25 10:31:23');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `type` enum('kitchen','bathroom','furniture','showroom') NOT NULL,
  `path` varchar(200) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `upload_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `type`, `path`, `title`, `upload_on`) VALUES
(59, 'kitchen', 'images/gallery/kitchen/kitchen005-cabinets-ontario-springfield-woodworking.jpg', 'Best Doors in Winnipeg', '2023-01-04 14:37:44'),
(60, 'kitchen', 'images/gallery/kitchen/lightweight-products-makers-kitchen004-springfield-woodworking.jpg', 'Best Kitchen Makers Winnipeg', '2023-01-04 14:37:44'),
(63, 'kitchen', 'images/gallery/kitchen/quartz-countertops-manitoba-kitchen003-springfield-woodworking.jpg', 'Best Kitchen Counter Tops Makers Winnipeg', '2023-01-04 14:37:44'),
(64, 'kitchen', 'images/gallery/kitchen/vanity-custom-cabinets-vancouver-kitchen006-springfield-woodworking.jpg', 'vanity custom cabinets vancouver', '2023-01-04 14:37:44'),
(118, 'bathroom', 'images/gallery/bathroom/modern-bathrooms201-woodworking-springfield-woodworking.jpg', 'modern bathrooms', '2023-01-04 14:37:44'),
(120, 'bathroom', 'images/gallery/bathroom/vanity-custom-cabinets-bathrooms29-vancouver-springfield-woodworking.jpg', 'Vanity Custom Cabinets', '2023-01-04 14:37:44'),
(124, 'bathroom', 'images/gallery/bathroom/custom-cabinets-manufacturer-winnipeg-manitoba.jpg', 'Custom Cabinets Manufacturer Winnipeg Manitoba', '2023-01-04 14:37:44'),
(127, 'bathroom', 'images/gallery/bathroom/custom-woodworking-company-winnipeg-manitoba.jpg', 'Best cabinet Makers Winnipeg', '2023-01-04 14:37:44'),
(128, 'bathroom', 'images/gallery/bathroom/washroom-furniture-springfield-woodworking.jpg', 'Washroom Furniture Springfield Woodworking', '2023-01-04 14:37:44'),
(129, 'bathroom', 'images/gallery/bathroom/woodworking-company-springfield-woodworking.jpg', 'Woodworking Company Springfield Woodworking', '2023-01-04 14:37:44'),
(132, 'furniture', 'images/gallery/furniture/best-woodworking-alberta-furniture10-springfield-woodworking.jpg', 'Best Woodworking Alberta', '2023-01-04 14:37:44'),
(143, 'showroom', 'images/gallery/showroom/IMG_3138.jpg', 'Granite Countertops Alberta', '2023-01-04 14:37:44'),
(144, 'showroom', 'images/gallery/showroom/IMG_3139.jpg', 'Granite Countertops Alberta', '2023-01-04 14:37:44'),
(145, 'showroom', 'images/gallery/showroom/IMG_3140.jpg', 'Granite Countertops Alberta', '2023-01-04 14:37:44'),
(146, 'showroom', 'images/gallery/showroom/IMG_3141.jpg', 'Granite Countertops Alberta', '2023-01-04 14:37:44'),
(147, 'showroom', 'images/gallery/showroom/IMG_3142.jpg', 'Granite Countertops Alberta', '2023-01-04 14:37:44'),
(148, 'showroom', 'images/gallery/showroom/IMG_3143.jpg', 'Granite Countertops Alberta', '2023-01-04 14:37:44'),
(149, 'showroom', 'images/gallery/showroom/IMG_3144.jpg', 'Granite Countertops Alberta', '2023-01-04 14:37:44'),
(150, 'showroom', 'images/gallery/showroom/IMG_3145.jpg', 'Granite Countertops Alberta', '2023-01-04 14:37:44'),
(151, 'showroom', 'images/gallery/showroom/IMG_3146.jpg', 'Granite Countertops Alberta', '2023-01-04 14:37:44'),
(152, 'showroom', 'images/gallery/showroom/best-custom-cabinetry-makers-winnipeg-showroom6-springfield-woodworking.jpg', 'Best Custom Cabinetry Makers Winnipeg', '2023-01-04 14:37:44'),
(153, 'showroom', 'images/gallery/showroom/best-woodworking-company-steinbach-showroom23-springfield-woodworking.jpg', 'Best Woodworking Company Steinbach', '2023-01-04 14:37:44'),
(154, 'showroom', 'images/gallery/showroom/best-woodworking-manitoba-showroom32-springfield-woodworking.jpg', 'Best Woodworking Manitoba', '2023-01-04 14:37:44'),
(155, 'showroom', 'images/gallery/showroom/best-woodworking-victoria-showroom29-springfield.jpg', 'Best Woodworking Victoria', '2023-01-04 14:37:44'),
(156, 'showroom', 'images/gallery/showroom/cabinetry-alberta-showroom9-springfield-woodworking.jpg', 'Cabinetry Woodworking Showroom', '2023-01-04 14:37:44'),
(157, 'showroom', 'images/gallery/showroom/cabinetry-brandon-showroom7-springfield-woodworking.jpg', 'Cabinetry Woodworking Brandon', '2023-01-04 14:37:44'),
(158, 'showroom', 'images/gallery/showroom/cabinetry-steinbach-showroom3-springfield-woodworking.jpg', 'Cabinetry Woodworking Steinbach', '2023-01-04 14:37:44'),
(159, 'showroom', 'images/gallery/showroom/cabinetry-victoria-showroom10-springfield-woodworking.jpg', 'Cabinetry Victoria', '2023-01-04 14:37:44'),
(161, 'showroom', 'images/gallery/showroom/custom-cabinetry-manitoba-showroom8-springfield-woodworking.jpg', 'Custom Cabinetry Manitoba', '2023-01-04 14:37:44'),
(162, 'showroom', 'images/gallery/showroom/custom-woodworking-manitoba-showroom31-springfield-woodworking.jpg', 'Custom Woodworking Manitoba', '2023-01-04 14:37:44'),
(163, 'showroom', 'images/gallery/showroom/custom-woodworking-ontario-showroom30-springfield-woodworking.jpg', 'Custom Woodworking Manitoba', '2023-01-04 14:37:44'),
(164, 'showroom', 'images/gallery/showroom/dovetail-drawers-showroom33-springfield-woodworking.jpg', 'Dovetail Drawers', '2023-01-04 14:37:44'),
(165, 'showroom', 'images/gallery/showroom/granite-countertops-alberta-showroom22-springfield-woodworking.jpg', 'Granite Countertops Alberta', '2023-01-04 14:37:44'),
(166, 'showroom', 'images/gallery/showroom/granite-countertops-ontario-showroom26-springfield-woodworking-winnipeg.jpg', 'Granite Countertops Ontario', '2023-01-04 14:37:44'),
(167, 'showroom', 'images/gallery/showroom/granite-countertops-showroom19-springfield-woodworking.jpg', 'Granite Countertops', '2023-01-04 14:37:44'),
(168, 'showroom', 'images/gallery/showroom/granite-countertops-victoria-showroom21-springfield-woodworking.jpg', 'Granite Countertops Victoria', '2023-01-04 14:37:44'),
(169, 'showroom', 'images/gallery/showroom/granite-countertops-Winnipeg-showroom11-springfield-woodworking.jpg', 'Granite Countertops Winnipeg', '2023-01-04 14:37:44'),
(170, 'showroom', 'images/gallery/showroom/granite-winnipeg-showroom27-springfield-woodworking-winnipeg.jpg', 'Granite Winnipeg', '2023-01-04 14:37:44'),
(171, 'showroom', 'images/gallery/showroom/hotel-motel-furniture-ontario-showroom2-springfield-woodworking.jpg', 'Hotel & Motel Furniture Ontario', '2023-01-04 14:37:44'),
(172, 'showroom', 'images/gallery/showroom/kitchen-materials-winnipeg-showroom25-springfield-woodworking.jpg', 'Kitchen Materials Winnipeg', '2023-01-04 14:37:44'),
(173, 'showroom', 'images/gallery/showroom/lightweight-quartz-steinbach-showroom16-springfield-woodworking.jpg', 'Lightweight Quartz Steinbach', '2023-01-04 14:37:44'),
(174, 'showroom', 'images/gallery/showroom/local-cabinet-makers-showroom5-springfield-woodworking.jpg', 'Local Cabinet Makers', '2023-01-04 14:37:44'),
(175, 'showroom', 'images/gallery/showroom/offer-sale-countertops-showroom35-springfield-woodworking-winnipeg.jpg', 'Offer Sale Countertops', '2023-01-04 14:37:44'),
(176, 'showroom', 'images/gallery/showroom/office-cabinets-winnipeg-showroom1-springfield-woodworking.jpg', 'Office Cabinets Winnipeg', '2023-01-04 14:37:44'),
(177, 'showroom', 'images/gallery/showroom/quartz-countertops-brandon-showroom17-springfield-woodworking.jpg', 'Quartz Countertops Brandon', '2023-01-04 14:37:44'),
(178, 'showroom', 'images/gallery/showroom/quartz-countertops-showroom20-springfield-woodworking.jpg', 'Quartz Countertops', '2023-01-04 14:37:44'),
(179, 'showroom', 'images/gallery/showroom/quartz-countertops-vancouver-showroom13-springfield-woodworking.jpg', 'Quartz Countertops Vancouver', '2023-01-04 14:37:44'),
(180, 'showroom', 'images/gallery/showroom/stone-countertops-kenora-showroom14-springfield-woodworking.jpg', 'Stone Countertops Kenora', '2023-01-04 14:37:44'),
(191, 'showroom', '/images/gallery/showroom/vanity-custom-cabinets-vancouver-showroom4-springfield-woodworking\r\n.jpg', 'Vanity Custom Cabinets Vancouver', '2023-01-04 14:19:35'),
(199, 'bathroom', '/images/gallery/bathroom/Untitled design (31).jpg', 'Pastel vanity, blue cabinets, custom cabinetry, bathroom cabinetry, sky blue', '2023-01-25 20:14:22'),
(200, 'bathroom', '/images/gallery/bathroom/Untitled design (30).jpg', 'white vanity, traditional, bathroom cabinetry, simple', '2023-01-25 20:16:02'),
(214, 'furniture', '/images/gallery/furniture/Untitled design (16).jpg', 'custom dining room furniture, modern cabinetry', '2023-01-25 20:30:45'),
(215, 'furniture', '/images/gallery/furniture/Untitled design (15).jpg', 'custom dining room furniture, modern cabinetry', '2023-01-25 20:31:25'),
(226, 'furniture', '/images/gallery/furniture/Natural wood floating bedside table.jpg', 'natural wood floating bedside table', '2023-02-01 16:23:54'),
(227, 'furniture', '/images/gallery/furniture/Natural wood tall office cabinet.jpg', 'natrual wood tall office custom cabinetry', '2023-02-01 16:24:38'),
(238, 'bathroom', '/images/gallery/bathroom/Black floating vanity watermark.jpg', 'black floating vanity', '2023-07-13 16:57:19'),
(239, 'bathroom', '/images/gallery/bathroom/16.png', 'blue custom bathroom vanity', '2023-07-13 16:59:47'),
(250, 'bathroom', '/images/gallery/bathroom/Long white floating vanity black ctop.jpg', 'floating white bathroom vanity', '2023-09-11 19:04:02'),
(263, 'kitchen', '/images/gallery/kitchen/Custon kitchen cabinets winnipeg.jpg', 'wood stained showroom island', '2024-01-25 16:54:15'),
(265, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg1.jpg', 'black white custom kitchen ', '2024-01-25 16:56:20'),
(266, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg2.jpg', 'black white custom kitchen ', '2024-01-25 16:58:39'),
(267, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg3.jpg', 'black white custom kitchen with pullouts and accessories', '2024-01-25 16:59:27'),
(268, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg4.jpg', 'black white custom kitchen with pullouts and accessories', '2024-01-25 16:59:56'),
(269, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg5.jpg', 'black white custom kitchen with pullouts and accessories', '2024-01-25 17:00:21'),
(270, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg6.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 17:01:27'),
(271, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg7.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 17:03:54'),
(272, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg8.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 17:04:49'),
(273, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg9.jpg', 'white and green simple painted kitchen Winnipeg', '2024-01-25 17:05:31'),
(274, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg10.jpg', 'white and green simple painted kitchen Winnipeg', '2024-01-25 17:06:04'),
(275, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg11.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 17:06:41'),
(276, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg12.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 17:07:32'),
(277, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg13.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 17:07:54'),
(278, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg14.jpg', 'white and blue simple painted kitchen Winnipeg', '2024-01-25 17:08:39'),
(279, 'kitchen', '/images/gallery/kitchen/custon kitchen cabinets winnipeg15.jpg', 'wood stained two toned custom kitchen winnipeg', '2024-01-25 17:10:40'),
(281, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg0.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 18:40:39'),
(282, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg1.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 18:41:11'),
(283, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg2.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 18:41:35'),
(287, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg5.jpg', 'Custom beige painted kitchen cabinetry winnipeg', '2024-01-25 18:45:57'),
(288, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg6.jpg', 'modern grey and white custom kitchen cabinets winnipeg', '2024-01-25 18:46:33'),
(289, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg7.jpg', 'wood custom bar kitchen', '2024-01-25 18:47:20'),
(290, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg8.jpg', 'wood stained custom kitchen cabinetry winnipeg', '2024-01-25 18:48:08'),
(291, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg9.jpg', 'wood stained custom kitchen cabinetry winnipeg', '2024-01-25 18:48:47'),
(292, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg10.jpg', 'wood stained custom kitchen cabinetry winnipeg', '2024-01-25 18:49:47'),
(293, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg11.jpg', 'wood stained custom kitchen cabinetry winnipeg', '2024-01-25 18:50:09'),
(294, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg12.jpg', 'custom cabinetry corner rollout accessory', '2024-01-25 18:50:59'),
(296, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg13.jpg', 'wood stained two toned custom kitchen winnipeg', '2024-01-25 18:52:59'),
(297, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg14.jpg', 'wood stained two toned custom kitchen winnipeg', '2024-01-25 18:53:04'),
(298, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg15.jpg', 'wood stained two toned custom kitchen winnipeg', '2024-01-25 18:53:33'),
(299, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg16.jpg', 'wood stained two toned custom kitchen winnipeg', '2024-01-25 18:54:06'),
(300, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg17.jpg', 'wood stained two toned custom kitchen winnipeg', '2024-01-25 18:54:33'),
(301, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg18.jpg', 'black bar kitchen custom cabinetry winnipeg', '2024-01-25 18:56:34'),
(302, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg19.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 18:57:19'),
(303, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg20.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 18:57:46'),
(304, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg21.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 18:58:22'),
(305, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg22.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 18:58:47'),
(306, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg23.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 18:59:08'),
(307, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg24.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 18:59:40'),
(308, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg25.jpg', 'modern grey and white custom kitchen cabinets winnipeg', '2024-01-25 19:00:10'),
(309, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg26.jpg', 'modern grey and white custom kitchen cabinets winnipeg', '2024-01-25 19:00:33'),
(310, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg27.jpg', 'wood stained two toned custom kitchen winnipeg', '2024-01-25 19:00:59'),
(311, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg28.jpg', 'wood stained two toned custom kitchen winnipeg', '2024-01-25 19:01:30'),
(312, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg29.jpg', 'modern wood two toned island kitchen', '2024-01-25 19:02:03'),
(313, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg30.jpg', 'wood custom bar kitchen', '2024-01-25 19:02:58'),
(314, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg31.jpg', 'wood custom bar kitchen', '2024-01-25 19:03:37'),
(315, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg32.jpg', 'wood custom bar kitchen', '2024-01-25 19:04:08'),
(316, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg33.jpg', 'wood custom bar kitchen', '2024-01-25 19:04:37'),
(317, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg34.jpg', 'black and walnut custom kitchen cabinets winnipeg', '2024-01-25 19:05:24'),
(320, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg36.jpg', 'black and walnut custom kitchen cabinets winnipeg', '2024-01-25 19:06:24'),
(322, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg37.jpg', 'black and walnut custom kitchen cabinets winnipeg', '2024-01-25 19:06:59'),
(325, 'kitchen', '/images/gallery/kitchen/Custom Kitchen Cabinets Winnipeg (2).jpg', 'black and walnut custom kitchen cabinets winnipeg', '2024-01-25 19:14:39'),
(327, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg.jpg', 'black and walnut custom kitchen cabinets winnipeg', '2024-01-25 19:16:33'),
(328, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg0.jpg', 'black and walnut custom kitchen cabinets winnipeg', '2024-01-25 19:17:04'),
(329, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg1.jpg', 'black and walnut custom kitchen cabinets winnipeg', '2024-01-25 19:17:28'),
(330, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg2.jpg', 'black and walnut custom kitchen cabinets winnipeg', '2024-01-25 19:17:47'),
(331, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg3.jpg', 'Navy/ Grey Custom laundry cabinets and wood shelves', '2024-01-25 19:18:22'),
(332, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg4.jpg', 'Navy/ grey / white two toned custom kitchen cabinetry', '2024-01-25 19:19:33'),
(333, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg5.jpg', 'Navy/ grey / white two toned custom kitchen cabinetry', '2024-01-25 19:20:28'),
(334, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg6.jpg', 'Navy/ grey / white two toned custom kitchen cabinetry', '2024-01-25 19:20:57'),
(335, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg7.jpg', 'Navy/ grey / white two toned custom kitchen cabinetry', '2024-01-25 19:21:19'),
(336, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg8.jpg', 'Navy/ grey / white two toned custom kitchen cabinetry', '2024-01-25 19:21:57'),
(337, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg9.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 19:22:47'),
(338, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg10.jpg', 'white simple painted kitchen Winnipeg', '2024-01-25 19:23:17'),
(339, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg11.jpg', 'white simple painted pantry kitchen Winnipeg', '2024-01-25 19:23:47'),
(340, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinetry winnipeg12.jpg', 'sage and white custom pantry kitchen cabinetry', '2024-01-25 19:24:40'),
(341, 'kitchen', '/images/gallery/kitchen/Custom kitchen cabinets winnipeg.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:33:51'),
(343, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg38.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:35:24'),
(345, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg39.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:36:02'),
(348, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg40.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:36:46'),
(350, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg41.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:37:39'),
(353, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg42.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:38:27'),
(355, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg43.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:38:56'),
(357, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg44.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:39:54'),
(359, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg45.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:40:38'),
(361, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg46.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:41:16'),
(363, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg47.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:42:00'),
(365, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg48.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:42:40'),
(367, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg49.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:43:13'),
(369, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg50.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:43:45'),
(371, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg51.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:44:54'),
(373, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg52.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:45:21'),
(377, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg53.jpg', '', '2024-01-25 22:46:08'),
(379, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg54.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:46:33'),
(381, 'kitchen', '/images/gallery/kitchen/custom kitchen cabinets winnipeg55.jpg', 'green custom kitchen cabinetry winnipeg', '2024-01-25 22:47:02'),
(382, 'kitchen', '/images/gallery/kitchen/P1155730.jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:28:35'),
(383, 'kitchen', '/images/gallery/kitchen/P1155753.jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:28:55'),
(384, 'kitchen', '/images/gallery/kitchen/P1155760.jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:29:13'),
(385, 'kitchen', '/images/gallery/kitchen/P1155765.jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:29:30'),
(386, 'kitchen', '/images/gallery/kitchen/P1155781.jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:29:44'),
(387, 'kitchen', '/images/gallery/kitchen/pine creek 5.jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:30:46'),
(388, 'kitchen', '/images/gallery/kitchen/pine creek 6.jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:31:11'),
(389, 'kitchen', '/images/gallery/kitchen/pine creek 1.jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:32:29'),
(390, 'kitchen', '/images/gallery/kitchen/pine creek 2-1.jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:32:41'),
(391, 'kitchen', '/images/gallery/kitchen/IMG_3276 (002).jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:33:26'),
(392, 'kitchen', '/images/gallery/kitchen/IMG_3277 (002).jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:33:38'),
(393, 'kitchen', '/images/gallery/kitchen/IMG_3279 (002).jpg', 'winnipeg custom cabinetry kitchen', '2024-08-22 17:33:57'),
(394, 'bathroom', '/images/gallery/bathroom/DSC01951.jpg', 'green custom kitchen cabinetry winnipeg', '2025-01-09 16:35:45'),
(395, 'bathroom', '/images/gallery/bathroom/P1155823.jpg', 'white simple painted kitchen Winnipeg', '2025-01-09 16:36:39'),
(396, 'bathroom', '/images/gallery/bathroom/P1155819.jpg', 'grey vanity winnipeg', '2025-01-09 16:38:07'),
(399, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0020.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:33:43'),
(400, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0019.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:33:55'),
(401, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0018.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:34:31'),
(402, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0017.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:37:49'),
(403, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0016.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:38:13'),
(404, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0015.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:38:28'),
(405, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0014.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:38:39'),
(406, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0013.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:38:47'),
(408, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0012.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:39:34'),
(409, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0011.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:39:44'),
(410, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0010.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:39:52'),
(411, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0009.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:40:02'),
(412, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0008.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:40:11'),
(413, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0007.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:41:03'),
(414, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0006.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:41:13'),
(415, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0005.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:41:21'),
(416, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0004.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:41:30'),
(417, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0003.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:41:38'),
(418, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0002.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:41:46'),
(419, 'kitchen', '/images/gallery/kitchen/2025-Brochure-Springfield-Woodworking_page-0001.jpg', '2025-Brochure-Springfield-Woodworking', '2025-05-16 09:41:53'),
(421, 'showroom', 'images/gallery/showroom/168A8985.jpg', 'Best Woodworking Company', '2025-08-16 04:54:16'),
(422, 'showroom', 'images/gallery/showroom/168A9100.jpg', 'Best Woodworking Company', '2025-08-16 04:54:16'),
(423, 'showroom', 'images/gallery/showroom/168A9106.jpg', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(424, 'showroom', 'images/gallery/showroom/168A9228-Enhanced-NR.jpg', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(425, 'showroom', 'images/gallery/showroom/168A9244-Enhanced-NR.jpg', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(426, 'showroom', 'images/gallery/showroom/168A9248.jpg', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(428, 'showroom', 'images/gallery/showroom/Fireplace centered.jpg', 'Fireplace centered', '2025-08-16 05:05:05'),
(429, 'showroom', 'images/gallery/showroom/Fireplace far zoom out.jpg', 'Fireplace far zoom out', '2025-08-16 05:05:05'),
(430, 'showroom', 'images/gallery/showroom/Fireplace right.jpg', 'Fireplace right', '2025-08-16 05:05:05'),
(431, 'showroom', 'images/gallery/showroom/Modern wood floating shelves.jpg', 'Modern wood floating shelves', '2025-08-16 05:05:05'),
(434, 'showroom', 'images/gallery/showroom/Modern wood floating vanity 3.jpg', 'Modern wood floating vanity', '2025-08-16 05:05:05'),
(435, 'showroom', 'images/gallery/showroom/Modern wood floating vanity 4.jpg', 'Modern wood floating vanity', '2025-08-16 05:05:05'),
(436, 'showroom', 'images/gallery/showroom/Modern wood floating vanity 5.jpg', 'Modern wood floating vanity', '2025-08-16 05:05:05'),
(437, 'showroom', 'images/gallery/showroom/Modern wood floating vanity w tub.jpg', 'Modern wood floating vanity', '2025-08-16 05:05:05'),
(438, 'showroom', 'images/gallery/showroom/P1068055.png', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(439, 'showroom', 'images/gallery/showroom/P1068057.png', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(440, 'showroom', 'images/gallery/showroom/P1068067.png', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(441, 'showroom', 'images/gallery/showroom/P1068068.png', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(442, 'showroom', 'images/gallery/showroom/P1068071.png', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(443, 'showroom', 'images/gallery/showroom/P1068082.png', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(444, 'showroom', 'images/gallery/showroom/P1068090.png', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(445, 'showroom', 'images/gallery/showroom/received_862579135281485.jpg', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(447, 'showroom', 'images/gallery/showroom/received_6679346548791755.jpg', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(448, 'showroom', 'images/gallery/showroom/routered handles.jpg', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(449, 'showroom', 'images/gallery/showroom/Simple white office.jpg', 'Best Woodworking Company', '2025-08-16 05:05:05'),
(450, 'showroom', 'images/gallery/showroom/04.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(451, 'showroom', 'images/gallery/showroom/22.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(452, 'showroom', 'images/gallery/showroom/24.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(453, 'showroom', 'images/gallery/showroom/_ 168A9239-Enhanced-NR.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(454, 'showroom', 'images/gallery/showroom/_1068770.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(455, 'showroom', 'images/gallery/showroom/_1068772.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(456, 'showroom', 'images/gallery/showroom/_1068774.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(457, 'showroom', 'images/gallery/showroom/_1068780.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(458, 'showroom', 'images/gallery/showroom/_1068784.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(459, 'showroom', 'images/gallery/showroom/_1068793.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(460, 'showroom', 'images/gallery/showroom/_1068801.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(461, 'showroom', 'images/gallery/showroom/_1068828.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(462, 'showroom', 'images/gallery/showroom/_1068833.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(463, 'showroom', 'images/gallery/showroom/_1068805.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(464, 'showroom', 'images/gallery/showroom/_1068878.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(465, 'showroom', 'images/gallery/showroom/_1068886.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(466, 'showroom', 'images/gallery/showroom/_1068782.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(467, 'showroom', 'images/gallery/showroom/_1068937.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(468, 'showroom', 'images/gallery/showroom/_1068948.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(469, 'showroom', 'images/gallery/showroom/_ 168A8575.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(470, 'showroom', 'images/gallery/showroom/_ 168A8650.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(471, 'showroom', 'images/gallery/showroom/_1068930.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(472, 'showroom', 'images/gallery/showroom/_1068939.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(473, 'showroom', 'images/gallery/showroom/_1068984.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(474, 'showroom', 'images/gallery/showroom/168A0784.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(475, 'showroom', 'images/gallery/showroom/168A8595.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(476, 'showroom', 'images/gallery/showroom/168A0962.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(477, 'showroom', 'images/gallery/showroom/4.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(478, 'showroom', 'images/gallery/showroom/5.webp', 'Best Woodworking Company', '2025-08-16 06:33:15'),
(479, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7351.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(480, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7526.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(481, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7249.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(482, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7252.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(483, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7380.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(484, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7392.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(485, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7401.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(486, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7386.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(487, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7390.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(488, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7411.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(489, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7422.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(490, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7265.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(491, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7375.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(492, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7536.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(493, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7645.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(494, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7618.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(495, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7532.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(496, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7541.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(497, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7614.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(498, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7548.webp', 'Best Woodworking Company', '2025-08-16 06:51:05'),
(499, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6467.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(500, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6479.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(501, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7146.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(502, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6368.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(503, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6416.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(504, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6436.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(505, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6476.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(506, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6864.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(507, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7114.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(508, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6381.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(509, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6775.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(510, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6800.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(511, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7080.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(512, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7179.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(513, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7193.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(514, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7239.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(515, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7242.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(516, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6414.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(517, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6423.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(518, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6456.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(519, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6485.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(520, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6869.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(521, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7012.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(522, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7054.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(523, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7166.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(524, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7027.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(525, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7073.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(526, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7161.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(527, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7150.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(528, 'showroom', 'images/gallery/showroom/Springfield Woodworking-7168.webp', 'Best Woodworking Company', '2025-08-16 07:14:03'),
(529, 'showroom', 'images/gallery/showroom/4.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(530, 'showroom', 'images/gallery/showroom/5.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(531, 'showroom', 'images/gallery/showroom/6.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(532, 'showroom', 'images/gallery/showroom/7.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(533, 'showroom', 'images/gallery/showroom/22.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(534, 'showroom', 'images/gallery/showroom/34.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(535, 'showroom', 'images/gallery/showroom/2024 award 2.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(536, 'showroom', 'images/gallery/showroom/2024 award.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(537, 'showroom', 'images/gallery/showroom/fa41e400-ca19-4d3e-afa3-edea3b3b4187 (002).webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(538, 'showroom', 'images/gallery/showroom/jk.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(539, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5776.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(540, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6263.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(541, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5749.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(542, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5868.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(543, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5872.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(544, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5921.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(545, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6309.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(546, 'showroom', 'images/gallery/showroom/0G6A4553.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(547, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5778.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(548, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5875.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(549, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5897.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(550, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5464.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(551, 'showroom', 'images/gallery/showroom/0G6A4566.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(552, 'showroom', 'images/gallery/showroom/0G6A4538.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(553, 'showroom', 'images/gallery/showroom/0G6A4556.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(554, 'showroom', 'images/gallery/showroom/0G6A4561.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(555, 'showroom', 'images/gallery/showroom/0G6A4518.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(556, 'showroom', 'images/gallery/showroom/0G6A4536.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(557, 'showroom', 'images/gallery/showroom/0G6A4540.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(558, 'showroom', 'images/gallery/showroom/0G6A4547.webp', 'Best Woodworking Company', '2025-08-16 08:00:05'),
(559, 'showroom', 'images/gallery/showroom/7.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(560, 'showroom', 'images/gallery/showroom/2024 award 2.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(561, 'showroom', 'images/gallery/showroom/2024 award.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(562, 'showroom', 'images/gallery/showroom/3434.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(563, 'showroom', 'images/gallery/showroom/fa41e400-ca19-4d3e-afa3-edea3b3b4187 (002).webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(564, 'showroom', 'images/gallery/showroom/jk.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(565, 'showroom', 'images/gallery/showroom/34534534.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(566, 'showroom', 'images/gallery/showroom/23424.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(567, 'showroom', 'images/gallery/showroom/6.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(568, 'showroom', 'images/gallery/showroom/5.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(569, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5776.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(570, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6263.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(571, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5868.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(572, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5872.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(573, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5921.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(574, 'showroom', 'images/gallery/showroom/Springfield Woodworking-6309.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(575, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5749.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(576, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5875.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(577, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5897.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(578, 'showroom', 'images/gallery/showroom/0G6A4553.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(579, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5778.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(580, 'showroom', 'images/gallery/showroom/Springfield Woodworking-5464.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(581, 'showroom', 'images/gallery/showroom/0G6A4515.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(582, 'showroom', 'images/gallery/showroom/0G6A4516.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(583, 'showroom', 'images/gallery/showroom/0G6A4566.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(584, 'showroom', 'images/gallery/showroom/0G6A4556.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(585, 'showroom', 'images/gallery/showroom/0G6A4538.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(586, 'showroom', 'images/gallery/showroom/0G6A4561.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(587, 'showroom', 'images/gallery/showroom/0G6A4507.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(588, 'showroom', 'images/gallery/showroom/0G6A4518.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(589, 'showroom', 'images/gallery/showroom/0G6A4512.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(590, 'showroom', 'images/gallery/showroom/0G6A4510.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(591, 'showroom', 'images/gallery/showroom/0G6A4536.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(592, 'showroom', 'images/gallery/showroom/0G6A4502.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(593, 'showroom', 'images/gallery/showroom/0G6A4540.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(594, 'showroom', 'images/gallery/showroom/0G6A4547.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(595, 'showroom', 'images/gallery/showroom/0G6A4495.webp', 'Best Woodworking Company', '2025-08-16 08:12:59'),
(596, 'showroom', 'images/gallery/showroom/7868.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(597, 'showroom', 'images/gallery/showroom/0G6A4452.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(598, 'showroom', 'images/gallery/showroom/0G6A4473.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(599, 'showroom', 'images/gallery/showroom/0G6A4478.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(600, 'showroom', 'images/gallery/showroom/0G6A4440.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(601, 'showroom', 'images/gallery/showroom/0G6A4442.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(602, 'showroom', 'images/gallery/showroom/0G6A4445.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(603, 'showroom', 'images/gallery/showroom/0G6A4448.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(604, 'showroom', 'images/gallery/showroom/0G6A4447.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(605, 'showroom', 'images/gallery/showroom/0G6A4468.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(606, 'showroom', 'images/gallery/showroom/0G6A4481.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(607, 'showroom', 'images/gallery/showroom/0G6A4486.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(608, 'showroom', 'images/gallery/showroom/0G6A4471.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(609, 'showroom', 'images/gallery/showroom/0G6A4450.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(610, 'showroom', 'images/gallery/showroom/0G6A4475.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(611, 'showroom', 'images/gallery/showroom/0G6A4457.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(612, 'showroom', 'images/gallery/showroom/0G6A4437.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(613, 'showroom', 'images/gallery/showroom/0G6A4464.webp', 'Best Woodworking Company', '2025-08-16 08:24:49'),
(614, 'showroom', 'images/gallery/showroom/0G6A4462.webp', 'Best Woodworking Company', '2025-08-16 08:24:49');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `link`) VALUES
(4, 'Home', '/'),
(5, 'Kitchen Cabinets', 'custom-kitchen-cabinets'),
(6, 'Bath Cabinets', 'custom-bathroom-cabinets-winnipeg'),
(7, 'Cabinet Doors', 'cabinet-doors-winnipeg'),
(8, 'New Home Cabinets', 'best-custom-cabinets-company-in-winnipeg'),
(9, 'Get Started', 'get-started'),
(10, 'Gallery', 'custom-cabinet-manufacturer-canada'),
(11, 'Contact', 'contact');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `content`, `created_at`) VALUES
(1, 'Karen McNanney', 'Springfield is a great place to get any type of cabinets. We own a resort on Lake of the Woods and have ordered four kitchens now. They do an amazing job and their cabinets hold up very well. Here is one of our cabins with a new kitchen we installed from Springfield.', '2025-11-19 12:01:32'),
(2, 'Irene Maendel', 'I had an amazing experience with Springfield Woodworking, who designed, built, and installed my stunning white maple kitchen cabinets. The team was incredibly patient and professional throughout the process. I changed my mind a few times, especially when we converted a pantry into a coffee kiosk—a complicated project, but they handled it flawlessly! Jonathan, my sales rep, was an absolute gem, always patient and accommodating with all my demands. The installation was smooth, efficient, and top-notch. I couldn’t be happier with the results. If you’re looking for a no-hassle, professional kitchen install, go with Springfield Woodworking! Love, love, love my new kitchen!', '2025-11-19 12:09:15'),
(3, 'Karen McNanney', 'Springfield is a great place to get any type of cabinets. We own a resort on Lake of the Woods and have ordered four kitchens now. They do an amazing job and their cabinets hold up very well. Here is one of our cabins with a new kitchen we installed from Springfield.', '2025-11-19 12:11:23'),
(4, 'Irene Maendel', 'I had an amazing experience with Springfield Woodworking, who designed, built, and installed my stunning white maple kitchen cabinets. The team was incredibly patient and professional throughout the process. I changed my mind a few times, especially when we converted a pantry into a coffee kiosk—a complicated project, but they handled it flawlessly! Jonathan, my sales rep, was an absolute gem, always patient and accommodating with all my demands. The installation was smooth, efficient, and top-notch. I couldn’t be happier with the results. If you’re looking for a no-hassle, professional kitchen install, go with Springfield Woodworking! Love, love, love my new kitchen!', '2025-11-19 12:11:23'),
(5, 'JD Sheegl', 'Jerome and Sally are lovely to deal with. Our installer Alex was awesome as well. We bought our kitchen cabinets from Springfield in 2020. This fall we noticed the paint was chipping off on some of the cabinet fronts. When we called to ask about the issue, they sent 3 people to come inspect the problem. They ended up replacing all of our cabinet fronts almost 5 years later free of charge. Knowing that they stand behind their product and after experiencing the care and concern they show to their customers, I would use them again for any future projects.', '2025-11-19 12:11:23'),
(6, 'Redback Momma', 'What a friendly yet professional environment. Jonathan the sales rep was so helpful, taking the time to answer all the questions I had. A huge beautiful show room, so classy. Pauly was very open and professional about all our concerns and questions. Definitely look forward to working with them.', '2025-11-19 12:11:23'),
(7, 'Jan Neufeld', 'Amazing service and design ideas, fast response time (sample drawings were in our inbox within an hour), great price (lowest quote of three companies), on time and quality installation and product. Wouldn’t change a thing - love our new kitchen. We are very happy we chose Springfield Woodworking. We have made referrals to others and highly recommend.', '2025-11-19 12:11:23'),
(8, 'Rhaena Chambers', 'Very good quality craftsmanship and great prices. Their sales team knows their products well and gives honest opinions about the products. We did have a miscommunication with our kitchen but they fixed the issue and ensured that we were happy with the finished product. Each installer took pride in their work. Just keep in mind that the install will not be finished in a day; it takes some time to complete the entire project.', '2025-11-19 12:11:23'),
(9, 'K W', 'The design, color, and quality were exactly what we were looking for. A special thanks to Vern, who was very patient and extremely knowledgeable. The cabinets were delivered and installed on time. Highly recommend.', '2025-11-19 12:11:23'),
(10, 'tim shaw', 'Went to 5 places for quotes, and Springfield Woodworking was the least expensive. I can’t say cheapest because they look like well-made cabinets. Jonathan was great, answering all questions. Shawn, the installer, was friendly and highly skilled. Would definitely recommend Springfield Woodworking and use them again.', '2025-11-19 12:11:23'),
(11, 'Arnold Hryciuk', 'We recently did a kitchen reno and purchased rustic hickory cabinets from Springfield Woodworking. The quality, fit, finish, and attention to detail are second to none. The team arranged the cuts beautifully for the rustic look we wanted. Glenn in sales was great, and Tyrone our installer did an amazing job. A few mistakes happened but were fixed promptly. Highly recommended.', '2025-11-19 12:11:23'),
(12, 'Ally Amedick', 'We used Springfield for our kitchen and bathroom renos. Sue was beyond understanding and helpful with making the best of a difficult situation. Great timeline, great quality, lowest cost, and excellent workmanship. Highly recommended.', '2025-11-19 12:11:23'),
(13, 'Tamara Khoma', 'Stunning kitchen! Outstanding service—from design, cabinet quality, and installation. A wonderful group of people and an amazing experience.', '2025-11-19 12:11:23'),
(14, 'Cassidy Frey', 'Overall an extremely easy process from start to finish. Everyone involved was fantastic. I will recommend them again and again. Great quality, great value.', '2025-11-19 12:11:23'),
(15, 'Jan Hamilton', 'I feel confident giving 5 stars to the professionals who redesigned, created, and installed my dream kitchen. Thank you Springfield Woodworking!', '2025-11-19 12:11:23'),
(16, 'Claudio Campanella', 'Hands down the best cabinet builders in the country. I’ve been in the industry for 30 years, and Springfield is the best of the best. Keep up the great work!', '2025-11-19 12:11:23'),
(17, 'Colin Tait', 'Had a kitchen installed 2 months ago and love it. Great quality and price was significantly less than other providers.', '2025-11-19 12:11:23'),
(18, 'Will Diaz-Rojas', 'Best kitchen ever. The quality, price, and customer service are amazing. They truly care about customers.', '2025-11-19 12:11:23'),
(19, 'Dave DeVos', 'Very good company. Excellent cabinets and great experience from start to finish.', '2025-11-19 12:11:23'),
(20, 'Lena Wurtz', 'If you need kitchen cabinets, go see their showroom. Beautiful and great service.', '2025-11-19 12:11:23'),
(21, 'Jordan Jacobs', 'Great place to buy cabinets!', '2025-11-19 12:11:23'),
(22, 'Ray Swiderek', 'Excellent craftsmanship and customer service.', '2025-11-19 12:11:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_slider`
--
ALTER TABLE `client_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms`
--
ALTER TABLE `cms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doors`
--
ALTER TABLE `doors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `client_slider`
--
ALTER TABLE `client_slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `cms`
--
ALTER TABLE `cms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `doors`
--
ALTER TABLE `doors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=619;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
