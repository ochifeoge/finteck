import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const baseUrl = import.meta.env.BASE_URL;

export const logo = `${baseUrl}assets/logo.svg`;
export const appStore = `${baseUrl}assets/Download app buttons.png`;
export const heroImg = `${baseUrl}assets/heroImg.jpg`;
export const heroImg2 = `${baseUrl}assets/heroImg2.jpg`;
export const prefooterImg = `${baseUrl}assets/preFooter.jpg`;

export const trustLogos = [
  `${baseUrl}assets/visa.svg`,
  `${baseUrl}assets/PayPal svg.svg`,
  `${baseUrl}assets/Microsoft svg.svg`,
  `${baseUrl}assets/Amazon svg.svg`,
  `${baseUrl}assets/Mastercard svg.svg`,
  `${baseUrl}assets/Google svg.svg`,
];

export const gridImg1 = `${baseUrl}assets/Frame 2609638.jpg`;
export const gridImg2 = `${baseUrl}assets/gridImg2.jpg`;

export const userImg = `${baseUrl}assets/Ellipse 6.jpg`;
export const about = [
  {
    label: "easy",
    heading: "Intuitive user experience",
    text: "The user-friendly nature of charge cards simplifies the payment process.",
  },
  {
    label: "fast",
    heading: "NFC technology",
    text: "Ensures quick purchases, avoiding delays of traditional methods.",
  },
  {
    label: "smart",
    heading: "payment calculator",
    text: "Uses smart tech for contactless payments, real-time tracking",
  },
  {
    label: "Innovative",
    heading: "Cash back search",
    text: " Charge cards continually evolve with innovative features and technologies.",
  },
  {
    label: "safe",
    heading: "Encrypted transaction",
    text: "Prioritizes safe transactions with encryption, biometrics, and fraud detection.",
  },

  {
    label: "Protection",
    heading: "24/7 security support",
    text: "Offers strong protection with zero liability, purchase coverage, and extended warranties.",
  },
];

export const others = [
  {
    heading: "payment history",
    text: " Easily track and manage your transactions, ensuring a clear and accurate record of your financial activity.",
  },
  {
    heading: "advance analytics",
    text: "Access detailed insights into your spending patterns and make informed decisions to optimize your financial strategy.",
  },
  {
    heading: "smart budgeting",
    text: "Set personalized spending limits, receive alerts, and utilize smart tools to stay on top of your financial goals",
  },
];

export const faqs = [
  {
    id: "1",
    question: "When do segments complete",
    answer:
      "Segments complete when all required tasks within the segment are finished and approved.",
  },
  {
    id: "2",
    question: "How to track spending with charge cards?",
    answer:
      "You can track spending in real-time using the payment calculator and transaction history features.",
  },
  {
    id: "3",
    question: "What security measures are in place?",
    answer:
      "Charge cards use encrypted transactions, biometrics, and fraud detection to ensure safety.",
  },
  {
    id: "4",
    question: "Can I get cashback rewards?",
    answer:
      "Yes, our charge cards offer innovative cashback search features to maximize your rewards.",
  },
];

export const menu = ["home", "pricing", "about"];
export const industrySolutions = [
  "Financial Services",
  "fashion & beauty",
  "Agriculture",
  "manufacturing",
  "education",
];

export const socialIcons = [
  {
    name: "facebook",
    icon: FaFacebook,
  },
  {
    name: "twitter",
    icon: FaTwitter,
  },
  {
    name: "instagram",
    icon: FaInstagram,
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
  },
  {
    name: "youtube",
    icon: FaYoutube,
  },
];
