const translations = {
  el: {
    navAbout:"Σχετικά",navServices:"Υπηρεσίες",navPortfolio:"Ακίνητα",navContact:"Επικοινωνία",
    eyebrow:"ΔΙΑΧΕΙΡΙΣΗ ΑΚΙΝΗΤΩΝ & ΣΥΜΒΟΥΛΕΥΤΙΚΗ",
    heroTitle:"Φροντίδα για το ακίνητό σας.<br><em>Εμπιστοσύνη σε κάθε βήμα.</em>",
    heroText:"Ολοκληρωμένες υπηρεσίες διαχείρισης και συμβουλευτικής ακινήτων, με συνέπεια, διαφάνεια και προσωπική προσέγγιση σε όλη την Ελλάδα.",
    heroButton:'Επικοινωνήστε μαζί μας <span aria-hidden="true">↗</span>',heroCaption:"Επιλεγμένα ακίνητα · Ελλάδα",
    aboutEyebrow:"ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ",aboutTitle:"Η σωστή διαχείριση<br>κάνει τη διαφορά.",
    aboutText:"Η Progression Services προσφέρει υπηρεσίες διαχείρισης και συμβουλευτικής για οικιστικά και επιλεγμένα επαγγελματικά ακίνητα. Στόχος μας είναι να υποστηρίζουμε ιδιοκτήτες με υπευθυνότητα, πρακτική σκέψη και σταθερή επικοινωνία.",
    aboutText2:"Κάθε ακίνητο έχει τις δικές του ανάγκες. Προσεγγίζουμε κάθε συνεργασία με προσοχή στη λεπτομέρεια και λύσεις που ανταποκρίνονται στις πραγματικές ανάγκες του ιδιοκτήτη.",
    servicesEyebrow:"ΤΙ ΠΡΟΣΦΕΡΟΥΜΕ",servicesTitle:"Υπηρεσίες με ουσία.",servicesIntro:"Υποστήριξη για την καθημερινή λειτουργία και τη μακροπρόθεσμη αξιοποίηση του ακινήτου σας.",
    service1Title:"Διαχείριση κατοικιών",service1Text:"Οργάνωση και συντονισμός θεμάτων που αφορούν τη διαχείριση και τη φροντίδα κατοικιών.",
    service2Title:"Διαχείριση επαγγελματικών ακινήτων",service2Text:"Πρακτική υποστήριξη για επιλεγμένα μικρά επαγγελματικά ακίνητα.",
    service3Title:"Συμβουλευτικές υπηρεσίες",service3Text:"Καθοδήγηση και υποστήριξη σε ζητήματα που σχετίζονται με τη διαχείριση ακινήτων.",
    servicesDisclaimer:"Το ακριβές αντικείμενο κάθε συνεργασίας διαμορφώνεται ανάλογα με τις ανάγκες του ακινήτου και κατόπιν συνεννόησης.",
    portfolioEyebrow:"ΕΝΔΕΙΚΤΙΚΟ PORTFOLIO",portfolioTitle:"Χώροι με χαρακτήρα.",portfolioIntro:"Μια πρώτη ματιά σε οικιστικά ακίνητα από το portfolio μας.",
    gallery1:"Κατοικία με ευρύχωρη βεράντα",gallery2:"Κοινόχρηστοι εξωτερικοί χώροι",
    contactEyebrow:"ΕΠΙΚΟΙΝΩΝΙΑ",contactTitle:"Ας συζητήσουμε<br><em>τι χρειάζεται το ακίνητό σας.</em>",
    contactText:"Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες σας και να εξετάσουμε πώς μπορούμε να βοηθήσουμε.",
    contactEmailLabel:"EMAIL",contactPhoneLabel:"ΤΗΛΕΦΩΝΟ",phonePlaceholder:"Προσθέστε αριθμό τηλεφώνου",contactAreaLabel:"ΠΕΡΙΟΧΗ ΕΞΥΠΗΡΕΤΗΣΗΣ",areaValue:"Σε όλη την Ελλάδα",
    contactButton:'Στείλτε μας email <span aria-hidden="true">↗</span>',footerText:"Διαχείριση ακινήτων & συμβουλευτική · Ελλάδα"
  },
  en: {
    navAbout:"About",navServices:"Services",navPortfolio:"Properties",navContact:"Contact",
    eyebrow:"PROPERTY MANAGEMENT & CONSULTING",
    heroTitle:"Thoughtful care for your property.<br><em>Confidence at every step.</em>",
    heroText:"Property management and consulting services delivered with consistency, transparency and a personal approach throughout Greece.",
    heroButton:'Get in touch <span aria-hidden="true">↗</span>',heroCaption:"Selected properties · Greece",
    aboutEyebrow:"ABOUT US",aboutTitle:"Good management<br>makes a difference.",
    aboutText:"Progression Services provides management and consulting services for residential properties and selected small commercial properties. We aim to support property owners through responsible service, practical thinking and clear communication.",
    aboutText2:"Every property has its own needs. We approach each collaboration with attention to detail and solutions shaped around the owner's requirements.",
    servicesEyebrow:"WHAT WE DO",servicesTitle:"Services with purpose.",servicesIntro:"Support for the day-to-day care and long-term stewardship of your property.",
    service1Title:"Residential property management",service1Text:"Organisation and coordination of matters relating to the management and care of residential properties.",
    service2Title:"Commercial property management",service2Text:"Practical support for selected small commercial properties.",
    service3Title:"Real estate consulting",service3Text:"Guidance and support on matters related to property management.",
    servicesDisclaimer:"The scope of each engagement is agreed individually, according to the property's needs.",
    portfolioEyebrow:"SELECTED PORTFOLIO",portfolioTitle:"Spaces with character.",portfolioIntro:"A first look at residential properties from our portfolio.",
    gallery1:"Residence with a spacious terrace",gallery2:"Landscaped communal outdoor spaces",
    contactEyebrow:"CONTACT",contactTitle:"Let's discuss<br><em>what your property needs.</em>",
    contactText:"Get in touch to discuss your requirements and explore how we may be able to help.",
    contactEmailLabel:"EMAIL",contactPhoneLabel:"TELEPHONE",phonePlaceholder:"Add telephone number",contactAreaLabel:"SERVICE AREA",areaValue:"Throughout Greece",
    contactButton:'Send us an email <span aria-hidden="true">↗</span>',footerText:"Property management & consulting · Greece"
  }
};
let currentLanguage = "el";
const langButton = document.querySelector(".language-toggle");
function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  langButton.textContent = lang === "el" ? "EN" : "GR";
}
langButton.addEventListener("click", () => setLanguage(currentLanguage === "el" ? "en" : "el"));
document.querySelector("#year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navigation");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
document.querySelectorAll(".gallery-button").forEach(button => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.hidden = false;
  });
});
function closeLightbox(){lightbox.hidden = true; lightboxImage.src = "";}
lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {if(e.target === lightbox) closeLightbox();});
document.addEventListener("keydown", e => {if(e.key === "Escape") closeLightbox();});
