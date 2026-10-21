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
  "hero.eyebrow": "Precision Sourcing Platform",
  "hero.title": "Precision instruments.<br>Precisely sourced.",
  "hero.lead": "Explore surgical instruments across 11 specialties, or send us your exact requirements. We help procurement teams identify and source instruments to specification.",
  "hero.cta1": "Explore Instruments",
  "hero.cta2": "Request a Quote",
  "hero.stat1n": "8,658",
  "hero.stat1l": "Instruments catalogued",
  "hero.stat2n": "11",
  "hero.stat2l": "Surgical specialties",
  "hero.stat3n": "1",
  "hero.stat3l": "Business day response",
  "paths.eyebrow": "Choose your path",
  "paths.title": "Three ways to get the right instrument.",
  "paths.sub": "Whether you know the reference or only have a photograph, there is a direct route to a quotation.",
  "path1.t": "Browse the Catalog",
  "path1.d": "Find instruments by specialty, name, or manufacturer reference across 8,658 catalogued products.",
  "path1.l": "Explore instruments",
  "path2.t": "Source a Specific Instrument",
  "path2.d": "Submit an instrument name, SKU, manufacturer reference, or full specifications. We confirm and quote.",
  "path2.l": "Start a sourcing request",
  "path3.t": "Send a Photograph",
  "path3.d": "Upload a product image. Our team identifies it or sources it manually — no automated guesswork.",
  "path3.l": "Upload a photo",
  "spec.eyebrow": "Specialties",
  "spec.title": "Explore surgical specialties.",
  "spec.sub": "Eleven disciplines. One catalogue. Each specialty is a navigable destination.",
  "how.eyebrow": "How Surgronic works",
  "how.title": "From requirement to delivery.",
  "step1.t": "Tell us what you need",
  "step1.d": "Browse the catalog, send a reference, or upload a photograph.",
  "step2.t": "We confirm the specification",
  "step2.d": "Written specification confirmation before anything is committed.",
  "step3.t": "Receive a quotation",
  "step3.d": "Clear pricing within one business day. Final price confirmed in writing.",
  "step4.t": "Confirm and receive",
  "step4.d": "Nothing ships until you have seen it and approved it.",
  "feat.eyebrow": "Featured",
  "feat.title": "Instruments buyers ask for.",
  "feat.sub": "A curated selection from the live catalogue.",
  "feat.browse": "Browse all 8,658 instruments",
  "feat.loading": "Loading featured instruments…",
  "trust.eyebrow": "Why Surgronic",
  "trust.title": "Built for procurement teams.",
  "trust.1n": "8,658",
  "trust.1d": "Instruments catalogued across 11 surgical specialties, searchable by name, SKU, and manufacturer reference.",
  "trust.2n": "3 paths",
  "trust.2d": "From stock, sourced to specification, or identified from your photograph — one quotation workflow.",
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
  "q.submit": "Request Quotation",
  "q.sending": "Sending…",
  "q.deposit": "Deposit refundable minus costs already committed to the supplier.",
  "q.finalPrice": "Final price confirmed in writing.",
  "q.remove": "Remove",
  "q.dec": "Decrease",
  "q.inc": "Increase",
  "q.successT": "Request received.",
  "q.successD": "Our team will respond within one business day.",
  "q.successDfb": "Our API is temporarily unreachable — please confirm via WhatsApp so nothing is lost.",
  "q.successThanks": "Thank you,",
  "q.waConfirm": "Confirm via WhatsApp",
  "q.backCatalog": "Back to catalog",
  "common.loading": "Loading…",
  "common.error": "Something went wrong. Please try again."
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
  "hero.eyebrow": "Plateforme de sourcing de précision",
  "hero.title": "Des instruments de précision.<br>Sourcés avec précision.",
  "hero.lead": "Explorez les instruments chirurgicaux dans 11 spécialités, ou envoyez-nous vos exigences exactes. Nous aidons les équipes d'achat à identifier et sourcer les instruments selon vos spécifications.",
  "hero.cta1": "Explorer les instruments",
  "hero.cta2": "Demander un devis",
  "hero.stat1n": "8 658",
  "hero.stat1l": "Instruments catalogués",
  "hero.stat2n": "11",
  "hero.stat2l": "Spécialités chirurgicales",
  "hero.stat3n": "1",
  "hero.stat3l": "Jour ouvré de réponse",
  "paths.eyebrow": "Choisissez votre voie",
  "paths.title": "Trois façons d'obtenir le bon instrument.",
  "paths.sub": "Que vous connaissiez la référence ou que vous n'ayez qu'une photographie, il existe un chemin direct vers un devis.",
  "path1.t": "Parcourir le catalogue",
  "path1.d": "Trouvez des instruments par spécialité, nom ou référence fabricant parmi 8 658 produits catalogués.",
  "path1.l": "Explorer les instruments",
  "path2.t": "Sourcer un instrument spécifique",
  "path2.d": "Soumettez un nom d'instrument, un SKU, une référence fabricant ou des spécifications complètes. Nous confirmons et chiffrons.",
  "path2.l": "Démarrer une demande",
  "path3.t": "Envoyer une photographie",
  "path3.d": "Téléversez une image du produit. Notre équipe l'identifie ou le source manuellement — sans devinette automatisée.",
  "path3.l": "Téléverser une photo",
  "spec.eyebrow": "Spécialités",
  "spec.title": "Explorez les spécialités chirurgicales.",
  "spec.sub": "Onze disciplines. Un seul catalogue. Chaque spécialité est une destination navigable.",
  "how.eyebrow": "Fonctionnement de Surgronic",
  "how.title": "Du besoin à la livraison.",
  "step1.t": "Dites-nous ce qu'il vous faut",
  "step1.d": "Parcourez le catalogue, envoyez une référence ou téléversez une photographie.",
  "step2.t": "Nous confirmons la spécification",
  "step2.d": "Confirmation écrite des spécifications avant tout engagement.",
  "step3.t": "Recevez un devis",
  "step3.d": "Tarification claire sous un jour ouvré. Prix final confirmé par écrit.",
  "step4.t": "Confirmez et recevez",
  "step4.d": "Rien n'est expédié avant que vous l'ayez vu et approuvé.",
  "feat.eyebrow": "En vedette",
  "feat.title": "Les instruments les plus demandés.",
  "feat.sub": "Une sélection du catalogue en direct.",
  "feat.browse": "Parcourir les 8 658 instruments",
  "feat.loading": "Chargement des instruments en vedette…",
  "trust.eyebrow": "Pourquoi Surgronic",
  "trust.title": "Conçu pour les équipes d'achat.",
  "trust.1n": "8 658",
  "trust.1d": "Instruments catalogués dans 11 spécialités chirurgicales, recherchables par nom, SKU et référence fabricant.",
  "trust.2n": "3 voies",
  "trust.2d": "En stock, sourcé sur spécification, ou identifié depuis votre photographie — un seul flux de devis.",
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
  "q.submit": "Demander un devis",
  "q.sending": "Envoi…",
  "q.deposit": "Acompte remboursable moins les coûts déjà engagés auprès du fournisseur.",
  "q.finalPrice": "Prix final confirmé par écrit.",
  "q.remove": "Retirer",
  "q.dec": "Diminuer",
  "q.inc": "Augmenter",
  "q.successT": "Demande reçue.",
  "q.successD": "Notre équipe répondra sous un jour ouvré.",
  "q.successDfb": "Notre API est momentanément inaccessible — veuillez confirmer via WhatsApp pour ne rien perdre.",
  "q.successThanks": "Merci,",
  "q.waConfirm": "Confirmer via WhatsApp",
  "q.backCatalog": "Retour au catalogue",
  "common.loading": "Chargement…",
  "common.error": "Une erreur est survenue. Veuillez réessayer."
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
  "hero.eyebrow": "منصة توريد دقيقة",
  "hero.title": "أدوات دقيقة.<br>توريد دقيق.",
  "hero.lead": "استكشف الأدوات الجراحية في 11 تخصصًا، أو أرسل لنا متطلباتك الدقيقة. نساعد فرق المشتريات على تحديد الأدوات وتوريدها حسب المواصفات.",
  "hero.cta1": "استكشف الأدوات",
  "hero.cta2": "طلب عرض سعر",
  "hero.stat1n": "8,658",
  "hero.stat1l": "أداة مفهرسة",
  "hero.stat2n": "11",
  "hero.stat2l": "تخصصًا جراحيًا",
  "hero.stat3n": "1",
  "hero.stat3l": "يوم عمل للرد",
  "paths.eyebrow": "اختر طريقك",
  "paths.title": "ثلاث طرق للحصول على الأداة المناسبة.",
  "paths.sub": "سواء كنت تعرف المرجع أو لديك صورة فقط، هناك طريق مباشر إلى عرض السعر.",
  "path1.t": "تصفح الكتالوج",
  "path1.d": "اعثر على الأدوات حسب التخصص أو الاسم أو مرجع الشركة المصنعة من بين 8,658 منتجًا مفهرسًا.",
  "path1.l": "استكشف الأدوات",
  "path2.t": "توريد أداة محددة",
  "path2.d": "أرسل اسم الأداة أو SKU أو مرجع الشركة المصنعة أو المواصفات الكاملة. نؤكد ونقدم عرض السعر.",
  "path2.l": "ابدأ طلب توريد",
  "path3.t": "أرسل صورة",
  "path3.d": "ارفع صورة المنتج. يحددها فريقنا أو يوردها يدويًا — دون تخمين آلي.",
  "path3.l": "ارفع صورة",
  "spec.eyebrow": "التخصصات",
  "spec.title": "استكشف التخصصات الجراحية.",
  "spec.sub": "أحد عشر تخصصًا. كتالوج واحد. كل تخصص وجهة قابلة للتصفح.",
  "how.eyebrow": "كيف تعمل سورجرونيك",
  "how.title": "من الاحتياج إلى التسليم.",
  "step1.t": "أخبرنا بما تحتاجه",
  "step1.d": "تصفح الكتالوج أو أرسل مرجعًا أو ارفع صورة.",
  "step2.t": "نؤكد المواصفات",
  "step2.d": "تأكيد كتابي للمواصفات قبل أي التزام.",
  "step3.t": "استلم عرض السعر",
  "step3.d": "أسعار واضحة خلال يوم عمل واحد. السعر النهائي مؤكد كتابيًا.",
  "step4.t": "أكّد واستلم",
  "step4.d": "لا يُشحن شيء حتى تراه وتعتمده.",
  "feat.eyebrow": "مميز",
  "feat.title": "الأدوات الأكثر طلبًا.",
  "feat.sub": "مختارات من الكتالوج المباشر.",
  "feat.browse": "تصفح جميع الأدوات البالغ عددها 8,658",
  "feat.loading": "جاري تحميل الأدوات المميزة…",
  "trust.eyebrow": "لماذا سورجرونيك",
  "trust.title": "مصممة لفرق المشتريات.",
  "trust.1n": "8,658",
  "trust.1d": "أداة مفهرسة في 11 تخصصًا جراحيًا، قابلة للبحث بالاسم وSKU ومرجع الشركة المصنعة.",
  "trust.2n": "3 طرق",
  "trust.2d": "من المخزون، أو توريد حسب المواصفات، أو تحديد من صورتك — سير عمل واحد لعروض الأسعار.",
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
  "q.submit": "طلب عرض سعر",
  "q.sending": "جاري الإرسال…",
  "q.deposit": "العربون قابل للاسترداد مطروحًا منه التكاليف الملتزم بها لدى المورد.",
  "q.finalPrice": "السعر النهائي مؤكد كتابيًا.",
  "q.remove": "إزالة",
  "q.dec": "إنقاص",
  "q.inc": "زيادة",
  "q.successT": "تم استلام الطلب.",
  "q.successD": "سيرد فريقنا خلال يوم عمل واحد.",
  "q.successDfb": "واجهتنا مشكلة مؤقتة — يرجى التأكيد عبر واتساب حتى لا يُفقد شيء.",
  "q.successThanks": "شكرًا،",
  "q.waConfirm": "التأكيد عبر واتساب",
  "q.backCatalog": "عودة إلى الكتالوج",
  "common.loading": "جاري التحميل…",
  "common.error": "حدث خطأ ما. حاول مجددًا."
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
  if(s[key] !== undefined) return s[key];
  if(STRINGS.en[key] !== undefined) return STRINGS.en[key];
  return key;
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
   Header / nav / footer (i18n-aware)
   ============================================================ */
