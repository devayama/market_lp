// Multi-language translations
const translations = {
    en: {
        "nav.about": "About Group",
        "nav.locations": "Locations",
        "nav.inquiry": "Group Inquiry",
        "nav.contact": "Contact",
        "hero.title": "World-Class Orthodontics in Japan",
        "hero.subtitle1": "One Philosophy. Five Major Cities.",
        "hero.subtitle2": "Find the M&Associates specialist nearest to you.",
        "hero.selectCity": "Select a City...",
        "hero.goButton": "Go »",
        "locations.title": "Select Your Clinic",
        "locations.subtitle": "Direct access to our regional specialist sites.",
        "locations.viewSite": "View Site →",
        "about.title": "The M&Associates Standard",
        "about.protocol.title": "Unified Protocol:",
        "about.protocol.text": "Regardless of which city you visit, our digital records and treatment protocols are standardized across the group.",
        "about.transfer.title": "Transfer Support:",
        "about.transfer.text": "Moving from Tokyo to Osaka? Your treatment continues seamlessly. We share patient data securely within our private network.",
        "about.findClinic": "Find Your Clinic",
        "contact.title": "Group Inquiries",
        "contact.description": "For B2B partnerships, recruitment, or media inquiries regarding the M&Associates group.",
        "contact.note": "*For patient appointments, please select a specific clinic above.",
        "contact.formTitle": "Contact Head Office",
        "contact.placeholders.name": "Company / Name",
        "contact.placeholders.email": "Email Address",
        "contact.placeholders.message": "How can we help?",
        "contact.sendButton": "Send Message",
        "footer.groupName": "Japan Orthodontic Group",
        "footer.headquarters": "Headquarters",
        "footer.links": "Links"
    },
    ja: {
        "nav.about": "グループについて",
        "nav.locations": "医院一覧",
        "nav.inquiry": "グループお問い合わせ",
        "nav.contact": "お問い合わせ",
        "hero.title": "日本の世界水準矯正歯科",
        "hero.subtitle1": "統一された理念、5つの主要都市",
        "hero.subtitle2": "お近くのM&Associates専門医を見つけましょう",
        "hero.selectCity": "都市を選択...",
        "hero.goButton": "移動 »",
        "locations.title": "医院を選択",
        "locations.subtitle": "各地域の専門医サイトへ直接アクセス",
        "locations.viewSite": "サイトを見る →",
        "about.title": "M&Associatesスタンダード",
        "about.protocol.title": "統一プロトコル:",
        "about.protocol.text": "どの都市を訪れても、デジタル記録と治療プロトコルはグループ全体で標準化されています。",
        "about.transfer.title": "転院サポート:",
        "about.transfer.text": "東京から大阪へ移動？治療はシームレスに続きます。プライベートネットワーク内で患者データを安全に共有します。",
        "about.findClinic": "医院を探す",
        "contact.title": "グループへのお問い合わせ",
        "contact.description": "M&Associatesグループに関するB2Bパートナーシップ、採用、メディア取材について。",
        "contact.note": "*患者様の予約は、上記の各医院をお選びください。",
        "contact.formTitle": "本部へのお問い合わせ",
        "contact.placeholders.name": "会社名 / お名前",
        "contact.placeholders.email": "メールアドレス",
        "contact.placeholders.message": "どのようなご用件でしょうか？",
        "contact.sendButton": "メッセージを送信",
        "footer.groupName": "日本矯正歯科グループ",
        "footer.headquarters": "本部",
        "footer.links": "リンク"
    },
    zh: {
        "nav.about": "关于集团",
        "nav.locations": "医院地点",
        "nav.inquiry": "集团咨询",
        "nav.contact": "联系我们",
        "hero.title": "日本的世界级正畸医疗",
        "hero.subtitle1": "统一理念，五大主要城市",
        "hero.subtitle2": "找到离您最近的M&Associates专科医生",
        "hero.selectCity": "选择城市...",
        "hero.goButton": "前往 »",
        "locations.title": "选择您的诊所",
        "locations.subtitle": "直接访问我们的区域专科医院网站",
        "locations.viewSite": "查看网站 →",
        "about.title": "M&Associates标准",
        "about.protocol.title": "统一协议：",
        "about.protocol.text": "无论您访问哪个城市，我们的数字记录和治疗协议在整个集团中都是标准化的。",
        "about.transfer.title": "转院支持：",
        "about.transfer.text": "从东京搬到大阪？您的治疗将无缝继续。我们在私人网络中安全地共享患者数据。",
        "about.findClinic": "查找您的诊所",
        "contact.title": "集团咨询",
        "contact.description": "关于M&Associates集团的B2B合作、招聘或媒体咨询。",
        "contact.note": "*患者预约，请选择上述具体诊所。",
        "contact.formTitle": "联系总部",
        "contact.placeholders.name": "公司 / 姓名",
        "contact.placeholders.email": "电子邮件地址",
        "contact.placeholders.message": "我们能帮您什么？",
        "contact.sendButton": "发送消息",
        "footer.groupName": "日本正畸集团",
        "footer.headquarters": "总部",
        "footer.links": "链接"
    }
};

