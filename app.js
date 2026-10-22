/* Surgronic v2 — shared app logic (vanilla JS) + full trilingual i18n */
(function(){
"use strict";
var API = "https://surgronic.pages.dev/actions";

/* ============================================================
   TRILINGUAL STRINGS — EN / FR / AR
   ============================================================ */
var STRINGS = {
en: {
  "meta.homeTitle": "Surgronic — Precision Surgical Instruments, Sourced to Your Specification",
  "meta.catTitle": "Instrument Catalog — Surgronic",
  "meta.quoteTitle": "Request a Quote — Surgronic",
  "meta.pdTitle": "Product — Surgronic",
  "nav.home": "Home",
  "nav.catalog": "Instrument Catalog",
  "nav.quote": "Request a Quote",
  "nav.quoteList": "Quote list",
  "nav.menu": "Menu",
  "nav.close": "Close",
  "footer.tagline": "Precision surgical instruments, sourced to specification. From stock or made to order. Inspected before shipment. Serving MENA.",
  "footer.catalog": "Catalog",
  "footer.company": "Company",
  "footer.contact": "Contact",
  "footer.how": "How it works",
  "footer.specialties": "Specialties",
  "footer.why": "Why Surgronic",
  "footer.rights": "All rights reserved.",
  "hero.tagline": "Precision surgical instruments · Stock & sourcing",
  "hero.title": "Name the instrument. We\u2019ll find it.",
  "hero.subtitle": "Let's find the right specification.",
  "hero.lead": "Surgical instruments available from stock or sourced to your requirements. Search by instrument name, manufacturer reference, or specialty—or send us a photograph.",
  "hero.cta1": "Request a Quote",
  "hero.cta2": "Explore Instruments",
  "hero.timelines": "Response within 1 business day · Sourcing typically 1–3 days · Shipping typically 2–5 days",
  "finder.aria": "Instrument finder",
  "finder.tab1": "Name",
  "finder.tab2": "Reference",
  "finder.tab3": "Photograph",
  "finder.namePh": "Search by instrument name\u2026",
  "finder.goName": "Find Instruments",
  "finder.popular": "Popular:",
  "finder.refPh": "Enter manufacturer reference or SKU\u2026",
  "finder.goRef": "Source by Reference",
  "finder.photoNote": "Photos go to our team for manual identification \u2014 never presented as automated recognition.",
  "finder.goPhoto": "Send Photograph",
  "promise.eyebrow": "Our promise",
  "trust.addr": "Sisli, Istanbul, Turkey",
  "action1.t": "Find an Instrument",
  "action1.d": "Search by instrument name, manufacturer reference, or specialty.",
  "action1.b": "Explore Instruments",
  "action2.t": "Source by Reference",
  "action2.d": "Submit a manufacturer reference or specification for sourcing.",
  "action2.b": "Request Sourcing",
  "action3.t": "Send a Photograph",
  "action3.d": "Upload a product photo for identification and sourcing review.",
  "action3.b": "Upload Photo",
  "channels.eyebrow": "Supply channels",
  "channels.title": "Two channels. One standard of precision.",
  "channels.sub": "Catalogued products and stocked products are not the same thing. We are transparent about both.",
  "channel1.t": "Available from Stock",
  "channel1.d": "In-stock instruments ship from our inventory. Everything else is sourced to your specification.",
  "channel1.l": "Explore instruments",
  "channel2.t": "Sourced to Specification",
  "channel2.d": "If an instrument is not available from stock, we source it to your exact requirements.",
  "channel2.l": "Start a sourcing request",
  "spec.eyebrow": "Specialties",
  "spec.title": "Explore surgical specialties.",
  "spec.sub": "Eleven disciplines. One catalogue. Each specialty is a navigable destination.",
  "how.eyebrow": "How Surgronic works",
  "how.title": "From requirement to delivery.",
  "step1.n": "Step 01",
  "step1.t": "Tell us what you need",
  "step1.d": "Browse the catalog, send a reference, or upload a photograph.",
  "step2.n": "Step 02",
  "step2.t": "We confirm the specification",
  "step2.d": "Written specification confirmation before anything is committed.",
  "step3.n": "Step 03",
  "step3.t": "Receive a quotation",
  "step3.d": "Clear pricing within one business day. Final price confirmed in writing.",
  "step4.n": "Step 04",
  "step4.t": "Confirm and receive",
  "step4.d": "Nothing ships until you have seen it and approved it.",
  "feat.eyebrow": "Featured",
  "feat.title": "Instruments buyers ask for.",
  "feat.sub": "A curated selection from the live catalogue.",
  "feat.browse": "Browse all 8,658 instruments",
  "feat.loading": "Loading featured instruments…",
  "time.eyebrow": "Operational timelines",
  "time.title": "Precision sourcing. Clear timelines.",
  "time.sub": "Our standard operational targets — not unconditional guarantees.",
  "time1.t": "Response",
  "time1.d": "Within 1 business day.",
  "time2.t": "Sourcing",
  "time2.d": "Typically 1–3 days when sourcing is required.",
  "time3.t": "Shipping",
  "time3.d": "Typically 2–5 days, depending on destination and logistics.",
  "trust.eyebrow": "Why Surgronic",
  "trust.title": "Built for procurement teams.",
  "trust.1n": "8,658",
  "trust.1d": "Instruments catalogued across 11 surgical specialties, searchable by name, SKU, and manufacturer reference.",
  "trust.2n": "2 channels",
  "trust.2d": "Available from stock or sourced to specification — one quotation workflow.",
  "trust.3n": "1 day",
  "trust.3d": "Response within one business day. Written specification confirmation before any commitment.",
  "trust.quote": "\u201CNothing ships until you\u2019ve seen it and approved it.\u201D",
  "trust.quoteSub": "Our prevention-over-returns promise — spec confirmation, deposit, pre-shipment inspection photos.",
  "final.title": "Have an instrument in mind?<br>Let\u2019s find the right specification.",
  "final.sub": "Send a reference, a name, or a photograph. We respond within one business day.",
  "final.cta1": "Request a Quote",
  "final.cta2": "Send a Product Reference",
  "card.add": "Add to Quote",
  "card.adding": "Adding…",
  "card.added": "Added to Quote \u2713",
  "card.details": "View details",
  "card.por": "Price on request",
  "card.imgSoon": "Image coming soon",
  "card.whatsapp": "WhatsApp",
  "wa.single": "Hello Surgronic, I would like a quotation for {sku}, {name}, quantity {qty}. Please confirm availability and pricing.",
  "wa.multi": "Hello Surgronic, I would like a quotation for the following items:",
  "wa.link": "Link",
  "cat.title": "Instrument catalogue.",
  "cat.sub": "Guided search across 8,658 catalogued instruments. Filter by specialty, family, and manufacturer.",
  "cat.searchPh": "Search by name, SKU, or manufacturer reference…",
  "cat.search": "Search",
  "cat.allMfr": "All manufacturers",
  "cat.allFam": "All families",
  "cat.sortName": "Sort: Name",
  "cat.sortSku": "Sort: Reference",
  "cat.sortBrand": "Sort: Brand",
  "cat.loading": "Loading catalogue…",
  "cat.of": "of",
  "cat.catalogued": "catalogued instruments",
  "cat.page": "Page",
  "cat.prev": "\u2190 Prev",
  "cat.next": "Next \u2192",
  "cat.empty.t": "Can\u2019t find your instrument?",
  "cat.empty.d": "Send us the manufacturer reference or a photograph — we\u2019ll source it and quote.",
  "cat.empty.b": "Request Sourcing",
  "cat.photoT": "Can’t find it?",
  "cat.photoD": "Send us a photograph of the instrument — our team identifies it manually and quotes you within one business day.",
  "cat.photoB": "Send a photo",
  "cat.unavailable": "The catalogue API is unreachable right now. Please try again in a moment.",
  "cat.unavailableShort": "Catalogue unavailable",
  "pd.breadcrumb": "Home",
  "pd.catalog": "Catalog",
  "pd.noproduct": "No product reference given.",
  "pd.back": "Back to catalog",
  "pd.notfound": "Product not found.",
  "pd.loading": "Loading product…",
  "pd.ref": "Reference",
  "pd.mfr": "Manufacturer",
  "pd.finishes": "Finishes",
  "pd.price": "Price",
  "pd.avail": "Availability",
  "pd.availV": "From stock or sourced to specification",
  "pd.disclaimer": "Indicative price, excl. shipping and duties. Final price confirmed in writing. Nothing ships until you've seen it and approved it.",
  "pd.related": "Related instruments",
  "pd.unreachable": "The product API is unreachable right now. Please try again in a moment.",
  "pd.added": "Added \u2713",
  "pdq.title": "Request a quote for this instrument.",
  "pdq.sub": "Tell us the quantity and your details — we respond within one business day.",
  "pdq.qty": "Quantity",
  "pdq.notes": "Notes / specifications (optional)",
  "pdq.notesPh": "Sizes, materials, finishes, quantities…",
  "pdq.name": "Your name",
  "pdq.namePh": "Full name",
  "pdq.contact": "Email or phone",
  "pdq.contactPh": "you@company.com or +…",
  "pdq.country": "Country",
  "pdq.countryPh": "Country",
  "pdq.submit": "Request a Quote",
  "pdq.waSend": "Send via WhatsApp",
  "pdq.reassure": "No commitment. We confirm the specification in writing first.",
  "pdq.errQty": "Please enter a quantity of at least 1.",
  "pdq.errName": "Please enter your name.",
  "pdq.errContact": "Please enter your email or phone number.",
  "pdq.doneT": "Quotation requested.",
  "pdq.doneD": "Thank you — your request is in our queue. We respond within one business day.",
  "pdq.viewQuote": "View quote basket",
  "q.crumb": "Request a Quote",
  "q.eyebrow": "Quotation request",
  "q.title": "Request a quotation.",
  "q.sub": "Review your selection, add any references or a photograph, and send. We respond within one business day.",
  "q.empty": "Your quote list is empty.",
  "q.emptyBrowse": "Browse the catalog",
  "q.emptyOr": "or describe the instrument you need below — you can still send a sourcing request with no items.",
  "q.yourRequest": "Your Request",
  "q.units": "units",
  "q.unit": "unit",
  "q.addMore": "Add More Instruments",
  "q.formTitle": "Request Quotation",
  "q.formSub": "No online payment required. Receive a quotation based on your specifications.",
  "q.name": "Full name",
  "q.namePh": "Dr. Jane Smith",
  "q.email": "Work email",
  "q.emailPh": "name@hospital.org",
  "q.company": "Company / Institution",
  "q.companyPh": "Hospital or distributor name",
  "q.country": "Country",
  "q.countryPh": "United Arab Emirates",
  "q.ref": "Product reference",
  "q.refPh": "Manufacturer article number, if known",
  "q.specs": "Specifications",
  "q.specsPh": "Sizes, materials, finishes, quantities…",
  "q.photo": "Product photo",
  "q.photoNote": "Photos go to our team for manual identification — never presented as automated recognition.",
  "q.photoDrop": "Drag & drop your photo here",
  "q.photoBrowse": "or browse files",
  "q.submit": "Request Quotation",
  "q.whatsapp": "Send via WhatsApp",
  "q.sending": "Sending…",
  "q.deposit": "Deposit refundable minus costs already committed to the supplier.",
  "q.finalPrice": "Final price confirmed in writing.",
  "q.remove": "Remove",
  "q.dec": "Decrease",
  "q.inc": "Increase",
  "q.successT": "Request received.",
  "q.successD": "Our team will respond within one business day.",
  "q.encodingPhoto": "Preparing photo…",
  "q.photoSent": "Photo received — our team will identify it manually.",
  "q.photoWaOnly": "Please attach your photo in the WhatsApp chat.",
  "q.successDfb": "Our API is temporarily unreachable — please confirm via WhatsApp so nothing is lost.",
  "q.successThanks": "Thank you,",
  "q.waConfirm": "Confirm via WhatsApp",
  "q.backCatalog": "Back to catalog",
  "common.loading": "Loading…",
  "common.error": "Something went wrong. Please try again.",
  "hero.kicker": "Precision surgical instruments",
  "finder.tabBy1": "By name",
  "finder.tabBy2": "By reference",
  "finder.tabBy3": "By photograph",
  "finder.drop": "Drag & drop your photo here",
  "finder.browse": "or browse files",
  "finder.photoReady": "Photo ready",
  "finder.photoChange": "Change photo",
  "finder.nameHelp": "Type any part of the instrument name.",
  "finder.refHelp": "Paste the manufacturer article number or SKU.",
  "finder.photoHelp": "Our team identifies it manually — never automated guesswork.",
  "chip.1": "Forceps",
  "chip.2": "Scissors",
  "chip.3": "Retractor",
  "chip.4": "Speculum",
  "chip.5": "Needle Holder",
  "ch.badge1": "From stock",
  "ch.badge2": "Sourced to specification",
  "ch.time1": "Ships from inventory",
  "ch.time2": "Typically 1–3 days sourcing",
  "ch.rule": "Stocked items show a stock badge; everything else is sourced, with written specification confirmation.",
  "ch.cta1": "Browse stock",
  "ch.cta2": "Start sourcing",
  "why.stat3n": "1 day",
  "why.stat3d": "Maximum response time. Every enquiry answered within one business day.",
  "why.specT": "Written specification confirmation",
  "why.specD": "No commitment until the specification is confirmed in writing. Deposit only after your approval.",
  "trust.certsT": "Certifications & standards",
  "trust.certsD": "To be provided",
  "trust.certsN": "Supplier and quality certifications will be listed here once confirmed.",
  "trust.matT": "Materials & craftsmanship",
  "trust.matD": "To be provided",
  "trust.matN": "Steel grades, finishes and manufacturing standards will be documented here.",
  "trust.custT": "Trusted by",
  "trust.custD": "To be provided",
  "trust.custN": "Customer references will appear here with their permission.",
  "trust.sub": "The credentials that matter to professional buyers — published as they are confirmed.",
  "foot.note": "Timelines are operational targets, not unconditional guarantees.",
  "feat.skelA": "Loading instrument",
  "feat.errT": "Could not load featured instruments.",
  "feat.errB": "Browse the catalogue",
  "nav.how": "How it works",
  "nav.why": "Why Surgronic",
  "hero.scroll": "Scroll",
  "trust.title2": "Procurement, engineered.",
  "strip.1b": "1 business day",
  "strip.1d": "response",
  "strip.2b": "1–3 days",
  "strip.2d": "sourcing",
  "strip.3b": "2–5 days",
  "strip.3d": "shipping",
  "hero.tagFrom": "From our catalogued range",
  "hero.tagCat": "8,658 instruments",
  "hero.viewProduct": "View Adlerkreutz Tissue Forceps",
  "trust.sub2": "One catalogue, two supply channels, and a specification-first workflow.",
  "trust.eyebrow2": "Credentials",
  "trust.addrLabel": "Head office",
},
fr: {
  "meta.homeTitle": "Surgronic — Instruments chirurgicaux de précision, sourcés selon vos spécifications",
  "meta.catTitle": "Catalogue d'instruments — Surgronic",
  "meta.quoteTitle": "Demander un devis — Surgronic",
  "meta.pdTitle": "Produit — Surgronic",
  "nav.home": "Accueil",
  "nav.catalog": "Catalogue d'instruments",
  "nav.quote": "Demander un devis",
  "nav.quoteList": "Liste de devis",
  "nav.menu": "Menu",
  "nav.close": "Fermer",
  "footer.tagline": "Instruments chirurgicaux de précision, sourcés selon vos spécifications. En stock ou fabriqués sur commande. Inspectés avant expédition. Au service de la région MENA.",
  "footer.catalog": "Catalogue",
  "footer.company": "Entreprise",
  "footer.contact": "Contact",
  "footer.how": "Fonctionnement",
  "footer.specialties": "Spécialités",
  "footer.why": "Pourquoi Surgronic",
  "footer.rights": "Tous droits réservés.",
  "hero.tagline": "Instruments chirurgicaux de précision · Stock & sourcing",
  "hero.title": "Nommez l\u2019instrument. Nous le trouverons.",
  "hero.subtitle": "Trouvons la bonne spécification.",
  "hero.lead": "Instruments chirurgicaux disponibles en stock ou sourcés selon vos exigences. Recherchez par nom d'instrument, référence fabricant ou spécialité—ou envoyez-nous une photographie.",
  "hero.cta1": "Demander un devis",
  "hero.cta2": "Explorer les instruments",
  "hero.timelines": "Réponse sous 1 jour ouvré · Sourcing généralement 1–3 jours · Expédition généralement 2–5 jours",
  "finder.aria": "Recherche d\u2019instrument",
  "finder.tab1": "Nom",
  "finder.tab2": "Référence",
  "finder.tab3": "Photographie",
  "finder.namePh": "Rechercher par nom d\u2019instrument\u2026",
  "finder.goName": "Trouver des instruments",
  "finder.popular": "Populaires :",
  "finder.refPh": "Saisissez la référence fabricant ou le SKU\u2026",
  "finder.goRef": "Sourcer par référence",
  "finder.photoNote": "Les photos sont envoyées à notre équipe pour identification manuelle \u2014 jamais présentées comme une reconnaissance automatisée.",
  "finder.goPhoto": "Envoyer la photo",
  "promise.eyebrow": "Notre promesse",
  "trust.addr": "Sisli, Istanbul, Turquie",
  "action1.t": "Trouver un instrument",
  "action1.d": "Recherchez par nom d'instrument, référence fabricant ou spécialité.",
  "action1.b": "Explorer les instruments",
  "action2.t": "Sourcer par référence",
  "action2.d": "Soumettez une référence fabricant ou une spécification pour le sourcing.",
  "action2.b": "Demander un sourcing",
  "action3.t": "Envoyer une photographie",
  "action3.d": "Téléchargez une photo du produit pour identification et examen.",
  "action3.b": "Télécharger une photo",
  "channels.eyebrow": "Canaux d'approvisionnement",
  "channels.title": "Deux canaux. Une même exigence de précision.",
  "channels.sub": "Les produits catalogués et les produits en stock ne sont pas la même chose. Nous sommes transparents sur les deux.",
  "channel1.t": "Disponible en stock",
  "channel1.d": "Les instruments en stock sont expédiés depuis notre inventaire. Tout le reste est sourcé selon vos spécifications.",
  "channel1.l": "Explorer les instruments",
  "channel2.t": "Sourcé sur spécification",
  "channel2.d": "Si un instrument n'est pas disponible en stock, nous le sourçons selon vos exigences exactes.",
  "channel2.l": "Démarrer une demande",
  "spec.eyebrow": "Spécialités",
  "spec.title": "Explorez les spécialités chirurgicales.",
  "spec.sub": "Onze disciplines. Un seul catalogue. Chaque spécialité est une destination navigable.",
  "how.eyebrow": "Fonctionnement de Surgronic",
  "how.title": "Du besoin à la livraison.",
  "step1.n": "Étape 01",
  "step1.t": "Dites-nous ce qu'il vous faut",
  "step1.d": "Parcourez le catalogue, envoyez une référence ou téléversez une photographie.",
  "step2.n": "Étape 02",
  "step2.t": "Nous confirmons la spécification",
  "step2.d": "Confirmation écrite des spécifications avant tout engagement.",
  "step3.n": "Étape 03",
  "step3.t": "Recevez un devis",
  "step3.d": "Tarification claire sous un jour ouvré. Prix final confirmé par écrit.",
  "step4.n": "Étape 04",
  "step4.t": "Confirmez et recevez",
  "step4.d": "Rien n'est expédié avant que vous l'ayez vu et approuvé.",
  "feat.eyebrow": "En vedette",
  "feat.title": "Les instruments les plus demandés.",
  "feat.sub": "Une sélection du catalogue en direct.",
  "feat.browse": "Parcourir les 8 658 instruments",
  "feat.loading": "Chargement des instruments en vedette…",
  "time.eyebrow": "Délais opérationnels",
  "time.title": "Sourcing de précision. Des délais clairs.",
  "time.sub": "Nos objectifs opérationnels standards — sans garantie inconditionnelle.",
  "time1.t": "Réponse",
  "time1.d": "Sous 1 jour ouvré.",
  "time2.t": "Sourcing",
  "time2.d": "Généralement 1 à 3 jours lorsque le sourcing est requis.",
  "time3.t": "Expédition",
  "time3.d": "Généralement 2 à 5 jours, selon la destination et la logistique.",
  "trust.eyebrow": "Pourquoi Surgronic",
  "trust.title": "Conçu pour les équipes d'achat.",
  "trust.1n": "8 658",
  "trust.1d": "Instruments catalogués dans 11 spécialités chirurgicales, recherchables par nom, SKU et référence fabricant.",
  "trust.2n": "2 canaux",
  "trust.2d": "Disponible en stock ou sourcé sur spécification — un seul flux de devis.",
  "trust.3n": "1 jour",
  "trust.3d": "Réponse sous un jour ouvré. Confirmation écrite des spécifications avant tout engagement.",
  "trust.quote": "\u00AB Rien n'est expédié avant que vous l'ayez vu et approuvé. \u00BB",
  "trust.quoteSub": "Notre promesse de prévention plutôt que de retours — confirmation des spécifications, acompte, photos d'inspection avant expédition.",
  "final.title": "Un instrument en tête ?<br>Trouvons la bonne spécification.",
  "final.sub": "Envoyez une référence, un nom ou une photographie. Nous répondons sous un jour ouvré.",
  "final.cta1": "Demander un devis",
  "final.cta2": "Envoyer une référence produit",
  "card.add": "Ajouter au devis",
  "card.adding": "Ajout…",
  "card.added": "Ajouté au devis \u2713",
  "card.details": "Voir les détails",
  "card.por": "Prix sur demande",
  "card.imgSoon": "Image bientôt disponible",
  "card.whatsapp": "WhatsApp",
  "wa.single": "Bonjour Surgronic, je souhaite un devis pour {sku}, {name}, quantité {qty}. Merci de confirmer la disponibilité et le prix.",
  "wa.multi": "Bonjour Surgronic, je souhaite un devis pour les articles suivants :",
  "wa.link": "Lien",
  "cat.title": "Catalogue d'instruments.",
  "cat.sub": "Recherche guidée parmi 8 658 instruments catalogués. Filtrez par spécialité, famille et fabricant.",
  "cat.searchPh": "Rechercher par nom, SKU ou référence fabricant…",
  "cat.search": "Rechercher",
  "cat.allMfr": "Tous les fabricants",
  "cat.allFam": "Toutes les familles",
  "cat.sortName": "Tri : Nom",
  "cat.sortSku": "Tri : Référence",
  "cat.sortBrand": "Tri : Marque",
  "cat.loading": "Chargement du catalogue…",
  "cat.of": "sur",
  "cat.catalogued": "instruments catalogués",
  "cat.page": "Page",
  "cat.prev": "\u2190 Préc.",
  "cat.next": "Suiv. \u2192",
  "cat.empty.t": "Vous ne trouvez pas votre instrument ?",
  "cat.empty.d": "Envoyez-nous la référence fabricant ou une photographie — nous le sourcerons et chiffrerons.",
  "cat.empty.b": "Demander un sourcing",
  "cat.photoT": "Introuvable ?",
  "cat.photoD": "Envoyez-nous une photo de l’instrument — notre équipe l’identifie manuellement et vous répond sous un jour ouvré.",
  "cat.photoB": "Envoyer une photo",
  "cat.unavailable": "L'API du catalogue est momentanément inaccessible. Veuillez réessayer dans un instant.",
  "cat.unavailableShort": "Catalogue indisponible",
  "pd.breadcrumb": "Accueil",
  "pd.catalog": "Catalogue",
  "pd.noproduct": "Aucune référence produit fournie.",
  "pd.back": "Retour au catalogue",
  "pd.notfound": "Produit introuvable.",
  "pd.loading": "Chargement du produit…",
  "pd.ref": "Référence",
  "pd.mfr": "Fabricant",
  "pd.finishes": "Finitions",
  "pd.price": "Prix",
  "pd.avail": "Disponibilité",
  "pd.availV": "En stock ou sourcé sur spécification",
  "pd.disclaimer": "Prix indicatif, hors livraison et droits de douane. Prix final confirmé par écrit. Rien n'est expédié avant que vous l'ayez vu et approuvé.",
  "pd.related": "Instruments associés",
  "pd.unreachable": "L'API produit est momentanément inaccessible. Veuillez réessayer dans un instant.",
  "pd.added": "Ajouté \u2713",
  "pdq.title": "Demander un devis pour cet instrument.",
  "pdq.sub": "Indiquez la quantité et vos coordonnées — nous répondons sous un jour ouvré.",
  "pdq.qty": "Quantité",
  "pdq.notes": "Notes / spécifications (facultatif)",
  "pdq.notesPh": "Tailles, matériaux, finitions, quantités…",
  "pdq.name": "Votre nom",
  "pdq.namePh": "Nom complet",
  "pdq.contact": "E-mail ou téléphone",
  "pdq.contactPh": "vous@société.com ou +…",
  "pdq.country": "Pays",
  "pdq.countryPh": "Pays",
  "pdq.submit": "Demander un devis",
  "pdq.waSend": "Envoyer via WhatsApp",
  "pdq.reassure": "Sans engagement. Nous confirmons la spécification par écrit d'abord.",
  "pdq.errQty": "Veuillez saisir une quantité d'au moins 1.",
  "pdq.errName": "Veuillez saisir votre nom.",
  "pdq.errContact": "Veuillez saisir votre e-mail ou numéro de téléphone.",
  "pdq.doneT": "Devis demandé.",
  "pdq.doneD": "Merci — votre demande est en file d'attente. Nous répondons sous un jour ouvré.",
  "pdq.viewQuote": "Voir le panier de devis",
  "q.crumb": "Demander un devis",
  "q.eyebrow": "Demande de devis",
  "q.title": "Demander un devis.",
  "q.sub": "Vérifiez votre sélection, ajoutez des références ou une photographie, puis envoyez. Nous répondons sous un jour ouvré.",
  "q.empty": "Votre liste de devis est vide.",
  "q.emptyBrowse": "Parcourir le catalogue",
  "q.emptyOr": "ou décrivez l'instrument ci-dessous — vous pouvez envoyer une demande même sans articles.",
  "q.yourRequest": "Votre demande",
  "q.units": "unités",
  "q.unit": "unité",
  "q.addMore": "Ajouter des instruments",
  "q.formTitle": "Demander un devis",
  "q.formSub": "Aucun paiement en ligne requis. Recevez un devis basé sur vos spécifications.",
  "q.name": "Nom complet",
  "q.namePh": "Dr. Jeanne Dupont",
  "q.email": "E-mail professionnel",
  "q.emailPh": "nom@hopital.fr",
  "q.company": "Société / Établissement",
  "q.companyPh": "Nom de l'hôpital ou du distributeur",
  "q.country": "Pays",
  "q.countryPh": "Émirats arabes unis",
  "q.ref": "Référence produit",
  "q.refPh": "Numéro d'article fabricant, si connu",
  "q.specs": "Spécifications",
  "q.specsPh": "Tailles, matériaux, finitions, quantités…",
  "q.photo": "Photo du produit",
  "q.photoNote": "Les photos sont transmises à notre équipe pour identification manuelle — jamais présentées comme une reconnaissance automatisée.",
  "q.photoDrop": "Glissez-déposez votre photo ici",
  "q.photoBrowse": "ou parcourir les fichiers",
  "q.submit": "Demander un devis",
  "q.whatsapp": "Envoyer via WhatsApp",
  "q.sending": "Envoi…",
  "q.deposit": "Acompte remboursable moins les coûts déjà engagés auprès du fournisseur.",
  "q.finalPrice": "Prix final confirmé par écrit.",
  "q.remove": "Retirer",
  "q.dec": "Diminuer",
  "q.inc": "Augmenter",
  "q.successT": "Demande reçue.",
  "q.successD": "Notre équipe répondra sous un jour ouvré.",
  "q.encodingPhoto": "Préparation de la photo…",
  "q.photoSent": "Photo reçue — notre équipe l’identifiera manuellement.",
  "q.photoWaOnly": "Veuillez joindre votre photo dans la conversation WhatsApp.",
  "q.successDfb": "Notre API est momentanément inaccessible — veuillez confirmer via WhatsApp pour ne rien perdre.",
  "q.successThanks": "Merci,",
  "q.waConfirm": "Confirmer via WhatsApp",
  "q.backCatalog": "Retour au catalogue",
  "common.loading": "Chargement…",
  "common.error": "Une erreur est survenue. Veuillez réessayer.",
  "hero.kicker": "Instruments chirurgicaux de précision",
  "finder.tabBy1": "Par nom",
  "finder.tabBy2": "Par référence",
  "finder.tabBy3": "Par photo",
  "finder.drop": "Glissez-déposez votre photo ici",
  "finder.browse": "ou parcourez vos fichiers",
  "finder.photoReady": "Photo prête",
  "finder.photoChange": "Changer de photo",
  "finder.nameHelp": "Tapez tout ou partie du nom de l’instrument.",
  "finder.refHelp": "Collez la référence fabricant ou le SKU.",
  "finder.photoHelp": "Notre équipe l’identifie manuellement — jamais de reconnaissance automatisée.",
  "chip.1": "Pinces",
  "chip.2": "Ciseaux",
  "chip.3": "Écarteur",
  "chip.4": "Spéculum",
  "chip.5": "Porte-aiguille",
  "ch.badge1": "En stock",
  "ch.badge2": "Sourcé sur spécification",
  "ch.time1": "Expédié depuis notre stock",
  "ch.time2": "Sourcing typique 1–3 jours",
  "ch.rule": "Les articles en stock affichent un badge de stock ; tout le reste est sourcé, avec confirmation écrite de la spécification.",
  "ch.cta1": "Voir le stock",
  "ch.cta2": "Lancer un sourcing",
  "why.stat3n": "1 jour",
  "why.stat3d": "Délai de réponse maximal. Chaque demande reçoit une réponse sous un jour ouvré.",
  "why.specT": "Confirmation écrite de la spécification",
  "why.specD": "Aucun engagement avant confirmation écrite de la spécification. Acompte uniquement après votre approbation.",
  "trust.certsT": "Certifications et normes",
  "trust.certsD": "À fournir",
  "trust.certsN": "Les certifications fournisseurs et qualité seront listées ici une fois confirmées.",
  "trust.matT": "Matériaux et fabrication",
  "trust.matD": "À fournir",
  "trust.matN": "Nuances d’acier, finitions et normes de fabrication seront documentées ici.",
  "trust.custT": "Ils nous font confiance",
  "trust.custD": "À fournir",
  "trust.custN": "Les références clients apparaîtront ici avec leur accord.",
  "trust.sub": "Les garanties qui comptent pour les acheteurs professionnels — publiées au fur et à mesure de leur confirmation.",
  "foot.note": "Les délais sont des objectifs opérationnels, pas des garanties inconditionnelles.",
  "feat.skelA": "Chargement de l’instrument",
  "feat.errT": "Impossible de charger les instruments en vedette.",
  "feat.errB": "Parcourir le catalogue",
  "nav.how": "Comment ça marche",
  "nav.why": "Pourquoi Surgronic",
  "hero.scroll": "Défiler",
  "trust.title2": "L’approvisionnement, conçu comme une ingénierie.",
  "strip.1b": "1 jour ouvré",
  "strip.1d": "réponse",
  "strip.2b": "1–3 jours",
  "strip.2d": "approvisionnement",
  "strip.3b": "2–5 jours",
  "strip.3d": "expédition",
  "hero.tagFrom": "De notre gamme cataloguée",
  "hero.tagCat": "8 658 instruments",
  "hero.viewProduct": "Voir la pince à tissus Adlerkreutz",
  "trust.sub2": "Un catalogue, deux canaux d’approvisionnement et un workflow axé sur la spécification.",
  "trust.eyebrow2": "Références",
  "trust.addrLabel": "Siège",
},
ar: {
  "meta.homeTitle": "سورجرونيك — أدوات جراحية دقيقة، توريد حسب مواصفاتكم",
  "meta.catTitle": "كتالوج الأدوات — سورجرونيك",
  "meta.quoteTitle": "طلب عرض سعر — سورجرونيك",
  "meta.pdTitle": "المنتج — سورجرونيك",
  "nav.home": "الرئيسية",
  "nav.catalog": "كتالوج الأدوات",
  "nav.quote": "طلب عرض سعر",
  "nav.quoteList": "قائمة عروض الأسعار",
  "nav.menu": "القائمة",
  "nav.close": "إغلاق",
  "footer.tagline": "أدوات جراحية دقيقة، يتم توريدها حسب مواصفاتكم. من المخزون أو مصنوعة حسب الطلب. تُفحص قبل الشحن. نخدم منطقة الشرق الأوسط وشمال أفريقيا.",
  "footer.catalog": "الكتالوج",
  "footer.company": "الشركة",
  "footer.contact": "اتصل بنا",
  "footer.how": "كيف نعمل",
  "footer.specialties": "التخصصات",
  "footer.why": "لماذا سورجرونيك",
  "footer.rights": "جميع الحقوق محفوظة.",
  "hero.tagline": "أدوات جراحية دقيقة · مخزون وتوريد",
  "hero.title": "سمِّ الأداة. وسنجدها.",
  "hero.subtitle": "لنجد المواصفة الصحيحة.",
  "hero.lead": "أدوات جراحية متوفرة من المخزون أو يتم توريدها حسب متطلباتك. ابحث باسم الأداة أو مرجع الشركة المصنعة أو التخصص—أو أرسل لنا صورة.",
  "hero.cta1": "طلب عرض سعر",
  "hero.cta2": "استكشف الأدوات",
  "hero.timelines": "الرد خلال يوم عمل واحد · التوريد عادة 1–3 أيام · الشحن عادة 2–5 أيام",
  "finder.aria": "الباحث عن الأدوات",
  "finder.tab1": "الاسم",
  "finder.tab2": "المرجع",
  "finder.tab3": "صورة",
  "finder.namePh": "ابحث باسم الأداة\u2026",
  "finder.goName": "ابحث عن الأدوات",
  "finder.popular": "شائع:",
  "finder.refPh": "أدخل مرجع الشركة المصنعة أو رمز SKU\u2026",
  "finder.goRef": "توريد بالمرجع",
  "finder.photoNote": "تُرسل الصور إلى فريقنا للتعريف اليدوي \u2014 ولا تُعرض أبدًا على أنها تعرّف آلي.",
  "finder.goPhoto": "إرسال صورة",
  "promise.eyebrow": "وعدنا",
  "trust.addr": "شيشلي، إسطنبول، تركيا",
  "action1.t": "ابحث عن أداة",
  "action1.d": "ابحث باسم الأداة أو مرجع الشركة المصنعة أو التخصص.",
  "action1.b": "استكشف الأدوات",
  "action2.t": "التوريد بالمرجع",
  "action2.d": "أرسل مرجع الشركة المصنعة أو المواصفات للتوريد.",
  "action2.b": "طلب توريد",
  "action3.t": "أرسل صورة",
  "action3.d": "حمّل صورة المنتج للتعريف ومراجعة التوريد.",
  "action3.b": "تحميل صورة",
  "channels.eyebrow": "قنوات التوريد",
  "channels.title": "قناتان. معيار واحد للدقة.",
  "channels.sub": "المنتجات المسجلة في الكتالوج ليست هي نفسها المنتجات المتوفرة في المخزون. نحن واضحون بشأن كليهما.",
  "channel1.t": "متوفر من المخزون",
  "channel1.d": "الأدوات المتوفرة في المخزون تُشحن من مخزوننا. كل ما عداها يتم توريده حسب مواصفاتك.",
  "channel1.l": "استكشف الأدوات",
  "channel2.t": "توريد حسب المواصفات",
  "channel2.d": "إذا لم يكن الأداة متوفرة في المخزون، نقوم بتوريدها وفقًا لمتطلباتك الدقيقة.",
  "channel2.l": "ابدأ طلب توريد",
  "spec.eyebrow": "التخصصات",
  "spec.title": "استكشف التخصصات الجراحية.",
  "spec.sub": "أحد عشر تخصصًا. كتالوج واحد. كل تخصص وجهة قابلة للتصفح.",
  "how.eyebrow": "كيف تعمل سورجرونيك",
  "how.title": "من الاحتياج إلى التسليم.",
  "step1.n": "الخطوة 01",
  "step1.t": "أخبرنا بما تحتاجه",
  "step1.d": "تصفح الكتالوج أو أرسل مرجعًا أو ارفع صورة.",
  "step2.n": "الخطوة 02",
  "step2.t": "نؤكد المواصفات",
  "step2.d": "تأكيد كتابي للمواصفات قبل أي التزام.",
  "step3.n": "الخطوة 03",
  "step3.t": "استلم عرض السعر",
  "step3.d": "أسعار واضحة خلال يوم عمل واحد. السعر النهائي مؤكد كتابيًا.",
  "step4.n": "الخطوة 04",
  "step4.t": "أكّد واستلم",
  "step4.d": "لا يُشحن شيء حتى تراه وتعتمده.",
  "feat.eyebrow": "مميز",
  "feat.title": "الأدوات الأكثر طلبًا.",
  "feat.sub": "مختارات من الكتالوج المباشر.",
  "feat.browse": "تصفح جميع الأدوات البالغ عددها 8,658",
  "feat.loading": "جاري تحميل الأدوات المميزة…",
  "time.eyebrow": "الجداول الزمنية التشغيلية",
  "time.title": "توريد دقيق. جداول واضحة.",
  "time.sub": "أهدافنا التشغيلية القياسية — وليست ضمانات غير مشروطة.",
  "time1.t": "الرد",
  "time1.d": "خلال يوم عمل واحد.",
  "time2.t": "التوريد",
  "time2.d": "عادة من يوم إلى 3 أيام عند الحاجة إلى التوريد.",
  "time3.t": "الشحن",
  "time3.d": "عادة من يومين إلى 5 أيام، حسب الوجهة والخدمات اللوجستية.",
  "trust.eyebrow": "لماذا سورجرونيك",
  "trust.title": "مصممة لفرق المشتريات.",
  "trust.1n": "8,658",
  "trust.1d": "أداة مفهرسة في 11 تخصصًا جراحيًا، قابلة للبحث بالاسم وSKU ومرجع الشركة المصنعة.",
  "trust.2n": "قناتان",
  "trust.2d": "متوفر من المخزون أو توريد حسب المواصفات — سير عمل واحد لعروض الأسعار.",
  "trust.3n": "يوم واحد",
  "trust.3d": "الرد خلال يوم عمل واحد. تأكيد كتابي للمواصفات قبل أي التزام.",
  "trust.quote": "\u201Cلا يُشحن شيء حتى تراه وتعتمده.\u201D",
  "trust.quoteSub": "وعدنا بالوقاية بدل الإرجاع — تأكيد المواصفات، العربون، صور الفحص قبل الشحن.",
  "final.title": "لديك أداة في ذهنك؟<br>لنجد المواصفة المناسبة.",
  "final.sub": "أرسل مرجعًا أو اسمًا أو صورة. نرد خلال يوم عمل واحد.",
  "final.cta1": "طلب عرض سعر",
  "final.cta2": "أرسل مرجع منتج",
  "card.add": "أضف إلى عرض السعر",
  "card.adding": "جاري الإضافة…",
  "card.added": "أُضيفت إلى عرض السعر \u2713",
  "card.details": "عرض التفاصيل",
  "card.por": "السعر عند الطلب",
  "card.imgSoon": "الصورة قريبًا",
  "card.whatsapp": "واتساب",
  "wa.single": "مرحبًا Surgronic، أرغب في عرض سعر لـ {sku}، {name}، الكمية {qty}. يرجى تأكيد التوفر والسعر.",
  "wa.multi": "مرحبًا Surgronic، أرغب في عرض سعر للأصناف التالية:",
  "wa.link": "الرابط",
  "cat.title": "كتالوج الأدوات.",
  "cat.sub": "بحث موجّه في 8,658 أداة مفهرسة. صفِّ حسب التخصص والعائلة والشركة المصنعة.",
  "cat.searchPh": "ابحث بالاسم أو SKU أو مرجع الشركة المصنعة…",
  "cat.search": "بحث",
  "cat.allMfr": "كل الشركات المصنعة",
  "cat.allFam": "كل العائلات",
  "cat.sortName": "ترتيب: الاسم",
  "cat.sortSku": "ترتيب: المرجع",
  "cat.sortBrand": "ترتيب: العلامة",
  "cat.loading": "جاري تحميل الكتالوج…",
  "cat.of": "من",
  "cat.catalogued": "أداة مفهرسة",
  "cat.page": "صفحة",
  "cat.prev": "\u2190 السابق",
  "cat.next": "التالي \u2192",
  "cat.empty.t": "لم تجد أداتك؟",
  "cat.empty.d": "أرسل لنا مرجع الشركة المصنعة أو صورة — سنوردها ونقدم عرض السعر.",
  "cat.empty.b": "طلب توريد",
  "cat.photoT": "لم تجده؟",
  "cat.photoD": "أرسل لنا صورة الأداة — يحددها فريقنا يدويًا ويرد عليك خلال يوم عمل واحد.",
  "cat.photoB": "إرسال صورة",
  "cat.unavailable": "واجهة الكتالوج غير متاحة حاليًا. حاول مجددًا بعد قليل.",
  "cat.unavailableShort": "الكتالوج غير متاح",
  "pd.breadcrumb": "الرئيسية",
  "pd.catalog": "الكتالوج",
  "pd.noproduct": "لم يتم تقديم مرجع المنتج.",
  "pd.back": "عودة إلى الكتالوج",
  "pd.notfound": "المنتج غير موجود.",
  "pd.loading": "جاري تحميل المنتج…",
  "pd.ref": "المرجع",
  "pd.mfr": "الشركة المصنعة",
  "pd.finishes": "التشطيبات",
  "pd.price": "السعر",
  "pd.avail": "التوفر",
  "pd.availV": "من المخزون أو توريد حسب المواصفات",
  "pd.disclaimer": "سعر استرشادي، لا يشمل الشحن والرسوم الجمركية. السعر النهائي مؤكد كتابيًا. لا يُشحن شيء حتى تراه وتعتمده.",
  "pd.related": "أدوات ذات صلة",
  "pd.unreachable": "واجهة المنتج غير متاحة حاليًا. حاول مجددًا بعد قليل.",
  "pd.added": "أُضيفت \u2713",
  "pdq.title": "اطلب عرض سعر لهذه الأداة.",
  "pdq.sub": "أخبرنا بالكمية وبياناتك — نرد خلال يوم عمل واحد.",
  "pdq.qty": "الكمية",
  "pdq.notes": "ملاحظات / مواصفات (اختياري)",
  "pdq.notesPh": "المقاسات، المواد، التشطيبات، الكميات…",
  "pdq.name": "الاسم",
  "pdq.namePh": "الاسم الكامل",
  "pdq.contact": "البريد الإلكتروني أو الهاتف",
  "pdq.contactPh": "you@company.com أو +…",
  "pdq.country": "الدولة",
  "pdq.countryPh": "الدولة",
  "pdq.submit": "طلب عرض سعر",
  "pdq.waSend": "إرسال عبر واتساب",
  "pdq.reassure": "دون التزام. نؤكد المواصفات كتابيًا أولًا.",
  "pdq.errQty": "يرجى إدخال كمية لا تقل عن 1.",
  "pdq.errName": "يرجى إدخال الاسم.",
  "pdq.errContact": "يرجى إدخال البريد الإلكتروني أو رقم الهاتف.",
  "pdq.doneT": "تم طلب عرض السعر.",
  "pdq.doneD": "شكرًا — طلبك في قائمة الانتظار. نرد خلال يوم عمل واحد.",
  "pdq.viewQuote": "عرض سلة عروض الأسعار",
  "q.crumb": "طلب عرض سعر",
  "q.eyebrow": "طلب عرض سعر",
  "q.title": "اطلب عرض سعر.",
  "q.sub": "راجع اختيارك، وأضف أي مراجع أو صورة، ثم أرسل. نرد خلال يوم عمل واحد.",
  "q.empty": "قائمة عرض السعر فارغة.",
  "q.emptyBrowse": "تصفح الكتالوج",
  "q.emptyOr": "أو صف الأداة التي تحتاجها أدناه — يمكنك إرسال طلب توريد دون عناصر.",
  "q.yourRequest": "طلبك",
  "q.units": "وحدات",
  "q.unit": "وحدة",
  "q.addMore": "أضف المزيد من الأدوات",
  "q.formTitle": "طلب عرض سعر",
  "q.formSub": "لا يلزم الدفع عبر الإنترنت. استلم عرض سعر بناءً على مواصفاتك.",
  "q.name": "الاسم الكامل",
  "q.namePh": "د. أحمد محمد",
  "q.email": "البريد الإلكتروني المهني",
  "q.emailPh": "name@hospital.org",
  "q.company": "الشركة / المؤسسة",
  "q.companyPh": "اسم المستشفى أو الموزع",
  "q.country": "البلد",
  "q.countryPh": "الإمارات العربية المتحدة",
  "q.ref": "مرجع المنتج",
  "q.refPh": "رقم مقال الشركة المصنعة، إن وُجد",
  "q.specs": "المواصفات",
  "q.specsPh": "المقاسات، المواد، التشطيبات، الكميات…",
  "q.photo": "صورة المنتج",
  "q.photoNote": "تُرسل الصور إلى فريقنا للتحديد اليدوي — ولا تُعرض أبدًا كتعرف آلي.",
  "q.photoDrop": "اسحب صورتك وأفلتها هنا",
  "q.photoBrowse": "أو تصفح الملفات",
  "q.submit": "طلب عرض سعر",
  "q.whatsapp": "إرسال عبر واتساب",
  "q.sending": "جاري الإرسال…",
  "q.deposit": "العربون قابل للاسترداد مطروحًا منه التكاليف الملتزم بها لدى المورد.",
  "q.finalPrice": "السعر النهائي مؤكد كتابيًا.",
  "q.remove": "إزالة",
  "q.dec": "إنقاص",
  "q.inc": "زيادة",
  "q.successT": "تم استلام الطلب.",
  "q.successD": "سيرد فريقنا خلال يوم عمل واحد.",
  "q.encodingPhoto": "جارٍ تجهيز الصورة…",
  "q.photoSent": "تم استلام الصورة — سيقوم فريقنا بتحديدها يدويًا.",
  "q.photoWaOnly": "يرجى إرفاق صورتك في محادثة واتساب.",
  "q.successDfb": "واجهتنا مشكلة مؤقتة — يرجى التأكيد عبر واتساب حتى لا يُفقد شيء.",
  "q.successThanks": "شكرًا،",
  "q.waConfirm": "التأكيد عبر واتساب",
  "q.backCatalog": "عودة إلى الكتالوج",
  "common.loading": "جاري التحميل…",
  "common.error": "حدث خطأ ما. حاول مجددًا.",
  "hero.kicker": "أدوات جراحية دقيقة",
  "finder.tabBy1": "بالاسم",
  "finder.tabBy2": "بالمرجع",
  "finder.tabBy3": "بالصورة",
  "finder.drop": "اسحب صورتك وأفلتها هنا",
  "finder.browse": "أو تصفح الملفات",
  "finder.photoReady": "الصورة جاهزة",
  "finder.photoChange": "تغيير الصورة",
  "finder.nameHelp": "اكتب جزءاً من اسم الأداة.",
  "finder.refHelp": "الصق المرجع الخاص بالشركة المصنعة أو رمز SKU.",
  "finder.photoHelp": "فريقنا يحددها يدوياً — دون تخمين آلي.",
  "chip.1": "ملقط",
  "chip.2": "مقص",
  "chip.3": "مبعد",
  "chip.4": "منظار",
  "chip.5": "حامل إبر",
  "ch.badge1": "من المخزون",
  "ch.badge2": "توريد حسب المواصفات",
  "ch.time1": "يُشحن من مخزوننا",
  "ch.time2": "التوريد عادة 1–3 أيام",
  "ch.rule": "الأصناف المتوفرة في المخزون تحمل شارة مخزون؛ وكل ما عدا ذلك يتم توريده مع تأكيد كتابي للمواصفات.",
  "ch.cta1": "تصفح المخزون",
  "ch.cta2": "ابدأ التوريد",
  "why.stat3n": "يوم واحد",
  "why.stat3d": "أقصى مدة للرد. كل طلب يحصل على رد خلال يوم عمل واحد.",
  "why.specT": "تأكيد كتابي للمواصفات",
  "why.specD": "لا التزام قبل التأكيد الكتابي للمواصفات. الدفعة المقدمة فقط بعد موافقتك.",
  "trust.certsT": "الشهادات والمعايير",
  "trust.certsD": "سيتم توفيرها",
  "trust.certsN": "سيتم إدراج شهادات الموردين ومعايير الجودة هنا فور تأكيدها.",
  "trust.matT": "المواد والحرفية",
  "trust.matD": "سيتم توفيرها",
  "trust.matN": "سيتم توثيق درجات الفولاذ والتشطيبات ومعايير التصنيع هنا.",
  "trust.custT": "موضع ثقتنا",
  "trust.custD": "سيتم توفيرها",
  "trust.custN": "ستظهر مراجع العملاء هنا بموافقتهم.",
  "trust.sub": "الضمانات التي تهم المشترين المحترفين — تُنشر فور تأكيدها.",
  "foot.note": "المدد الزمنية أهداف تشغيلية، ليست ضمانات غير مشروطة.",
  "feat.skelA": "جارِ تحميل الأداة",
  "feat.errT": "تعذر تحميل الأدوات المميزة.",
  "feat.errB": "تصفح الكتالوج",
  "nav.how": "كيف نعمل",
  "nav.why": "لماذا سورجرونيك",
  "hero.scroll": "مرر",
  "trust.title2": "التوريد، مصمم كهندسة.",
  "strip.1b": "يوم عمل واحد",
  "strip.1d": "للرد",
  "strip.2b": "1–3 أيام",
  "strip.2d": "للتوريد",
  "strip.3b": "2–5 أيام",
  "strip.3d": "للشحن",
  "hero.tagFrom": "من تشكيلتنا المسجلة",
  "hero.tagCat": "8,658 أداة",
  "hero.viewProduct": "عرض ملقط الأنسجة Adlerkreutz",
  "trust.sub2": "كتالوج واحد وقناتا توريد وسير عمل يركز على المواصفات.",
  "trust.eyebrow2": "الاعتمادات",
  "trust.addrLabel": "المقر الرئيسي",
}
};

/* Specialty names + descriptions per language */
var SPECIALTIES = {
en: [
  ["General Surgery & Laparoscopy","The broadest range — retractors, forceps, clamps"],
  ["Orthopedics & Trauma","Bone instruments, fixation, trauma sets"],
  ["Oral & Maxillofacial","Precision instruments for facial surgery"],
  ["Plastic, Reconstructive & Aesthetic","Rhinoplasty and aesthetic surgery range"],
  ["Cardiovascular & Thoracic","Cardiac and thoracic instrumentation"],
  ["Neurosurgery & Spine","Micro-instruments for neuro and spinal work"],
  ["Ophthalmology","Delicate eye-surgery instruments"],
  ["ENT","Ear, nose and throat instrumentation"],
  ["OB/GYN & Urology","Obstetric, gynecologic and urologic tools"],
  ["Energy & Powered Systems","Electrosurgical and powered instruments"],
  ["Dental & Implant Surgery","Dental and implantology instruments"]
],
fr: [
  ["Chirurgie générale & laparoscopie","La gamme la plus large — écarteurs, pinces, clamps"],
  ["Orthopédie & traumatologie","Instruments osseux, fixation, sets de traumatologie"],
  ["Chirurgie orale & maxillo-faciale","Instruments de précision pour la chirurgie faciale"],
  ["Chirurgie plastique, reconstructrice & esthétique","Gamme rhinoplastie et chirurgie esthétique"],
  ["Chirurgie cardiovasculaire & thoracique","Instrumentation cardiaque et thoracique"],
  ["Neurochirurgie & rachis","Micro-instruments pour la neurochirurgie et le rachis"],
  ["Ophtalmologie","Instruments délicats de chirurgie oculaire"],
  ["ORL","Instrumentation oto-rhino-laryngologique"],
  ["Gynécologie-obstétrique & urologie","Outils obstétricaux, gynécologiques et urologiques"],
  ["Systèmes énergétiques & motorisés","Instruments électrochirurgicaux et motorisés"],
  ["Chirurgie dentaire & implantaire","Instruments dentaires et d'implantologie"]
],
ar: [
  ["الجراحة العامة والمناظير","أوسع تشكيلة — مباعدات، ملاقط، مشابك"],
  ["جراحة العظام والكسور","أدوات العظام، التثبيت، أطقم الكسور"],
  ["جراحة الفم والوجه والفكين","أدوات دقيقة لجراحة الوجه"],
  ["الجراحة التجميلية والترميمية","تشكيلة تجميل الأنف والجراحة التجميلية"],
  ["جراحة القلب والصدر","أدوات جراحة القلب والصدر"],
  ["جراحة الأعصاب والعمود الفقري","أدوات دقيقة لجراحة الأعصاب والعمود الفقري"],
  ["طب العيون","أدوات دقيقة لجراحة العيون"],
  ["الأنف والأذن والحنجرة","أدوات الأنف والأذن والحنجرة"],
  ["النساء والتوليد والمسالك البولية","أدوات التوليد وأمراض النساء والمسالك البولية"],
  ["أنظمة الطاقة والأدوات الكهربائية","أدوات الجراحة الكهربائية والكهربائية"],
  ["جراحة الأسنان وزراعة الأسنان","أدوات طب الأسنان وزراعة الأسنان"]
]
};

/* ---------- Language state ---------- */
var LANG_KEY = "surgronic_lang_v2";
var lang = "en";
try{ lang = localStorage.getItem(LANG_KEY) || "en"; }catch(e){}
if(!STRINGS[lang]) lang = "en";

function t(key){
  var s = STRINGS[lang] || STRINGS.en;
  if(s && s[key] !== undefined) return s[key];
  if(STRINGS.en && STRINGS.en[key] !== undefined) return STRINGS.en[key];
  /* NEVER expose raw keys to users — log and return safe fallback */
  if(typeof console !== "undefined" && console.warn) console.warn("[i18n] Missing key:", key);
  return "";
}
function productName(p){
  p = p || {};
  if(lang === "fr" && p.nameFr) return p.nameFr;
  if(lang === "ar" && p.nameAr) return p.nameAr;
  return p.name || "";
}
function productDesc(p){
  p = p || {};
  if(lang === "fr" && p.descriptionFr) return p.descriptionFr;
  if(lang === "ar" && p.descriptionAr) return p.descriptionAr;
  return p.description || "";
}

function applyI18n(){
  /* data-i18n -> textContent (HTML allowed for <br>) */
  var els = document.querySelectorAll("[data-i18n]");
  for(var i=0;i<els.length;i++){
    var k = els[i].getAttribute("data-i18n");
    els[i].innerHTML = t(k);
  }
  /* data-i18n-ph -> placeholder */
  var phs = document.querySelectorAll("[data-i18n-ph]");
  for(var j=0;j<phs.length;j++){
    phs[j].setAttribute("placeholder", t(phs[j].getAttribute("data-i18n-ph")));
  }
  /* data-i18n-aria -> aria-label */
  var als = document.querySelectorAll("[data-i18n-aria]");
  for(var m=0;m<als.length;m++){
    als[m].setAttribute("aria-label", t(als[m].getAttribute("data-i18n-aria")));
  }
  /* lang switcher active state */
  var btns = document.querySelectorAll(".lang-switch button");
  for(var b=0;b<btns.length;b++){
    btns[b].classList.toggle("on", btns[b].getAttribute("data-lang")===lang);
  }
  /* document lang + dir */
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  /* page title per language */
  var pt = document.querySelector("title[data-i18n-title]");
  if(pt) document.title = t(pt.getAttribute("data-i18n-title"));
}

function setLang(l){
  if(!STRINGS[l]) return;
  lang = l;
  try{ localStorage.setItem(LANG_KEY, l); }catch(e){}
  applyI18n();
  /* notify page scripts to re-render dynamic content */
  var ev;
  try{ ev = new CustomEvent("surgronic:lang", {detail:{lang:lang}}); }
  catch(e){ ev = document.createEvent("CustomEvent"); ev.initCustomEvent("surgronic:lang", true, true, {lang:lang}); }
  document.dispatchEvent(ev);
}
function getLang(){ return lang; }

/* ============================================================
   API
   ============================================================ */
function api(action, args){
  return fetch(API, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({action:action, args:args||{}})
  }).then(function(r){
    if(!r.ok) throw new Error("API error "+r.status);
    return r.json();
  }).then(function(j){ return j.data; });
}
function normProduct(p){
  if(!p) return p;
  p.nameFr = p.nameFr || p.name_fr || p.name;
  p.nameAr = p.nameAr || p.name_ar || p.name;
  p.descriptionFr = p.descriptionFr || p.description_fr || p.description || "";
  p.descriptionAr = p.descriptionAr || p.description_ar || p.description || "";
  p.imageFiles = Array.isArray(p.imageFiles) ? p.imageFiles : [];
  p.finishOptions = p.finishOptions || [];
  return p;
}
function imgUrl(p, base){
  base = base || "./assets/";
  var f = (p.imageFiles && p.imageFiles[0]) || "";
  return f ? base + f : "";
}

/* ============================================================
   Quote basket (localStorage) — names stored per language at add time
   ============================================================ */
var BASKET_KEY = "surgronic_quote_v2";
function getBasket(){
  try{ return JSON.parse(localStorage.getItem(BASKET_KEY)) || []; }
  catch(e){ return []; }
}
function saveBasket(b){ localStorage.setItem(BASKET_KEY, JSON.stringify(b)); updateBasketUI(); }
function addToQuote(product, qty){
  var b = getBasket();
  var found = null;
  for(var i=0;i<b.length;i++){ if(b[i].sku===product.sku){ found=b[i]; break; } }
  if(found){ found.qty += (qty||1); }
  else{
    b.push({
      sku: product.sku,
      name: product.name, nameFr: product.nameFr, nameAr: product.nameAr,
      brand: product.brand||"",
      image: (product.imageFiles&&product.imageFiles[0])||"",
      qty: (qty||1)
    });
  }
  saveBasket(b);
}
function removeFromQuote(sku){
  saveBasket(getBasket().filter(function(i){ return i.sku!==sku; }));
}
function setQty(sku, qty){
  var b = getBasket();
  for(var i=0;i<b.length;i++){ if(b[i].sku===sku){ b[i].qty=Math.max(1,qty|0); } }
  saveBasket(b);
}
function basketCount(){
  return getBasket().reduce(function(n,i){ return n+i.qty; },0);
}
function updateBasketUI(){
  var els = document.querySelectorAll("[data-basket-count]");
  for(var i=0;i<els.length;i++){ els[i].textContent = basketCount(); }
}

/* ============================================================
   WhatsApp integration — prepopulated procurement inquiries
   ============================================================ */
var WA_NUMBER = "905526081432";
function waProductUrl(p, name, qty){
  var msg = t("wa.single")
    .replace("{sku}", p.sku||"")
    .replace("{name}", name||"")
    .replace("{qty}", qty||1);
  var link = "";
  try{ link = location.origin + location.pathname.replace(/[^/]*$/, "") + "product.html?sku=" + encodeURIComponent(p.sku||""); }
  catch(e){}
  if(link) msg += " " + t("wa.link") + ": " + link;
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
}
function waBasketUrl(){
  var b = getBasket();
  if(!b.length) return "https://wa.me/" + WA_NUMBER;
  var lines = b.map(function(i){
    var nm = (lang==="fr"&&i.nameFr)?i.nameFr:((lang==="ar"&&i.nameAr)?i.nameAr:i.name);
    return "- " + i.sku + ", " + nm + " x" + i.qty;
  });
  var msg = t("wa.multi") + "\n" + lines.join("\n");
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
}

/* ============================================================
   Header / nav / footer (i18n-aware)
   ============================================================ */
function headerHTML(active){
  return ''+
  '<header class="site-header"><div class="container header-inner">'+
    '<a class="logo" href="index.html" aria-label="Surgronic"><img src="assets/logo.svg" alt="Surgronic" style="height:28px;width:auto;display:block"></a>'+
    '<nav class="main-nav">'+
      '<a href="catalogue.html"'+(active==="catalog"?' class="active"':'')+' data-i18n="nav.catalog">'+t("nav.catalog")+'</a>'+
      '<a href="index.html#how" data-i18n="nav.how">'+t("nav.how")+'</a>'+
      '<a href="index.html#why" data-i18n="nav.why">'+t("nav.why")+'</a>'+
    '</nav>'+
    '<div class="header-actions">'+
      '<div class="lang-switch" role="group" aria-label="Language">'+
        '<button data-lang="en"'+(lang==="en"?' class="on"':'')+'>EN</button>'+
        '<button data-lang="fr"'+(lang==="fr"?' class="on"':'')+'>FR</button>'+
        '<button data-lang="ar"'+(lang==="ar"?' class="on"':'')+'>AR</button>'+
      '</div>'+
      '<a class="quote-indicator" href="quote.html" aria-label="'+t("nav.quoteList")+'">'+
        '<span data-i18n="nav.quoteList">'+t("nav.quoteList")+'</span> <span class="count" data-basket-count>0</span>'+
      '</a>'+
      '<a class="btn btn-primary" href="quote.html" style="padding:11px 22px;font-size:14px" data-i18n="nav.quote">'+t("nav.quote")+'</a>'+
      '<button class="hamburger" id="hamburger" aria-label="'+t("nav.menu")+'">&#9776;</button>'+
    '</div>'+
  '</div></header>'+
  '<div class="mobile-nav" id="mobileNav">'+
    '<button class="close" id="mobileClose" aria-label="'+t("nav.close")+'">&times;</button>'+
    '<a href="catalogue.html" data-i18n="nav.catalog">'+t("nav.catalog")+'</a>'+
    '<a href="index.html#how" data-i18n="nav.how">'+t("nav.how")+'</a>'+
    '<a href="index.html#why" data-i18n="nav.why">'+t("nav.why")+'</a>'+
    '<a href="quote.html" data-i18n="nav.quote">'+t("nav.quote")+'</a>'+
  '</div>';
}
function footerHTML(){
  return ''+
  '<footer class="footer"><div class="container">'+
    '<div class="footer-grid">'+
      '<div class="footer-brand">'+
        '<a class="logo" href="index.html" aria-label="Surgronic"><img src="assets/logo-reversed.svg" alt="Surgronic" style="height:28px;width:auto;display:block"></a>'+
        '<p data-i18n="footer.tagline">'+t("footer.tagline")+'</p>'+
      '</div>'+
      '<div><h4 data-i18n="footer.catalog">'+t("footer.catalog")+'</h4>'+
        '<a href="catalogue.html" data-i18n="nav.catalog">'+t("nav.catalog")+'</a>'+
        '<a href="catalogue.html?brand=Aesculap">Aesculap</a>'+
        '<a href="catalogue.html?brand=Sklar">Sklar</a>'+
        '<a href="quote.html" data-i18n="nav.quote">'+t("nav.quote")+'</a>'+
      '</div>'+
      '<div><h4 data-i18n="footer.company">'+t("footer.company")+'</h4>'+
        '<a href="index.html#how" data-i18n="footer.how">'+t("footer.how")+'</a>'+
        '<a href="index.html#specialties" data-i18n="footer.specialties">'+t("footer.specialties")+'</a>'+
        '<a href="index.html#trust" data-i18n="footer.why">'+t("footer.why")+'</a>'+
      '</div>'+
      '<div><h4 data-i18n="footer.contact">'+t("footer.contact")+'</h4>'+
        '<a href="mailto:yusuf@surgronic.com">yusuf@surgronic.com</a>'+
        '<a href="tel:+905526081432"><bdi>+90 552 608 1432</bdi></a>'+
        '<a href="https://wa.me/905526081432" target="_blank" rel="noopener">WhatsApp</a>'+
      '</div>'+
    '</div>'+
    '<div class="footer-bottom">'+
      '<span>\u00A9 2026 Surgronic. <span data-i18n="footer.rights">'+t("footer.rights")+'</span></span>'+
      '<span data-i18n="foot.note">'+t("foot.note")+'</span>'+
    '</div>'+
  '</div></footer>';
}
function mountChrome(active){
  document.body.insertAdjacentHTML("afterbegin", headerHTML(active||""));
  document.body.insertAdjacentHTML("beforeend", footerHTML());
  /* set initial lang/dir before first paint of chrome */
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  updateBasketUI();
  var hb=document.getElementById("hamburger"), mn=document.getElementById("mobileNav"), mc=document.getElementById("mobileClose");
  if(hb&&mn){ hb.addEventListener("click",function(){mn.classList.add("open");}); }
  if(mc&&mn){ mc.addEventListener("click",function(){mn.classList.remove("open");}); }
  var langBtns=document.querySelectorAll(".lang-switch button");
  for(var i=0;i<langBtns.length;i++){
    langBtns[i].addEventListener("click",function(){
      setLang(this.getAttribute("data-lang"));
      /* re-mount chrome in the new language */
      var hdr = document.querySelector(".site-header");
      var mnav = document.getElementById("mobileNav");
      var ftr = document.querySelector("footer");
      if(hdr) hdr.outerHTML = headerHTML(active||"");
      if(mnav) mnav.outerHTML = "";
      if(ftr) ftr.outerHTML = footerHTML();
      /* rebuild mobile nav (it was removed above) */
      var tmp = document.createElement("div");
      tmp.innerHTML = headerHTML(active||"");
      var newMnav = tmp.querySelector(".mobile-nav");
      if(newMnav){ document.body.appendChild(newMnav); }
      /* rebind */
      updateBasketUI();
      applyI18n();
      var hb2=document.getElementById("hamburger"), mn2=document.getElementById("mobileNav"), mc2=document.getElementById("mobileClose");
      if(hb2&&mn2){ hb2.addEventListener("click",function(){mn2.classList.add("open");}); }
      if(mc2&&mn2){ mc2.addEventListener("click",function(){mn2.classList.remove("open");}); }
      var lb2=document.querySelectorAll(".lang-switch button");
      for(var k=0;k<lb2.length;k++){
        lb2[k].addEventListener("click",function(){
          setLang(this.getAttribute("data-lang"));
          location.reload();
        });
      }
      /* tell page scripts to re-render */
      var ev;
      try{ ev = new CustomEvent("surgronic:lang", {detail:{lang:lang}}); }
      catch(e){ ev = document.createEvent("CustomEvent"); ev.initCustomEvent("surgronic:lang", true, true, {lang:lang}); }
      document.dispatchEvent(ev);
    });
  }
}

/* ============================================================
   Product card (i18n-aware)
   ============================================================ */
function cardHTML(p){
  p = normProduct(p);
  var nm = productName(p);
  var img = imgUrl(p);
  var imgTag = img
    ? '<div class="pimg"><img src="'+img+'" alt="'+esc(nm)+'" loading="lazy"></div>'
    : '<div class="pimg" style="display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:13px">'+t("card.imgSoon")+'</div>';
  var waUrl = waProductUrl(p, nm, 1);
  return ''+
  '<article class="product-card">'+imgTag+
    '<div class="pbody">'+
      '<div class="psku">'+esc(p.sku)+'</div>'+
      '<h3>'+esc(nm)+'</h3>'+
      '<div class="pbrand">'+esc(p.brand||"")+' <a class="plink-view" href="product.html?sku='+encodeURIComponent(p.sku)+'">'+t("card.details")+'</a></div>'+
      '<span class="por">'+t("card.por")+'</span>'+
      '<div class="pfoot">'+
        '<button class="btn-add-quote" data-add="'+esc(p.sku)+'">'+t("card.add")+'</button>'+
        '<a class="btn-wa" href="'+waUrl+'" target="_blank" rel="noopener" aria-label="WhatsApp">'+
          '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88M20.46 3.55A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.41"/></svg>'+
          t("card.whatsapp")+'</a>'+
      '</div>'+
    '</div>'+
  '</article>';
}
function esc(s){
  return String(s==null?"":s).replace(/[&<>"']/g,function(c){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
  });
}
function bindAddButtons(root){
  (root||document).querySelectorAll("[data-add]").forEach(function(btn){
    /* avoid double-binding after language re-render */
    if(btn.getAttribute("data-bound")==="1") return;
    btn.setAttribute("data-bound","1");
    btn.addEventListener("click",function(ev){
      ev.preventDefault(); ev.stopPropagation();
      if(btn.disabled) return;
      var sku = btn.getAttribute("data-add");
      var orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = t("card.adding");
      api("getProduct",{sku:sku}).then(function(d){
        if(d && d.product){
          addToQuote(normProduct(d.product),1);
          btn.innerHTML = t("card.added");
          btn.style.background = "var(--bronze)";
          btn.style.borderColor = "var(--bronze)";
          setTimeout(function(){
            btn.innerHTML = orig;
            btn.style.background = "";
            btn.style.borderColor = "";
            btn.disabled = false;
          },1600);
        } else { btn.disabled=false; btn.innerHTML=orig; }
      }).catch(function(){ btn.disabled=false; btn.innerHTML=orig; });
    });
  });
}

/* Auto-apply i18n once DOM is ready (fixes early-script timing issue) */
if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", function(){ applyI18n(); });
} else {
  applyI18n();
}

/* expose */
window.SG = {
  api:api, normProduct:normProduct, imgUrl:imgUrl,
  getBasket:getBasket, saveBasket:saveBasket, addToQuote:addToQuote,
  removeFromQuote:removeFromQuote, setQty:setQty, basketCount:basketCount,
  updateBasketUI:updateBasketUI, mountChrome:mountChrome,
  cardHTML:cardHTML, esc:esc, bindAddButtons:bindAddButtons,
  waProductUrl:waProductUrl, waBasketUrl:waBasketUrl,
  t:t, setLang:setLang, getLang:getLang, applyI18n:applyI18n,
  productName:productName, productDesc:productDesc,
  SPECIALTIES:SPECIALTIES
};
})();
