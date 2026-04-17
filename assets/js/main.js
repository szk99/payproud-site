const NAV_ITEMS = [
  { href: "index.html", key: "home" },
  { href: "about.html", key: "about" },
  { href: "product.html", key: "product" },
  { href: "company.html", key: "company" },
  { href: "contact.html", key: "contact" },
  { href: "privacy.html", key: "privacy" },
  { href: "terms.html", key: "terms" },
];

const CONTACT_EMAIL = "976707022@qq.com";
const LOCALES = {
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      product: "产品介绍",
      company: "企业信息",
      contact: "联系我们",
      privacy: "隐私政策",
      terms: "服务条款",
    },
    companyName: "问猩信息技术有限公司",
    companyNameShort: "问猩信息",
    companyTagline: "Wenxing Information",
    brandIconAlt: "问猩信息图标",
    siteBadge: "中文站点",
    switchLabel: "English",
    switchAria: "切换到英文站点",
    contactButton: "联系我们",
    mobileCurrent: "当前为中文站点",
    mobileLanguageLabel: "切换语言",
    openMenuAria: "打开导航菜单",
    closeMenuAria: "关闭导航菜单",
    footerDescription: "年轻、富有创造力的软件与数字化产品公司",
    footerQuickLinks: "快速链接",
    footerLegal: "法律信息",
    footerEmail: "邮箱",
    footerWebsite: "官网",
    footerCopyright: "© 2026 问猩信息技术有限公司。All rights reserved.",
    footerProduct: "产品：问薪无愧 / PayProud",
    contactFormButton: "通过邮箱发送",
    contactFormSending: "正在唤起邮箱...",
    contactFormOpened: `已尝试打开本地邮箱应用。如未自动打开，请直接发送邮件至 ${CONTACT_EMAIL}。`,
    contactMailSubjectPrefix: "[官网留言]",
    mailBodyLabels: {
      name: "姓名",
      email: "邮箱",
      message: "内容",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      product: "Product",
      company: "Company",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
    },
    companyName: "Wenxing Information Technology Co., Ltd.",
    companyNameShort: "Wenxing",
    companyTagline: "Digital Product Studio",
    brandIconAlt: "Wenxing Information icon",
    siteBadge: "English Site",
    switchLabel: "中文",
    switchAria: "Switch to Chinese site",
    contactButton: "Contact",
    mobileCurrent: "You are viewing the English site",
    mobileLanguageLabel: "Language",
    openMenuAria: "Open navigation menu",
    closeMenuAria: "Close navigation menu",
    footerDescription: "A young and creative software and digital product company",
    footerQuickLinks: "Quick Links",
    footerLegal: "Legal",
    footerEmail: "Email",
    footerWebsite: "Website",
    footerCopyright: "© 2026 Wenxing Information Technology Co., Ltd. All rights reserved.",
    footerProduct: "Product: PayProud / Wenxin Wukui",
    contactFormButton: "Send via Email",
    contactFormSending: "Opening your email app...",
    contactFormOpened: `We tried to open your local email app. If nothing happens, please email ${CONTACT_EMAIL} directly.`,
    contactMailSubjectPrefix: "[Website Inquiry]",
    mailBodyLabels: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  injectShell();
  initHeaderInteractions();
  initContactForm();
});

function getLocale() {
  return document.body.dataset.locale === "en" ? "en" : "zh";
}

function getAssetPrefix(locale) {
  return locale === "en" ? "../" : "";
}

function getLanguageSwitchHref(locale, page) {
  if (locale === "en") return `../${page}`;
  return `en/${page}`;
}

function injectShell() {
  const page = document.body.dataset.page || "home";
  const locale = getLocale();
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");

  if (header) header.innerHTML = renderHeader(page, locale);
  if (footer) footer.innerHTML = renderFooter(locale);
}

function renderHeader(page, locale) {
  const copy = LOCALES[locale];
  const assetPrefix = getAssetPrefix(locale);
  const brandIcon = `${assetPrefix}assets/images/wenxinwukui_icon_28x28.png`;
  const switchHref = getLanguageSwitchHref(locale, NAV_ITEMS.find((item) => item.key === page)?.href || "index.html");
  const navLinks = NAV_ITEMS.slice(0, 5)
    .map((item) => `<a href="${item.href}" class="text-sm font-medium transition-colors ${item.key === page ? "text-[#3B82F6]" : "text-[#4B556B] hover:text-[#3B82F6]"}">${copy.nav[item.key]}</a>`)
    .join("");

  const legalLinks = NAV_ITEMS.slice(5)
    .map((item) => `<a href="${item.href}" class="text-sm font-medium transition-colors ${item.key === page ? "text-[#3B82F6]" : "text-[#4B556B] hover:text-[#3B82F6]"}">${copy.nav[item.key]}</a>`)
    .join("");

  return `
    <header class="bg-white/80 backdrop-blur-md border-b border-[#E6EAF0] sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="site-header-shell flex justify-between items-center h-18">
          <a href="index.html" class="brand-link flex items-center gap-3">
            <img src="${brandIcon}" alt="${copy.brandIconAlt}" class="brand-logo w-10 h-10 rounded-xl object-contain flex-shrink-0" />
            <span class="brand-text">
              <span class="brand-name-full text-xl font-bold text-[#1F2A44]">${copy.companyName}</span>
              <span class="brand-name-short text-[#1F2A44]">${copy.companyNameShort}</span>
              <span class="brand-tagline">${copy.companyTagline}</span>
            </span>
          </a>
          <nav class="hidden md:flex items-center gap-8">${navLinks}${legalLinks}</nav>
          <div class="hidden md:flex items-center gap-4">
            <a href="${switchHref}" class="language-switch" aria-label="${copy.switchAria}">
              ${copy.switchLabel}
            </a>
            <a href="contact.html" class="px-5 py-2.5 bg-[#3B82F6] text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] transition-colors">${copy.contactButton}</a>
          </div>
          <button class="md:hidden p-2 text-[#4B556B]" type="button" data-mobile-toggle aria-expanded="false" aria-label="${copy.openMenuAria}">
            <span class="text-2xl leading-none" data-mobile-icon>☰</span>
          </button>
        </div>
      </div>
      <div class="hidden md:hidden mobile-menu-layer" data-mobile-layer>
        <button class="mobile-menu-backdrop" type="button" data-mobile-close aria-label="${copy.closeMenuAria}"></button>
        <div class="mobile-menu-wrap">
          <nav class="mobile-menu-panel flex flex-col gap-4 px-5 py-5" data-mobile-menu>
            <div class="mobile-menu-links flex flex-col gap-1">${navLinks}${legalLinks}</div>
            <a href="contact.html" class="mobile-contact-link">${copy.contactButton}</a>
            <div class="mobile-menu-actions pt-4 border-t border-[#E6EAF0]">
              <span class="block text-sm text-[#7C8799]">${copy.mobileCurrent}</span>
              <a href="${switchHref}" class="mobile-language-link">${copy.mobileLanguageLabel} · ${copy.switchLabel}</a>
            </div>
          </nav>
        </div>
      </div>
    </header>`;
}

