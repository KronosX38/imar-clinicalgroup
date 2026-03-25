/* ═══════════════════════════════════════════════
   IMAR MEDICAL GROUP — main.js
   Bilingüe ES/EN + Cookie notice
═══════════════════════════════════════════════ */

const translations = {
  es: {
    nav_servicios:'Servicios',nav_instalaciones:'Instalaciones',nav_nosotros:'Nosotros',nav_contacto:'Contacto',nav_cta:'Agendar cita',
    hero_eyebrow:'Health · Beauty · Dental',hero_h1:'Tu mejor <em>sonrisa</em><br>comienza aquí.',
    hero_sub:'En IMAR Medical Group combinamos salud, estética y odontología de vanguardia para ofrecerte una experiencia de atención integral, cálida y personalizada en Tijuana.',
    hero_btn_primary:'Agendar cita',hero_btn_ghost:'Ver servicios',badge_label:'Años de experiencia',
    stat_pacientes:'Pacientes',stat_satisfaccion:'Satisfacción',stat_especialidades:'Especialidades',
    med_eyebrow:'Especialidades médicas',med_h2:'Atención <em>integral</em> para toda la familia',
    med_sub:'Contamos con un equipo de especialistas certificados para cuidar tu salud en cada etapa de la vida.',
    med_general_name:'Médico General',med_general_desc:'Consultas de primer contacto, diagnóstico y seguimiento de tu salud integral.',
    med_gine_name:'Ginecología',med_gine_desc:'Atención especializada en salud femenina, control de embarazo, revisiones periódicas y cuidado preventivo.',
    med_ped_name:'Pediatría',med_ped_desc:'Cuidado médico especializado para bebés, niños y adolescentes en todas sus etapas.',
    med_psiq_name:'Psiquiatría',med_psiq_desc:'Diagnóstico y tratamiento de trastornos mentales con un enfoque humano y profesional.',
    med_int_name:'Médico Internista',med_int_desc:'Especialista en enfermedades internas, manejo de condiciones crónicas y complejas.',
    med_fam_name:'Atención Familiar',med_fam_desc:'Programas de salud preventiva y seguimiento médico para toda tu familia.',
    dent_eyebrow:'Odontología',dent_h2:'Tu sonrisa en manos <em>expertas</em>',
    dent_sub:'Ofrecemos tratamientos dentales de alta calidad con tecnología de vanguardia para que recuperes la confianza en tu sonrisa.',
    dent_sonrisa_name:'Diseño de Sonrisa',dent_sonrisa_desc:'Transformación estética personalizada para lograr la sonrisa que siempre soñaste.',
    dent_carilla_name:'Carillas de Porcelana',dent_carilla_desc:'Láminas ultra delgadas que corrigen color, forma y tamaño de tus dientes.',
    dent_orto_name:'Ortodoncia',dent_orto_desc:'Brackets y alineadores para corregir la posición dental de forma cómoda y efectiva.',
    dent_endo_name:'Endodoncia',dent_endo_desc:'Tratamiento de conductos para salvar dientes con infección o daño en la pulpa dental.',
    dent_cirugia_name:'Cirugía de Terceros Molares',dent_cirugia_desc:'Extracción de muelas del juicio con técnica mínimamente invasiva y recuperación rápida.',
    dent_resinas_name:'Resinas Dentales',dent_resinas_desc:'Restauraciones estéticas del color natural de tus dientes con materiales de alta calidad.',
    dent_parciales_name:'Placas Parciales',dent_parciales_desc:'Prótesis removibles que reemplazan uno o varios dientes perdidos con naturalidad.',
    dent_totales_name:'Placas Totales',dent_totales_desc:'Prótesis completas personalizadas para recuperar tu función masticatoria y estética facial.',
    dent_lab_name:'Laboratorio Dental',dent_lab_desc:'Contamos con laboratorio dental propio para la fabricación de prótesis, coronas y aparatos con los más altos estándares de calidad.',
    why_eyebrow:'¿Por qué elegirnos?',why_h2:'Excelencia en cada <em>detalle</em>',
    why_sub:'Ubicados en el corazón de Tijuana, dentro del Edificio Médico del Grand Hotel, combinamos la mejor ubicación con la más alta calidad médica.',
    why_cert_title:'Especialistas certificados',why_cert_desc:'Equipo con formación nacional e internacional.',
    why_tec_title:'Tecnología de vanguardia',why_tec_desc:'Equipos modernos para diagnósticos precisos.',
    why_hotel_title:'Convenio con Grand Hotel',why_hotel_desc:'Estadía preferencial para pacientes foráneos.',
    why_aten_title:'Atención personalizada',why_aten_desc:'Planes de tratamiento adaptados a tus necesidades.',
    why_tag:'Grand Hotel Tijuana',why_tag_sub:'Edificio Médico Piso 4, Local 401',
    gal_eyebrow:'Nuestras instalaciones',gal_h2:'Un espacio pensado<br>para tu <em>confort</em>',
    gal_recepcion:'Recepción principal',gal_consultorio:'Consultorio dental',gal_esteril:'Limpieza de Material',gal_equipo:'Equipo de diagnóstico',gal_espera:'Sala de espera',
    nos_eyebrow:'Quiénes somos',nos_h2:'Comprometidos con tu <em>salud y bienestar</em>',
    nos_mision_label:'Misión',nos_mision_title:'Nuestra razón de ser',
    nos_mision_desc:'Brindar servicios de salud, belleza y odontología de la más alta calidad en Tijuana, con un equipo humano comprometido y tecnología de vanguardia, mejorando la calidad de vida de cada paciente con calidez y profesionalismo.',
    nos_vision_label:'Visión',nos_vision_title:'Hacia dónde vamos',
    nos_vision_desc:'Ser el grupo médico de referencia en la región fronteriza, reconocido por la excelencia en atención integral, la innovación constante y el impacto positivo en la salud de la comunidad, atendiendo pacientes locales e internacionales.',
    nos_valores_label:'Valores',nos_valores_title:'Lo que nos define',
    nos_valores_desc:'<strong>Excelencia</strong> en cada tratamiento. <strong>Integridad</strong> y ética profesional. <strong>Empatía</strong> hacia cada paciente. <strong>Innovación</strong> permanente. <strong>Compromiso</strong> con tu bienestar. Cada visita es una oportunidad para superar tus expectativas.',
    cont_eyebrow:'Contáctanos',cont_h2:'Agenda tu <em>cita hoy</em>',
    cont_sub:'Estamos listos para atenderte. Visítanos en nuestras instalaciones dentro del Grand Hotel Tijuana o contáctanos por cualquiera de nuestros canales.',
    cont_dir_label:'Dirección',cont_dir_val:'Edificio Médico del Grand Hotel · Tijuana · Piso 4, Local 401',
    cont_dir_note:'🏨 Contamos con convenio en el hotel para estadía preferencial en Tijuana',
    cont_tel_label:'Teléfono',cont_email_label:'Correo',cont_hora_label:'Horarios',
    cont_hora_val1:'Lunes a Sábado · 9:00 am – 7:00 pm',cont_hora_val2:'Domingo · 9:00 am – 5:00 pm',
    form_title:'Envíanos un mensaje',form_sub:'Completa el formulario y te contactaremos vía WhatsApp a la brevedad.',
    form_nombre:'Nombre completo',form_nombre_ph:'Tu nombre',form_tel:'Teléfono',form_tel_ph:'Tu teléfono',
    form_email:'Correo electrónico',form_email_ph:'tucorreo@email.com',form_servicio:'Servicio de interés',
    form_servicio_ph:'Selecciona un servicio',form_msg:'Mensaje',form_msg_ph:'¿Cómo podemos ayudarte?',
    form_btn:'💬 Enviar Mensaje',form_grp_med:'Especialidades Médicas',form_grp_dent:'Odontología',
    footer_tagline:'Health, Beauty & Dental Clinic<br>Tijuana, B.C. · Edificio Médico Grand Hotel · Piso 4 Local 401',
    footer_copy:'© 2026 IMAR Medical Group',footer_dev:'Desarrollado por <strong>Nodeva Consultoría Digital</strong>',
    footer_servicios:'Servicios',footer_instalaciones:'Instalaciones',footer_nosotros:'Nosotros',footer_contacto:'Contacto',
    cookie_msg:'Usamos cookies para mejorar tu experiencia. Al continuar navegando aceptas nuestra política de privacidad.',
    cookie_btn:'Aceptar',cookie_link:'Política de privacidad',
  },
  en: {
    nav_servicios:'Services',nav_instalaciones:'Facilities',nav_nosotros:'About Us',nav_contacto:'Contact',nav_cta:'Book Appointment',
    hero_eyebrow:'Health · Beauty · Dental',hero_h1:'Your best <em>smile</em><br>starts here.',
    hero_sub:'At IMAR Medical Group we combine health, aesthetics and cutting-edge dentistry to offer you a comprehensive, warm and personalized care experience in Tijuana.',
    hero_btn_primary:'Book Appointment',hero_btn_ghost:'Our Services',badge_label:'Years of experience',
    stat_pacientes:'Patients',stat_satisfaccion:'Satisfaction',stat_especialidades:'Specialties',
    med_eyebrow:'Medical Specialties',med_h2:'<em>Comprehensive</em> care for the whole family',
    med_sub:'We have a team of certified specialists to take care of your health at every stage of life.',
    med_general_name:'General Practitioner',med_general_desc:'Primary care consultations, diagnosis and follow-up of your overall health.',
    med_gine_name:'Gynecology',med_gine_desc:'Specialized care in women\'s health, pregnancy monitoring, periodic check-ups and preventive care.',
    med_ped_name:'Pediatrics',med_ped_desc:'Specialized medical care for babies, children and adolescents at every stage of development.',
    med_psiq_name:'Psychiatry',med_psiq_desc:'Diagnosis and treatment of mental disorders with a human and professional approach.',
    med_int_name:'Internal Medicine',med_int_desc:'Specialist in internal diseases and management of chronic and complex conditions.',
    med_fam_name:'Family Care',med_fam_desc:'Preventive health programs and medical follow-up for your entire family.',
    dent_eyebrow:'Dentistry',dent_h2:'Your smile in <em>expert hands</em>',
    dent_sub:'We offer high-quality dental treatments with cutting-edge technology so you can regain confidence in your smile.',
    dent_sonrisa_name:'Smile Design',dent_sonrisa_desc:'Personalized aesthetic transformation to achieve the smile you have always dreamed of.',
    dent_carilla_name:'Porcelain Veneers',dent_carilla_desc:'Ultra-thin laminates that correct the color, shape and size of your teeth.',
    dent_orto_name:'Orthodontics',dent_orto_desc:'Braces and clear aligners to correct dental position comfortably and effectively.',
    dent_endo_name:'Endodontics',dent_endo_desc:'Root canal treatment to save teeth with infection or damage to the dental pulp.',
    dent_cirugia_name:'Wisdom Tooth Surgery',dent_cirugia_desc:'Minimally invasive wisdom tooth extraction with fast recovery.',
    dent_resinas_name:'Dental Composites',dent_resinas_desc:'Aesthetic restorations matching the natural color of your teeth with high-quality materials.',
    dent_parciales_name:'Partial Dentures',dent_parciales_desc:'Removable prostheses that naturally replace one or more missing teeth.',
    dent_totales_name:'Full Dentures',dent_totales_desc:'Custom complete prostheses to restore your chewing function and facial aesthetics.',
    dent_lab_name:'Dental Laboratory',dent_lab_desc:'We have our own in-house dental laboratory for manufacturing prostheses, crowns and appliances to the highest quality standards.',
    why_eyebrow:'Why choose us?',why_h2:'Excellence in every <em>detail</em>',
    why_sub:'Located in the heart of Tijuana, inside the Medical Building of the Grand Hotel, we combine the best location with the highest medical quality.',
    why_cert_title:'Certified specialists',why_cert_desc:'Team with national and international training.',
    why_tec_title:'State-of-the-art technology',why_tec_desc:'Modern equipment for accurate diagnoses.',
    why_hotel_title:'Grand Hotel Agreement',why_hotel_desc:'Preferential stay for out-of-town patients.',
    why_aten_title:'Personalized care',why_aten_desc:'Treatment plans tailored to your needs.',
    why_tag:'Grand Hotel Tijuana',why_tag_sub:'Medical Building Floor 4, Suite 401',
    gal_eyebrow:'Our facilities',gal_h2:'A space designed<br>for your <em>comfort</em>',
    gal_recepcion:'Main reception',gal_consultorio:'Dental office',gal_esteril:'Sterilization area',gal_equipo:'Diagnostic equipment',gal_espera:'Waiting room',
    nos_eyebrow:'About us',nos_h2:'Committed to your <em>health and well-being</em>',
    nos_mision_label:'Mission',nos_mision_title:'Our reason for being',
    nos_mision_desc:'To provide health, beauty and dental services of the highest quality in Tijuana, with a committed team and cutting-edge technology, improving the quality of life of each patient with warmth and professionalism.',
    nos_vision_label:'Vision',nos_vision_title:'Where we are headed',
    nos_vision_desc:'To be the reference medical group in the border region, recognized for excellence in comprehensive care, constant innovation and positive impact on community health, serving both local and international patients.',
    nos_valores_label:'Values',nos_valores_title:'What defines us',
    nos_valores_desc:'<strong>Excellence</strong> in every treatment. <strong>Integrity</strong> and professional ethics. <strong>Empathy</strong> toward every patient. <strong>Innovation</strong> at all times. <strong>Commitment</strong> to your well-being. Every visit is an opportunity to exceed your expectations.',
    cont_eyebrow:'Contact us',cont_h2:'Book your <em>appointment today</em>',
    cont_sub:'We are ready to assist you. Visit us at our facilities inside the Grand Hotel Tijuana or contact us through any of our channels.',
    cont_dir_label:'Address',cont_dir_val:'Grand Hotel Medical Building · Tijuana · Floor 4, Suite 401',
    cont_dir_note:'🏨 We have a hotel agreement for preferential stay in Tijuana',
    cont_tel_label:'Phone',cont_email_label:'Email',cont_hora_label:'Hours',
    cont_hora_val1:'Monday to Saturday · 9:00 am – 7:00 pm',cont_hora_val2:'Sunday · 9:00 am – 5:00 pm',
    form_title:'Send us a message',form_sub:'Fill out the form and we will contact you via WhatsApp shortly.',
    form_nombre:'Full name',form_nombre_ph:'Your name',form_tel:'Phone',form_tel_ph:'Your phone number',
    form_email:'Email address',form_email_ph:'youremail@email.com',form_servicio:'Service of interest',
    form_servicio_ph:'Select a service',form_msg:'Message',form_msg_ph:'How can we help you?',
    form_btn:'💬 Send Message',form_grp_med:'Medical Specialties',form_grp_dent:'Dentistry',
    footer_tagline:'Health, Beauty & Dental Clinic<br>Tijuana, B.C. · Grand Hotel Medical Building · Floor 4 Suite 401',
    footer_copy:'© 2026 IMAR Medical Group',footer_dev:'Developed by <strong>Nodeva Consultoría Digital</strong>',
    footer_servicios:'Services',footer_instalaciones:'Facilities',footer_nosotros:'About Us',footer_contacto:'Contact',
    cookie_msg:'We use cookies to improve your experience. By continuing to browse you accept our privacy policy.',
    cookie_btn:'Accept',cookie_link:'Privacy policy',
  }
};

