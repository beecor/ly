(function() {
    // EmailJS 配置（您已提供）
    const EMAILJS_PUBLIC_KEY = "V2CKInUpTGDcDecgy";
    const EMAILJS_SERVICE_ID = "service_c8wh567";
    const EMAILJS_TEMPLATE_ID = "template_jh5s1nt";

    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    // 公共多语言资源（导航栏、页脚等）
    const commonLocales = {
        en: {
            home: "Home",
            mobileStorage: "Mobile ESS",
            fixedStorage: "Fixed ESS",
            packSeries: "PACK Series",
            mobileSmall: "Small Power Station (241/418kWh)",
            mobileMedium: "Medium Power Station (627-1672kWh)",
            mobileLarge: "Large Power Station (1881-2090kWh)",
            mobileUltra: "Ultra-large Power Station (R&D)",
            mobileACDC: "AC/DC Supply for Excavator",
            fixed1: "Residential ESS (8kW/20kWh, 20kW/40kWh)",
            fixed2: "PV-ESS Integrated (50kW/128kWh)",
            fixed3: "Outdoor Cabinet (125kW/261kWh)",
            fixed4: "Outdoor Cabinet (209kW/418kWh)",
            fixed5: "Liquid-cooled Container (3.72MWh)",
            fixed6: "Liquid-cooled Container (5MWh)",
            fixed7: "Customized Solution",
            pack1: "Liquid-cooled PACK 280Ah (43kWh)",
            pack2: "Liquid-cooled PACK 314Ah (52.25kWh)",
            pack3: "Fast-charge PACK 206Ah",
            pack4: "Storage PACK 280Ah (14.336kWh)",
            footerText: "© 2025 liayang | Henan liayang Trading Co., Ltd. | Tel: +86 371 55919895 | Email: beecor@outlook.com",
            contactTitle: "Contact Us", contactPhone: "0371-55919895", contactEmail: "beecor@outlook.com",
            contactAddress: "No.246, Daxue South Road, Zhengzhou, Henan, China", contactMobile: "+86 13383710735",
            formTitle: "Quick Inquiry", submitBtnText: "Send", sending: "Sending...",
            successMsg: "Thank you! We'll contact you soon.", errorMsg: "Failed. Please try again."
        },
        zh: {
            home: "首页",
            mobileStorage: "移动储能",
            fixedStorage: "固定储能",
            packSeries: "PACK系列",
            mobileSmall: "小型电源车 (241/418kWh)",
            mobileMedium: "中型电源车 (627-1672kWh)",
            mobileLarge: "大型电源车 (1881-2090kWh)",
            mobileUltra: "超大型电源车 (研发)",
            mobileACDC: "交直流供电车 (拖电挖机)",
            fixed1: "户储系列 (8kW/20kWh, 20kW/40kWh)",
            fixed2: "光储一体机 (50kW/128kWh)",
            fixed3: "户外储能柜 (125kW/261kWh)",
            fixed4: "户外储能柜 (209kW/418kWh)",
            fixed5: "液冷储能集装箱 (3.72MWh)",
            fixed6: "液冷储能集装箱 (5MWh)",
            fixed7: "定制化方案",
            pack1: "储能液冷PACK 280Ah (43kWh)",
            pack2: "储能液冷PACK 314Ah (52.25kWh)",
            pack3: "工程机械快充PACK 206Ah",
            pack4: "储能PACK 280Ah (14.336kWh)",
            footerText: "© 2025 俩羊 | 河南俩羊商贸有限公司 | 电话：0371-55919895 | 邮箱：beecor@outlook.com",
            contactTitle: "联系我们", contactPhone: "0371-55919895", contactEmail: "beecor@outlook.com",
            contactAddress: "中国 河南郑州市大学南路246号", contactMobile: "13383710735",
            formTitle: "快速咨询", submitBtnText: "发送咨询", sending: "发送中...",
            successMsg: "感谢咨询，我们会尽快联系您！", errorMsg: "发送失败，请稍后重试。"
        },
        ar: {
            home: "الصفحة الرئيسية",
            mobileStorage: "تخزين متنقل",
            fixedStorage: "تخزين ثابت",
            packSeries: "سلسلة PACK",
            mobileSmall: "محطة طاقة صغيرة (241/418 كيلوواط/ساعة)",
            mobileMedium: "محطة طاقة متوسطة (627-1672 كيلوواط/ساعة)",
            mobileLarge: "محطة طاقة كبيرة (1881-2090 كيلوواط/ساعة)",
            mobileUltra: "محطة طاقة فائقة الضخامة (بحث وتطوير)",
            mobileACDC: "AC/DC للحفارات",
            fixed1: "تخزين سكني (8kW/20kWh, 20kW/40kWh)",
            fixed2: "آلة متكاملة PV-ESS (50kW/128kWh)",
            fixed3: "خزانة خارجية (125kW/261kWh)",
            fixed4: "خزانة خارجية (209kW/418kWh)",
            fixed5: "حاوية تخزين سائلة (3.72MWh)",
            fixed6: "حاوية تخزين سائلة (5MWh)",
            fixed7: "حل مخصص",
            pack1: "حزمة تخزين مبردة 280Ah (43kWh)",
            pack2: "حزمة تخزين مبردة 314Ah (52.25kWh)",
            pack3: "حزمة شحن سريع 206Ah",
            pack4: "حزمة تخزين 280Ah (14.336kWh)",
            footerText: "© 2025 ليايانغ | Henan liayang Trading Co., Ltd. | هاتف: +86 371 55919895 | بريد: beecor@outlook.com",
            contactTitle: "اتصل بنا", contactPhone: "0371-55919895", contactEmail: "beecor@outlook.com",
            contactAddress: "رقم 246، طريق داشوي الجنوبي، تشنغتشو، خنان، الصين", contactMobile: "+86 13383710735",
            formTitle: "استفسار سريع", submitBtnText: "إرسال", sending: "جاري الإرسال...",
            successMsg: "شكراً، سنتصل بك قريباً.", errorMsg: "فشل الإرسال. حاول مرة أخرى."
        }
    };

    let currentLang = localStorage.getItem('desert_power_lang') || 'zh';
    let pageUpdaters = [];

    async function loadComponent(selector, url) {
        const resp = await fetch(url);
        const html = await resp.text();
        document.querySelector(selector).innerHTML = html;
    }

    function updateCommonUI(lang) {
        const loc = commonLocales[lang];
        if (!loc) return;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (loc[key]) el.innerText = loc[key];
        });
        const footerP = document.querySelector('.footer p');
        if (footerP) footerP.innerText = loc.footerText;
        document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }

    async function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('desert_power_lang', lang);
        updateCommonUI(lang);
        pageUpdaters.forEach(cb => cb(lang));
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    // 暴露全局 API
    window.DesertPower = {
        setLanguage,
        onLanguageChange: (cb) => { pageUpdaters.push(cb); cb(currentLang); },
        getCurrentLang: () => currentLang,
        emailjs: { serviceId: EMAILJS_SERVICE_ID, templateId: EMAILJS_TEMPLATE_ID }
    };

    async function initComponents() {
        await loadComponent('#header-placeholder', 'components/header.html');
        await loadComponent('#footer-placeholder', 'components/footer.html');
        
        // 绑定语言按钮
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
        });
        
        // 移动端下拉菜单：点击展开/收起（所有设备统一使用点击，无 hover 冲突）
        document.querySelectorAll('.products-dropdown').forEach(dropdown => {
            const btn = dropdown.querySelector('.dropbtn');
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // 关闭其他所有下拉
                    document.querySelectorAll('.products-dropdown').forEach(d => {
                        if (d !== dropdown) d.classList.remove('active');
                    });
                    dropdown.classList.toggle('active');
                });
            }
        });
        // 点击页面其他地方关闭所有下拉
        document.addEventListener('click', () => {
            document.querySelectorAll('.products-dropdown').forEach(d => d.classList.remove('active'));
        });
        
        updateCommonUI(currentLang);
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === currentLang) btn.classList.add('active');
        });
    }

    initComponents();
})();