function headerHTML(active){
  return ''+
  '<header class="site-header"><div class="container header-inner">'+
    '<a class="logo" href="index.html">Surgronic<span class="dot">.</span></a>'+
    '<nav class="main-nav">'+
      '<a href="index.html"'+(active==="home"?' class="active"':'')+' data-i18n="nav.home">'+t("nav.home")+'</a>'+
      '<a href="catalogue.html"'+(active==="catalog"?' class="active"':'')+' data-i18n="nav.catalog">'+t("nav.catalog")+'</a>'+
      '<a href="quote.html"'+(active==="quote"?' class="active"':'')+' data-i18n="nav.quote">'+t("nav.quote")+'</a>'+
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
    '<a href="index.html" data-i18n="nav.home">'+t("nav.home")+'</a>'+
    '<a href="catalogue.html" data-i18n="nav.catalog">'+t("nav.catalog")+'</a>'+
    '<a href="quote.html" data-i18n="nav.quote">'+t("nav.quote")+'</a>'+
  '</div>';
}
function footerHTML(){
  return ''+
  '<footer><div class="container">'+
    '<div class="footer-grid">'+
      '<div class="footer-brand">'+
        '<a class="logo" href="index.html" style="color:#fff">Surgronic<span class="dot">.</span></a>'+
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
        '<a href="tel:+905526081432">+90 552 608 1432</a>'+
        '<a href="https://wa.me/905526081432" target="_blank" rel="noopener">WhatsApp</a>'+
      '</div>'+
    '</div>'+
    '<div class="footer-bottom">'+
      '<span>\u00A9 2026 Surgronic. <span data-i18n="footer.rights">'+t("footer.rights")+'</span></span>'+
      '<span>Surgronic \u00B7 Sisli, Istanbul, Turkey</span>'+
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
  return ''+
  '<article class="product-card">'+imgTag+
    '<div class="pbody">'+
      '<div class="psku">'+esc(p.sku)+'</div>'+
      '<h3>'+esc(nm)+'</h3>'+
      '<div class="pbrand">'+esc(p.brand||"")+'</div>'+
      '<div class="pfoot" style="flex-direction:column;align-items:stretch;gap:10px">'+
        '<span class="por">'+t("card.por")+'</span>'+
        '<button class="btn btn-primary" data-add="'+esc(p.sku)+'" style="width:100%;padding:12px;font-size:14px">'+t("card.add")+'</button>'+
        '<a href="product.html?sku='+encodeURIComponent(p.sku)+'" style="font-size:13px;font-weight:500;color:var(--muted);text-align:center">'+t("card.details")+'</a>'+
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

/* expose */
window.SG = {
  api:api, normProduct:normProduct, imgUrl:imgUrl,
  getBasket:getBasket, saveBasket:saveBasket, addToQuote:addToQuote,
  removeFromQuote:removeFromQuote, setQty:setQty, basketCount:basketCount,
  updateBasketUI:updateBasketUI, mountChrome:mountChrome,
  cardHTML:cardHTML, esc:esc, bindAddButtons:bindAddButtons,
  t:t, setLang:setLang, getLang:getLang, applyI18n:applyI18n,
  productName:productName, productDesc:productDesc,
  SPECIALTIES:SPECIALTIES
};
})();