function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

  setText('nav-servicios',t.nav_servicios); setText('nav-instalaciones',t.nav_instalaciones);
  setText('nav-nosotros',t.nav_nosotros); setText('nav-contacto',t.nav_contacto); setText('nav-cta',t.nav_cta);
  setText('hero-eyebrow',t.hero_eyebrow); set('hero-h1',t.hero_h1); setText('hero-sub',t.hero_sub);
  setText('hero-btn-primary',t.hero_btn_primary); setText('hero-btn-ghost',t.hero_btn_ghost);
  setText('badge-label',t.badge_label); setText('stat-pacientes',t.stat_pacientes);
  setText('stat-satisfaccion',t.stat_satisfaccion); setText('stat-especialidades',t.stat_especialidades);
  setText('med-eyebrow',t.med_eyebrow); set('med-h2',t.med_h2); setText('med-sub',t.med_sub);
  setText('med-general-name',t.med_general_name); setText('med-general-desc',t.med_general_desc);
  setText('med-gine-name',t.med_gine_name); setText('med-gine-desc',t.med_gine_desc);
  setText('med-ped-name',t.med_ped_name); setText('med-ped-desc',t.med_ped_desc);
  setText('med-psiq-name',t.med_psiq_name); setText('med-psiq-desc',t.med_psiq_desc);
  setText('med-int-name',t.med_int_name); setText('med-int-desc',t.med_int_desc);
  setText('med-fam-name',t.med_fam_name); setText('med-fam-desc',t.med_fam_desc);
  setText('dent-eyebrow',t.dent_eyebrow); set('dent-h2',t.dent_h2); setText('dent-sub',t.dent_sub);
  setText('dent-sonrisa-name',t.dent_sonrisa_name); setText('dent-sonrisa-desc',t.dent_sonrisa_desc);
  setText('dent-carilla-name',t.dent_carilla_name); setText('dent-carilla-desc',t.dent_carilla_desc);
  setText('dent-orto-name',t.dent_orto_name); setText('dent-orto-desc',t.dent_orto_desc);
  setText('dent-endo-name',t.dent_endo_name); setText('dent-endo-desc',t.dent_endo_desc);
  setText('dent-cirugia-name',t.dent_cirugia_name); setText('dent-cirugia-desc',t.dent_cirugia_desc);
  setText('dent-resinas-name',t.dent_resinas_name); setText('dent-resinas-desc',t.dent_resinas_desc);
  setText('dent-parciales-name',t.dent_parciales_name); setText('dent-parciales-desc',t.dent_parciales_desc);
  setText('dent-totales-name',t.dent_totales_name); setText('dent-totales-desc',t.dent_totales_desc);
  setText('dent-lab-name',t.dent_lab_name); setText('dent-lab-desc',t.dent_lab_desc);
  setText('why-eyebrow',t.why_eyebrow); set('why-h2',t.why_h2); setText('why-sub',t.why_sub);
  setText('why-cert-title',t.why_cert_title); setText('why-cert-desc',t.why_cert_desc);
  setText('why-tec-title',t.why_tec_title); setText('why-tec-desc',t.why_tec_desc);
  setText('why-hotel-title',t.why_hotel_title); setText('why-hotel-desc',t.why_hotel_desc);
  setText('why-aten-title',t.why_aten_title); setText('why-aten-desc',t.why_aten_desc);
  setText('why-tag-main',t.why_tag); setText('why-tag-sub',t.why_tag_sub);
  setText('gal-eyebrow',t.gal_eyebrow); set('gal-h2',t.gal_h2);
  setText('gal-recepcion',t.gal_recepcion); setText('gal-consultorio',t.gal_consultorio);
  setText('gal-esteril',t.gal_esteril); setText('gal-equipo',t.gal_equipo); setText('gal-espera',t.gal_espera);
  setText('nos-eyebrow',t.nos_eyebrow); set('nos-h2',t.nos_h2);
  setText('nos-mision-label',t.nos_mision_label); setText('nos-mision-title',t.nos_mision_title); setText('nos-mision-desc',t.nos_mision_desc);
  setText('nos-vision-label',t.nos_vision_label); setText('nos-vision-title',t.nos_vision_title); setText('nos-vision-desc',t.nos_vision_desc);
  setText('nos-valores-label',t.nos_valores_label); setText('nos-valores-title',t.nos_valores_title); set('nos-valores-desc',t.nos_valores_desc);
  setText('cont-eyebrow',t.cont_eyebrow); set('cont-h2',t.cont_h2); setText('cont-sub',t.cont_sub);
  setText('cont-dir-label',t.cont_dir_label); setText('cont-dir-val',t.cont_dir_val); setText('cont-dir-note',t.cont_dir_note);
  setText('cont-tel-label',t.cont_tel_label); setText('cont-email-label',t.cont_email_label);
  setText('cont-hora-label',t.cont_hora_label); setText('cont-hora-val1',t.cont_hora_val1); setText('cont-hora-val2',t.cont_hora_val2);
  setText('form-title',t.form_title); setText('form-sub',t.form_sub);
  setText('form-nombre-label',t.form_nombre); setAttr('fname','placeholder',t.form_nombre_ph);
  setText('form-tel-label',t.form_tel); setAttr('fphone','placeholder',t.form_tel_ph);
  setText('form-email-label',t.form_email); setAttr('femail','placeholder',t.form_email_ph);
  setText('form-servicio-label',t.form_servicio);
  const opt0 = document.querySelector('#fservice option[value=""]');
  if (opt0) opt0.textContent = t.form_servicio_ph;
  setText('form-grp-med',t.form_grp_med); setText('form-grp-dent',t.form_grp_dent);
  setText('form-msg-label',t.form_msg); setAttr('fmessage','placeholder',t.form_msg_ph);
  setText('form-btn',t.form_btn);
  set('footer-tagline',t.footer_tagline); setText('footer-copy',t.footer_copy); set('footer-dev',t.footer_dev);
  setText('footer-servicios',t.footer_servicios);
  setText('footer-instalaciones',t.footer_instalaciones);
  setText('footer-nosotros',t.footer_nosotros);
  setText('footer-contacto',t.footer_contacto);
  setText('cookie-msg',t.cookie_msg); setText('cookie-btn',t.cookie_btn); setText('cookie-link',t.cookie_link);
  document.getElementById('lang-btn').textContent = lang === 'es' ? 'EN' : 'ES';
  localStorage.setItem('imar_lang', lang);
}

