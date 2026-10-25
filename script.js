const translations = {
 ar: {
  brand:"البحث",navAbout:"عن البحث",navDownload:"تحميل البحث",eyebrow:"بحث تعليمي • نسختان متاحتان",
  heroTitle:'التحديات التي تواجه الطلاب في العملية التعليمية <em>وطرق التغلب عليها</em>',
  heroDesc:"صانع البحث : نورالدين محمود نصار ",
  heroCta:"تحميل البحث",learnMore:"عن الموقع",metaLanguages:"العربية والإنجليزية",metaFormat:"ملفات PDF",
  chipReady:"جاهز للتحميل",arabicVersion:"النسخة العربية",docTitle:"بحثك الدراسي",docSubtitle:"نسخة جاهزة للتحميل",chipBilingual:"متاح بلغتين",
  footerText:"صفحة بسيطة للوصول إلى بحثك الدراسي.",copyright:"جميع الحقوق محفوظة"
 },
 en: {
  brand:"My Study",navAbout:"About",navDownload:"Download",eyebrow:"STUDY PROJECT • TWO VERSIONS",
  heroTitle:'Challenges Students Face in Education <em>and How to Overcome Them</em>',
  heroDesc:"A dedicated page for your study, with easy downloads of your original Arabic and English PDF versions on phones and computers.",
  heroCta:"Download study",learnMore:"About this site",metaLanguages:"Arabic & English",metaFormat:"PDF files",
  chipReady:"Ready to download",arabicVersion:"Arabic version",docTitle:"Your study paper",docSubtitle:"Ready-to-download copy",chipBilingual:"Two languages",
  heroBottom:"Your study, in your language, anytime.",sectionKicker:"ABOUT THE SITE",aboutTitle:"Both versions in one place",
  aboutDesc:"This website makes your study easy to access. Your study content will not be changed—add your two original PDF files and visitors can download them.",
  feature1Title:"Arabic version",feature1Desc:"A direct download for your original Arabic study PDF.",
  feature2Title:"English version",feature2Desc:"A direct download for your original English study PDF.",
  feature3Title:"Responsive design",feature3Desc:"Adapts to phones, tablets, laptops, and desktop screens.",
  feature4Title:"Bilingual interface",feature4Desc:"Switch the website between Arabic and English with one click.",
  downloadKicker:"YOUR FILES",downloadTitle:"Choose a language and download",
  downloadDesc:"Use the buttons to download your study. Before publishing, place your original PDFs in the pdfs folder using the filenames shown in README.",
  downloadNote:"PDFs are not included yet. Add your original files to enable downloads.",arabicLabel:"Arabic",
  arabicFileTitle:"Student challenges — Arabic",englishLabel:"English",englishFileTitle:"Student Challenges — English",
  pdfFormat:"PDF document",downloadButton:"Download",quote:"Learning begins when knowledge is within everyone's reach.",
  footerText:"A simple home for your study files.",copyright:"All rights reserved"
 }
};
const toggle = document.getElementById("languageToggle");
function setLanguage(lang){
 const dict = translations[lang] || translations.ar;
 document.documentElement.lang = lang;
 document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
 document.body.dir = document.documentElement.dir;
 document.querySelectorAll("[data-i18n]").forEach(el => {
   const key = el.dataset.i18n;
   if (dict[key] !== undefined) el.innerHTML = dict[key];
 });
 toggle.innerHTML = lang === "ar" ? 'English <span>↗</span>' : 'العربية <span>↗</span>';
 toggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
 localStorage.setItem("study-site-language", lang);
}
toggle.addEventListener("click", () => setLanguage(document.documentElement.lang === "ar" ? "en" : "ar"));
document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("study-site-language") || "ar");