function renderFooter(locale) {
  const copy = LOCALES[locale];
  const assetPrefix = getAssetPrefix(locale);
  const brandIcon = `${assetPrefix}assets/images/wenxinwukui_icon_28x28.png`;
  return `
    <footer class="bg-[#F6F7F9] border-t border-[#E6EAF0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <img src="${brandIcon}" alt="${copy.brandIconAlt}" class="w-10 h-10 rounded-xl object-contain flex-shrink-0" />
              <span class="text-lg font-bold text-[#1F2A44]">${copy.companyName}</span>
            </div>
            <p class="text-[#7C8799] text-sm mb-2">${copy.footerDescription}</p>
            <p class="text-[#7C8799] text-sm">${copy.footerEmail}：<a href="mailto:${CONTACT_EMAIL}" class="hover:text-[#3B82F6] transition-colors">${CONTACT_EMAIL}</a></p>
            <p class="text-[#7C8799] text-sm mt-1">${copy.footerWebsite}：<a href="https://payproud.cn" class="hover:text-[#3B82F6] transition-colors">payproud.cn</a></p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-[#1F2A44] mb-4">${copy.footerQuickLinks}</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">${copy.nav.home}</a></li>
              <li><a href="about.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">${copy.nav.about}</a></li>
              <li><a href="product.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">${copy.nav.product}</a></li>
              <li><a href="company.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">${copy.nav.company}</a></li>
              <li><a href="contact.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">${copy.nav.contact}</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-[#1F2A44] mb-4">${copy.footerLegal}</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="privacy.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">${copy.nav.privacy}</a></li>
              <li><a href="terms.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">${copy.nav.terms}</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-[#E6EAF0] mt-8 pt-8 text-center text-sm text-[#7C8799]">
          <p>${copy.footerCopyright}</p>
          <p class="mt-2">${copy.footerProduct}</p>
        </div>
      </div>
    </footer>`;
}

function initHeaderInteractions() {
  const locale = getLocale();
  const copy = LOCALES[locale];
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileLayer = document.querySelector('[data-mobile-layer]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const mobileIcon = document.querySelector('[data-mobile-icon]');
  const mobileCloseTargets = document.querySelectorAll('[data-mobile-close]');
  const mobileLinks = document.querySelectorAll('[data-mobile-menu] a');

  if (mobileToggle && mobileLayer && mobileMenu && mobileIcon) {
    const setMenuState = (isOpen) => {
      mobileLayer.classList.toggle('hidden', !isOpen);
      mobileIcon.textContent = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileToggle.setAttribute('aria-label', isOpen ? copy.closeMenuAria : copy.openMenuAria);
      document.body.classList.toggle('mobile-menu-open', isOpen);
    };

    setMenuState(false);

    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!isOpen);
    });

    mobileCloseTargets.forEach((item) => {
      item.addEventListener('click', () => setMenuState(false));
    });

    mobileLinks.forEach((item) => {
      item.addEventListener('click', () => setMenuState(false));
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) setMenuState(false);
    });
  }
}

function initContactForm() {
  const locale = getLocale();
  const copy = LOCALES[locale];
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const submitButton = form.querySelector('[data-submit-button]');
  const successBox = form.querySelector('[data-submit-success]');
  const originalLabel = submitButton instanceof HTMLButtonElement ? submitButton.textContent : copy.contactFormButton;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!(submitButton instanceof HTMLButtonElement)) return;

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !subject || !message) return;

    const mailSubject = encodeURIComponent(`${copy.contactMailSubjectPrefix} ${subject}`);
    const mailBody = encodeURIComponent(
      `${copy.mailBodyLabels.name}: ${name}\n${copy.mailBodyLabels.email}: ${email}\n\n${copy.mailBodyLabels.message}:\n${message}\n`
    );

    submitButton.disabled = true;
    submitButton.textContent = copy.contactFormSending;

    window.setTimeout(() => {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
      if (successBox) {
        successBox.textContent = copy.contactFormOpened;
        successBox.classList.remove('hidden');
        window.setTimeout(() => successBox.classList.add('hidden'), 5000);
      }
    }, 200);
  });
}