let currentLang = localStorage.getItem('imar_lang') || 'es';

document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  document.getElementById('lang-btn').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyLang(currentLang);
  });
});

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 30));

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
}, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
  });
}, 100);

// Counter
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  let current = 0;
  const step = target / (1800 / 16);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { el.textContent = target >= 1000 ? (target/1000).toFixed(0)+'K' : target; clearInterval(timer); }
    else el.textContent = target >= 1000 ? (current/1000).toFixed(1) : Math.floor(current);
  }, 16);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.querySelectorAll('[data-target]').forEach(animateCounter); counterObserver.unobserve(entry.target); } });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.hero-stats');
if (statsEl) counterObserver.observe(statsEl);

// WhatsApp form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    const phone = document.getElementById('fphone').value.trim();
    const email = document.getElementById('femail').value.trim();
    const service = document.getElementById('fservice').value;
    const message = document.getElementById('fmessage').value.trim();
    if (!name || !phone) { alert(currentLang === 'es' ? 'Por favor ingresa tu nombre y teléfono.' : 'Please enter your name and phone number.'); return; }
    const isEn = currentLang === 'en';
    let text = isEn ? 'Hello, I am contacting you from the IMAR Medical Group website.%0A%0A' : 'Hola, me comunico desde el sitio web de IMAR Medical Group.%0A%0A';
    text += (isEn ? '*Name:* ' : '*Nombre:* ') + name + '%0A';
    text += (isEn ? '*Phone:* ' : '*Teléfono:* ') + phone + '%0A';
    if (email) text += (isEn ? '*Email:* ' : '*Correo:* ') + email + '%0A';
    if (service) text += (isEn ? '*Service:* ' : '*Servicio:* ') + service + '%0A';
    if (message) text += '%0A' + (isEn ? '*Message:* ' : '*Mensaje:* ') + message;
    window.open('https://wa.me/521234567890?text=' + text, '_blank'); // ← Cambiar número real
  });
}

// ── GOOGLE ANALYTICS CONDICIONAL ──
function loadAnalytics() {
  if (window.analyticsLoaded) return;
  window.analyticsLoaded = true;

  // ← Reemplaza G-XXXXXXXXXX con tu ID real de Google Analytics
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
}

// ── COOKIES ──
const cookieBanner = document.getElementById('cookie-banner');
const cookieBtn    = document.getElementById('cookie-btn');

// Si ya aceptó antes, carga Analytics directo
if (localStorage.getItem('imar_cookies_accepted')) {
  loadAnalytics();
} else {
  // Si no, muestra el banner después de 1.5s
  setTimeout(() => cookieBanner.classList.add('visible'), 1500);
}

// Al aceptar: guarda, oculta banner y carga Analytics
cookieBtn.addEventListener('click', () => {
  localStorage.setItem('imar_cookies_accepted', '1');
  cookieBanner.classList.remove('visible');
  setTimeout(() => cookieBanner.remove(), 400);
  loadAnalytics();
});