// =========================================
// --- MULTI-LANGUAGE ENGINE ---
// =========================================

let currentLang = localStorage.getItem('preferredLang') || 'ja';

function updateLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    document.querySelectorAll('[data-lang-content]').forEach(block => {
        if (block.getAttribute('data-lang-content') === lang) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });

    // Update flag display (desktop)
    const currentFlag = document.getElementById('currentFlag');
    const currentLabel = document.getElementById('currentLangLabel');
    if (currentFlag && currentLabel) {
        if (lang === 'en') {
            currentFlag.src = "https://flagcdn.com/w40/us.png";
            currentLabel.textContent = "English";
        } else if (lang === 'ja') {
            currentFlag.src = "https://flagcdn.com/w40/jp.png";
            currentLabel.textContent = "日本語";
        } else if (lang === 'zh') {
            currentFlag.src = "https://flagcdn.com/w40/cn.png";
            currentLabel.textContent = "中文";
        }
    }

    // Update flag display (mobile)
    const currentFlagMobile = document.getElementById('currentFlagMobile');
    const currentLabelMobile = document.getElementById('currentLangLabelMobile');
    if (currentFlagMobile && currentLabelMobile) {
        if (lang === 'en') {
            currentFlagMobile.src = "https://flagcdn.com/w40/us.png";
            currentLabelMobile.textContent = "English";
        } else if (lang === 'ja') {
            currentFlagMobile.src = "https://flagcdn.com/w40/jp.png";
            currentLabelMobile.textContent = "日本語";
        } else if (lang === 'zh') {
            currentFlagMobile.src = "https://flagcdn.com/w40/cn.png";
            currentLabelMobile.textContent = "中文";
        }
    }

    localStorage.setItem('preferredLang', lang);
    currentLang = lang;
}

// Alias for backward compatibility
function changeLanguage(lang) {
    updateLanguage(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);

    // Desktop language options
    document.querySelectorAll('.lang-option:not(.mobile-lang-option)').forEach(option => {
        option.addEventListener('click', () => {
            updateLanguage(option.getAttribute('data-lang'));
        });
    });

    // Mobile language options (with menu close)
    document.querySelectorAll('.mobile-lang-option').forEach(option => {
        option.addEventListener('click', () => {
            updateLanguage(option.getAttribute('data-lang'));
            toggleMobileMenu();
        });
    });
});

// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("menu-open");
}

// Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
});
document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

// Redirect Logic for the Hero Dropdown
function redirectToClinic(e) {
    e.preventDefault();
    const selectBox = document.getElementById('clinicSelector');
    const selectedValue = selectBox.value;
    
    if (selectedValue) {
        window.location.href = selectedValue;
    } else {
        const alertMessages = {
            en: "Please select a city.",
            ja: "都市を選択してください。",
            zh: "请选择一个城市。"
        };
        alert(alertMessages[currentLang] || alertMessages.en);
    }
}
