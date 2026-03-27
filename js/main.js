/* ===== alfatlawy Co - Crystal White JS v10.0 ===== */
/* Minimal, clean JavaScript — no flashy effects */
document.addEventListener('DOMContentLoaded', function() {

    /* ===== Preloader ===== */
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() { preloader.classList.add('loaded'); }, 200);
        });
        setTimeout(function() { preloader.classList.add('loaded'); }, 1800);
    }

    /* ===== Dark/Light Mode ===== */
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateThemeIcon(next);
        });
    }

    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    /* ===== Language System (10 Languages) ===== */
    const translations = {
        ar: {},
        en: {
            'nav.home': 'Home', 'nav.about': 'About Us', 'nav.services': 'Services',
            'nav.team': 'Our Team', 'nav.partnership': 'Partnership', 'nav.contact': 'Contact Us',
            'hero.badge': 'Al-Fatlawy Accounting & Auditing Firm',
            'hero.title_prefix': 'We provide the best services in',
            'hero.desc': 'We offer integrated accounting and consulting services with the highest quality and professional standards for over 30 years',
            'hero.btn_services': 'Our Services', 'hero.btn_about': 'About Us',
            'hero.trust1': 'Internationally Certified', 'hero.trust2': 'Since 1994', 'hero.trust3': '+500 Clients',
            'stats.experience': 'Years of Experience', 'stats.clients': 'Happy Clients',
            'stats.projects': 'Completed Projects', 'stats.experts': 'Expert Specialists',
            'about.tag': 'About Us', 'about.title': 'Who We Are',
            'about.p1': 'In 1994, our journey began as an insurance agency for the National Insurance Company. Over the years, we expanded into accounting, auditing, and consulting. Today, we are an integrated company providing professional services with international standards.',
            'about.p2': 'We believe that success comes through building long-term relationships with our clients, based on trust, transparency, and excellence in professional services.',
            'about.btn': 'More About Us',
            'services.tag': 'What We Offer', 'services.title': 'Our Services',
            'services.audit': 'Auditing', 'services.audit_desc': 'External, internal, and pre-audit services with the highest quality standards',
            'services.accounting': 'Accounting', 'services.accounting_desc': 'Bookkeeping and financial statement preparation according to international standards',
            'services.tax': 'Tax', 'services.tax_desc': 'Tax management, strategic tax planning, and tax returns',
            'services.insurance': 'Insurance', 'services.insurance_desc': 'Comprehensive insurance solutions to protect companies from potential risks',
            'services.consulting': 'Management Consulting', 'services.consulting_desc': 'Specialized consulting to improve organizational performance and drive strategic growth',
            'services.hr': 'Human Resources', 'services.hr_desc': 'Integrated HR management and talent acquisition solutions',
            'services.btn': 'All Our Services',
            'team.tag': 'Work Team', 'team.title': 'Our Team',
            'team.founder': 'Founder & Managing Partner', 'team.cofounder': 'Co-Founder',
            'team.legal': 'Legal Advisor', 'team.btn': 'Full Team',
            'cta.title': 'Need Professional Consultation?',
            'cta.desc': 'Contact us today and get a consultation from our specialized experts',
            'cta.btn_contact': 'Contact Us', 'cta.btn_call': 'Call Us',
            'footer.links': 'Quick Links', 'footer.contact': 'Contact',
            'footer.address': 'Baghdad - Al-Saydiya',
            'footer.desc': 'In 1994, our journey began as an insurance agency for the National Insurance Company',
            'about.history_tag': 'Our History', 'about.history_title': 'Our Journey Through Time',
            'about.milestone1_title': 'The Beginning', 'about.milestone1_desc': 'Our journey began as an insurance agency for the National Insurance Company, laying the foundation for what would become one of Iraq\'s leading accounting and auditing firms.',
            'about.milestone2_title': 'Expansion', 'about.milestone2_desc': 'We expanded into accounting, auditing, and management consulting, providing integrated services to meet the growing Iraqi market needs.',
            'about.milestone3_title': 'International Partnership', 'about.milestone3_desc': 'We entered a strategic partnership with IWT Global to provide services with international standards and expand our scope to include advanced international services.',
            'about.vision_title': 'Our Vision', 'about.vision_desc': 'To be the leading company in providing professional services in Iraq and the region, contributing to building a strong and sustainable economy.',
            'about.mission_title': 'Our Mission', 'about.mission_desc': 'Providing distinguished professional services based on the highest quality and integrity standards, with commitment to developing our human resources.',
            'about.values_tag': 'Our Values', 'about.values_title': 'What Makes Us Different',
            'about.val1': 'Integrity', 'about.val1_desc': 'Commitment to the highest professional ethics in all our dealings',
            'about.val2': 'Excellence', 'about.val2_desc': 'Constant pursuit of providing the best services with the highest quality',
            'about.val3': 'Partnership', 'about.val3_desc': 'Building long-term relationships based on mutual trust',
            'about.val4': 'Innovation', 'about.val4_desc': 'Adopting the latest technologies and methods for innovative solutions',
            'about.partners_tag': 'Partners', 'about.partners_title': 'Our Partnerships',
            'about.partner_desc': 'Our international partner in providing consulting and auditing services with international standards',
            'about.partner_btn': 'More',
            'about.office_tag': 'Our Headquarters', 'about.office_title': 'Company Office',
            'about.office_hq': 'Main Headquarters', 'about.office_address': 'Baghdad - Al-Saydiya, Iraq',
            'about.office_hours': 'Saturday - Thursday: 9:00 AM - 5:00 PM',
            'contact.tag': 'Contact Us', 'contact.info_title': 'Contact Information',
            'contact.info_desc': 'We are here to help. Contact us through any of the following channels:',
            'contact.phone': 'Phone', 'contact.email': 'Email', 'contact.location': 'Location',
            'contact.form_title': 'Send Us a Message', 'contact.name': 'Full Name',
            'contact.subject': 'Subject', 'contact.select': 'Select Subject',
            'contact.job': 'Job Application', 'contact.other': 'Other',
            'contact.message': 'Message', 'contact.attachment': 'Attach File (Optional)',
            'contact.file_text': 'Choose a file or drag it here', 'contact.send': 'Send Message',
            'contact.map_title': 'Our Location on the Map',
            'partnership.tag': 'Global Partnership', 'partnership.title': 'Our Partnership with IWT Global',
            'partnership.intro': 'We are proud of our strategic partnership with IWT Global, one of the world\'s leading consulting and professional services firms.',
            'partnership.benefits_tag': 'Benefits', 'partnership.benefits_title': 'What This Partnership Means for Our Clients',
            'partnership.b1': 'Global Reach', 'partnership.b1_desc': 'Access to a wide international network of experts and specialists',
            'partnership.b2': 'International Standards', 'partnership.b2_desc': 'Applying the highest international standards in all professional services',
            'partnership.b3': 'Advanced Training', 'partnership.b3_desc': 'Continuous international training programs for staff development',
            'partnership.b4': 'Advanced Technology', 'partnership.b4_desc': 'Using the latest technologies and tools in professional services',
            'partnership.scope_tag': 'Scope', 'partnership.scope_title': 'Areas of Cooperation',
            'partnership.s1': 'International Auditing & Accounting', 'partnership.s1_desc': 'Auditing multinational companies and preparing financial reports',
            'partnership.s2': 'Management & Financial Consulting', 'partnership.s2_desc': 'Specialized consulting in restructuring and strategic planning',
            'partnership.s3': 'Training & Professional Development', 'partnership.s3_desc': 'International training programs and workshops',
            'partnership.s4': 'Knowledge & Technology Transfer', 'partnership.s4_desc': 'Exchange of expertise and modern technologies',
            'team.intro_tag': 'Leadership', 'team.intro_title': 'Our Team Members',
            'team.intro_desc': 'An integrated team of experts specialized in accounting, auditing, and management consulting',
            'team.cta_title': 'Join Our Team', 'team.cta_desc': 'We are always looking for new talents to join our distinguished team',
            'team.cta_btn': 'Apply Now',
            'services.audit_full': 'Auditing & Review Services',
            'services.ext_audit': 'External Audit', 'services.ext_audit_desc': 'Financial data examination according to ISA standards',
            'services.int_audit': 'Internal Audit', 'services.int_audit_desc': 'Internal control system evaluation and operational efficiency improvement',
            'services.pre_audit': 'Pre-Audit', 'services.pre_audit_desc': 'Pre-review of financial operations for compliance and accuracy',
            'services.special_audit': 'Special Purpose Audit', 'services.special_audit_desc': 'Specialized audit reports for specific purposes',
            'services.accounting_full': 'Accounting Services',
            'services.bookkeeping': 'Bookkeeping', 'services.bookkeeping_desc': 'Organizing accounting records according to IFRS',
            'services.financial_stmt': 'Financial Statements', 'services.financial_stmt_desc': 'Preparation of financial statements per international standards',
            'services.tax_detail': 'Tax management, strategic tax planning, tax returns, and dispute resolution',
            'services.insurance_detail': 'Comprehensive insurance solutions for companies and individuals',
            'services.consulting_detail': 'Specialized consulting for improving performance and feasibility studies',
            'services.hr_full': 'Human Resources Management', 'services.hr_detail': 'Integrated HR solutions including recruitment, talent acquisition, and performance management',
            'services.advantages_tag': 'Why Us',
            'services.adv1': 'Over 30 years of experience', 'services.adv2': 'Team of expert specialists',
            'services.adv3': 'International partnership with IWT Global', 'services.adv4': 'Global quality standards',
            'services.adv5': 'Customized solutions for each client',
            'chat.title': 'Smart Assistant', 'chat.status': 'Online now',
            'app.tag': 'Mobile App', 'app.title': 'Download Our App Now',
            'app.desc': 'Get all our accounting and consulting services at your fingertips. Al-Fatlawy app is now available on Android and iPhone.',
            'app.f1': 'Instant notifications for latest updates', 'app.f2': 'Track files and financial reports',
            'app.f3': 'Direct communication with experts', 'app.f4': 'Full data encryption and protection',
            'app.get_on': 'Available on', 'app.download_on': 'Download from',
            'app.f1_desc': 'Track your files and transactions moment by moment',
            'app.f2_desc': 'View your financial reports anytime, anywhere',
            'app.f3_desc': 'Instant chat with specialized accountants and consultants',
            'app.f4_desc': 'Advanced AES-256 encryption for your data security',
            'app.f5': 'Built-in Smart Assistant', 'app.f5_desc': 'Ask and get instant answers about our services',
            'app.f6': 'Book Appointments & Consultations', 'app.f6_desc': 'Book your appointment with our experts with one click',
            'app.rating': 'Rating', 'app.downloads': 'Downloads', 'app.tech': 'Cross-platform Technology',
            'app.phone_desc': 'Integrated accounting and consulting services',
            'app.phone_f1': 'Auditing & Accounting', 'app.phone_f2': 'Management Consulting',
            'app.phone_f3': 'Tax Planning', 'app.phone_f4': 'Smart Assistant', 'app.phone_f5': 'Book Appointments',
            'app.phone_chat_title': 'Smart Assistant',
            'app.phone_chat_bot1': 'Hello! How can I help you?',
            'app.phone_chat_user1': 'What are your services?',
            'app.phone_chat_bot2': 'We provide auditing, accounting and consulting services...',
            'services.other_tag': 'Other Services', 'services.other_title': 'Various Services',
            'contact.whatsapp': 'WhatsApp',
            'team.m1_name': 'CPA Akram Kareem Abdul Hussein',
            'team.m2_name': 'Muzahir Arshad Abdul Hussein Hammadi',
            'team.m3_name': 'Peshawa Rizgar Mahmoud', 'team.m4_name': 'Falak Awan',
            'team.m5_name': 'Noor Akram Karim', 'team.m6_name': 'Taghreed Majeed Abdul Hussein',
            'team.m7_name': 'Alaa Imad Raheem', 'team.m8_name': 'Karrar Ali Naser',
            'team.m9_name': 'Hala Mudhafar Mohammed',
            'team.m1_desc': 'Master of Accounting - Over 30 years of experience in accounting and auditing',
            'team.m2_role': 'Senior Administrative Consultant', 'team.m3_role': 'Erbil Office Manager',
            'team.m4_role': 'Sulaymaniyah Office Manager', 'team.m5_role': 'Auditor',
            'team.m6_role': 'Senior Accountant', 'team.m7_role': 'Accountant',
            'team.m8_role': 'Auditor', 'team.m9_role': 'Secretary & Public Relations'
        },
        ku: {
            'nav.home': 'سەرەتا', 'nav.about': 'دەربارەی ئێمە', 'nav.services': 'خزمەتگوزارییەکان',
            'nav.team': 'تیمەکەمان', 'nav.partnership': 'هاوبەشی نێودەوڵەتی', 'nav.contact': 'پەیوەندیمان پێوە بکە',
            'hero.badge': 'کۆمپانیای فەتلاوی بۆ ژمێریاری و تاقیکردنەوە',
            'hero.trust1': 'پەسەندکراوی نێودەوڵەتی', 'hero.trust2': 'لە ١٩٩٤ـەوە', 'hero.trust3': '+٥٠٠ کڕیار',
            'hero.title_prefix': 'باشترین خزمەتگوزارییەکان پێشکەش دەکەین لە',
            'hero.desc': 'خزمەتگوزارییەکانی ژمێریاری و ڕاوێژکاری تەواو پێشکەش دەکەین بە بەرزترین ستانداردی جیهانی بۆ ماوەی زیاتر لە ٣٠ ساڵ',
            'hero.btn_services': 'خزمەتگوزارییەکانمان', 'hero.btn_about': 'دەربارەی ئێمە',
            'stats.experience': 'ساڵ ئەزموون', 'stats.clients': 'کلیلی دڵخۆش', 'stats.projects': 'پرۆژەی تەواو', 'stats.experts': 'پسپۆڕی تایبەت',
            'about.tag': 'دەربارەی ئێمە', 'about.title': 'ئێمە کێین',
            'about.p1': 'لە ١٩٩٤ دا، گەشتەکەمان بە وەکالەتی بیمەیەک بۆ کۆمپانیای بیمەی نیشتیمانی دەستی پێکرد. بە تێپەڕبوونی ساڵان، بەرفراوانمان کرد بۆ ژمێریاری و تاقیکردنەوە و ڕاوێژکاری.',
            'about.p2': 'ئێمە باوەڕمان وایە سەرکەوتن بە دروستکردنی پەیوەندی درێژخایەن لەگەڵ موشتەرییەکانمان دەبێت.',
            'about.btn': 'زیاتر دەربارەی ئێمە',
            'services.tag': 'چی پێشکەش دەکەین', 'services.title': 'خزمەتگوزارییەکانمان',
            'services.audit': 'تاقیکردنەوە', 'services.audit_desc': 'خزمەتگوزاری تاقیکردنەوەی دەرەکی و ناوخۆیی بە بەرزترین ستاندارد',
            'services.accounting': 'ژمێریاری', 'services.accounting_desc': 'ڕێکخستنی تۆمارەکانی ژمێریاری و ئامادەکردنی لیستەکانی دارایی',
            'services.tax': 'باج', 'services.tax_desc': 'بەڕێوەبردنی باج و پلانی باجی ستراتیجی',
            'services.insurance': 'بیمە', 'services.insurance_desc': 'چارەسەری بیمەی تەواو بۆ پاراستنی کۆمپانیاکان',
            'services.consulting': 'ڕاوێژکاری بەڕێوەبردن', 'services.consulting_desc': 'ڕاوێژکاری تایبەت بۆ باشترکردنی ئەدای ڕێکخراوەکان',
            'services.hr': 'سەرچاوەکانی مرۆیی', 'services.hr_desc': 'چارەسەری تەواو بۆ بەڕێوەبردنی سەرچاوەکانی مرۆیی',
            'services.btn': 'هەموو خزمەتگوزارییەکانمان',
            'team.tag': 'تیمی کار', 'team.title': 'تیمەکەمان',
            'team.founder': 'دامەزرێنەر و هاوبەشی بەڕێوەبەر', 'team.cofounder': 'هاوبنیادنەر',
            'team.legal': 'ڕاوێژکاری یاسایی', 'team.btn': 'تیمی تەواو',
            'team.intro_tag': 'سەرکردایەتی', 'team.intro_title': 'ئەندامانی تیمەکەمان',
            'team.intro_desc': 'تیمێکی تەواو لە پسپۆڕانی ژمێریاری و تاقیکردنەوە و ڕاوێژکاری بەڕێوەبردن',
            'team.cta_title': 'بەشداربە لە تیمەکەمان', 'team.cta_desc': 'هەمیشە بەدوای بەهرەمەندی نوێ دەگەڕێین',
            'team.cta_btn': 'ئێستا داواکاری بکە',
            'cta.title': 'پێویستت بە ڕاوێژکاری پیشەیی هەیە؟', 'cta.desc': 'ئەمڕۆ پەیوەندیمان پێوە بکە و ڕاوێژکاری لە پسپۆڕەکانمان وەربگرە',
            'cta.btn_contact': 'پەیوەندیمان پێوە بکە', 'cta.btn_call': 'پەیوەندی بکە',
            'footer.links': 'لینکە خێراکان', 'footer.contact': 'پەیوەندی', 'footer.address': 'بەغدا - سەیدیە',
            'footer.desc': 'لە ١٩٩٤ دا گەشتەکەمان بە وەکالەتی بیمەیەک بۆ کۆمپانیای بیمەی نیشتیمانی دەستی پێکرد',
            'chat.title': 'یاریدەدەری زیرەک', 'chat.status': 'ئێستا سەرهێڵە', 'chat.placeholder': 'بنووسە یان بە دەنگت بدوێنە...',
            'chat.listening': 'گوێدەگرێت...',
            'about.history_tag': 'مێژووی ئێمە', 'about.history_title': 'گەشتەکەمان لە ڕێگای کاتدا',
            'about.milestone1_title': 'سەرەتا', 'about.milestone1_desc': 'گەشتەکەمان بە وەکالەتی بیمەییەک بۆ کۆمپانیای بیمەی نیشتیمانی دەستی پێکرد.',
            'about.milestone2_title': 'بەرفراوانبوون', 'about.milestone2_desc': 'بەرفراوانمان کرد بۆ ژمێریاری و تاقیکردنەوە و ڕاوێژکاری بەڕێوەبردن.',
            'about.milestone3_title': 'هاوبەشی نێودەوڵەتی', 'about.milestone3_desc': 'هاوبەشیمان لەگەڵ IWT Global کرد بۆ پێشکەشکردنی خزمەتگوزاری بە ستانداردی جیهانی.',
            'about.vision_title': 'بینینی ئێمە', 'about.vision_desc': 'بوون بە کۆمپانیای پێشەنگ لە پێشکەشکردنی خزمەتگوزاری پیشەیی لە عێراق و هەرێمدا.',
            'about.mission_title': 'ئەرکی ئێمە', 'about.mission_desc': 'پێشکەشکردنی خزمەتگوزاری پیشەیی نایاب بە بنەمای بەرزترین ستانداردی کوالیتی.',
            'about.values_tag': 'بەهاکانمان', 'about.values_title': 'چی جیاوازمان دەکاتەوە',
            'about.val1': 'دروستی', 'about.val1_desc': 'پابەندبوون بە بەرزترین ئەخلاقی پیشەیی',
            'about.val2': 'نایابی', 'about.val2_desc': 'هەوڵدانی بەردەوام بۆ پێشکەشکردنی باشترین خزمەتگوزاری',
            'about.val3': 'هاوبەشی', 'about.val3_desc': 'دروستکردنی پەیوەندی درێژخایەن لەسەر بنەمای متمانەی هاوبەش',
            'about.val4': 'داهێنان', 'about.val4_desc': 'بەکارهێنانی نوێترین تەکنەلۆژیا و ڕێگاکان',
            'about.partners_tag': 'هاوبەشەکان', 'about.partners_title': 'هاوبەشییەکانی ئێمە',
            'about.partner_desc': 'هاوبەشی نێودەوڵەتیمان لە پێشکەشکردنی خزمەتگوزاری ڕاوێژکاری بە ستانداردی جیهانی',
            'about.partner_btn': 'زیاتر',
            'about.office_tag': 'بارەگامان', 'about.office_title': 'ئۆفیسی شیرکەت',
            'about.office_hq': 'بارەگای سەرەکی', 'about.office_address': 'بەغدا - سەیدیە، عێراق',
            'about.office_hours': 'شەممە - پێنجشەممە: ٩:٠٠ بەیانی - ٥:٠٠ ئێوارە',
            'contact.tag': 'پەیوەندیمان پێوە بکە', 'contact.info_title': 'زانیاری پەیوەندی',
            'contact.info_desc': 'ئێمە لێرەین بۆ یارمەتیدانتان. پەیوەندیمان پێوە بکە بە هەر ڕێگایەک:',
            'contact.phone': 'تەلەفۆن', 'contact.email': 'ئیمەیڵ', 'contact.location': 'شوێن',
            'contact.form_title': 'نامەیەکمان بۆ بنێرە', 'contact.name': 'ناوی تەواو',
            'contact.subject': 'بابەت', 'contact.select': 'بابەت هەڵبژێرە',
            'contact.job': 'داواکاری کار', 'contact.other': 'هیتر',
            'contact.message': 'نامە', 'contact.attachment': 'فایل هاوپێچبکە (بژاردەیی)',
            'contact.file_text': 'فایلێک هەڵبژێرە یان لێرە ڕایبکێشە', 'contact.send': 'نامە بنێرە',
            'contact.map_title': 'شوێنمان لەسەر نەخشە',
            'partnership.tag': 'هاوبەشی جیهانی', 'partnership.title': 'هاوبەشیمان لەگەڵ IWT Global',
            'partnership.intro': 'شانازی دەکەین بە هاوبەشیی ستراتیجیمان لەگەڵ IWT Global.',
            'partnership.benefits_tag': 'سوودەکان', 'partnership.benefits_title': 'ئەم هاوبەشییە چی بۆ موشتەرییەکانمان دەکات',
            'partnership.b1': 'دەسترەسی جیهانی', 'partnership.b1_desc': 'دەسترەسی بە تۆڕی نێودەوڵەتی لە پسپۆڕان',
            'partnership.b2': 'ستانداردی نێودەوڵەتی', 'partnership.b2_desc': 'جێبەجێکردنی بەرزترین ستانداردی نێودەوڵەتی',
            'partnership.b3': 'ڕاهێنانی پێشکەوتوو', 'partnership.b3_desc': 'بەرنامەی ڕاهێنانی نێودەوڵەتی بەردەوام',
            'partnership.b4': 'تەکنەلۆژیای پێشکەوتوو', 'partnership.b4_desc': 'بەکارهێنانی نوێترین تەکنەلۆژیا و ئامرازەکان',
            'partnership.scope_tag': 'بوار', 'partnership.scope_title': 'بوارەکانی هاوکاری',
            'partnership.s1': 'تاقیکردنەوە و ژمێریاری نێودەوڵەتی', 'partnership.s1_desc': 'تاقیکردنەوەی کۆمپانیا نێودەوڵەتییەکان',
            'partnership.s2': 'ڕاوێژکاری بەڕێوەبردن و دارایی', 'partnership.s2_desc': 'ڕاوێژکاری تایبەت لە دووبارەڕێکخستن و پلانی ستراتیجی',
            'partnership.s3': 'ڕاهێنان و پەرەپێدانی پیشەیی', 'partnership.s3_desc': 'بەرنامەی ڕاهێنان و وۆرکشۆپی نێودەوڵەتی',
            'partnership.s4': 'گواستنەوەی زانیاری و تەکنەلۆژیا', 'partnership.s4_desc': 'ئاڵوگۆڕی شارەزایی و تەکنەلۆژیای مۆدێرن',
            'services.audit_full': 'خزمەتگوزاری تاقیکردنەوە و پشکنین',
            'services.ext_audit': 'تاقیکردنەوەی دەرەکی', 'services.ext_audit_desc': 'پشکنینی داتای دارایی بەپێی ستانداردی ISA',
            'services.int_audit': 'تاقیکردنەوەی ناوخۆیی', 'services.int_audit_desc': 'هەڵسەنگاندنی سیستەمی چاودێری ناوخۆیی',
            'services.pre_audit': 'تاقیکردنەوەی پێشوەخت', 'services.pre_audit_desc': 'پشکنینی پێشوەختی کارەکانی دارایی',
            'services.special_audit': 'تاقیکردنەوەی مەبەستی تایبەت', 'services.special_audit_desc': 'ڕاپۆرتی تایبەتی تاقیکردنەوە',
            'services.accounting_full': 'خزمەتگوزاری ژمێریاری',
            'services.bookkeeping': 'تۆمارکردنی تۆماران', 'services.bookkeeping_desc': 'ڕێکخستنی تۆمارەکانی ژمێریاری بەپێی IFRS',
            'services.financial_stmt': 'لیستەکانی دارایی', 'services.financial_stmt_desc': 'ئامادەکردنی لیستەکانی دارایی بەپێی ستانداردی نێودەوڵەتی',
            'services.tax_detail': 'بەڕێوەبردنی باج و پلانی ستراتیجی و چارەسەری کێشەکان',
            'services.insurance_detail': 'چارەسەری بیمەی تەواو بۆ کۆمپانیا و تاکەکان',
            'services.consulting_detail': 'ڕاوێژکاری تایبەت بۆ باشترکردنی ئەدا و لێکۆڵینەوەی گونجاوی',
            'services.hr_full': 'بەڕێوەبردنی سەرچاوەکانی مرۆیی', 'services.hr_detail': 'چارەسەری تەواوی سەرچاوەکانی مرۆیی لەوانە دامەزراندن و بەڕێوەبردنی ئەدا',
            'services.advantages_tag': 'بۆچی ئێمە',
            'services.adv1': 'زیاتر لە ٣٠ ساڵ ئەزموون', 'services.adv2': 'تیمێک لە پسپۆڕانی شارەزا',
            'services.adv3': 'هاوبەشی نێودەوڵەتی لەگەڵ IWT Global', 'services.adv4': 'ستانداردی کوالیتی جیهانی',
            'services.adv5': 'چارەسەری تایبەت بۆ هەر موشتەرییەک',
            'app.tag': 'ئەپی مۆبایل', 'app.title': 'ئەپەکەمان دابەزێنە', 'app.desc': 'هەموو خزمەتگوزارییەکانمان لە دەستتدایە',
            'app.f1': 'ئاگاداریی خێرا', 'app.f2': 'بەدواداچوونی فایلەکان', 'app.f3': 'پەیوەندی ڕاستەوخۆ', 'app.f4': 'پاراستنی داتاکان',
            'app.get_on': 'بەردەستە لە', 'app.download_on': 'دابەزاندن لە',
            'app.f1_desc': 'شوێنکەوتنی فایل و مامەڵەکانت کاتبەکات',
            'app.f2_desc': 'ڕاپۆرتە داراییەکانت لە هەر کاتێکدا ببینە',
            'app.f3_desc': 'چاتی خێرا لەگەڵ ژمێریار و ڕاوێژکاری تایبەت',
            'app.f4_desc': 'شفرەکردنی پێشکەوتوو بە ستانداردی AES-256',
            'app.f5': 'یاریدەدەری زیرەکی ناوخۆیی', 'app.f5_desc': 'بپرسە و وەڵامی خێرا وەربگرە',
            'app.f6': 'نۆرەکردنی مەوعید و ڕاوێژکاری', 'app.f6_desc': 'مەوعیدەکەت لەگەڵ پسپۆڕەکانمان دابنێ',
            'app.rating': 'هەڵسەنگاندن', 'app.downloads': 'داگرتن', 'app.tech': 'تەکنەلۆژیای فرە پلاتفۆرم',
            'app.phone_desc': 'خزمەتگوزاری ژمێریاری و ڕاوێژکاری تەواو',
            'app.phone_f1': 'تاقیکردنەوە و ژمێریاری', 'app.phone_f2': 'ڕاوێژکاری بەڕێوەبردن',
            'app.phone_f3': 'پلانی باجی', 'app.phone_f4': 'یاریدەدەری زیرەک', 'app.phone_f5': 'نۆرەکردنی مەوعید',
            'app.phone_chat_title': 'یاریدەدەری زیرەک',
            'app.phone_chat_bot1': 'سڵاو! چۆن دەتوانم یارمەتیت بدەم؟',
            'app.phone_chat_user1': 'خزمەتگوزارییەکانتان چین؟',
            'app.phone_chat_bot2': 'خزمەتگوزاری تاقیکردنەوە و ژمێریاری و ڕاوێژکاری پێشکەش دەکەین...',
            'services.other_tag': 'خزمەتگوزاری تر', 'services.other_title': 'خزمەتگوزاری جۆراوجۆر',
            'contact.whatsapp': 'واتسئاپ',
            'team.m1_name': 'ژمێریاری یاسایی ئەکرەم کەریم عەبدولحوسەین',
            'team.m2_name': 'مزهەر ئەرشەد عەبدولحوسەین حەمادی',
            'team.m3_name': 'پێشەوا ڕزگار محمود', 'team.m4_name': 'فەلەک ئەوان',
            'team.m5_name': 'نوور ئەکرەم کەریم', 'team.m6_name': 'تەغرید مەجید عەبدولحوسەین',
            'team.m7_name': 'عەلاء عیماد ڕەحیم', 'team.m8_name': 'کەرار عەلی ناسر',
            'team.m9_name': 'هالە موزەفەر محەمەد',
            'team.m1_desc': 'ماستەری ژمێریاری - زیاتر لە ٣٠ ساڵ ئەزموون لە ژمێریاری و تاقیکردنەوە',
            'team.m2_role': 'ڕاوێژکاری بەڕێوەبردنی پایە', 'team.m3_role': 'بەڕێوەبەری ئۆفیسی هەولێر',
            'team.m4_role': 'بەڕێوەبەری ئۆفیسی سلێمانی', 'team.m5_role': 'تاقیکەرەوە',
            'team.m6_role': 'ژمێریاری پایە', 'team.m7_role': 'ژمێریار',
            'team.m8_role': 'تاقیکەرەوە', 'team.m9_role': 'سکرتێری و پەیوەندییە گشتییەکان'
        },
        tr: {
            'nav.home': 'Ana Sayfa', 'nav.about': 'Hakkımızda', 'nav.services': 'Hizmetlerimiz',
            'nav.team': 'Ekibimiz', 'nav.partnership': 'Ortaklık', 'nav.contact': 'İletişim',
            'hero.badge': 'Al-Fatlawy Muhasebe ve Denetim Şirketi',
            'hero.trust1': 'Uluslararası Sertifikalı', 'hero.trust2': '1994\'den beri', 'hero.trust3': '+500 Müşteri',
            'hero.title_prefix': 'En iyi hizmetleri sunuyoruz',
            'hero.desc': '30 yılı aşkın süredir en yüksek kalite ve profesyonellik standartlarıyla entegre muhasebe ve danışmanlık hizmetleri sunuyoruz',
            'hero.btn_services': 'Hizmetlerimiz', 'hero.btn_about': 'Hakkımızda',
            'stats.experience': 'Yıl Deneyim', 'stats.clients': 'Mutlu Müşteri', 'stats.projects': 'Tamamlanan Proje', 'stats.experts': 'Uzman',
            'about.tag': 'Hakkımızda', 'about.title': 'Biz Kimiz',
            'about.p1': '1994 yılında, Ulusal Sigorta Şirketi için bir sigorta acentesi olarak yolculuğumuz başladı. Yıllar içinde muhasebe, denetim ve danışmanlık alanlarına genişledik.',
            'about.p2': 'Başarının müşterilerimizle güven, şeffaflık ve mükemmelliğe dayalı uzun vadeli ilişkiler kurarak geldiğine inanıyoruz.',
            'about.btn': 'Hakkımızda Daha Fazla',
            'services.tag': 'Neler Sunuyoruz', 'services.title': 'Hizmetlerimiz',
            'services.audit': 'Denetim', 'services.audit_desc': 'En yüksek kalite standartlarıyla dış, iç ve ön denetim hizmetleri',
            'services.accounting': 'Muhasebe', 'services.accounting_desc': 'Uluslararası standartlara göre defter tutma ve mali tablo hazırlama',
            'services.tax': 'Vergi', 'services.tax_desc': 'Vergi yönetimi, stratejik vergi planlaması ve beyanname hazırlama',
            'services.insurance': 'Sigorta', 'services.insurance_desc': 'Şirketleri olası risklerden korumak için kapsamlı sigorta çözümleri',
            'services.consulting': 'Yönetim Danışmanlığı', 'services.consulting_desc': 'Kurumsal performansı artırmak için uzman danışmanlık',
            'services.hr': 'İnsan Kaynakları', 'services.hr_desc': 'Entegre İK yönetimi ve yetenek edinme çözümleri',
            'services.btn': 'Tüm Hizmetlerimiz',
            'team.tag': 'Çalışma Ekibi', 'team.title': 'Ekibimiz',
            'team.founder': 'Kurucu ve Yönetici Ortak', 'team.cofounder': 'Kurucu Ortak',
            'team.legal': 'Hukuk Danışmanı', 'team.btn': 'Tam Ekip',
            'team.intro_tag': 'Liderlik', 'team.intro_title': 'Ekip Üyelerimiz',
            'team.intro_desc': 'Muhasebe, denetim ve yönetim danışmanlığı alanında uzmanlardan oluşan entegre bir ekip',
            'team.cta_title': 'Ekibimize Katılın', 'team.cta_desc': 'Her zaman ekibimize katılacak yeni yetenekler arıyoruz',
            'team.cta_btn': 'Şimdi Başvur',
            'cta.title': 'Profesyonel danışmanlığa mı ihtiyacınız var?', 'cta.desc': 'Bugün bizimle iletişime geçin ve uzman danışmanlarımızdan yararlanın',
            'cta.btn_contact': 'İletişim', 'cta.btn_call': 'Bizi Arayın',
            'footer.links': 'Hızlı Bağlantılar', 'footer.contact': 'İletişim', 'footer.address': 'Bağdat - Saydiye',
            'footer.desc': '1994 yılında Ulusal Sigorta Şirketi için bir sigorta acentesi olarak yolculuğumuz başladı',
            'chat.title': 'Akıllı Asistan', 'chat.status': 'Şu anda çevrimiçi', 'chat.placeholder': 'Yazın veya konuşun...',
            'chat.listening': 'Dinleniyor...',
            'about.history_tag': 'Tarihimiz', 'about.history_title': 'Zaman İçinde Yolculuğumuz',
            'about.milestone1_title': 'Başlangıç', 'about.milestone1_desc': 'Ulusal Sigorta Şirketi için sigorta acentesi olarak yolculuğumuz başladı.',
            'about.milestone2_title': 'Genişleme', 'about.milestone2_desc': 'Muhasebe, denetim ve yönetim danışmanlığı alanlarında genişledik.',
            'about.milestone3_title': 'Uluslararası Ortaklık', 'about.milestone3_desc': 'Uluslararası standartlarda hizmet sunmak için IWT Global ile stratejik ortaklık kurduk.',
            'about.vision_title': 'Vizyonumuz', 'about.vision_desc': 'Irak ve bölgede profesyonel hizmet sunumunda lider şirket olmak.',
            'about.mission_title': 'Misyonumuz', 'about.mission_desc': 'En yüksek kalite ve dürüstlük standartlarına dayalı mükemmel profesyonel hizmetler sunmak.',
            'about.values_tag': 'Değerlerimiz', 'about.values_title': 'Bizi Farklı Kılan',
            'about.val1': 'Dürüstlük', 'about.val1_desc': 'Tüm işlemlerimizde en yüksek mesleki etik standartlarına bağlılık',
            'about.val2': 'Mükemmellik', 'about.val2_desc': 'En iyi hizmetleri en yüksek kalitede sunma çabası',
            'about.val3': 'Ortaklık', 'about.val3_desc': 'Karşılıklı güvene dayalı uzun vadeli ilişkiler kurma',
            'about.val4': 'Yenilikçilik', 'about.val4_desc': 'En son teknoloji ve yöntemleri benimseme',
            'about.partners_tag': 'Ortaklar', 'about.partners_title': 'Ortaklıklarımız',
            'about.partner_desc': 'Uluslararası standartlarda danışmanlık ve denetim hizmetlerinde uluslararası ortağımız',
            'about.partner_btn': 'Daha Fazla',
            'about.office_tag': 'Merkezimiz', 'about.office_title': 'Şirket Ofisi',
            'about.office_hq': 'Ana Merkez', 'about.office_address': 'Bağdat - El-Seydiye, Irak',
            'about.office_hours': 'Cumartesi - Perşembe: 09:00 - 17:00',
            'contact.tag': 'İletişim', 'contact.info_title': 'İletişim Bilgileri',
            'contact.info_desc': 'Size yardımcı olmak için buradayız. Aşağıdaki kanallardan bize ulaşın:',
            'contact.phone': 'Telefon', 'contact.email': 'E-posta', 'contact.location': 'Konum',
            'contact.form_title': 'Bize Mesaj Gönderin', 'contact.name': 'Ad Soyad',
            'contact.subject': 'Konu', 'contact.select': 'Konu Seçin',
            'contact.job': 'İş Başvurusu', 'contact.other': 'Diğer',
            'contact.message': 'Mesaj', 'contact.attachment': 'Dosya Ekle (İsteğe Bağlı)',
            'contact.file_text': 'Bir dosya seçin veya buraya sürükleyin', 'contact.send': 'Mesaj Gönder',
            'contact.map_title': 'Haritadaki Konumumuz',
            'partnership.tag': 'Küresel Ortaklık', 'partnership.title': 'IWT Global ile Ortaklığımız',
            'partnership.intro': 'Dünyanın önde gelen danışmanlık firmalarından biri olan IWT Global ile stratejik ortaklığımızdan gurur duyuyoruz.',
            'partnership.benefits_tag': 'Faydalar', 'partnership.benefits_title': 'Bu Ortaklık Müşterilerimiz İçin Ne Anlama Geliyor',
            'partnership.b1': 'Küresel Erişim', 'partnership.b1_desc': 'Geniş uluslararası uzman ağına erişim',
            'partnership.b2': 'Uluslararası Standartlar', 'partnership.b2_desc': 'En yüksek uluslararası standartların uygulanması',
            'partnership.b3': 'İleri Eğitim', 'partnership.b3_desc': 'Sürekli uluslararası eğitim programları',
            'partnership.b4': 'İleri Teknoloji', 'partnership.b4_desc': 'En son teknoloji ve araçların kullanımı',
            'partnership.scope_tag': 'Kapsam', 'partnership.scope_title': 'İşbirliği Alanları',
            'partnership.s1': 'Uluslararası Denetim ve Muhasebe', 'partnership.s1_desc': 'Çok uluslu şirketlerin denetimi',
            'partnership.s2': 'Yönetim ve Mali Danışmanlık', 'partnership.s2_desc': 'Yeniden yapılandırma ve stratejik planlama danışmanlığı',
            'partnership.s3': 'Eğitim ve Mesleki Gelişim', 'partnership.s3_desc': 'Uluslararası eğitim programları ve atölye çalışmaları',
            'partnership.s4': 'Bilgi ve Teknoloji Transferi', 'partnership.s4_desc': 'Uzmanlık ve modern teknoloji alışverişi',
            'services.audit_full': 'Denetim ve İnceleme Hizmetleri',
            'services.ext_audit': 'Dış Denetim', 'services.ext_audit_desc': 'ISA standartlarına göre mali veri incelemesi',
            'services.int_audit': 'İç Denetim', 'services.int_audit_desc': 'İç kontrol sistemi değerlendirmesi',
            'services.pre_audit': 'Ön Denetim', 'services.pre_audit_desc': 'Mali işlemlerin uyumluluk ve doğruluk için önceden incelenmesi',
            'services.special_audit': 'Özel Amaçlı Denetim', 'services.special_audit_desc': 'Belirli amaçlar için uzmanlaşmış denetim raporları',
            'services.accounting_full': 'Muhasebe Hizmetleri',
            'services.bookkeeping': 'Defter Tutma', 'services.bookkeeping_desc': 'IFRS standartlarına göre muhasebe kayıtlarının düzenlenmesi',
            'services.financial_stmt': 'Mali Tablolar', 'services.financial_stmt_desc': 'Uluslararası standartlara göre mali tablo hazırlama',
            'services.tax_detail': 'Vergi yönetimi, stratejik vergi planlaması ve uyuşmazlık çözümü',
            'services.insurance_detail': 'Şirketler ve bireyler için kapsamlı sigorta çözümleri',
            'services.consulting_detail': 'Performans iyileştirme ve fizibilite çalışmaları için uzman danışmanlık',
            'services.hr_full': 'İnsan Kaynakları Yönetimi', 'services.hr_detail': 'İşe alım, yetenek edinme ve performans yönetimi dahil entegre İK çözümleri',
            'services.advantages_tag': 'Neden Biz',
            'services.adv1': '30 yılı aşkın deneyim', 'services.adv2': 'Uzman uzmanlardan oluşan ekip',
            'services.adv3': 'IWT Global ile uluslararası ortaklık', 'services.adv4': 'Küresel kalite standartları',
            'services.adv5': 'Her müşteriye özel çözümler',
            'app.tag': 'Mobil Uygulama', 'app.title': 'Uygulamamızı İndirin', 'app.desc': 'Tüm hizmetlerimiz parmaklarınızın ucunda',
            'app.f1': 'Anlık bildirimler', 'app.f2': 'Dosya takibi', 'app.f3': 'Doğrudan iletişim', 'app.f4': 'Tam veri koruması',
            'app.get_on': 'Mevcut', 'app.download_on': 'İndir',
            'app.f1_desc': 'Dosya ve işlemlerinizi anlık takip edin',
            'app.f2_desc': 'Mali raporlarınızı her zaman her yerde görüntüleyin',
            'app.f3_desc': 'Uzman muhasebeci ve danışmanlarla anlık sohbet',
            'app.f4_desc': 'AES-256 standardında gelişmiş şifreleme',
            'app.f5': 'Yerleşik Akıllı Asistan', 'app.f5_desc': 'Sorun ve hizmetlerimiz hakkında anında yanıt alın',
            'app.f6': 'Randevu ve Danışmanlık Rezervasyonu', 'app.f6_desc': 'Uzmanlarımızla tek tıkla randevu alın',
            'app.rating': 'Değerlendirme', 'app.downloads': 'İndirme', 'app.tech': 'Çok Platformlu Teknoloji',
            'app.phone_desc': 'Entegre muhasebe ve danışmanlık hizmetleri',
            'app.phone_f1': 'Denetim ve Muhasebe', 'app.phone_f2': 'Yönetim Danışmanlığı',
            'app.phone_f3': 'Vergi Planlaması', 'app.phone_f4': 'Akıllı Asistan', 'app.phone_f5': 'Randevu Al',
            'app.phone_chat_title': 'Akıllı Asistan',
            'app.phone_chat_bot1': 'Merhaba! Size nasıl yardımcı olabilirim?',
            'app.phone_chat_user1': 'Hizmetleriniz nelerdir?',
            'app.phone_chat_bot2': 'Denetim, muhasebe ve danışmanlık hizmetleri sunuyoruz...',
            'services.other_tag': 'Diğer Hizmetler', 'services.other_title': 'Çeşitli Hizmetler',
            'contact.whatsapp': 'WhatsApp',
            'team.m1_name': 'YMM Akram Kareem Abdul Hussein',
            'team.m2_name': 'Muzahir Arshad Abdul Hussein Hammadi',
            'team.m3_name': 'Peshawa Rizgar Mahmoud', 'team.m4_name': 'Falak Awan',
            'team.m5_name': 'Noor Akram Karim', 'team.m6_name': 'Taghreed Majeed Abdul Hussein',
            'team.m7_name': 'Alaa Imad Raheem', 'team.m8_name': 'Karrar Ali Naser',
            'team.m9_name': 'Hala Mudhafar Mohammed',
            'team.m1_desc': 'Muhasebe Yüksek Lisansı - Muhasebe ve denetimde 30 yılı aşkın deneyim',
            'team.m2_role': 'Kıdemli İdari Danışman', 'team.m3_role': 'Erbil Ofis Müdürü',
            'team.m4_role': 'Süleymaniye Ofis Müdürü', 'team.m5_role': 'Denetçi',
            'team.m6_role': 'Kıdemli Muhasebeci', 'team.m7_role': 'Muhasebeci',
            'team.m8_role': 'Denetçi', 'team.m9_role': 'Sekreterlik ve Halkla İlişkiler'
        },
        fa: {
            'nav.home': 'صفحه اصلی', 'nav.about': 'درباره ما', 'nav.services': 'خدمات ما',
            'nav.team': 'تیم ما', 'nav.partnership': 'مشارکت بین‌المللی', 'nav.contact': 'تماس با ما',
            'hero.badge': 'شرکت فتلاوی برای حسابداری و حسابرسی',
            'hero.trust1': 'دارای گواهینامه بین‌المللی', 'hero.trust2': 'از سال ۱۹۹۴', 'hero.trust3': '+۵۰۰ مشتری',
            'hero.title_prefix': 'بهترین خدمات را ارائه می‌دهیم در',
            'hero.desc': 'خدمات حسابداری و مشاوره‌ای یکپارچه با بالاترین استانداردهای کیفیت بیش از ۳۰ سال ارائه می‌دهیم',
            'hero.btn_services': 'خدمات ما', 'hero.btn_about': 'درباره ما',
            'stats.experience': 'سال تجربه', 'stats.clients': 'مشتری راضی', 'stats.projects': 'پروژه تکمیل شده', 'stats.experts': 'متخصص',
            'about.tag': 'درباره ما', 'about.title': 'ما چه کسانی هستیم',
            'about.p1': 'در سال ۱۹۹۴، سفر ما به عنوان نمایندگی بیمه شرکت بیمه ملی آغاز شد. طی سال‌ها در زمینه‌های حسابداری، حسابرسی و مشاوره گسترش یافتیم.',
            'about.p2': 'ما معتقدیم موفقیت از طریق ساخت روابط بلندمدت با مشتریانمان بر اساس اعتماد و شفافیت حاصل می‌شود.',
            'about.btn': 'بیشتر درباره ما',
            'services.tag': 'چه ارائه می‌دهیم', 'services.title': 'خدمات ما',
            'services.audit': 'حسابرسی', 'services.audit_desc': 'خدمات حسابرسی خارجی، داخلی و پیش‌حسابرسی با بالاترین استانداردها',
            'services.accounting': 'حسابداری', 'services.accounting_desc': 'نگهداری دفاتر و تهیه صورت‌های مالی طبق استانداردهای بین‌المللی',
            'services.tax': 'مالیات', 'services.tax_desc': 'مدیریت مالیاتی، برنامه‌ریزی مالیاتی استراتژیک و اظهارنامه‌های مالیاتی',
            'services.insurance': 'بیمه', 'services.insurance_desc': 'راه‌حل‌های بیمه‌ای جامع برای محافظت از شرکت‌ها',
            'services.consulting': 'مشاوره مدیریت', 'services.consulting_desc': 'مشاوره تخصصی برای بهبود عملکرد سازمانی',
            'services.hr': 'منابع انسانی', 'services.hr_desc': 'راه‌حل‌های یکپارچه مدیریت منابع انسانی',
            'services.btn': 'همه خدمات ما',
            'team.tag': 'تیم کاری', 'team.title': 'تیم ما',
            'team.founder': 'بنیانگذار و شریک مدیر', 'team.cofounder': 'هم‌بنیانگذار',
            'team.legal': 'مشاور حقوقی', 'team.btn': 'تیم کامل',
            'team.intro_tag': 'رهبری', 'team.intro_title': 'اعضای تیم ما',
            'team.intro_desc': 'تیمی یکپارچه از متخصصان حسابداری، حسابرسی و مشاوره مدیریت',
            'team.cta_title': 'به تیم ما بپیوندید', 'team.cta_desc': 'ما همیشه به دنبال استعدادهای جدید هستیم',
            'team.cta_btn': 'اکنون درخواست دهید',
            'cta.title': 'آیا نیاز به مشاوره حرفه‌ای دارید؟', 'cta.desc': 'امروز با ما تماس بگیرید و از متخصصان ما مشاوره بگیرید',
            'cta.btn_contact': 'تماس با ما', 'cta.btn_call': 'با ما تماس بگیرید',
            'footer.links': 'لینک‌های سریع', 'footer.contact': 'تماس', 'footer.address': 'بغداد - سیدیه',
            'footer.desc': 'در سال ۱۹۹۴ سفر ما به عنوان نمایندگی بیمه شرکت بیمه ملی آغاز شد',
            'chat.title': 'دستیار هوشمند', 'chat.status': 'آنلاین', 'chat.placeholder': 'بنویسید یا صحبت کنید...',
            'chat.listening': 'در حال گوش دادن...',
            'about.history_tag': 'تاریخ ما', 'about.history_title': 'سفر ما در طول زمان',
            'about.milestone1_title': 'آغاز', 'about.milestone1_desc': 'سفر ما با نمایندگی بیمه شرکت بیمه ملی آغاز شد.',
            'about.milestone2_title': 'گسترش', 'about.milestone2_desc': 'به حسابداری، حسابرسی و مشاوره مدیریت گسترش یافتیم.',
            'about.milestone3_title': 'مشارکت بین‌المللی', 'about.milestone3_desc': 'مشارکت استراتژیک با IWT Global برای ارائه خدمات با استانداردهای بین‌المللی.',
            'about.vision_title': 'چشم‌انداز ما', 'about.vision_desc': 'تبدیل شدن به شرکت پیشرو در ارائه خدمات حرفه‌ای در عراق و منطقه.',
            'about.mission_title': 'ماموریت ما', 'about.mission_desc': 'ارائه خدمات حرفه‌ای برجسته بر اساس بالاترین استانداردهای کیفیت.',
            'about.values_tag': 'ارزش‌های ما', 'about.values_title': 'چه چیزی ما را متفاوت می‌کند',
            'about.val1': 'صداقت', 'about.val1_desc': 'پایبندی به بالاترین اخلاق حرفه‌ای',
            'about.val2': 'تعالی', 'about.val2_desc': 'تلاش مستمر برای ارائه بهترین خدمات',
            'about.val3': 'مشارکت', 'about.val3_desc': 'ساخت روابط بلندمدت بر اساس اعتماد متقابل',
            'about.val4': 'نوآوری', 'about.val4_desc': 'پذیرش آخرین فناوری‌ها و روش‌ها',
            'about.partners_tag': 'شرکا', 'about.partners_title': 'مشارکت‌های ما',
            'about.partner_desc': 'شریک بین‌المللی ما در ارائه خدمات مشاوره و حسابرسی با استانداردهای بین‌المللی',
            'about.partner_btn': 'بیشتر',
            'about.office_tag': 'مقر ما', 'about.office_title': 'دفتر شرکت',
            'about.office_hq': 'دفتر مرکزی', 'about.office_address': 'بغداد - سیدیه، عراق',
            'about.office_hours': 'شنبه - پنجشنبه: ۹:۰۰ صبح - ۵:۰۰ عصر',
            'contact.tag': 'تماس با ما', 'contact.info_title': 'اطلاعات تماس',
            'contact.info_desc': 'ما اینجا هستیم تا کمک کنیم. از طریق کانال‌های زیر با ما تماس بگیرید:',
            'contact.phone': 'تلفن', 'contact.email': 'ایمیل', 'contact.location': 'مکان',
            'contact.form_title': 'برای ما پیام ارسال کنید', 'contact.name': 'نام کامل',
            'contact.subject': 'موضوع', 'contact.select': 'موضوع را انتخاب کنید',
            'contact.job': 'درخواست شغل', 'contact.other': 'سایر',
            'contact.message': 'پیام', 'contact.attachment': 'پیوست فایل (اختیاری)',
            'contact.file_text': 'فایلی انتخاب کنید یا اینجا بکشید', 'contact.send': 'ارسال پیام',
            'contact.map_title': 'موقعیت ما روی نقشه',
            'partnership.tag': 'مشارکت جهانی', 'partnership.title': 'مشارکت ما با IWT Global',
            'partnership.intro': 'ما از مشارکت استراتژیک خود با IWT Global، یکی از شرکت‌های پیشرو جهانی در مشاوره، افتخار می‌کنیم.',
            'partnership.benefits_tag': 'مزایا', 'partnership.benefits_title': 'این مشارکت چه معنایی برای مشتریان ما دارد',
            'partnership.b1': 'دسترسی جهانی', 'partnership.b1_desc': 'دسترسی به شبکه بین‌المللی گسترده‌ای از متخصصان',
            'partnership.b2': 'استانداردهای بین‌المللی', 'partnership.b2_desc': 'اعمال بالاترین استانداردهای بین‌المللی',
            'partnership.b3': 'آموزش پیشرفته', 'partnership.b3_desc': 'برنامه‌های آموزشی بین‌المللی مستمر',
            'partnership.b4': 'فناوری پیشرفته', 'partnership.b4_desc': 'استفاده از آخرین فناوری‌ها و ابزارها',
            'partnership.scope_tag': 'حوزه', 'partnership.scope_title': 'حوزه‌های همکاری',
            'partnership.s1': 'حسابرسی و حسابداری بین‌المللی', 'partnership.s1_desc': 'حسابرسی شرکت‌های چندملیتی',
            'partnership.s2': 'مشاوره مدیریت و مالی', 'partnership.s2_desc': 'مشاوره تخصصی در بازسازی و برنامه‌ریزی استراتژیک',
            'partnership.s3': 'آموزش و توسعه حرفه‌ای', 'partnership.s3_desc': 'برنامه‌های آموزشی و کارگاه‌های بین‌المللی',
            'partnership.s4': 'انتقال دانش و فناوری', 'partnership.s4_desc': 'تبادل تخصص و فناوری‌های مدرن',
            'services.audit_full': 'خدمات حسابرسی و بررسی',
            'services.ext_audit': 'حسابرسی خارجی', 'services.ext_audit_desc': 'بررسی داده‌های مالی طبق استانداردهای ISA',
            'services.int_audit': 'حسابرسی داخلی', 'services.int_audit_desc': 'ارزیابی سیستم کنترل داخلی',
            'services.pre_audit': 'پیش‌حسابرسی', 'services.pre_audit_desc': 'بررسی پیشینی عملیات مالی',
            'services.special_audit': 'حسابرسی هدف خاص', 'services.special_audit_desc': 'گزارش‌های حسابرسی تخصصی',
            'services.accounting_full': 'خدمات حسابداری',
            'services.bookkeeping': 'نگهداری دفاتر', 'services.bookkeeping_desc': 'سازماندهی سوابق حسابداری طبق IFRS',
            'services.financial_stmt': 'صورت‌های مالی', 'services.financial_stmt_desc': 'تهیه صورت‌های مالی طبق استانداردهای بین‌المللی',
            'services.tax_detail': 'مدیریت مالیاتی، برنامه‌ریزی استراتژیک و حل اختلافات مالیاتی',
            'services.insurance_detail': 'راه‌حل‌های بیمه‌ای جامع برای شرکت‌ها و افراد',
            'services.consulting_detail': 'مشاوره تخصصی برای بهبود عملکرد و مطالعات امکان‌سنجی',
            'services.hr_full': 'مدیریت منابع انسانی', 'services.hr_detail': 'راه‌حل‌های یکپارچه منابع انسانی شامل استخدام و مدیریت عملکرد',
            'services.advantages_tag': 'چرا ما',
            'services.adv1': 'بیش از ۳۰ سال تجربه', 'services.adv2': 'تیمی از متخصصان خبره',
            'services.adv3': 'مشارکت بین‌المللی با IWT Global', 'services.adv4': 'استانداردهای کیفیت جهانی',
            'services.adv5': 'راه‌حل‌های سفارشی برای هر مشتری',
            'app.tag': 'اپلیکیشن موبایل', 'app.title': 'اپلیکیشن ما را دانلود کنید', 'app.desc': 'تمام خدمات ما در دستان شما',
            'app.f1': 'اعلان‌های فوری', 'app.f2': 'پیگیری فایل‌ها', 'app.f3': 'ارتباط مستقیم', 'app.f4': 'حفاظت کامل داده',
            'app.get_on': 'موجود در', 'app.download_on': 'دانلود از',
            'app.f1_desc': 'پرونده‌ها و معاملات خود را لحظه به لحظه پیگیری کنید',
            'app.f2_desc': 'گزارش‌های مالی خود را در هر زمان و مکانی مشاهده کنید',
            'app.f3_desc': 'گفتگوی فوری با حسابداران و مشاوران تخصصی',
            'app.f4_desc': 'رمزگذاری پیشرفته با استاندارد AES-256 برای امنیت داده‌ها',
            'app.f5': 'دستیار هوشمند داخلی', 'app.f5_desc': 'بپرسید و پاسخ فوری درباره خدمات ما دریافت کنید',
            'app.f6': 'رزرو وقت و مشاوره', 'app.f6_desc': 'با یک کلیک وقت ملاقات با کارشناسان ما رزرو کنید',
            'app.rating': 'امتیاز', 'app.downloads': 'دانلود', 'app.tech': 'فناوری چندسکویی',
            'app.phone_desc': 'خدمات حسابداری و مشاوره‌ای یکپارچه',
            'app.phone_f1': 'حسابرسی و حسابداری', 'app.phone_f2': 'مشاوره مدیریت',
            'app.phone_f3': 'برنامه‌ریزی مالیاتی', 'app.phone_f4': 'دستیار هوشمند', 'app.phone_f5': 'رزرو وقت',
            'app.phone_chat_title': 'دستیار هوشمند',
            'app.phone_chat_bot1': 'سلام! چگونه می‌توانم کمکتان کنم؟',
            'app.phone_chat_user1': 'خدمات شما چیست؟',
            'app.phone_chat_bot2': 'ما خدمات حسابرسی، حسابداری و مشاوره ارائه می‌دهیم...',
            'services.other_tag': 'خدمات دیگر', 'services.other_title': 'خدمات متنوع',
            'contact.whatsapp': 'واتساپ',
            'team.m1_name': 'حسابدار قانونی اکرم کریم عبدالحسین',
            'team.m2_name': 'مظهر ارشد عبدالحسین حمادی',
            'team.m3_name': 'پیشوا رزگار محمود', 'team.m4_name': 'فلک اوان',
            'team.m5_name': 'نور اکرم کریم', 'team.m6_name': 'تغرید مجید عبدالحسین',
            'team.m7_name': 'علاء عماد رحیم', 'team.m8_name': 'کرار علی ناصر',
            'team.m9_name': 'هاله مظفر محمد',
            'team.m1_desc': 'کارشناسی ارشد حسابداری - بیش از ۳۰ سال تجربه در حسابداری و حسابرسی',
            'team.m2_role': 'مشاور ارشد اداری', 'team.m3_role': 'مدیر دفتر اربیل',
            'team.m4_role': 'مدیر دفتر سلیمانیه', 'team.m5_role': 'حسابرس',
            'team.m6_role': 'حسابدار ارشد', 'team.m7_role': 'حسابدار',
            'team.m8_role': 'حسابرس', 'team.m9_role': 'منشی و روابط عمومی'
        },
        fr: {
            'nav.home': 'Accueil', 'nav.about': 'À propos', 'nav.services': 'Services',
            'nav.team': 'Notre Équipe', 'nav.partnership': 'Partenariat', 'nav.contact': 'Contact',
            'hero.badge': 'Cabinet Al-Fatlawy Comptabilité et Audit',
            'hero.trust1': 'Certifié Internationalement', 'hero.trust2': 'Depuis 1994', 'hero.trust3': '+500 Clients',
            'hero.title_prefix': 'Nous offrons les meilleurs services en',
            'hero.desc': 'Services intégrés de comptabilité et de conseil avec les normes de qualité les plus élevées depuis plus de 30 ans',
            'hero.btn_services': 'Nos Services', 'hero.btn_about': 'À propos',
            'stats.experience': 'Années d\'expérience', 'stats.clients': 'Clients satisfaits', 'stats.projects': 'Projets réalisés', 'stats.experts': 'Experts',
            'about.tag': 'À propos', 'about.title': 'Qui sommes-nous',
            'about.p1': 'En 1994, notre parcours a commencé en tant qu\'agence d\'assurance pour la Compagnie d\'Assurance Nationale. Au fil des ans, nous nous sommes développés dans la comptabilité, l\'audit et le conseil.',
            'about.p2': 'Nous croyons que le succès vient de la construction de relations à long terme avec nos clients, basées sur la confiance et la transparence.',
            'about.btn': 'En savoir plus',
            'services.tag': 'Ce que nous offrons', 'services.title': 'Nos Services',
            'services.audit': 'Audit', 'services.audit_desc': 'Services d\'audit externe, interne et préalable aux normes les plus élevées',
            'services.accounting': 'Comptabilité', 'services.accounting_desc': 'Tenue de livres et préparation des états financiers selon les normes internationales',
            'services.tax': 'Fiscalité', 'services.tax_desc': 'Gestion fiscale, planification fiscale stratégique et déclarations fiscales',
            'services.insurance': 'Assurance', 'services.insurance_desc': 'Solutions d\'assurance complètes pour protéger les entreprises',
            'services.consulting': 'Conseil en Management', 'services.consulting_desc': 'Conseil spécialisé pour améliorer la performance organisationnelle',
            'services.hr': 'Ressources Humaines', 'services.hr_desc': 'Solutions intégrées de gestion des ressources humaines',
            'services.btn': 'Tous nos services',
            'team.tag': 'Équipe', 'team.title': 'Notre Équipe',
            'team.founder': 'Fondateur et Associé Gérant', 'team.cofounder': 'Co-fondateur',
            'team.legal': 'Conseiller Juridique', 'team.btn': 'Équipe complète',
            'team.intro_tag': 'Direction', 'team.intro_title': 'Membres de notre équipe',
            'team.intro_desc': 'Une équipe intégrée d\'experts spécialisés en comptabilité, audit et conseil en gestion',
            'team.cta_title': 'Rejoignez notre équipe', 'team.cta_desc': 'Nous recherchons toujours de nouveaux talents',
            'team.cta_btn': 'Postuler maintenant',
            'cta.title': 'Besoin d\'une consultation professionnelle?', 'cta.desc': 'Contactez-nous aujourd\'hui et bénéficiez des conseils de nos experts',
            'cta.btn_contact': 'Contactez-nous', 'cta.btn_call': 'Appelez-nous',
            'footer.links': 'Liens Rapides', 'footer.contact': 'Contact', 'footer.address': 'Bagdad - Al-Saydiya',
            'footer.desc': 'En 1994, notre parcours a commencé en tant qu\'agence d\'assurance pour la Compagnie d\'Assurance Nationale',
            'chat.title': 'Assistant Intelligent', 'chat.status': 'En ligne', 'chat.placeholder': 'Tapez ou parlez...',
            'chat.listening': 'Écoute en cours...',
            'about.history_tag': 'Notre Histoire', 'about.history_title': 'Notre parcours à travers le temps',
            'about.milestone1_title': 'Le Début', 'about.milestone1_desc': 'Notre parcours a commencé en tant qu\'agence d\'assurance pour la Compagnie d\'Assurance Nationale.',
            'about.milestone2_title': 'Expansion', 'about.milestone2_desc': 'Nous nous sommes développés dans la comptabilité, l\'audit et le conseil en gestion.',
            'about.milestone3_title': 'Partenariat International', 'about.milestone3_desc': 'Partenariat stratégique avec IWT Global pour fournir des services aux normes internationales.',
            'about.vision_title': 'Notre Vision', 'about.vision_desc': 'Être l\'entreprise leader dans la prestation de services professionnels en Irak et dans la région.',
            'about.mission_title': 'Notre Mission', 'about.mission_desc': 'Fournir des services professionnels distingués basés sur les normes les plus élevées de qualité.',
            'about.values_tag': 'Nos Valeurs', 'about.values_title': 'Ce qui nous distingue',
            'about.val1': 'Intégrité', 'about.val1_desc': 'Engagement envers les normes éthiques professionnelles les plus élevées',
            'about.val2': 'Excellence', 'about.val2_desc': 'Poursuite constante des meilleurs services de la plus haute qualité',
            'about.val3': 'Partenariat', 'about.val3_desc': 'Construction de relations à long terme basées sur la confiance mutuelle',
            'about.val4': 'Innovation', 'about.val4_desc': 'Adoption des dernières technologies et méthodes',
            'about.partners_tag': 'Partenaires', 'about.partners_title': 'Nos Partenariats',
            'about.partner_desc': 'Notre partenaire international dans la fourniture de services de conseil et d\'audit aux normes internationales',
            'about.partner_btn': 'En savoir plus',
            'about.office_tag': 'Notre Siège', 'about.office_title': 'Bureau de l\'Entreprise',
            'about.office_hq': 'Siège Principal', 'about.office_address': 'Bagdad - Al-Saydiya, Irak',
            'about.office_hours': 'Samedi - Jeudi: 9h00 - 17h00',
            'contact.tag': 'Contact', 'contact.info_title': 'Coordonnées',
            'contact.info_desc': 'Nous sommes là pour vous aider. Contactez-nous par l\'un des canaux suivants:',
            'contact.phone': 'Téléphone', 'contact.email': 'E-mail', 'contact.location': 'Emplacement',
            'contact.form_title': 'Envoyez-nous un message', 'contact.name': 'Nom complet',
            'contact.subject': 'Sujet', 'contact.select': 'Sélectionner le sujet',
            'contact.job': 'Candidature', 'contact.other': 'Autre',
            'contact.message': 'Message', 'contact.attachment': 'Joindre un fichier (Optionnel)',
            'contact.file_text': 'Choisir un fichier ou glisser ici', 'contact.send': 'Envoyer le message',
            'contact.map_title': 'Notre Emplacement sur la Carte',
            'partnership.tag': 'Partenariat Global', 'partnership.title': 'Notre partenariat avec IWT Global',
            'partnership.intro': 'Nous sommes fiers de notre partenariat stratégique avec IWT Global, l\'un des cabinets de conseil leaders mondiaux.',
            'partnership.benefits_tag': 'Avantages', 'partnership.benefits_title': 'Ce que ce partenariat signifie pour nos clients',
            'partnership.b1': 'Portée Mondiale', 'partnership.b1_desc': 'Accès à un large réseau international d\'experts',
            'partnership.b2': 'Normes Internationales', 'partnership.b2_desc': 'Application des normes internationales les plus élevées',
            'partnership.b3': 'Formation Avancée', 'partnership.b3_desc': 'Programmes de formation internationaux continus',
            'partnership.b4': 'Technologie Avancée', 'partnership.b4_desc': 'Utilisation des dernières technologies et outils',
            'partnership.scope_tag': 'Portée', 'partnership.scope_title': 'Domaines de coopération',
            'partnership.s1': 'Audit et Comptabilité Internationaux', 'partnership.s1_desc': 'Audit des entreprises multinationales',
            'partnership.s2': 'Conseil en Gestion et Finance', 'partnership.s2_desc': 'Conseil spécialisé en restructuration et planification stratégique',
            'partnership.s3': 'Formation et Développement Professionnel', 'partnership.s3_desc': 'Programmes de formation et ateliers internationaux',
            'partnership.s4': 'Transfert de Connaissances et Technologies', 'partnership.s4_desc': 'Échange d\'expertise et de technologies modernes',
            'services.audit_full': 'Services d\'Audit et de Revue',
            'services.ext_audit': 'Audit Externe', 'services.ext_audit_desc': 'Examen des données financières selon les normes ISA',
            'services.int_audit': 'Audit Interne', 'services.int_audit_desc': 'Évaluation du système de contrôle interne',
            'services.pre_audit': 'Pré-audit', 'services.pre_audit_desc': 'Revue préalable des opérations financières',
            'services.special_audit': 'Audit Spécial', 'services.special_audit_desc': 'Rapports d\'audit spécialisés',
            'services.accounting_full': 'Services Comptables',
            'services.bookkeeping': 'Tenue de Livres', 'services.bookkeeping_desc': 'Organisation des registres comptables selon IFRS',
            'services.financial_stmt': 'États Financiers', 'services.financial_stmt_desc': 'Préparation des états financiers selon les normes internationales',
            'services.tax_detail': 'Gestion fiscale, planification stratégique et résolution des litiges',
            'services.insurance_detail': 'Solutions d\'assurance complètes pour entreprises et particuliers',
            'services.consulting_detail': 'Conseil spécialisé pour l\'amélioration des performances et études de faisabilité',
            'services.hr_full': 'Gestion des Ressources Humaines', 'services.hr_detail': 'Solutions RH intégrées incluant recrutement et gestion des performances',
            'services.advantages_tag': 'Pourquoi nous',
            'services.adv1': 'Plus de 30 ans d\'expérience', 'services.adv2': 'Équipe d\'experts spécialisés',
            'services.adv3': 'Partenariat international avec IWT Global', 'services.adv4': 'Normes de qualité mondiales',
            'services.adv5': 'Solutions personnalisées pour chaque client',
            'app.tag': 'Application Mobile', 'app.title': 'Téléchargez Notre Application', 'app.desc': 'Tous nos services à portée de main',
            'app.f1': 'Notifications instantanées', 'app.f2': 'Suivi des dossiers', 'app.f3': 'Communication directe', 'app.f4': 'Protection complète des données',
            'app.get_on': 'Disponible sur', 'app.download_on': 'Télécharger sur',
            'app.f1_desc': 'Suivez vos dossiers et transactions en temps réel',
            'app.f2_desc': 'Consultez vos rapports financiers à tout moment',
            'app.f3_desc': 'Discussion instantanée avec des comptables et consultants spécialisés',
            'app.f4_desc': 'Chiffrement avancé AES-256 pour la sécurité de vos données',
            'app.f5': 'Assistant intelligent intégré', 'app.f5_desc': 'Posez vos questions et obtenez des réponses instantanées',
            'app.f6': 'Réservation de rendez-vous et consultations', 'app.f6_desc': 'Réservez votre rendez-vous en un clic',
            'app.rating': 'Évaluation', 'app.downloads': 'Téléchargements', 'app.tech': 'Technologie multiplateforme',
            'app.phone_desc': 'Services comptables et de conseil intégrés',
            'app.phone_f1': 'Audit et Comptabilité', 'app.phone_f2': 'Conseil en Gestion',
            'app.phone_f3': 'Planification Fiscale', 'app.phone_f4': 'Assistant Intelligent', 'app.phone_f5': 'Prendre Rendez-vous',
            'app.phone_chat_title': 'Assistant Intelligent',
            'app.phone_chat_bot1': 'Bonjour! Comment puis-je vous aider?',
            'app.phone_chat_user1': 'Quels sont vos services?',
            'app.phone_chat_bot2': 'Nous offrons des services d\'audit, de comptabilité et de conseil...',
            'services.other_tag': 'Autres Services', 'services.other_title': 'Services Divers',
            'contact.whatsapp': 'WhatsApp',
            'team.m1_name': 'CPA Akram Kareem Abdul Hussein',
            'team.m2_name': 'Muzahir Arshad Abdul Hussein Hammadi',
            'team.m3_name': 'Peshawa Rizgar Mahmoud', 'team.m4_name': 'Falak Awan',
            'team.m5_name': 'Noor Akram Karim', 'team.m6_name': 'Taghreed Majeed Abdul Hussein',
            'team.m7_name': 'Alaa Imad Raheem', 'team.m8_name': 'Karrar Ali Naser',
            'team.m9_name': 'Hala Mudhafar Mohammed',
            'team.m1_desc': 'Master en Comptabilité - Plus de 30 ans d\'expérience en comptabilité et audit',
            'team.m2_role': 'Consultant Administratif Senior', 'team.m3_role': 'Directeur du Bureau d\'Erbil',
            'team.m4_role': 'Directeur du Bureau de Sulaymaniyah', 'team.m5_role': 'Auditrice',
            'team.m6_role': 'Comptable Senior', 'team.m7_role': 'Comptable',
            'team.m8_role': 'Auditeur', 'team.m9_role': 'Secrétariat et Relations Publiques'
        },
        de: {
            'nav.home': 'Startseite', 'nav.about': 'Über Uns', 'nav.services': 'Dienstleistungen',
            'nav.team': 'Unser Team', 'nav.partnership': 'Partnerschaft', 'nav.contact': 'Kontakt',
            'hero.badge': 'Al-Fatlawy Wirtschaftsprüfung und Beratung',
            'hero.trust1': 'International Zertifiziert', 'hero.trust2': 'Seit 1994', 'hero.trust3': '+500 Kunden',
            'hero.title_prefix': 'Wir bieten die besten Dienstleistungen in',
            'hero.desc': 'Integrierte Buchhaltungs- und Beratungsleistungen mit höchsten Qualitätsstandards seit über 30 Jahren',
            'hero.btn_services': 'Unsere Dienste', 'hero.btn_about': 'Über Uns',
            'stats.experience': 'Jahre Erfahrung', 'stats.clients': 'Zufriedene Kunden', 'stats.projects': 'Abgeschlossene Projekte', 'stats.experts': 'Experten',
            'about.tag': 'Über Uns', 'about.title': 'Wer wir sind',
            'about.p1': '1994 begann unsere Reise als Versicherungsagentur für die Nationale Versicherungsgesellschaft. Im Laufe der Jahre expandierten wir in Buchhaltung, Wirtschaftsprüfung und Beratung.',
            'about.p2': 'Wir glauben, dass Erfolg durch den Aufbau langfristiger Beziehungen zu unseren Kunden entsteht, basierend auf Vertrauen und Transparenz.',
            'about.btn': 'Mehr über uns',
            'services.tag': 'Was wir anbieten', 'services.title': 'Unsere Dienstleistungen',
            'services.audit': 'Wirtschaftsprüfung', 'services.audit_desc': 'Externe, interne und Vorprüfung mit höchsten Qualitätsstandards',
            'services.accounting': 'Buchhaltung', 'services.accounting_desc': 'Buchführung und Erstellung von Jahresabschlüssen nach internationalen Standards',
            'services.tax': 'Steuerberatung', 'services.tax_desc': 'Steuermanagement, strategische Steuerplanung und Steuererklärungen',
            'services.insurance': 'Versicherung', 'services.insurance_desc': 'Umfassende Versicherungslösungen zum Schutz von Unternehmen',
            'services.consulting': 'Managementberatung', 'services.consulting_desc': 'Spezialisierte Beratung zur Verbesserung der Unternehmensleistung',
            'services.hr': 'Personalwesen', 'services.hr_desc': 'Integrierte HR-Management- und Talentmanagement-Lösungen',
            'services.btn': 'Alle unsere Dienste',
            'team.tag': 'Arbeitsteam', 'team.title': 'Unser Team',
            'team.founder': 'Gründer und Geschäftsführer', 'team.cofounder': 'Mitgründer',
            'team.legal': 'Rechtsberater', 'team.btn': 'Ganzes Team',
            'team.intro_tag': 'Führung', 'team.intro_title': 'Unsere Teammitglieder',
            'team.intro_desc': 'Ein integriertes Team von Experten für Buchhaltung, Wirtschaftsprüfung und Managementberatung',
            'team.cta_title': 'Werden Sie Teil unseres Teams', 'team.cta_desc': 'Wir suchen immer nach neuen Talenten',
            'team.cta_btn': 'Jetzt bewerben',
            'cta.title': 'Brauchen Sie professionelle Beratung?', 'cta.desc': 'Kontaktieren Sie uns heute und lassen Sie sich von unseren Experten beraten',
            'cta.btn_contact': 'Kontakt', 'cta.btn_call': 'Rufen Sie uns an',
            'footer.links': 'Schnelllinks', 'footer.contact': 'Kontakt', 'footer.address': 'Bagdad - Al-Saydiya',
            'footer.desc': '1994 begann unsere Reise als Versicherungsagentur für die Nationale Versicherungsgesellschaft',
            'chat.title': 'Intelligenter Assistent', 'chat.status': 'Jetzt online', 'chat.placeholder': 'Schreiben oder sprechen...',
            'chat.listening': 'Hört zu...',
            'about.history_tag': 'Unsere Geschichte', 'about.history_title': 'Unsere Reise durch die Zeit',
            'about.milestone1_title': 'Der Anfang', 'about.milestone1_desc': 'Unsere Reise begann als Versicherungsagentur für die Nationale Versicherungsgesellschaft.',
            'about.milestone2_title': 'Expansion', 'about.milestone2_desc': 'Wir expandierten in Buchhaltung, Wirtschaftsprüfung und Managementberatung.',
            'about.milestone3_title': 'Internationale Partnerschaft', 'about.milestone3_desc': 'Strategische Partnerschaft mit IWT Global für Dienstleistungen nach internationalen Standards.',
            'about.vision_title': 'Unsere Vision', 'about.vision_desc': 'Das führende Unternehmen für professionelle Dienstleistungen im Irak und in der Region zu sein.',
            'about.mission_title': 'Unsere Mission', 'about.mission_desc': 'Herausragende professionelle Dienstleistungen auf Basis höchster Qualitätsstandards zu erbringen.',
            'about.values_tag': 'Unsere Werte', 'about.values_title': 'Was uns unterscheidet',
            'about.val1': 'Integrität', 'about.val1_desc': 'Verpflichtung zu höchsten berufsethischen Standards',
            'about.val2': 'Exzellenz', 'about.val2_desc': 'Ständiges Streben nach den besten Dienstleistungen',
            'about.val3': 'Partnerschaft', 'about.val3_desc': 'Aufbau langfristiger Beziehungen auf Basis gegenseitigen Vertrauens',
            'about.val4': 'Innovation', 'about.val4_desc': 'Einsatz neuester Technologien und Methoden',
            'about.partners_tag': 'Partner', 'about.partners_title': 'Unsere Partnerschaften',
            'about.partner_desc': 'Unser internationaler Partner für Beratungs- und Prüfungsdienstleistungen nach internationalen Standards',
            'about.partner_btn': 'Mehr',
            'about.office_tag': 'Unser Sitz', 'about.office_title': 'Firmenbüro',
            'about.office_hq': 'Hauptsitz', 'about.office_address': 'Bagdad - Al-Saydiya, Irak',
            'about.office_hours': 'Samstag - Donnerstag: 9:00 - 17:00 Uhr',
            'contact.tag': 'Kontakt', 'contact.info_title': 'Kontaktinformationen',
            'contact.info_desc': 'Wir sind hier, um zu helfen. Kontaktieren Sie uns über einen der folgenden Kanäle:',
            'contact.phone': 'Telefon', 'contact.email': 'E-Mail', 'contact.location': 'Standort',
            'contact.form_title': 'Senden Sie uns eine Nachricht', 'contact.name': 'Vollständiger Name',
            'contact.subject': 'Betreff', 'contact.select': 'Betreff auswählen',
            'contact.job': 'Stellenbewerbung', 'contact.other': 'Sonstiges',
            'contact.message': 'Nachricht', 'contact.attachment': 'Datei anhängen (Optional)',
            'contact.file_text': 'Datei auswählen oder hierher ziehen', 'contact.send': 'Nachricht senden',
            'contact.map_title': 'Unser Standort auf der Karte',
            'partnership.tag': 'Globale Partnerschaft', 'partnership.title': 'Unsere Partnerschaft mit IWT Global',
            'partnership.intro': 'Wir sind stolz auf unsere strategische Partnerschaft mit IWT Global, einem der weltweit führenden Beratungsunternehmen.',
            'partnership.benefits_tag': 'Vorteile', 'partnership.benefits_title': 'Was diese Partnerschaft für unsere Kunden bedeutet',
            'partnership.b1': 'Globale Reichweite', 'partnership.b1_desc': 'Zugang zu einem breiten internationalen Expertennetzwerk',
            'partnership.b2': 'Internationale Standards', 'partnership.b2_desc': 'Anwendung höchster internationaler Standards',
            'partnership.b3': 'Fortgeschrittene Schulung', 'partnership.b3_desc': 'Kontinuierliche internationale Schulungsprogramme',
            'partnership.b4': 'Fortschrittliche Technologie', 'partnership.b4_desc': 'Einsatz neuester Technologien und Werkzeuge',
            'partnership.scope_tag': 'Umfang', 'partnership.scope_title': 'Kooperationsbereiche',
            'partnership.s1': 'Internationale Prüfung und Buchhaltung', 'partnership.s1_desc': 'Prüfung multinationaler Unternehmen',
            'partnership.s2': 'Management- und Finanzberatung', 'partnership.s2_desc': 'Spezialisierte Beratung in Restrukturierung und strategischer Planung',
            'partnership.s3': 'Aus- und Weiterbildung', 'partnership.s3_desc': 'Internationale Schulungsprogramme und Workshops',
            'partnership.s4': 'Wissens- und Technologietransfer', 'partnership.s4_desc': 'Austausch von Expertise und modernen Technologien',
            'services.audit_full': 'Prüfungs- und Reviewdienstleistungen',
            'services.ext_audit': 'Externe Prüfung', 'services.ext_audit_desc': 'Prüfung von Finanzdaten nach ISA-Standards',
            'services.int_audit': 'Interne Revision', 'services.int_audit_desc': 'Bewertung des internen Kontrollsystems',
            'services.pre_audit': 'Vorprüfung', 'services.pre_audit_desc': 'Vorabprüfung von Finanzvorgängen',
            'services.special_audit': 'Sonderprüfung', 'services.special_audit_desc': 'Spezialisierte Prüfungsberichte',
            'services.accounting_full': 'Buchhaltungsdienstleistungen',
            'services.bookkeeping': 'Buchführung', 'services.bookkeeping_desc': 'Organisation der Buchhaltungsunterlagen nach IFRS',
            'services.financial_stmt': 'Jahresabschlüsse', 'services.financial_stmt_desc': 'Erstellung von Jahresabschlüssen nach internationalen Standards',
            'services.tax_detail': 'Steuerverwaltung, strategische Planung und Streitbeilegung',
            'services.insurance_detail': 'Umfassende Versicherungslösungen für Unternehmen und Privatpersonen',
            'services.consulting_detail': 'Spezialisierte Beratung zur Leistungsverbesserung und Machbarkeitsstudien',
            'services.hr_full': 'Personalmanagement', 'services.hr_detail': 'Integrierte HR-Lösungen einschließlich Rekrutierung und Leistungsmanagement',
            'services.advantages_tag': 'Warum wir',
            'services.adv1': 'Über 30 Jahre Erfahrung', 'services.adv2': 'Team von Fachexperten',
            'services.adv3': 'Internationale Partnerschaft mit IWT Global', 'services.adv4': 'Globale Qualitätsstandards',
            'services.adv5': 'Maßgeschneiderte Lösungen für jeden Kunden',
            'app.tag': 'Mobile App', 'app.title': 'Laden Sie unsere App herunter', 'app.desc': 'Alle unsere Dienste griffbereit',
            'app.f1': 'Sofortige Benachrichtigungen', 'app.f2': 'Dateiverfolgung', 'app.f3': 'Direkte Kommunikation', 'app.f4': 'Vollständiger Datenschutz',
            'app.get_on': 'Verfügbar auf', 'app.download_on': 'Herunterladen von',
            'app.f1_desc': 'Verfolgen Sie Ihre Dateien und Transaktionen in Echtzeit',
            'app.f2_desc': 'Sehen Sie Ihre Finanzberichte jederzeit und überall ein',
            'app.f3_desc': 'Sofort-Chat mit spezialisierten Buchhaltern und Beratern',
            'app.f4_desc': 'Fortschrittliche AES-256-Verschlüsselung für Ihre Datensicherheit',
            'app.f5': 'Integrierter intelligenter Assistent', 'app.f5_desc': 'Fragen Sie und erhalten Sie sofortige Antworten',
            'app.f6': 'Termin- und Beratungsbuchung', 'app.f6_desc': 'Buchen Sie Ihren Termin mit einem Klick',
            'app.rating': 'Bewertung', 'app.downloads': 'Downloads', 'app.tech': 'Plattformübergreifende Technologie',
            'app.phone_desc': 'Integrierte Buchhaltungs- und Beratungsleistungen',
            'app.phone_f1': 'Prüfung und Buchhaltung', 'app.phone_f2': 'Managementberatung',
            'app.phone_f3': 'Steuerplanung', 'app.phone_f4': 'Intelligenter Assistent', 'app.phone_f5': 'Termin buchen',
            'app.phone_chat_title': 'Intelligenter Assistent',
            'app.phone_chat_bot1': 'Hallo! Wie kann ich Ihnen helfen?',
            'app.phone_chat_user1': 'Was sind Ihre Dienstleistungen?',
            'app.phone_chat_bot2': 'Wir bieten Prüfungs-, Buchhaltungs- und Beratungsleistungen an...',
            'services.other_tag': 'Weitere Dienste', 'services.other_title': 'Verschiedene Dienste',
            'contact.whatsapp': 'WhatsApp',
            'team.m1_name': 'WP Akram Kareem Abdul Hussein',
            'team.m2_name': 'Muzahir Arshad Abdul Hussein Hammadi',
            'team.m3_name': 'Peshawa Rizgar Mahmoud', 'team.m4_name': 'Falak Awan',
            'team.m5_name': 'Noor Akram Karim', 'team.m6_name': 'Taghreed Majeed Abdul Hussein',
            'team.m7_name': 'Alaa Imad Raheem', 'team.m8_name': 'Karrar Ali Naser',
            'team.m9_name': 'Hala Mudhafar Mohammed',
            'team.m1_desc': 'Master in Buchhaltung - Über 30 Jahre Erfahrung in Buchhaltung und Wirtschaftsprüfung',
            'team.m2_role': 'Leitender Verwaltungsberater', 'team.m3_role': 'Büroleiter Erbil',
            'team.m4_role': 'Büroleiter Sulaimaniyya', 'team.m5_role': 'Wirtschaftsprüferin',
            'team.m6_role': 'Leitende Buchhalterin', 'team.m7_role': 'Buchhalter',
            'team.m8_role': 'Wirtschaftsprüfer', 'team.m9_role': 'Sekretariat und Öffentlichkeitsarbeit'
        },
        es: {
            'nav.home': 'Inicio', 'nav.about': 'Sobre Nosotros', 'nav.services': 'Servicios',
            'nav.team': 'Nuestro Equipo', 'nav.partnership': 'Asociación', 'nav.contact': 'Contacto',
            'hero.badge': 'Al-Fatlawy Contabilidad y Auditoría',
            'hero.trust1': 'Certificación Internacional', 'hero.trust2': 'Desde 1994', 'hero.trust3': '+500 Clientes',
            'hero.title_prefix': 'Ofrecemos los mejores servicios en',
            'hero.desc': 'Servicios integrados de contabilidad y consultoría con los más altos estándares de calidad durante más de 30 años',
            'hero.btn_services': 'Nuestros Servicios', 'hero.btn_about': 'Sobre Nosotros',
            'stats.experience': 'Años de Experiencia', 'stats.clients': 'Clientes Felices', 'stats.projects': 'Proyectos Completados', 'stats.experts': 'Expertos',
            'about.tag': 'Sobre Nosotros', 'about.title': 'Quiénes Somos',
            'about.p1': 'En 1994, nuestro viaje comenzó como agencia de seguros para la Compañía Nacional de Seguros. A lo largo de los años, nos expandimos a contabilidad, auditoría y consultoría.',
            'about.p2': 'Creemos que el éxito viene de construir relaciones a largo plazo con nuestros clientes, basadas en la confianza y la transparencia.',
            'about.btn': 'Más sobre nosotros',
            'services.tag': 'Lo que ofrecemos', 'services.title': 'Nuestros Servicios',
            'services.audit': 'Auditoría', 'services.audit_desc': 'Servicios de auditoría externa, interna y previa con los más altos estándares',
            'services.accounting': 'Contabilidad', 'services.accounting_desc': 'Teneduría de libros y preparación de estados financieros según normas internacionales',
            'services.tax': 'Impuestos', 'services.tax_desc': 'Gestión fiscal, planificación tributaria estratégica y declaraciones',
            'services.insurance': 'Seguros', 'services.insurance_desc': 'Soluciones de seguros integrales para proteger a las empresas',
            'services.consulting': 'Consultoría de Gestión', 'services.consulting_desc': 'Consultoría especializada para mejorar el rendimiento organizacional',
            'services.hr': 'Recursos Humanos', 'services.hr_desc': 'Soluciones integradas de gestión de RRHH y adquisición de talento',
            'services.btn': 'Todos nuestros servicios',
            'team.tag': 'Equipo de Trabajo', 'team.title': 'Nuestro Equipo',
            'team.founder': 'Fundador y Socio Director', 'team.cofounder': 'Cofundador',
            'team.legal': 'Asesor Legal', 'team.btn': 'Equipo completo',
            'team.intro_tag': 'Liderazgo', 'team.intro_title': 'Miembros de Nuestro Equipo',
            'team.intro_desc': 'Un equipo integrado de expertos en contabilidad, auditoría y consultoría de gestión',
            'team.cta_title': 'Únete a nuestro equipo', 'team.cta_desc': 'Siempre buscamos nuevos talentos',
            'team.cta_btn': 'Aplica ahora',
            'cta.title': '¿Necesita consultoría profesional?', 'cta.desc': 'Contáctenos hoy y obtenga asesoramiento de nuestros expertos',
            'cta.btn_contact': 'Contáctenos', 'cta.btn_call': 'Llámenos',
            'footer.links': 'Enlaces Rápidos', 'footer.contact': 'Contacto', 'footer.address': 'Bagdad - Al-Saydiya',
            'footer.desc': 'En 1994, nuestro viaje comenzó como agencia de seguros para la Compañía Nacional de Seguros',
            'chat.title': 'Asistente Inteligente', 'chat.status': 'En línea', 'chat.placeholder': 'Escriba o hable...',
            'chat.listening': 'Escuchando...',
            'about.history_tag': 'Nuestra Historia', 'about.history_title': 'Nuestro viaje a través del tiempo',
            'about.milestone1_title': 'El Inicio', 'about.milestone1_desc': 'Nuestro viaje comenzó como agencia de seguros para la Compañía Nacional de Seguros.',
            'about.milestone2_title': 'Expansión', 'about.milestone2_desc': 'Nos expandimos a contabilidad, auditoría y consultoría de gestión.',
            'about.milestone3_title': 'Asociación Internacional', 'about.milestone3_desc': 'Asociación estratégica con IWT Global para servicios con estándares internacionales.',
            'about.vision_title': 'Nuestra Visión', 'about.vision_desc': 'Ser la empresa líder en servicios profesionales en Irak y la región.',
            'about.mission_title': 'Nuestra Misión', 'about.mission_desc': 'Brindar servicios profesionales distinguidos basados en los más altos estándares de calidad.',
            'about.values_tag': 'Nuestros Valores', 'about.values_title': 'Lo que nos diferencia',
            'about.val1': 'Integridad', 'about.val1_desc': 'Compromiso con los más altos estándares éticos profesionales',
            'about.val2': 'Excelencia', 'about.val2_desc': 'Búsqueda constante de los mejores servicios con la más alta calidad',
            'about.val3': 'Asociación', 'about.val3_desc': 'Construcción de relaciones a largo plazo basadas en confianza mutua',
            'about.val4': 'Innovación', 'about.val4_desc': 'Adopción de las últimas tecnologías y métodos',
            'about.partners_tag': 'Socios', 'about.partners_title': 'Nuestras Asociaciones',
            'about.partner_desc': 'Nuestro socio internacional en servicios de consultoría y auditoría con estándares internacionales',
            'about.partner_btn': 'Más',
            'about.office_tag': 'Nuestra Sede', 'about.office_title': 'Oficina de la Empresa',
            'about.office_hq': 'Sede Principal', 'about.office_address': 'Bagdad - Al-Saydiya, Irak',
            'about.office_hours': 'Sábado - Jueves: 9:00 AM - 5:00 PM',
            'contact.tag': 'Contacto', 'contact.info_title': 'Información de Contacto',
            'contact.info_desc': 'Estamos aquí para ayudar. Contáctenos a través de cualquiera de los siguientes canales:',
            'contact.phone': 'Teléfono', 'contact.email': 'Correo', 'contact.location': 'Ubicación',
            'contact.form_title': 'Envíenos un Mensaje', 'contact.name': 'Nombre Completo',
            'contact.subject': 'Asunto', 'contact.select': 'Seleccionar Asunto',
            'contact.job': 'Solicitud de Empleo', 'contact.other': 'Otro',
            'contact.message': 'Mensaje', 'contact.attachment': 'Adjuntar Archivo (Opcional)',
            'contact.file_text': 'Elija un archivo o arrástrelo aquí', 'contact.send': 'Enviar Mensaje',
            'contact.map_title': 'Nuestra Ubicación en el Mapa',
            'partnership.tag': 'Asociación Global', 'partnership.title': 'Nuestra asociación con IWT Global',
            'partnership.intro': 'Estamos orgullosos de nuestra asociación estratégica con IWT Global, una de las firmas de consultoría líderes del mundo.',
            'partnership.benefits_tag': 'Beneficios', 'partnership.benefits_title': 'Lo que esta asociación significa para nuestros clientes',
            'partnership.b1': 'Alcance Global', 'partnership.b1_desc': 'Acceso a una amplia red internacional de expertos',
            'partnership.b2': 'Estándares Internacionales', 'partnership.b2_desc': 'Aplicación de los más altos estándares internacionales',
            'partnership.b3': 'Formación Avanzada', 'partnership.b3_desc': 'Programas de formación internacional continua',
            'partnership.b4': 'Tecnología Avanzada', 'partnership.b4_desc': 'Uso de las últimas tecnologías y herramientas',
            'partnership.scope_tag': 'Alcance', 'partnership.scope_title': 'Áreas de Cooperación',
            'partnership.s1': 'Auditoría y Contabilidad Internacional', 'partnership.s1_desc': 'Auditoría de empresas multinacionales',
            'partnership.s2': 'Consultoría de Gestión y Finanzas', 'partnership.s2_desc': 'Consultoría en reestructuración y planificación estratégica',
            'partnership.s3': 'Formación y Desarrollo Profesional', 'partnership.s3_desc': 'Programas de formación y talleres internacionales',
            'partnership.s4': 'Transferencia de Conocimiento y Tecnología', 'partnership.s4_desc': 'Intercambio de experiencia y tecnologías modernas',
            'services.audit_full': 'Servicios de Auditoría y Revisión',
            'services.ext_audit': 'Auditoría Externa', 'services.ext_audit_desc': 'Examen de datos financieros según normas ISA',
            'services.int_audit': 'Auditoría Interna', 'services.int_audit_desc': 'Evaluación del sistema de control interno',
            'services.pre_audit': 'Pre-auditoría', 'services.pre_audit_desc': 'Revisión previa de operaciones financieras',
            'services.special_audit': 'Auditoría Especial', 'services.special_audit_desc': 'Informes de auditoría especializados',
            'services.accounting_full': 'Servicios Contables',
            'services.bookkeeping': 'Teneduría de Libros', 'services.bookkeeping_desc': 'Organización de registros contables según NIIF',
            'services.financial_stmt': 'Estados Financieros', 'services.financial_stmt_desc': 'Preparación de estados financieros según normas internacionales',
            'services.tax_detail': 'Gestión fiscal, planificación estratégica y resolución de disputas',
            'services.insurance_detail': 'Soluciones de seguros integrales para empresas e individuos',
            'services.consulting_detail': 'Consultoría especializada para mejora del rendimiento y estudios de viabilidad',
            'services.hr_full': 'Gestión de Recursos Humanos', 'services.hr_detail': 'Soluciones integrales de RRHH incluyendo reclutamiento y gestión del rendimiento',
            'services.advantages_tag': 'Por qué nosotros',
            'services.adv1': 'Más de 30 años de experiencia', 'services.adv2': 'Equipo de expertos especializados',
            'services.adv3': 'Asociación internacional con IWT Global', 'services.adv4': 'Estándares de calidad global',
            'services.adv5': 'Soluciones personalizadas para cada cliente',
            'app.tag': 'Aplicación Móvil', 'app.title': 'Descarga Nuestra App', 'app.desc': 'Todos nuestros servicios al alcance de tu mano',
            'app.f1': 'Notificaciones instantáneas', 'app.f2': 'Seguimiento de archivos', 'app.f3': 'Comunicación directa', 'app.f4': 'Protección total de datos',
            'app.get_on': 'Disponible en', 'app.download_on': 'Descargar en',
            'app.f1_desc': 'Siga sus archivos y transacciones en tiempo real',
            'app.f2_desc': 'Consulte sus informes financieros en cualquier momento y lugar',
            'app.f3_desc': 'Chat instantáneo con contadores y consultores especializados',
            'app.f4_desc': 'Cifrado avanzado AES-256 para la seguridad de sus datos',
            'app.f5': 'Asistente inteligente integrado', 'app.f5_desc': 'Pregunte y obtenga respuestas instantáneas',
            'app.f6': 'Reserva de citas y consultas', 'app.f6_desc': 'Reserve su cita con un solo clic',
            'app.rating': 'Calificación', 'app.downloads': 'Descargas', 'app.tech': 'Tecnología multiplataforma',
            'app.phone_desc': 'Servicios integrados de contabilidad y consultoría',
            'app.phone_f1': 'Auditoría y Contabilidad', 'app.phone_f2': 'Consultoría de Gestión',
            'app.phone_f3': 'Planificación Fiscal', 'app.phone_f4': 'Asistente Inteligente', 'app.phone_f5': 'Reservar Cita',
            'app.phone_chat_title': 'Asistente Inteligente',
            'app.phone_chat_bot1': '¡Hola! ¿Cómo puedo ayudarte?',
            'app.phone_chat_user1': '¿Cuáles son sus servicios?',
            'app.phone_chat_bot2': 'Ofrecemos servicios de auditoría, contabilidad y consultoría...',
            'services.other_tag': 'Otros Servicios', 'services.other_title': 'Servicios Diversos',
            'contact.whatsapp': 'WhatsApp',
            'team.m1_name': 'CPC Akram Kareem Abdul Hussein',
            'team.m2_name': 'Muzahir Arshad Abdul Hussein Hammadi',
            'team.m3_name': 'Peshawa Rizgar Mahmoud', 'team.m4_name': 'Falak Awan',
            'team.m5_name': 'Noor Akram Karim', 'team.m6_name': 'Taghreed Majeed Abdul Hussein',
            'team.m7_name': 'Alaa Imad Raheem', 'team.m8_name': 'Karrar Ali Naser',
            'team.m9_name': 'Hala Mudhafar Mohammed',
            'team.m1_desc': 'Maestría en Contabilidad - Más de 30 años de experiencia en contabilidad y auditoría',
            'team.m2_role': 'Consultor Administrativo Senior', 'team.m3_role': 'Director de Oficina Erbil',
            'team.m4_role': 'Director de Oficina Sulaymaniyah', 'team.m5_role': 'Auditora',
            'team.m6_role': 'Contadora Senior', 'team.m7_role': 'Contador',
            'team.m8_role': 'Auditor', 'team.m9_role': 'Secretaría y Relaciones Públicas'
        },
        zh: {
            'nav.home': '首页', 'nav.about': '关于我们', 'nav.services': '服务',
            'nav.team': '我们的团队', 'nav.partnership': '合作伙伴', 'nav.contact': '联系我们',
            'hero.badge': 'Al-Fatlawy 会计审计公司',
            'hero.trust1': '国际认证', 'hero.trust2': '自1994年起', 'hero.trust3': '+500客户',
            'hero.title_prefix': '我们提供最好的服务',
            'hero.desc': '我们提供超过30年的综合会计和咨询服务，具有最高的质量和专业标准',
            'hero.btn_services': '我们的服务', 'hero.btn_about': '关于我们',
            'stats.experience': '年经验', 'stats.clients': '满意客户', 'stats.projects': '完成项目', 'stats.experts': '专家',
            'about.tag': '关于我们', 'about.title': '我们是谁',
            'about.p1': '1994年，我们的旅程从国家保险公司的保险代理开始。多年来，我们扩展到会计、审计和咨询领域。',
            'about.p2': '我们相信成功来自于与客户建立基于信任和透明的长期关系。',
            'about.btn': '了解更多',
            'services.tag': '我们提供什么', 'services.title': '我们的服务',
            'services.audit': '审计', 'services.audit_desc': '以最高质量标准提供外部、内部和预审计服务',
            'services.accounting': '会计', 'services.accounting_desc': '按照国际标准进行记账和编制财务报表',
            'services.tax': '税务', 'services.tax_desc': '税务管理、战略税务规划和纳税申报',
            'services.insurance': '保险', 'services.insurance_desc': '保护企业免受潜在风险的综合保险解决方案',
            'services.consulting': '管理咨询', 'services.consulting_desc': '改善组织绩效的专业咨询',
            'services.hr': '人力资源', 'services.hr_desc': '综合人力资源管理和人才获取解决方案',
            'services.btn': '所有服务',
            'team.tag': '工作团队', 'team.title': '我们的团队',
            'team.founder': '创始人兼管理合伙人', 'team.cofounder': '联合创始人',
            'team.legal': '法律顾问', 'team.btn': '完整团队',
            'team.intro_tag': '领导层', 'team.intro_title': '我们的团队成员',
            'team.intro_desc': '由会计、审计和管理咨询专家组成的综合团队',
            'team.cta_title': '加入我们的团队', 'team.cta_desc': '我们一直在寻找新人才',
            'team.cta_btn': '立即申请',
            'cta.title': '需要专业咨询吗？', 'cta.desc': '今天联系我们，获取专家咨询',
            'cta.btn_contact': '联系我们', 'cta.btn_call': '致电我们',
            'footer.links': '快速链接', 'footer.contact': '联系方式', 'footer.address': '巴格达 - 赛迪亚',
            'footer.desc': '1994年，我们的旅程从国家保险公司的保险代理开始',
            'chat.title': '智能助手', 'chat.status': '在线', 'chat.placeholder': '输入或语音...',
            'chat.listening': '正在聆听...',
            'about.history_tag': '我们的历史', 'about.history_title': '我们的时间之旅',
            'about.milestone1_title': '起步', 'about.milestone1_desc': '我们的旅程从国家保险公司的保险代理开始。',
            'about.milestone2_title': '扩展', 'about.milestone2_desc': '我们扩展到会计、审计和管理咨询领域。',
            'about.milestone3_title': '国际合作', 'about.milestone3_desc': '与IWT Global建立战略合作伙伴关系，提供国际标准服务。',
            'about.vision_title': '我们的愿景', 'about.vision_desc': '成为伊拉克和地区提供专业服务的领先企业。',
            'about.mission_title': '我们的使命', 'about.mission_desc': '基于最高质量标准提供卓越的专业服务。',
            'about.values_tag': '我们的价值观', 'about.values_title': '我们的独特之处',
            'about.val1': '诚信', 'about.val1_desc': '致力于最高职业道德标准',
            'about.val2': '卓越', 'about.val2_desc': '不断追求最佳服务和最高品质',
            'about.val3': '合作', 'about.val3_desc': '建立基于相互信任的长期关系',
            'about.val4': '创新', 'about.val4_desc': '采用最新技术和方法',
            'about.partners_tag': '合作伙伴', 'about.partners_title': '我们的合作伙伴',
            'about.partner_desc': '我们在提供国际标准咨询和审计服务方面的国际合作伙伴',
            'about.partner_btn': '更多',
            'about.office_tag': '我们的总部', 'about.office_title': '公司办公室',
            'about.office_hq': '总部', 'about.office_address': '巴格达 - 塞迪耶，伊拉克',
            'about.office_hours': '周六 - 周四: 上午9:00 - 下午5:00',
            'contact.tag': '联系我们', 'contact.info_title': '联系信息',
            'contact.info_desc': '我们随时为您服务。通过以下任一渠道联系我们：',
            'contact.phone': '电话', 'contact.email': '邮箱', 'contact.location': '地址',
            'contact.form_title': '给我们留言', 'contact.name': '全名',
            'contact.subject': '主题', 'contact.select': '选择主题',
            'contact.job': '求职申请', 'contact.other': '其他',
            'contact.message': '留言', 'contact.attachment': '附件（可选）',
            'contact.file_text': '选择文件或拖放到此处', 'contact.send': '发送消息',
            'contact.map_title': '我们在地图上的位置',
            'partnership.tag': '全球合作', 'partnership.title': '我们与IWT Global的合作',
            'partnership.intro': '我们为与全球领先咨询公司IWT Global的战略合作感到自豪。',
            'partnership.benefits_tag': '优势', 'partnership.benefits_title': '此合作对客户意味着什么',
            'partnership.b1': '全球覆盖', 'partnership.b1_desc': '接入广泛的国际专家网络',
            'partnership.b2': '国际标准', 'partnership.b2_desc': '应用最高国际标准',
            'partnership.b3': '高级培训', 'partnership.b3_desc': '持续的国际培训项目',
            'partnership.b4': '先进技术', 'partnership.b4_desc': '使用最新技术和工具',
            'partnership.scope_tag': '范围', 'partnership.scope_title': '合作领域',
            'partnership.s1': '国际审计与会计', 'partnership.s1_desc': '跨国公司审计',
            'partnership.s2': '管理与财务咨询', 'partnership.s2_desc': '重组和战略规划方面的专业咨询',
            'partnership.s3': '培训与专业发展', 'partnership.s3_desc': '国际培训项目和研讨会',
            'partnership.s4': '知识与技术转让', 'partnership.s4_desc': '专业知识和现代技术交流',
            'services.audit_full': '审计与审查服务',
            'services.ext_audit': '外部审计', 'services.ext_audit_desc': '按ISA标准检查财务数据',
            'services.int_audit': '内部审计', 'services.int_audit_desc': '内部控制系统评估',
            'services.pre_audit': '预审计', 'services.pre_audit_desc': '财务操作的预先审查',
            'services.special_audit': '专项审计', 'services.special_audit_desc': '专业审计报告',
            'services.accounting_full': '会计服务',
            'services.bookkeeping': '记账', 'services.bookkeeping_desc': '按IFRS整理会计记录',
            'services.financial_stmt': '财务报表', 'services.financial_stmt_desc': '按国际标准编制财务报表',
            'services.tax_detail': '税务管理、战略规划和争议解决',
            'services.insurance_detail': '为企业和个人提供综合保险解决方案',
            'services.consulting_detail': '绩效改善和可行性研究的专业咨询',
            'services.hr_full': '人力资源管理', 'services.hr_detail': '包括招聘和绩效管理在内的综合人力资源解决方案',
            'services.advantages_tag': '为什么选择我们',
            'services.adv1': '超过30年经验', 'services.adv2': '专家团队',
            'services.adv3': '与IWT Global国际合作', 'services.adv4': '全球质量标准',
            'services.adv5': '为每位客户定制解决方案',
            'app.tag': '移动应用', 'app.title': '下载我们的应用', 'app.desc': '所有服务尽在掌中',
            'app.f1': '即时通知', 'app.f2': '文件追踪', 'app.f3': '直接沟通', 'app.f4': '完整数据保护',
            'app.get_on': '可用于', 'app.download_on': '下载自',
            'app.f1_desc': '实时跟踪您的文件和交易',
            'app.f2_desc': '随时随地查看您的财务报告',
            'app.f3_desc': '与专业会计师和顾问即时聊天',
            'app.f4_desc': 'AES-256高级加密保障数据安全',
            'app.f5': '内置智能助手', 'app.f5_desc': '提问并获得关于我们服务的即时回答',
            'app.f6': '预约咨询', 'app.f6_desc': '一键预约我们的专家',
            'app.rating': '评分', 'app.downloads': '下载量', 'app.tech': '跨平台技术',
            'app.phone_desc': '综合会计和咨询服务',
            'app.phone_f1': '审计与会计', 'app.phone_f2': '管理咨询',
            'app.phone_f3': '税务规划', 'app.phone_f4': '智能助手', 'app.phone_f5': '预约',
            'app.phone_chat_title': '智能助手',
            'app.phone_chat_bot1': '您好！有什么可以帮您的吗？',
            'app.phone_chat_user1': '你们有什么服务？',
            'app.phone_chat_bot2': '我们提供审计、会计和咨询服务...',
            'services.other_tag': '其他服务', 'services.other_title': '多样化服务',
            'contact.whatsapp': 'WhatsApp',
            'team.m1_name': '注册会计师 阿克拉姆·卡里姆·阿卜杜勒侯赛因',
            'team.m2_name': '穆兹希尔·阿尔沙德·阿卜杜勒侯赛因·哈马迪',
            'team.m3_name': '佩什瓦·里兹加尔·马哈茂德', 'team.m4_name': '法拉克·阿万',
            'team.m5_name': '努尔·阿克拉姆·卡里姆', 'team.m6_name': '塔格里德·马吉德·阿卜杜勒侯赛因',
            'team.m7_name': '阿拉·伊马德·拉希姆', 'team.m8_name': '卡拉尔·阿里·纳赛尔',
            'team.m9_name': '哈拉·穆扎法尔·穆罕默德',
            'team.m1_desc': '会计硕士 - 超过30年会计和审计经验',
            'team.m2_role': '高级行政顾问', 'team.m3_role': '埃尔比勒办事处经理',
            'team.m4_role': '苏莱曼尼亚办事处经理', 'team.m5_role': '审计员',
            'team.m6_role': '高级会计师', 'team.m7_role': '会计师',
            'team.m8_role': '审计员', 'team.m9_role': '秘书和公共关系'
        },
        ru: {
            'nav.home': 'Главная', 'nav.about': 'О Нас', 'nav.services': 'Услуги',
            'nav.team': 'Наша Команда', 'nav.partnership': 'Партнёрство', 'nav.contact': 'Контакты',
            'hero.badge': 'Аль-Фатлави Бухгалтерия и Аудит',
            'hero.trust1': 'Международная Сертификация', 'hero.trust2': 'С 1994 года', 'hero.trust3': '+500 Клиентов',
            'hero.title_prefix': 'Мы предоставляем лучшие услуги в',
            'hero.desc': 'Комплексные бухгалтерские и консультационные услуги высочайшего качества более 30 лет',
            'hero.btn_services': 'Наши Услуги', 'hero.btn_about': 'О Нас',
            'stats.experience': 'лет опыта', 'stats.clients': 'довольных клиентов', 'stats.projects': 'завершённых проектов', 'stats.experts': 'экспертов',
            'about.tag': 'О Нас', 'about.title': 'Кто мы',
            'about.p1': 'В 1994 году наш путь начался как страховое агентство Национальной Страховой Компании. За эти годы мы расширились в области бухгалтерии, аудита и консалтинга.',
            'about.p2': 'Мы верим, что успех приходит через построение долгосрочных отношений с клиентами, основанных на доверии и прозрачности.',
            'about.btn': 'Подробнее о нас',
            'services.tag': 'Что мы предлагаем', 'services.title': 'Наши Услуги',
            'services.audit': 'Аудит', 'services.audit_desc': 'Внешний, внутренний и предварительный аудит по высшим стандартам качества',
            'services.accounting': 'Бухгалтерия', 'services.accounting_desc': 'Ведение учёта и подготовка финансовой отчётности по международным стандартам',
            'services.tax': 'Налоги', 'services.tax_desc': 'Налоговое управление, стратегическое планирование и декларации',
            'services.insurance': 'Страхование', 'services.insurance_desc': 'Комплексные страховые решения для защиты компаний',
            'services.consulting': 'Управленческий Консалтинг', 'services.consulting_desc': 'Специализированный консалтинг для повышения эффективности организации',
            'services.hr': 'Кадры', 'services.hr_desc': 'Комплексные решения по управлению персоналом',
            'services.btn': 'Все наши услуги',
            'team.tag': 'Рабочая группа', 'team.title': 'Наша Команда',
            'team.founder': 'Основатель и Управляющий Партнёр', 'team.cofounder': 'Соучредитель',
            'team.legal': 'Юридический Советник', 'team.btn': 'Полная команда',
            'team.intro_tag': 'Руководство', 'team.intro_title': 'Наши Сотрудники',
            'team.intro_desc': 'Интегрированная команда экспертов в области бухгалтерии, аудита и управленческого консалтинга',
            'team.cta_title': 'Присоединяйтесь к нам', 'team.cta_desc': 'Мы всегда ищем новые таланты',
            'team.cta_btn': 'Подать заявку',
            'cta.title': 'Нужна профессиональная консультация?', 'cta.desc': 'Свяжитесь с нами сегодня и получите консультацию наших экспертов',
            'cta.btn_contact': 'Свяжитесь', 'cta.btn_call': 'Позвоните нам',
            'footer.links': 'Быстрые ссылки', 'footer.contact': 'Контакты', 'footer.address': 'Багдад - Ас-Сайдия',
            'footer.desc': 'В 1994 году наш путь начался как страховое агентство Национальной Страховой Компании',
            'chat.title': 'Умный помощник', 'chat.status': 'Онлайн', 'chat.placeholder': 'Напишите или говорите...',
            'chat.listening': 'Слушаю...',
            'about.history_tag': 'Наша История', 'about.history_title': 'Наш путь сквозь время',
            'about.milestone1_title': 'Начало', 'about.milestone1_desc': 'Наш путь начался как страховое агентство Национальной Страховой Компании.',
            'about.milestone2_title': 'Расширение', 'about.milestone2_desc': 'Мы расширились в бухгалтерию, аудит и управленческий консалтинг.',
            'about.milestone3_title': 'Международное Партнёрство', 'about.milestone3_desc': 'Стратегическое партнёрство с IWT Global для предоставления услуг по международным стандартам.',
            'about.vision_title': 'Наше Видение', 'about.vision_desc': 'Стать ведущей компанией в предоставлении профессиональных услуг в Ираке и регионе.',
            'about.mission_title': 'Наша Миссия', 'about.mission_desc': 'Предоставление выдающихся профессиональных услуг на основе высших стандартов качества.',
            'about.values_tag': 'Наши Ценности', 'about.values_title': 'Что нас отличает',
            'about.val1': 'Честность', 'about.val1_desc': 'Приверженность высшим стандартам профессиональной этики',
            'about.val2': 'Совершенство', 'about.val2_desc': 'Постоянное стремление к лучшему качеству услуг',
            'about.val3': 'Партнёрство', 'about.val3_desc': 'Построение долгосрочных отношений на основе взаимного доверия',
            'about.val4': 'Инновации', 'about.val4_desc': 'Внедрение новейших технологий и методов',
            'about.partners_tag': 'Партнёры', 'about.partners_title': 'Наши Партнёрства',
            'about.partner_desc': 'Наш международный партнёр в предоставлении консультационных и аудиторских услуг по международным стандартам',
            'about.partner_btn': 'Подробнее',
            'about.office_tag': 'Наша штаб-квартира', 'about.office_title': 'Офис компании',
            'about.office_hq': 'Главный офис', 'about.office_address': 'Багдад - Ас-Сайдия, Ирак',
            'about.office_hours': 'Суббота - Четверг: 9:00 - 17:00',
            'contact.tag': 'Контакты', 'contact.info_title': 'Контактная информация',
            'contact.info_desc': 'Мы здесь, чтобы помочь. Свяжитесь с нами через любой из каналов:',
            'contact.phone': 'Телефон', 'contact.email': 'Эл. почта', 'contact.location': 'Адрес',
            'contact.form_title': 'Отправьте нам сообщение', 'contact.name': 'Полное имя',
            'contact.subject': 'Тема', 'contact.select': 'Выберите тему',
            'contact.job': 'Заявка на работу', 'contact.other': 'Другое',
            'contact.message': 'Сообщение', 'contact.attachment': 'Прикрепить файл (Необязательно)',
            'contact.file_text': 'Выберите файл или перетащите сюда', 'contact.send': 'Отправить сообщение',
            'contact.map_title': 'Наше местоположение на карте',
            'partnership.tag': 'Глобальное Партнёрство', 'partnership.title': 'Наше партнёрство с IWT Global',
            'partnership.intro': 'Мы гордимся стратегическим партнёрством с IWT Global, одной из ведущих мировых консалтинговых компаний.',
            'partnership.benefits_tag': 'Преимущества', 'partnership.benefits_title': 'Что это партнёрство значит для наших клиентов',
            'partnership.b1': 'Глобальный Охват', 'partnership.b1_desc': 'Доступ к широкой международной сети экспертов',
            'partnership.b2': 'Международные Стандарты', 'partnership.b2_desc': 'Применение высших международных стандартов',
            'partnership.b3': 'Продвинутое Обучение', 'partnership.b3_desc': 'Непрерывные международные программы обучения',
            'partnership.b4': 'Передовые Технологии', 'partnership.b4_desc': 'Использование новейших технологий и инструментов',
            'partnership.scope_tag': 'Охват', 'partnership.scope_title': 'Области сотрудничества',
            'partnership.s1': 'Международный Аудит и Бухгалтерия', 'partnership.s1_desc': 'Аудит транснациональных компаний',
            'partnership.s2': 'Управленческий и Финансовый Консалтинг', 'partnership.s2_desc': 'Специализированный консалтинг по реструктуризации и стратегическому планированию',
            'partnership.s3': 'Обучение и Профессиональное Развитие', 'partnership.s3_desc': 'Международные программы обучения и семинары',
            'partnership.s4': 'Передача Знаний и Технологий', 'partnership.s4_desc': 'Обмен опытом и современными технологиями',
            'services.audit_full': 'Аудиторские и Ревизионные Услуги',
            'services.ext_audit': 'Внешний Аудит', 'services.ext_audit_desc': 'Проверка финансовых данных по стандартам ISA',
            'services.int_audit': 'Внутренний Аудит', 'services.int_audit_desc': 'Оценка системы внутреннего контроля',
            'services.pre_audit': 'Предварительный Аудит', 'services.pre_audit_desc': 'Предварительная проверка финансовых операций',
            'services.special_audit': 'Специальный Аудит', 'services.special_audit_desc': 'Специализированные аудиторские отчёты',
            'services.accounting_full': 'Бухгалтерские Услуги',
            'services.bookkeeping': 'Ведение Учёта', 'services.bookkeeping_desc': 'Организация бухгалтерских записей по МСФО',
            'services.financial_stmt': 'Финансовая Отчётность', 'services.financial_stmt_desc': 'Подготовка финансовой отчётности по международным стандартам',
            'services.tax_detail': 'Налоговое управление, стратегическое планирование и разрешение споров',
            'services.insurance_detail': 'Комплексные страховые решения для компаний и частных лиц',
            'services.consulting_detail': 'Специализированный консалтинг по повышению эффективности и технико-экономические обоснования',
            'services.hr_full': 'Управление Персоналом', 'services.hr_detail': 'Комплексные HR-решения включая подбор персонала и управление эффективностью',
            'services.advantages_tag': 'Почему мы',
            'services.adv1': 'Более 30 лет опыта', 'services.adv2': 'Команда экспертов-специалистов',
            'services.adv3': 'Международное партнёрство с IWT Global', 'services.adv4': 'Глобальные стандарты качества',
            'services.adv5': 'Индивидуальные решения для каждого клиента',
            'app.tag': 'Мобильное приложение', 'app.title': 'Скачайте наше приложение', 'app.desc': 'Все наши услуги под рукой',
            'app.f1': 'Мгновенные уведомления', 'app.f2': 'Отслеживание файлов', 'app.f3': 'Прямая связь', 'app.f4': 'Полная защита данных',
            'app.get_on': 'Доступно в', 'app.download_on': 'Скачать из',
            'app.f1_desc': 'Отслеживайте свои файлы и транзакции в реальном времени',
            'app.f2_desc': 'Просматривайте финансовые отчёты в любое время и в любом месте',
            'app.f3_desc': 'Мгновенный чат со специализированными бухгалтерами и консультантами',
            'app.f4_desc': 'Продвинутое шифрование AES-256 для безопасности данных',
            'app.f5': 'Встроенный умный помощник', 'app.f5_desc': 'Задавайте вопросы и получайте мгновенные ответы',
            'app.f6': 'Запись на консультацию', 'app.f6_desc': 'Запишитесь к нашим экспертам одним кликом',
            'app.rating': 'Рейтинг', 'app.downloads': 'Скачивания', 'app.tech': 'Кроссплатформенная технология',
            'app.phone_desc': 'Комплексные бухгалтерские и консультационные услуги',
            'app.phone_f1': 'Аудит и бухгалтерия', 'app.phone_f2': 'Управленческий консалтинг',
            'app.phone_f3': 'Налоговое планирование', 'app.phone_f4': 'Умный помощник', 'app.phone_f5': 'Запись на приём',
            'app.phone_chat_title': 'Умный помощник',
            'app.phone_chat_bot1': 'Здравствуйте! Чем могу помочь?',
            'app.phone_chat_user1': 'Какие у вас услуги?',
            'app.phone_chat_bot2': 'Мы предоставляем услуги аудита, бухгалтерии и консалтинга...',
            'services.other_tag': 'Другие услуги', 'services.other_title': 'Разнообразные услуги',
            'contact.whatsapp': 'WhatsApp',
            'team.m1_name': 'Дипл. бухгалтер Акрам Карим Абдул Хусейн',
            'team.m2_name': 'Музахир Аршад Абдул Хусейн Хаммади',
            'team.m3_name': 'Пешава Ризгар Махмуд', 'team.m4_name': 'Фалак Аван',
            'team.m5_name': 'Нур Акрам Карим', 'team.m6_name': 'Тагрид Маджид Абдул Хусейн',
            'team.m7_name': 'Алаа Имад Рахим', 'team.m8_name': 'Каррар Али Насер',
            'team.m9_name': 'Хала Музаффар Мухаммед',
            'team.m1_desc': 'Магистр бухгалтерского учёта - Более 30 лет опыта в бухгалтерии и аудите',
            'team.m2_role': 'Старший административный консультант', 'team.m3_role': 'Руководитель офиса в Эрбиле',
            'team.m4_role': 'Руководитель офиса в Сулеймании', 'team.m5_role': 'Аудитор',
            'team.m6_role': 'Старший бухгалтер', 'team.m7_role': 'Бухгалтер',
            'team.m8_role': 'Аудитор', 'team.m9_role': 'Секретарь и связи с общественностью'
        }
    };

    const typedWords = {
        ar: ['المحاسبة', 'التدقيق', 'الاستشارات', 'الضرائب', 'التأمين'],
        en: ['Accounting', 'Auditing', 'Consulting', 'Tax', 'Insurance'],
        ku: ['ژمێریاری', 'تاقیکردنەوە', 'ڕاوێژکاری', 'باج', 'بیمە'],
        tr: ['Muhasebe', 'Denetim', 'Danışmanlık', 'Vergi', 'Sigorta'],
        fa: ['حسابداری', 'حسابرسی', 'مشاوره', 'مالیات', 'بیمه'],
        fr: ['Comptabilité', 'Audit', 'Conseil', 'Fiscalité', 'Assurance'],
        de: ['Buchhaltung', 'Prüfung', 'Beratung', 'Steuer', 'Versicherung'],
        es: ['Contabilidad', 'Auditoría', 'Consultoría', 'Impuestos', 'Seguros'],
        zh: ['会计', '审计', '咨询', '税务', '保险'],
        ru: ['Бухгалтерия', 'Аудит', 'Консалтинг', 'Налоги', 'Страхование']
    };

    const rtlLangs = ['ar', 'ku', 'fa'];
    let currentLang = localStorage.getItem('lang') || 'ar';

    /* Helper: get translation with fallback chain: lang → en → null */
    function t(lang, key) {
        if (translations[lang] && translations[lang][key]) return translations[lang][key];
        if (lang !== 'en' && lang !== 'ar' && translations.en[key]) return translations.en[key];
        return null;
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        var dir = rtlLangs.includes(lang) ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', lang);

        /* Arabic is the base — no translations needed (keys are empty) */
        if (lang === 'ar') {
            /* Restore original Arabic text from data-i18n-ar attribute or reload */
            document.querySelectorAll('[data-i18n]').forEach(function(el) {
                var original = el.getAttribute('data-i18n-ar');
                if (original) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = original;
                    } else if (el.tagName === 'OPTION') {
                        el.textContent = original;
                    } else {
                        var icon = el.querySelector('i');
                        if (icon) {
                            el.textContent = original + ' ';
                            el.appendChild(icon);
                        } else {
                            el.textContent = original;
                        }
                    }
                }
            });
        } else {
            document.querySelectorAll('[data-i18n]').forEach(function(el) {
                var key = el.getAttribute('data-i18n');
                /* Save original Arabic text on first translate */
                if (!el.getAttribute('data-i18n-ar')) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.setAttribute('data-i18n-ar', el.placeholder || '');
                    } else if (el.tagName === 'OPTION') {
                        el.setAttribute('data-i18n-ar', el.textContent);
                    } else {
                        el.setAttribute('data-i18n-ar', el.textContent);
                    }
                }
                var val = t(lang, key);
                if (val) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = val;
                    } else if (el.tagName === 'OPTION') {
                        el.textContent = val;
                    } else {
                        var icon = el.querySelector('i');
                        if (icon) {
                            el.textContent = val + ' ';
                            el.appendChild(icon);
                        } else {
                            el.textContent = val;
                        }
                    }
                }
            });
        }

        /* Handle data-i18n-placeholder separately */
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (!el.getAttribute('data-i18n-ar-ph')) {
                el.setAttribute('data-i18n-ar-ph', el.placeholder || '');
            }
            if (lang === 'ar') {
                el.placeholder = el.getAttribute('data-i18n-ar-ph') || '';
            } else {
                var val = t(lang, key);
                if (val) el.placeholder = val;
            }
        });

        /* Update language display */
        var currentLangEl = document.getElementById('currentLang');
        if (currentLangEl) currentLangEl.textContent = lang.toUpperCase();

        /* Mark active language option */
        document.querySelectorAll('.lang-option').forEach(function(opt) {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        /* Restart typed words */
        if (typedWords[lang]) startTyping(typedWords[lang]);

        /* Update chat placeholder if chat is loaded */
        var chatInputEl = document.getElementById('chatInput');
        if (chatInputEl) {
            var chatLangKey = 'chat.placeholder';
            var chatPh = lang === 'ar' ? 'اكتب أو تحدث بصوتك...' : (t(lang, chatLangKey) || 'Type or speak...');
            chatInputEl.placeholder = chatPh;
        }
    }

    // Language dropdown
    var langDropdown = document.getElementById('langDropdown');
    var langBtn = document.getElementById('langBtn');

    if (langBtn) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });
    }

    document.querySelectorAll('.lang-option').forEach(function(opt) {
        opt.addEventListener('click', function() {
            setLanguage(this.getAttribute('data-lang'));
            langDropdown.classList.remove('open');
        });
    });

    document.addEventListener('click', function(e) {
        if (langDropdown && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('open');
        }
    });

    if (currentLang !== 'ar') setLanguage(currentLang);
    else {
        var currentLangEl = document.getElementById('currentLang');
        if (currentLangEl) currentLangEl.textContent = 'AR';
    }

    /* ===== Header Scroll ===== */
    var header = document.getElementById('masthead');
    window.addEventListener('scroll', function() {
        if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    });

    /* ===== Mobile Menu ===== */
    var menuToggle = document.getElementById('menuToggle');
    var mainNav = document.getElementById('mainNav');
    var navOverlay = document.getElementById('navOverlay');

    function openMenu() {
        menuToggle.classList.add('active');
        mainNav.classList.add('open');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('open');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.contains('open') ? closeMenu() : openMenu();
        });
    }
    if (navOverlay) navOverlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.nav-menu a').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    /* ===== Typed Text ===== */
    var typedEl = document.getElementById('typedText');
    var typedIndex = 0, charIndex = 0, isDeleting = false;
    var currentWords = typedWords[currentLang] || typedWords.ar;

    function startTyping(words) {
        currentWords = words;
        typedIndex = 0;
        charIndex = 0;
        isDeleting = false;
        if (typedEl) typedEl.textContent = '';
        typeNextChar();
    }

    function typeNextChar() {
        if (!typedEl || !currentWords.length) return;
        var word = currentWords[typedIndex % currentWords.length];

        if (isDeleting) {
            charIndex--;
            typedEl.textContent = word.substring(0, charIndex);
        } else {
            charIndex++;
            typedEl.textContent = word.substring(0, charIndex);
        }

        var delay = isDeleting ? 30 : 80;

        if (!isDeleting && charIndex === word.length) {
            delay = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typedIndex++;
            delay = 400;
        }

        setTimeout(typeNextChar, delay);
    }

    if (typedEl) startTyping(currentWords);

    /* ===== Counter Animation ===== */
    var counters = document.querySelectorAll('[data-count]');
    var countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;
        counters.forEach(function(counter) {
            var target = parseInt(counter.getAttribute('data-count'));
            var duration = 2000;
            var start = performance.now();

            function update(now) {
                var elapsed = now - start;
                var progress = Math.min(elapsed / duration, 1);
                var eased = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.round(target * eased);
                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        });
        countersAnimated = true;
    }

    /* ===== Scroll Reveal ===== */
    var fadeEls = document.querySelectorAll('.fade-in');

    function checkFadeIn() {
        fadeEls.forEach(function(el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.90) {
                var parent = el.closest('.services-grid, .stats-grid, .team-grid, .team-members-grid, .values-grid, .benefits-grid');
                var delay = parent ? (Array.prototype.indexOf.call(el.parentElement.children, el) * 100) : 0;
                setTimeout(function() { el.classList.add('visible'); }, delay);
            }
        });

        if (counters.length > 0) {
            var firstCounter = counters[0];
            if (firstCounter) {
                var rect = firstCounter.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.85) animateCounters();
            }
        }
    }

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn();

    /* ===== Scroll To Top ===== */
    var scrollTop = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (scrollTop) scrollTop.classList.toggle('visible', window.scrollY > 400);
    });
    if (scrollTop) {
        scrollTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ===== Parallax Shapes (very subtle) ===== */
    var shapes = document.querySelectorAll('.hero-shapes .shape, .cta-bg-shapes .shape');
    var ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                var scrollY = window.scrollY;
                shapes.forEach(function(shape, i) {
                    var speed = 0.02 + (i * 0.01);
                    shape.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    /* ===== Subtle Hero Dots — very few, muted ===== */
    var particlesContainer = document.getElementById('heroParticles');
    if (particlesContainer) {
        var particleCount = 18;
        for (var i = 0; i < particleCount; i++) {
            var particle = document.createElement('div');
            var size = Math.random() * 3 + 1.5;
            var color = 'rgba(30,86,160,' + (Math.random() * 0.06 + 0.02) + ')';
            particle.style.cssText =
                'position:absolute;' +
                'width:' + size + 'px;height:' + size + 'px;' +
                'background:' + color + ';' +
                'border-radius:50%;' +
                'top:' + (Math.random() * 100) + '%;' +
                'left:' + (Math.random() * 100) + '%;' +
                'animation:subtleFloat ' + (Math.random() * 14 + 18) + 's ease-in-out infinite ' + (Math.random() * 10) + 's;' +
                'pointer-events:none;';
            particlesContainer.appendChild(particle);
        }
    }

    /* ===== AI Chatbot + Voice Assistant ===== */
    var chatToggle = document.getElementById('chatToggle');
    var chatPanel = document.getElementById('chatPanel');
    var chatClose = document.getElementById('chatClose');
    var chatMessages = document.getElementById('chatMessages');
    var chatInput = document.getElementById('chatInput');
    var chatSend = document.getElementById('chatSend');
    var chatQuickReplies = document.getElementById('chatQuickReplies');
    var chatMic = document.getElementById('chatMic');
    var chatMicStop = document.getElementById('chatMicStop');
    var chatListeningBar = document.getElementById('chatListeningBar');
    var chatVoiceToggle = document.getElementById('chatVoiceToggle');
    var chatAiBadge = document.getElementById('chatAiBadge');

    if (chatToggle && chatPanel) {
        var chatOpen = false;
        var firstOpen = true;
        var voiceEnabled = true;
        var isListening = false;
        var recognition = null;
        var synth = window.speechSynthesis;

        /* ── Gemini AI Configuration ── */
        var GEMINI_API_KEY = 'AIzaSyA6MRFMGHTrSjBSbj06PSC38siVZdBRbMo';
        var geminiModel = null;
        var geminiChat = null;

        var companyContext = [
            'أنت المساعد الذكي لشركة الفتلاوي للمحاسبة والتدقيق (Al-Fatlawy Accounting & Auditing Co.).',
            'الشركة تأسست عام 1994 كوكالة تأمين لشركة التأمين الوطنية في العراق.',
            'المقر الرئيسي: بغداد - السيدية، العراق. أوقات العمل: السبت - الخميس، 9:00 ص - 5:00 م.',
            'لدى الشركة مكاتب فرعية في أربيل والسليمانية.',
            'الهاتف: 9647724596108 | البريد: info@alfatlawy-cpa.com.iq | الموقع: alfatlawy-cpa.com.iq',
            'واتساب: wa.me/9647724596108 | لينكدإن: linkedin.com/company/al-fatlawy-for-management-consultancy',
            '',
            '=== الخدمات الرئيسية ===',
            '1. التدقيق: تدقيق خارجي وفق معايير ISA، تدقيق داخلي، تدقيق مسبق، تدقيق أغراض خاصة.',
            '2. المحاسبة: مسك السجلات، إعداد القوائم المالية وفق IFRS، ترجمة القوائم المالية، التحليل المالي.',
            '3. الضرائب: تخطيط ضريبي استراتيجي، إعداد الإقرارات، تسوية النزاعات الضريبية، إدارة الضرائب.',
            '4. التأمين: تأمين شامل للشركات والأفراد، حماية الممتلكات، إدارة المخاطر.',
            '5. الاستشارات الإدارية والمالية: إعادة هيكلة، دراسات جدوى، تحسين الأداء.',
            '6. الموارد البشرية: توظيف واكتساب المواهب، إدارة الأداء، تخطيط القوى العاملة.',
            '',
            '=== الإحصائيات ===',
            'أكثر من 30 سنة خبرة | 500+ عميل | 1200+ مشروع مكتمل | 50+ خبير متخصص.',
            '',
            '=== الفريق القيادي ===',
            '• اكرم كريم عبد الحسين — المؤسس والشريك الإداري (ماجستير محاسبة، خبرة +30 سنة)',
            '• حسن عبد الحسين حمادي — المؤسس المشارك',
            '• فاضل عبد الحسين — مستشار قانوني',
            '• مظاهر ارشد عبد الحسين حمادي — مستشار إداري أول',
            '• بيشوا رزكار محمود — مدير مكتب أربيل',
            '• فلك آوان — مدير مكتب السليمانية',
            '',
            '=== الشراكة الدولية ===',
            'شراكة استراتيجية مع IWT Global للاستشارات — شركة عالمية رائدة.',
            'المجالات: التدقيق الدولي، الاستشارات، التدريب، نقل التكنولوجيا.',
            '',
            '=== تعليمات الاستجابة ===',
            'أجب بنفس لغة المستخدم. إذا كتب بالعربي أجب بالعربي، إذا كتب بالإنجليزي أجب بالإنجليزي، وهكذا لجميع اللغات.',
            'كن ودوداً ومهنياً ومفيداً.',
            'إذا سُئلت عن شيء خارج نطاق الشركة، يمكنك الإجابة بمعلومات عامة مفيدة مع الإشارة لخدمات الشركة عند الإمكان.',
            'استخدم الإيموجي بشكل معتدل لجعل الردود جذابة.',
            'قدم إجابات مختصرة (3-6 جمل) إلا إذا طُلب التفصيل.',
            'عند السؤال عن الأسعار: اشرح أن الأسعار تعتمد على نوع الخدمة وحجم المشروع واقترح التواصل.',
            'شجع الزائر دائماً على التواصل عبر الهاتف أو الواتساب أو زيارة المكتب.'
        ].join('\n');

        /* ── Initialize Gemini AI (REST API) ── */
        var geminiHistory = [];

        function initGeminiAI() {
            geminiHistory = [
                { role: 'user', parts: [{ text: 'سياق النظام:\n' + companyContext }] },
                { role: 'model', parts: [{ text: 'فهمت! أنا المساعد الذكي لشركة الفتلاوي. سأساعد الزوار بمعلومات عن خدمات الشركة وأجيب على استفساراتهم بشكل مهني وودود.' }] }
            ];
            if (chatAiBadge) chatAiBadge.style.display = 'inline-flex';
        }

        initGeminiAI();

        /* ── Chat Data (pattern-matching fallback) ── */
        var chatData = {
            ar: {
                greeting: 'مرحباً! 👋 أنا المساعد الذكي لشركة الفتلاوي.\nيمكنني الإجابة على أسئلتك بالذكاء الاصطناعي، أو تحدث بصوتك! 🎤',
                quickReplies: ['ما هي خدماتكم؟', 'كيف أتواصل معكم؟', 'أريد استشارة', 'من أنتم؟', 'الشراكة الدولية'],
                placeholder: 'اكتب أو تحدث بصوتك...',
                responses: {
                    'خدمات|خدماتكم|ماذا تقدم': 'نقدم مجموعة متكاملة من الخدمات المهنية:\n\n🔍 <b>التدقيق</b> — تدقيق خارجي وداخلي ومسبق\n📊 <b>المحاسبة</b> — مسك السجلات والقوائم المالية\n💰 <b>الضرائب</b> — تخطيط وإدارة ضريبية\n🛡️ <b>التأمين</b> — حلول تأمينية شاملة\n📈 <b>الاستشارات</b> — استشارات إدارية ومالية\n👥 <b>الموارد البشرية</b> — حلول متكاملة للموارد البشرية\n\nهل تريد معرفة المزيد عن خدمة معينة؟',
                    'تواصل|اتصل|رقم|هاتف|عنوان|موقع|ايميل|بريد': 'يمكنك التواصل معنا عبر:\n\n📞 <b>الهاتف:</b> 9647724596108\n📧 <b>البريد:</b> info@alfatlawy-cpa.com.iq\n📍 <b>العنوان:</b> بغداد - السيدية\n💬 <b>واتساب:</b> <a href="https://wa.me/9647724596108" target="_blank">اضغط هنا</a>\n\nنحن متاحون لخدمتكم!',
                    'استشار|مشور|نصيحة|مساعدة مالية': 'بالتأكيد! نقدم استشارات مهنية متخصصة في:\n\n• الاستشارات المالية والمحاسبية\n• التخطيط الضريبي\n• إعادة هيكلة الشركات\n• دراسات الجدوى\n\nيمكنك حجز استشارة عبر التواصل المباشر على الرقم: 9647724596108\nأو زيارة صفحة <a href="join.html">التواصل معنا</a>',
                    'من أنتم|من نحن|عن الشركة|تعريف|تأسيس': 'شركة الفتلاوي للمحاسبة والتدقيق تأسست عام <b>1994</b> كوكالة تأمين لشركة التأمين الوطنية.\n\nعلى مدى أكثر من <b>30 عاماً</b> توسعنا في مجالات المحاسبة والتدقيق والاستشارات الإدارية.\n\n✅ أكثر من 500 عميل\n✅ أكثر من 1200 مشروع مكتمل\n✅ فريق من 50+ خبير متخصص\n\nلمعرفة المزيد: <a href="about.html">صفحة من نحن</a>',
                    'شراكة|شريك|دولي|iwt|عالمي': 'نفتخر بشراكتنا الاستراتيجية مع <b>IWT Global</b>، إحدى الشركات الرائدة عالمياً في الاستشارات والخدمات المهنية.\n\nهذه الشراكة توفر لعملائنا:\n🌍 وصول لشبكة دولية من الخبراء\n📋 تطبيق أعلى المعايير الدولية\n🎓 برامج تدريب دولية متقدمة\n💻 أحدث التقنيات والأدوات\n\nللمزيد: <a href="partnership.html">صفحة الشراكة</a>',
                    'تدقيق|مراجع': 'خدمات التدقيق لدينا تشمل:\n\n🔍 التدقيق الخارجي — فحص البيانات المالية وفق معايير ISA\n🔎 التدقيق الداخلي — تقييم نظام الرقابة الداخلية\n📋 التدقيق المسبق — مراجعة مسبقة للعمليات المالية\n📊 تدقيق الأغراض الخاصة — تقارير متخصصة\n\nللمزيد: <a href="services.html">صفحة الخدمات</a>',
                    'محاسب|حساب|قوائم مالية|سجلات': 'خدمات المحاسبة تشمل:\n\n📒 مسك السجلات المحاسبية\n📊 إعداد القوائم المالية وفق المعايير الدولية IFRS\n📑 ترجمة القوائم المالية\n📈 التحليل المالي والتقارير الدورية\n\nللمزيد: <a href="services.html">صفحة الخدمات</a>',
                    'ضريب|ضرائب|tax': 'خدمات الضرائب لدينا:\n\n💰 إدارة الضرائب\n📋 التخطيط الضريبي الاستراتيجي\n📄 إعداد الإقرارات الضريبية\n⚖️ تسوية النزاعات الضريبية\n\nللمزيد: <a href="services.html">صفحة الخدمات</a>',
                    'تأمين|insurance': 'حلول التأمين لدينا:\n\n🛡️ تأمين شامل للشركات والأفراد\n📋 حماية من المخاطر المحتملة\n🏢 تأمين الممتلكات والأعمال\n\nبدأنا رحلتنا كوكالة تأمين عام 1994!\nللمزيد: <a href="services.html">صفحة الخدمات</a>',
                    'موارد بشرية|توظيف|hr|وظيفة|عمل|انضم': 'خدمات الموارد البشرية:\n\n👥 حلول متكاملة لإدارة الموارد البشرية\n🎯 اكتساب المواهب والتوظيف\n📊 إدارة الأداء\n\nإذا كنت ترغب بالانضمام لفريقنا، يمكنك التقديم عبر: <a href="join.html">صفحة التواصل</a>',
                    'فريق|أعضاء|موظف': 'فريقنا يتكون من نخبة من الخبراء:\n\n👤 <b>اكرم كريم عبد الحسين</b> — المؤسس والشريك الإداري\n👤 <b>حسن عبد الحسين حمادي</b> — المؤسس المشارك\n👤 <b>فاضل عبد الحسين</b> — مستشار قانوني\n\nوفريق من 50+ خبير متخصص!\nللمزيد: <a href="team.html">صفحة الفريق</a>',
                    'تطبيق|app|اندرويد|ايفون|جوال|موبايل': 'تطبيق شركة الفتلاوي متاح قريباً على:\n\n📱 <b>Google Play</b> لأجهزة أندرويد\n🍎 <b>App Store</b> لأجهزة آيفون\n\nمن خلال التطبيق يمكنك:\n• متابعة ملفاتك وتقاريرك\n• التواصل المباشر مع الخبراء\n• الحصول على إشعارات فورية\n• حماية كاملة لبياناتك',
                    'شكر|شكراً|ممتاز|رائع|جيد|حلو': 'شكراً لك! 😊 يسعدنا خدمتك. هل تحتاج أي شيء آخر؟',
                    'سلام|مرحبا|هلا|اهلا|صباح|مساء': 'أهلاً وسهلاً بك! 😊 كيف يمكنني مساعدتك اليوم؟',
                    'سعر|تكلفة|كم|أسعار': 'تختلف الأسعار حسب نوع الخدمة وحجم المشروع. للحصول على عرض سعر مخصص، يرجى التواصل مع فريقنا:\n\n📞 9647724596108\n📧 info@alfatlawy-cpa.com.iq\n\nأو عبر صفحة <a href="join.html">التواصل معنا</a>'
                },
                fallback: 'عذراً، لم أفهم سؤالك بشكل كامل. يمكنك:\n\n• اختيار أحد الأسئلة السريعة أدناه\n• أو التواصل مباشرة عبر واتساب: <a href="https://wa.me/9647724596108" target="_blank">اضغط هنا</a>\n\nكيف يمكنني مساعدتك؟'
            },
            en: {
                greeting: 'Hello! 👋 I\'m the Al-Fatlawy smart assistant.\nI can answer your questions with AI, or speak to me! 🎤',
                quickReplies: ['What are your services?', 'How to contact you?', 'I need a consultation', 'About the company', 'International partnership'],
                placeholder: 'Type or speak...',
                responses: {
                    'service|offer|provide': 'We offer a comprehensive suite of professional services:\n\n🔍 <b>Auditing</b> — External, internal, and pre-audit\n📊 <b>Accounting</b> — Bookkeeping and financial statements\n💰 <b>Tax</b> — Tax planning and management\n🛡️ <b>Insurance</b> — Comprehensive solutions\n📈 <b>Consulting</b> — Management and financial consulting\n👥 <b>HR</b> — Integrated HR solutions\n\nWould you like to know more about a specific service?',
                    'contact|phone|email|address|reach': 'You can reach us through:\n\n📞 <b>Phone:</b> 9647724596108\n📧 <b>Email:</b> info@alfatlawy-cpa.com.iq\n📍 <b>Address:</b> Baghdad - Al-Saydiya\n💬 <b>WhatsApp:</b> <a href="https://wa.me/9647724596108" target="_blank">Click here</a>\n\nWe\'re available to serve you!',
                    'consult|advice|help': 'Absolutely! We provide specialized professional consulting in:\n\n• Financial and accounting consulting\n• Tax planning\n• Corporate restructuring\n• Feasibility studies\n\nBook a consultation: 9647724596108\nOr visit our <a href="join.html">contact page</a>',
                    'about|who|company|founded': 'Al-Fatlawy Accounting & Auditing was founded in <b>1994</b> as an insurance agency.\n\nOver <b>30+ years</b>, we expanded into accounting, auditing, and management consulting.\n\n✅ 500+ clients\n✅ 1200+ completed projects\n✅ 50+ expert specialists\n\nLearn more: <a href="about.html">About Us</a>',
                    'partner|iwt|international|global': 'We\'re proud of our strategic partnership with <b>IWT Global</b>.\n\nThis partnership provides:\n🌍 Global expert network\n📋 International standards\n🎓 Advanced training programs\n💻 Latest technologies\n\nMore: <a href="partnership.html">Partnership page</a>',
                    'thank|great|good|excellent': 'Thank you! 😊 Happy to help. Anything else?',
                    'hello|hi|hey|good morning|good evening': 'Hello! 😊 How can I help you today?',
                    'price|cost|how much|fee': 'Prices vary based on the service type and project scope. For a custom quote, please contact our team:\n\n📞 9647724596108\n📧 info@alfatlawy-cpa.com.iq\n\nOr via our <a href="join.html">contact page</a>'
                },
                fallback: 'Sorry, I didn\'t fully understand your question. You can:\n\n• Choose one of the quick replies below\n• Or contact us via WhatsApp: <a href="https://wa.me/9647724596108" target="_blank">Click here</a>\n\nHow can I help you?'
            },
            ku: {
                greeting: 'سڵاو! 👋 من یاریدەدەری زیرەکی شیرکەتی ئەلفەتڵاویم.\nدەتوانم بە زیرەکی دەستکرد وەڵامی پرسیارەکانت بدەمەوە! 🎤',
                quickReplies: ['خزمەتگوزارییەکانتان چین؟', 'چۆن پەیوەندیتان پێوە بکەم؟', 'ڕاوێژم دەوێت', 'دەربارەی شیرکەت', 'هاوبەشی نێودەوڵەتی'],
                placeholder: 'بنووسە یان بە دەنگ بدوێ...',
                responses: {
                    'خزمەت|چی دەكەن': 'خزمەتگوزارییەکانمان:\n\n🔍 <b>تاقیکردنەوە</b>\n📊 <b>ژمێریاری</b>\n💰 <b>باج</b>\n🛡️ <b>بیمە</b>\n📈 <b>ڕاوێژکاری</b>\n👥 <b>سەرچاوەی مرۆڤی</b>',
                    'پەیوەندی|هەڵسوکەوت|ژمارە': '📞 <b>مۆبایل:</b> 9647724596108\n📧 <b>ئیمەیل:</b> info@alfatlawy-cpa.com.iq\n📍 <b>ناونیشان:</b> بەغدا - سەیدیە'
                },
                fallback: 'ببوورە، نەمتوانی پرسیارەکەت تەواو تێبگەم. دەتوانیت:\n\n• یەکێک لە پرسیارە خێراکان هەڵبژێریت\n• یان پەیوەندیمان پێوە بکەیت لە واتسئاپ: <a href="https://wa.me/9647724596108" target="_blank">کرتە بکە لێرە</a>'
            },
            tr: {
                greeting: 'Merhaba! 👋 Ben Al-Fatlawy akıllı asistanıyım.\nSorularınızı yapay zeka ile yanıtlayabilirim! 🎤',
                quickReplies: ['Hizmetleriniz nelerdir?', 'Nasıl iletişim kurabilirim?', 'Danışmanlık istiyorum', 'Şirket hakkında', 'Uluslararası ortaklık'],
                placeholder: 'Yazın veya sesli konuşun...',
                responses: {
                    'hizmet|ne sunuyorsunuz': 'Hizmetlerimiz:\n\n🔍 <b>Denetim</b>\n📊 <b>Muhasebe</b>\n💰 <b>Vergi</b>\n🛡️ <b>Sigorta</b>\n📈 <b>Danışmanlık</b>\n👥 <b>İnsan Kaynakları</b>',
                    'iletişim|telefon|adres': '📞 <b>Telefon:</b> 9647724596108\n📧 <b>E-posta:</b> info@alfatlawy-cpa.com.iq\n📍 <b>Adres:</b> Bağdat - El-Seydiye'
                },
                fallback: 'Üzgünüm, sorunuzu tam olarak anlayamadım. Şunları yapabilirsiniz:\n\n• Aşağıdaki hızlı yanıtlardan birini seçin\n• WhatsApp ile iletişime geçin: <a href="https://wa.me/9647724596108" target="_blank">Buraya tıklayın</a>'
            },
            fa: {
                greeting: 'سلام! 👋 من دستیار هوشمند شرکت الفتلاوی هستم.\nمی‌توانم با هوش مصنوعی به سؤالات شما پاسخ دهم! 🎤',
                quickReplies: ['خدمات شما چیست؟', 'چگونه تماس بگیرم؟', 'مشاوره می‌خواهم', 'درباره شرکت', 'مشارکت بین‌المللی'],
                placeholder: 'بنویسید یا صحبت کنید...',
                responses: {
                    'خدمات|چه ارائه می': 'خدمات ما:\n\n🔍 <b>حسابرسی</b>\n📊 <b>حسابداری</b>\n💰 <b>مالیات</b>\n🛡️ <b>بیمه</b>\n📈 <b>مشاوره</b>\n👥 <b>منابع انسانی</b>',
                    'تماس|تلفن|آدرس': '📞 <b>تلفن:</b> 9647724596108\n📧 <b>ایمیل:</b> info@alfatlawy-cpa.com.iq\n📍 <b>آدرس:</b> بغداد - سیدیه'
                },
                fallback: 'متأسفم، سؤال شما را کاملاً متوجه نشدم. می‌توانید:\n\n• یکی از پاسخ‌های سریع زیر را انتخاب کنید\n• یا از طریق واتساپ تماس بگیرید: <a href="https://wa.me/9647724596108" target="_blank">اینجا کلیک کنید</a>'
            },
            fr: {
                greeting: 'Bonjour! 👋 Je suis l\'assistant intelligent d\'Al-Fatlawy.\nJe peux répondre à vos questions avec l\'IA! 🎤',
                quickReplies: ['Quels sont vos services?', 'Comment vous contacter?', 'Je veux une consultation', 'À propos de l\'entreprise', 'Partenariat international'],
                placeholder: 'Écrivez ou parlez...',
                responses: {
                    'service|offrez|proposez': 'Nos services:\n\n🔍 <b>Audit</b>\n📊 <b>Comptabilité</b>\n💰 <b>Fiscalité</b>\n🛡️ <b>Assurance</b>\n📈 <b>Conseil</b>\n👥 <b>RH</b>',
                    'contact|téléphone|adresse': '📞 <b>Téléphone:</b> 9647724596108\n📧 <b>Email:</b> info@alfatlawy-cpa.com.iq\n📍 <b>Adresse:</b> Bagdad - Al-Saydiya'
                },
                fallback: 'Désolé, je n\'ai pas bien compris votre question. Vous pouvez:\n\n• Choisir une réponse rapide ci-dessous\n• Nous contacter via WhatsApp: <a href="https://wa.me/9647724596108" target="_blank">Cliquez ici</a>'
            },
            de: {
                greeting: 'Hallo! 👋 Ich bin der intelligente Assistent von Al-Fatlawy.\nIch kann Ihre Fragen mit KI beantworten! 🎤',
                quickReplies: ['Was sind Ihre Dienstleistungen?', 'Wie kann ich Sie kontaktieren?', 'Ich möchte eine Beratung', 'Über das Unternehmen', 'Internationale Partnerschaft'],
                placeholder: 'Schreiben oder sprechen...',
                responses: {
                    'dienstleistung|angebot|service': 'Unsere Dienstleistungen:\n\n🔍 <b>Wirtschaftsprüfung</b>\n📊 <b>Buchhaltung</b>\n💰 <b>Steuerberatung</b>\n🛡️ <b>Versicherung</b>\n📈 <b>Beratung</b>\n👥 <b>Personalwesen</b>',
                    'kontakt|telefon|adresse': '📞 <b>Telefon:</b> 9647724596108\n📧 <b>E-Mail:</b> info@alfatlawy-cpa.com.iq\n📍 <b>Adresse:</b> Bagdad - Al-Saydiya'
                },
                fallback: 'Entschuldigung, ich habe Ihre Frage nicht vollständig verstanden. Sie können:\n\n• Eine Schnellantwort unten wählen\n• Uns per WhatsApp kontaktieren: <a href="https://wa.me/9647724596108" target="_blank">Hier klicken</a>'
            },
            es: {
                greeting: '¡Hola! 👋 Soy el asistente inteligente de Al-Fatlawy.\n¡Puedo responder sus preguntas con IA! 🎤',
                quickReplies: ['¿Cuáles son sus servicios?', '¿Cómo contactarlos?', 'Quiero una consulta', 'Sobre la empresa', 'Asociación internacional'],
                placeholder: 'Escriba o hable...',
                responses: {
                    'servicio|ofrecen|proporcionan': 'Nuestros servicios:\n\n🔍 <b>Auditoría</b>\n📊 <b>Contabilidad</b>\n💰 <b>Impuestos</b>\n🛡️ <b>Seguros</b>\n📈 <b>Consultoría</b>\n👥 <b>RRHH</b>',
                    'contacto|teléfono|dirección': '📞 <b>Teléfono:</b> 9647724596108\n📧 <b>Email:</b> info@alfatlawy-cpa.com.iq\n📍 <b>Dirección:</b> Bagdad - Al-Saydiya'
                },
                fallback: 'Lo siento, no entendí completamente su pregunta. Puede:\n\n• Elegir una respuesta rápida abajo\n• Contactarnos por WhatsApp: <a href="https://wa.me/9647724596108" target="_blank">Haga clic aquí</a>'
            },
            zh: {
                greeting: '你好！👋 我是Al-Fatlawy智能助手。\n我可以用AI回答您的问题！🎤',
                quickReplies: ['你们有什么服务？', '如何联系你们？', '我需要咨询', '关于公司', '国际合作'],
                placeholder: '输入或语音...',
                responses: {
                    '服务|提供什么': '我们的服务:\n\n🔍 <b>审计</b>\n📊 <b>会计</b>\n💰 <b>税务</b>\n🛡️ <b>保险</b>\n📈 <b>咨询</b>\n👥 <b>人力资源</b>',
                    '联系|电话|地址': '📞 <b>电话:</b> 9647724596108\n📧 <b>邮箱:</b> info@alfatlawy-cpa.com.iq\n📍 <b>地址:</b> 巴格达 - 塞迪耶'
                },
                fallback: '抱歉，我没有完全理解您的问题。您可以：\n\n• 选择下方的快速回复\n• 通过WhatsApp联系我们：<a href="https://wa.me/9647724596108" target="_blank">点击这里</a>'
            },
            ru: {
                greeting: 'Здравствуйте! 👋 Я умный помощник компании Аль-Фатлави.\nМогу ответить на ваши вопросы с помощью ИИ! 🎤',
                quickReplies: ['Какие у вас услуги?', 'Как связаться?', 'Нужна консультация', 'О компании', 'Международное партнёрство'],
                placeholder: 'Напишите или говорите...',
                responses: {
                    'услуг|предлагаете': 'Наши услуги:\n\n🔍 <b>Аудит</b>\n📊 <b>Бухгалтерия</b>\n💰 <b>Налоги</b>\n🛡️ <b>Страхование</b>\n📈 <b>Консалтинг</b>\n👥 <b>HR</b>',
                    'контакт|телефон|адрес': '📞 <b>Телефон:</b> 9647724596108\n📧 <b>Email:</b> info@alfatlawy-cpa.com.iq\n📍 <b>Адрес:</b> Багдад - Ас-Сайдия'
                },
                fallback: 'Извините, я не полностью понял ваш вопрос. Вы можете:\n\n• Выбрать быстрый ответ ниже\n• Связаться через WhatsApp: <a href="https://wa.me/9647724596108" target="_blank">Нажмите здесь</a>'
            }
        };

        function getChatLang() {
            var lang = currentLang || 'ar';
            return chatData[lang] ? lang : 'ar';
        }

        /* ── Add message to chat ── */
        function addMessage(text, sender, isAI) {
            var msgDiv = document.createElement('div');
            msgDiv.className = 'chat-msg ' + sender;
            var avatarHtml = sender === 'bot'
                ? '<svg width="22" height="22" viewBox="0 0 40 40" fill="none"><rect x="6" y="12" width="28" height="20" rx="6" fill="var(--accent)" opacity="0.15"/><rect x="8" y="14" width="24" height="16" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><circle cx="16" cy="22" r="2.5" fill="var(--accent)"/><circle cx="24" cy="22" r="2.5" fill="#d4a843"/><rect x="14" y="27" width="12" height="2" rx="1" fill="var(--accent)" opacity="0.4"/><circle cx="20" cy="6" r="2" fill="#d4a843"/><line x1="20" y1="8" x2="20" y2="12" stroke="#d4a843" stroke-width="1.5"/></svg>'
                : '<i class="fas fa-user"></i>';
            var bubbleClass = 'chat-bubble' + (isAI ? ' ai-response' : '');
            msgDiv.innerHTML =
                '<div class="chat-msg-avatar">' + avatarHtml + '</div>' +
                '<div class="' + bubbleClass + '">' + text.replace(/\n/g, '<br>') + '</div>';
            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            /* Speak the bot response if voice is enabled */
            if (sender === 'bot' && voiceEnabled && synth) {
                speakText(stripHtml(text));
                var bubble = msgDiv.querySelector('.chat-bubble');
                if (bubble) {
                    bubble.classList.add('speaking');
                    setTimeout(function() { bubble.classList.remove('speaking'); }, 4000);
                }
            }

            return msgDiv;
        }

        function stripHtml(html) {
            var tmp = document.createElement('div');
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || '';
        }

        /* ── Typing indicator ── */
        function showTyping() {
            var typingDiv = document.createElement('div');
            typingDiv.className = 'chat-msg bot';
            typingDiv.id = 'chatTyping';
            typingDiv.innerHTML =
                '<div class="chat-msg-avatar"><i class="fas fa-robot"></i></div>' +
                '<div class="chat-typing"><span></span><span></span><span></span></div>';
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function removeTyping() {
            var typing = document.getElementById('chatTyping');
            if (typing) typing.remove();
        }

        /* ── AI thinking indicator ── */
        function showAIThinking() {
            var thinkDiv = document.createElement('div');
            thinkDiv.className = 'chat-msg bot';
            thinkDiv.id = 'chatAIThinking';
            var lang = getChatLang();
            var label = lang === 'ar' ? 'يفكر بالذكاء الاصطناعي...' : 'AI is thinking...';
            thinkDiv.innerHTML =
                '<div class="chat-msg-avatar"><i class="fas fa-robot"></i></div>' +
                '<div class="chat-ai-typing">' +
                    '<div class="ai-thinking-dots"><span></span><span></span><span></span></div>' +
                    '<span class="ai-thinking-label">' + label + '</span>' +
                '</div>';
            chatMessages.appendChild(thinkDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function removeAIThinking() {
            var thinking = document.getElementById('chatAIThinking');
            if (thinking) thinking.remove();
        }

        /* ── Quick replies ── */
        function showQuickReplies() {
            if (!chatQuickReplies) return;
            var lang = getChatLang();
            var replies = chatData[lang].quickReplies;
            chatQuickReplies.innerHTML = '';
            replies.forEach(function(text) {
                var btn = document.createElement('button');
                btn.className = 'chat-quick-btn';
                btn.textContent = text;
                btn.addEventListener('click', function() {
                    handleUserMessage(text);
                });
                chatQuickReplies.appendChild(btn);
            });
        }

        /* ── Pattern matching (local) ── */
        function findResponse(input) {
            var lang = getChatLang();
            var data = chatData[lang];
            var lowerInput = input.toLowerCase();

            var keys = Object.keys(data.responses);
            for (var i = 0; i < keys.length; i++) {
                var patterns = keys[i].split('|');
                for (var j = 0; j < patterns.length; j++) {
                    if (lowerInput.indexOf(patterns[j].toLowerCase()) !== -1) {
                        return data.responses[keys[i]];
                    }
                }
            }
            return null; /* Return null instead of fallback to trigger AI */
        }

        /* ── Gemini AI response (REST API) ── */
        async function getAIResponse(userMessage) {
            try {
                /* Add page context to help AI be aware of current page */
                var pageTitle = document.title || '';
                var pageHint = pageTitle ? '\n[المستخدم حالياً في صفحة: ' + pageTitle + ']' : '';

                /* Add user message to history */
                geminiHistory.push({ role: 'user', parts: [{ text: userMessage + pageHint }] });

                var url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + GEMINI_API_KEY;
                var response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: geminiHistory,
                        generationConfig: {
                            temperature: 0.75,
                            maxOutputTokens: 1500,
                            topP: 0.92,
                            topK: 40
                        },
                        safetySettings: [
                            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
                            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
                            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
                            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }
                        ]
                    })
                });

                if (!response.ok) {
                    geminiHistory.pop(); /* Remove failed message from history */
                    return null;
                }

                var data = await response.json();
                var text = data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] ? data.candidates[0].content.parts[0].text : null;

                if (text) {
                    /* Add bot response to history */
                    geminiHistory.push({ role: 'model', parts: [{ text: text }] });
                    /* Keep history manageable (max 30 turns) */
                    if (geminiHistory.length > 32) {
                        geminiHistory = geminiHistory.slice(0, 2).concat(geminiHistory.slice(-28));
                    }
                    /* Clean markdown to HTML */
                    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
                    text = text.replace(/\*(.*?)\*/g, '<i>$1</i>');
                    text = text.replace(/\n- /g, '\n• ');
                    text = text.replace(/```[\s\S]*?```/g, '');
                    return text;
                }
                geminiHistory.pop();
                return null;
            } catch (e) {
                /* Remove failed message */
                if (geminiHistory.length > 2 && geminiHistory[geminiHistory.length - 1].role === 'user') {
                    geminiHistory.pop();
                }
                return null;
            }
        }

        /* ── Main message handler ── */
        async function handleUserMessage(text) {
            if (!text.trim()) return;
            addMessage(text, 'user', false);
            chatInput.value = '';

            /* First try pattern matching */
            var localResponse = findResponse(text);

            if (localResponse) {
                /* Use local response with typing delay */
                showTyping();
                setTimeout(function() {
                    removeTyping();
                    addMessage(localResponse, 'bot', false);
                    showQuickReplies();
                }, 800 + Math.random() * 600);
            } else if (GEMINI_API_KEY && geminiHistory.length > 0) {
                /* Use Gemini AI */
                showAIThinking();
                var aiResponse = await getAIResponse(text);
                removeAIThinking();
                if (aiResponse) {
                    addMessage(aiResponse, 'bot', true);
                } else {
                    /* AI failed, use local fallback */
                    var lang = getChatLang();
                    addMessage(chatData[lang].fallback, 'bot', false);
                }
                showQuickReplies();
            } else {
                /* No AI available, use local fallback */
                showTyping();
                setTimeout(function() {
                    removeTyping();
                    var lang = getChatLang();
                    addMessage(chatData[lang].fallback, 'bot', false);
                    showQuickReplies();
                }, 800 + Math.random() * 600);
            }
        }

        /* ═══════════════════════════════════════
           VOICE ASSISTANT — Speech Recognition
           ═══════════════════════════════════════ */
        function initSpeechRecognition() {
            var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                if (chatMic) chatMic.style.display = 'none';
                return;
            }

            recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.maxAlternatives = 1;

            recognition.onstart = function() {
                isListening = true;
                if (chatMic) chatMic.classList.add('listening');
                if (chatListeningBar) chatListeningBar.classList.add('active');
                chatInput.value = '';
                chatInput.placeholder = getChatLang() === 'ar' ? 'جارٍ الاستماع...' : 'Listening...';
            };

            recognition.onresult = function(event) {
                var transcript = '';
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    transcript += event.results[i][0].transcript;
                }
                chatInput.value = transcript;
            };

            recognition.onend = function() {
                isListening = false;
                if (chatMic) chatMic.classList.remove('listening');
                if (chatListeningBar) chatListeningBar.classList.remove('active');
                var lang = getChatLang();
                chatInput.placeholder = chatData[lang].placeholder;

                /* Auto-send if we have text */
                var finalText = chatInput.value.trim();
                if (finalText) {
                    handleUserMessage(finalText);
                }
            };

            recognition.onerror = function(event) {
                isListening = false;
                if (chatMic) chatMic.classList.remove('listening');
                if (chatListeningBar) chatListeningBar.classList.remove('active');
                var lang = getChatLang();
                chatInput.placeholder = chatData[lang].placeholder;

                if (event.error === 'not-allowed') {
                    var msg = lang === 'ar'
                        ? '⚠️ يرجى السماح بالوصول إلى الميكروفون من إعدادات المتصفح لاستخدام المساعد الصوتي.'
                        : '⚠️ Please allow microphone access in your browser settings to use voice assistant.';
                    addMessage(msg, 'bot', false);
                }
            };
        }

        function startListening() {
            if (!recognition) return;
            /* Stop any ongoing speech */
            if (synth && synth.speaking) synth.cancel();

            /* Map all languages to speech recognition locale */
            var langMap = {
                ar: 'ar-IQ', en: 'en-US', ku: 'ar-IQ', tr: 'tr-TR',
                fa: 'fa-IR', fr: 'fr-FR', de: 'de-DE', es: 'es-ES',
                zh: 'zh-CN', ru: 'ru-RU'
            };
            var lang = getChatLang();
            recognition.lang = langMap[lang] || 'ar-IQ';
            try {
                recognition.start();
            } catch (e) {
                /* Already started, ignore */
            }
        }

        function stopListening() {
            if (recognition && isListening) {
                recognition.stop();
            }
        }

        /* ═══════════════════════════════════════
           VOICE ASSISTANT — Speech Synthesis (TTS)
           Multi-language with Arabic chunking
           ═══════════════════════════════════════ */
        var cachedVoices = [];
        var voicesReady = false;

        /* Language to TTS locale mapping */
        var ttsLangMap = {
            ar: ['ar-SA', 'ar-IQ', 'ar-EG', 'ar-AE', 'ar'],
            en: ['en-US', 'en-GB', 'en-AU', 'en'],
            ku: ['ar-IQ', 'ar-SA', 'ar'],
            tr: ['tr-TR', 'tr'],
            fa: ['fa-IR', 'fa', 'ar-SA', 'ar'],
            fr: ['fr-FR', 'fr-CA', 'fr'],
            de: ['de-DE', 'de-AT', 'de'],
            es: ['es-ES', 'es-MX', 'es-US', 'es'],
            zh: ['zh-CN', 'zh-TW', 'zh-HK', 'zh'],
            ru: ['ru-RU', 'ru']
        };

        function loadVoices() {
            if (!synth) return;
            var v = synth.getVoices();
            if (v && v.length > 0) {
                cachedVoices = v;
                voicesReady = true;
            }
        }

        /* Wait for voices to be available, then run callback */
        function ensureVoices(callback) {
            if (voicesReady && cachedVoices.length > 0) {
                callback();
                return;
            }
            loadVoices();
            if (cachedVoices.length > 0) {
                callback();
                return;
            }
            /* Voices not loaded yet — wait for them (Chrome async) */
            var waited = 0;
            var voiceWaitInterval = setInterval(function() {
                loadVoices();
                waited += 50;
                if (cachedVoices.length > 0 || waited > 2000) {
                    clearInterval(voiceWaitInterval);
                    callback();
                }
            }, 50);
        }

        function findBestVoice(voices, lang) {
            var preferred = ttsLangMap[lang] || ttsLangMap.en;
            for (var p = 0; p < preferred.length; p++) {
                for (var i = 0; i < voices.length; i++) {
                    if (voices[i].lang === preferred[p]) return voices[i];
                }
            }
            /* Fallback: partial match */
            var prefix = preferred[0].split('-')[0];
            for (var i = 0; i < voices.length; i++) {
                if (voices[i].lang.startsWith(prefix)) return voices[i];
            }
            return null;
        }

        /* Split long text into chunks for reliable TTS (Chrome bug fix) */
        function splitTextForTTS(text, maxLen) {
            maxLen = maxLen || 160;
            if (text.length <= maxLen) return [text];

            var chunks = [];
            /* Split by sentence-ending punctuation */
            var sentences = text.split(/([.!?،؟。！？\n]+\s*)/);
            /* Rejoin punctuation with preceding sentence */
            var merged = [];
            for (var i = 0; i < sentences.length; i++) {
                if (i % 2 === 0) {
                    merged.push(sentences[i] + (sentences[i + 1] || ''));
                }
            }

            var current = '';
            for (var i = 0; i < merged.length; i++) {
                var s = merged[i].trim();
                if (!s) continue;
                if ((current + ' ' + s).length > maxLen && current.length > 0) {
                    chunks.push(current.trim());
                    current = s;
                } else {
                    current = current ? current + ' ' + s : s;
                }
            }
            if (current.trim()) chunks.push(current.trim());

            /* If no splits happened (no punctuation), force split by words */
            if (chunks.length === 0 && text.length > maxLen) {
                var words = text.split(/\s+/);
                current = '';
                for (var i = 0; i < words.length; i++) {
                    if ((current + ' ' + words[i]).length > maxLen && current.length > 0) {
                        chunks.push(current.trim());
                        current = words[i];
                    } else {
                        current = current ? current + ' ' + words[i] : words[i];
                    }
                }
                if (current.trim()) chunks.push(current.trim());
            }

            return chunks.length > 0 ? chunks : [text];
        }

        var speakQueue = [];
        var isSpeaking = false;
        var speakTimer = null;

        function speakText(text) {
            if (!synth || !voiceEnabled) return;

            /* Cancel any ongoing speech */
            synth.cancel();
            clearTimeout(speakTimer);
            speakQueue = [];
            isSpeaking = false;

            var lang = getChatLang();
            var chunks = splitTextForTTS(text);
            speakQueue = chunks.slice();

            /* Wait for voices then start speaking with delay after cancel */
            ensureVoices(function() {
                speakTimer = setTimeout(function() {
                    synth.resume(); /* Ensure synth is not paused */
                    speakNextChunk(lang);
                }, 200);
            });
        }

        function speakNextChunk(lang) {
            if (speakQueue.length === 0) {
                isSpeaking = false;
                return;
            }
            isSpeaking = true;
            var chunk = speakQueue.shift();
            var utterance = new SpeechSynthesisUtterance(chunk);

            /* Set language properties */
            var defaultLang = (ttsLangMap[lang] && ttsLangMap[lang][0]) || 'ar-SA';
            utterance.lang = defaultLang;

            /* Adjust rate per language for clarity */
            var rateMap = { ar: 0.88, ku: 0.88, fa: 0.88, en: 0.95, tr: 0.92, fr: 0.92, de: 0.92, es: 0.93, zh: 0.85, ru: 0.92 };
            utterance.rate = rateMap[lang] || 0.92;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;

            /* Find the best voice */
            var bestVoice = findBestVoice(cachedVoices, lang);
            if (bestVoice) {
                utterance.voice = bestVoice;
                utterance.lang = bestVoice.lang;
            }

            /* Chrome workaround: resume speech synthesis periodically to prevent pause */
            var resumeInterval = setInterval(function() {
                if (!synth.speaking) {
                    clearInterval(resumeInterval);
                } else {
                    synth.resume();
                }
            }, 3000);

            /* Chain next chunk on end */
            utterance.onend = function() {
                clearInterval(resumeInterval);
                setTimeout(function() { speakNextChunk(lang); }, 100);
            };
            utterance.onerror = function(e) {
                clearInterval(resumeInterval);
                if (e.error !== 'interrupted' && e.error !== 'canceled') {
                    setTimeout(function() { speakNextChunk(lang); }, 100);
                }
            };

            /* Ensure synth is active before speaking */
            synth.resume();
            synth.speak(utterance);
        }

        /* Stop speaking */
        function stopSpeaking() {
            if (synth) synth.cancel();
            clearTimeout(speakTimer);
            speakQueue = [];
            isSpeaking = false;
        }

        /* Load voices (they load async in some browsers) */
        if (synth) {
            loadVoices();
            synth.onvoiceschanged = function() { loadVoices(); };
        }

        /* ═══════════════════════════════════════
           EVENT LISTENERS
           ═══════════════════════════════════════ */

        /* Mic button */
        if (chatMic) {
            chatMic.addEventListener('click', function() {
                if (isListening) {
                    stopListening();
                } else {
                    startListening();
                }
            });
        }

        /* Stop listening button */
        if (chatMicStop) {
            chatMicStop.addEventListener('click', function() {
                stopListening();
            });
        }

        /* Voice toggle (TTS on/off) */
        if (chatVoiceToggle) {
            chatVoiceToggle.addEventListener('click', function() {
                voiceEnabled = !voiceEnabled;
                chatVoiceToggle.classList.toggle('active', voiceEnabled);
                var icon = chatVoiceToggle.querySelector('i');
                if (icon) {
                    icon.className = voiceEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
                }
                if (!voiceEnabled && synth && synth.speaking) {
                    stopSpeaking();
                }
            });
            /* Set initial state */
            chatVoiceToggle.classList.add('active');
        }

        /* Toggle chat open/close */
        chatToggle.addEventListener('click', function() {
            chatOpen = !chatOpen;
            chatToggle.classList.toggle('active', chatOpen);
            chatPanel.classList.toggle('open', chatOpen);
            if (chatOpen && firstOpen) {
                firstOpen = false;
                /* Warm up speech synthesis — Chrome requires a speak() call during user gesture */
                if (synth) {
                    try {
                        var warmUp = new SpeechSynthesisUtterance('');
                        warmUp.volume = 0;
                        synth.speak(warmUp);
                    } catch(e) {}
                    /* Force voice loading */
                    loadVoices();
                }
                var lang = getChatLang();
                addMessage(chatData[lang].greeting, 'bot', false);
                showQuickReplies();
            }
            if (chatOpen) chatInput.focus();
        });

        /* Close button */
        if (chatClose) {
            chatClose.addEventListener('click', function() {
                chatOpen = false;
                chatToggle.classList.remove('active');
                chatPanel.classList.remove('open');
                if (isListening) stopListening();
                stopSpeaking();
            });
        }

        /* Send button */
        if (chatSend) {
            chatSend.addEventListener('click', function() {
                handleUserMessage(chatInput.value);
            });
        }

        /* Enter key */
        if (chatInput) {
            chatInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleUserMessage(chatInput.value);
                }
            });
        }

        /* Initialize speech recognition */
        initSpeechRecognition();
    }

    /* ===== Scroll Progress Bar ===== */
    (function() {
        var bar = document.createElement('div');
        bar.className = 'scroll-progress';
        bar.style.width = '0%';
        document.body.appendChild(bar);

        window.addEventListener('scroll', function() {
            var scrolled = window.scrollY;
            var height = document.documentElement.scrollHeight - window.innerHeight;
            var pct = height > 0 ? (scrolled / height) * 100 : 0;
            bar.style.width = pct + '%';
        });
    })();

    /* ===== Page Reader — Reads visible page content aloud ===== */
    (function() {
        var synth = window.speechSynthesis;
        if (!synth) return;

        var btn = document.createElement('button');
        btn.className = 'page-reader-btn';
        btn.innerHTML = '<i class="fas fa-book-reader"></i>';
        btn.title = 'اقرأ المحتوى بصوت عالٍ';
        btn.setAttribute('aria-label', 'قراءة الصفحة');
        document.body.appendChild(btn);

        var isReading = false;
        var readerQueue = [];

        /* Show after scroll */
        window.addEventListener('scroll', function() {
            btn.classList.toggle('visible', window.scrollY > 300);
        });

        function getPageText() {
            var selectors = 'h1, h2, h3, h4, p, .stat-label, .stat-number, li';
            var els = document.querySelectorAll(selectors);
            var texts = [];
            els.forEach(function(el) {
                /* Skip hidden, footer, chat, and nav elements */
                if (el.closest('.chat-panel, .chat-msg, footer, nav, .main-nav, script, style')) return;
                if (el.offsetParent === null) return;
                var txt = (el.textContent || '').trim();
                if (txt.length > 2 && txt.length < 500) texts.push(txt);
            });
            /* Deduplicate consecutive */
            var unique = [];
            for (var i = 0; i < texts.length; i++) {
                if (texts[i] !== texts[i - 1]) unique.push(texts[i]);
            }
            return unique;
        }

        function readPage() {
            if (isReading) {
                synth.cancel();
                readerQueue = [];
                isReading = false;
                btn.classList.remove('reading');
                return;
            }

            var texts = getPageText();
            if (texts.length === 0) return;

            isReading = true;
            btn.classList.add('reading');

            /* Warm up and ensure voices */
            try {
                var warmUp = new SpeechSynthesisUtterance('');
                warmUp.volume = 0;
                synth.speak(warmUp);
            } catch(e) {}

            readerQueue = texts.slice();
            /* Delay after cancel for Chrome + ensure voices loaded */
            setTimeout(function() {
                synth.resume();
                readNextChunk();
            }, 250);
        }

        function readNextChunk() {
            if (readerQueue.length === 0 || !isReading) {
                isReading = false;
                btn.classList.remove('reading');
                return;
            }

            var text = readerQueue.shift();
            var utter = new SpeechSynthesisUtterance(text);

            /* Use current language voice */
            var lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : 'ar';
            var ttsMap = {
                ar: ['ar-SA', 'ar-IQ', 'ar-EG', 'ar-AE', 'ar'],
                en: ['en-US', 'en-GB', 'en'],
                ku: ['ar-IQ', 'ar-SA', 'ar'],
                tr: ['tr-TR', 'tr'],
                fa: ['fa-IR', 'fa', 'ar-SA'],
                fr: ['fr-FR', 'fr'],
                de: ['de-DE', 'de'],
                es: ['es-ES', 'es'],
                zh: ['zh-CN', 'zh'],
                ru: ['ru-RU', 'ru']
            };
            var preferred = ttsMap[lang] || ttsMap.ar;
            var voices = synth.getVoices();
            var bestVoice = null;

            /* Exact match */
            for (var p = 0; p < preferred.length; p++) {
                for (var v = 0; v < voices.length; v++) {
                    if (voices[v].lang === preferred[p]) { bestVoice = voices[v]; break; }
                }
                if (bestVoice) break;
            }
            /* Prefix fallback */
            if (!bestVoice) {
                var prefix = preferred[0].split('-')[0];
                for (var v = 0; v < voices.length; v++) {
                    if (voices[v].lang.startsWith(prefix)) { bestVoice = voices[v]; break; }
                }
            }

            if (bestVoice) {
                utter.voice = bestVoice;
                utter.lang = bestVoice.lang;
            } else {
                utter.lang = preferred[0] || 'ar-SA';
            }
            utter.rate = 0.88;
            utter.pitch = 1.0;
            utter.volume = 1.0;

            /* Chrome workaround: keep speech synthesis alive */
            var keepAlive = setInterval(function() {
                if (!synth.speaking) clearInterval(keepAlive);
                else synth.resume();
            }, 3000);

            utter.onend = function() {
                clearInterval(keepAlive);
                setTimeout(function() { readNextChunk(); }, 120);
            };
            utter.onerror = function(e) {
                clearInterval(keepAlive);
                if (e.error !== 'interrupted' && e.error !== 'canceled') {
                    setTimeout(function() { readNextChunk(); }, 120);
                }
            };

            synth.resume();
            synth.speak(utter);
        }

        btn.addEventListener('click', readPage);
    })();

});
