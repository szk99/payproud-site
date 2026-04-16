const NAV_ITEMS = [
  { href: "index.html", label: "首页", key: "home" },
  { href: "about.html", label: "关于我们", key: "about" },
  { href: "product.html", label: "产品介绍", key: "product" },
  { href: "company.html", label: "企业信息", key: "company" },
  { href: "contact.html", label: "联系我们", key: "contact" },
  { href: "privacy.html", label: "隐私政策", key: "privacy" },
  { href: "terms.html", label: "服务条款", key: "terms" },
];

const LANGUAGE_OPTIONS = ["中文", "English"];
const BRAND_ICON = "assets/images/wenxinwukui_icon_28x28.png";

document.addEventListener("DOMContentLoaded", () => {
  injectShell();
  initHeaderInteractions();
  initContactForm();
});

function injectShell() {
  const page = document.body.dataset.page || "home";
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");
  const storedLang = localStorage.getItem("payproud-lang-label") || "中文";

  if (header) header.innerHTML = renderHeader(page, storedLang);
  if (footer) footer.innerHTML = renderFooter();
}

function renderHeader(page, langLabel) {
  const navLinks = NAV_ITEMS.slice(0, 5)
    .map((item) => `<a href="${item.href}" class="text-sm font-medium transition-colors ${item.key === page ? "text-[#3B82F6]" : "text-[#4B556B] hover:text-[#3B82F6]"}">${item.label}</a>`)
    .join("");

  const legalLinks = NAV_ITEMS.slice(5)
    .map((item) => `<a href="${item.href}" class="text-sm font-medium transition-colors ${item.key === page ? "text-[#3B82F6]" : "text-[#4B556B] hover:text-[#3B82F6]"}">${item.label}</a>`)
    .join("");

  return `
    <header class="bg-white/80 backdrop-blur-md border-b border-[#E6EAF0] sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="site-header-shell flex justify-between items-center h-18">
          <a href="index.html" class="brand-link flex items-center gap-3">
            <img src="${BRAND_ICON}" alt="问猩信息图标" class="brand-logo w-10 h-10 rounded-xl object-contain flex-shrink-0" />
            <span class="brand-text">
              <span class="brand-name-full text-xl font-bold text-[#1F2A44]">问猩信息技术有限公司</span>
              <span class="brand-name-short text-[#1F2A44]">问猩信息</span>
              <span class="brand-tagline">Wenxing Information</span>
            </span>
          </a>
          <nav class="hidden md:flex items-center gap-8">${navLinks}${legalLinks}</nav>
          <div class="hidden md:flex items-center gap-4">
            <div class="relative">
              <button type="button" data-lang-trigger class="px-3 py-1.5 rounded-md border border-[#E6EAF0] hover:bg-[#F6F7F9] flex items-center gap-1.5 text-sm font-medium text-[#4B556B]">
                <span data-lang-label>${langLabel}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="hidden absolute right-0 top-full mt-2 bg-white border border-[#E6EAF0] rounded-lg shadow-lg py-1 min-w-[160px]" data-lang-menu>
                ${LANGUAGE_OPTIONS.map((item) => `<button type="button" class="block w-full px-4 py-2 text-sm hover:bg-[#F6F7F9] text-left text-[#4B556B]" data-lang-option="${item}">${item}</button>`).join("")}
              </div>
            </div>
            <a href="contact.html" class="px-5 py-2.5 bg-[#3B82F6] text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] transition-colors">联系我们</a>
          </div>
          <button class="md:hidden p-2 text-[#4B556B]" type="button" data-mobile-toggle aria-expanded="false" aria-label="打开导航菜单">
            <span class="text-2xl leading-none" data-mobile-icon>☰</span>
          </button>
        </div>
      </div>
      <div class="hidden md:hidden bg-white border-t border-[#E6EAF0] py-4" data-mobile-menu>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="mobile-menu-panel flex flex-col gap-4 px-4 py-4">
            <div class="mobile-menu-links flex flex-col gap-1">${navLinks}${legalLinks}</div>
            <a href="contact.html" class="mobile-contact-link">联系我们</a>
            <div class="mobile-menu-actions pt-4 border-t border-[#E6EAF0] flex items-center gap-3">
            ${LANGUAGE_OPTIONS.map((item) => `<button type="button" class="px-3 py-2 rounded-md border border-[#E6EAF0] text-sm text-[#4B556B] hover:bg-[#F6F7F9]" data-lang-option="${item}">${item}</button>`).join("")}
            </div>
          </nav>
        </div>
      </div>
    </header>`;
}

function renderFooter() {
  return `
    <footer class="bg-[#F6F7F9] border-t border-[#E6EAF0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <img src="${BRAND_ICON}" alt="问猩信息图标" class="w-10 h-10 rounded-xl object-contain flex-shrink-0" />
              <span class="text-lg font-bold text-[#1F2A44]">问猩信息技术有限公司</span>
            </div>
            <p class="text-[#7C8799] text-sm mb-2">年轻、富有创造力的软件与数字化产品公司</p>
            <p class="text-[#7C8799] text-sm">邮箱：976707022@qq.com</p>
            <p class="text-[#7C8799] text-sm mt-1">官网：payproud.cn</p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-[#1F2A44] mb-4">快速链接</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">首页</a></li>
              <li><a href="about.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">关于我们</a></li>
              <li><a href="product.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">产品介绍</a></li>
              <li><a href="company.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">企业信息</a></li>
              <li><a href="contact.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-[#1F2A44] mb-4">法律信息</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="privacy.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">隐私政策</a></li>
              <li><a href="terms.html" class="text-[#4B556B] hover:text-[#3B82F6] transition-colors">服务条款</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-[#E6EAF0] mt-8 pt-8 text-center text-sm text-[#7C8799]">
          <p>© 2026 问猩信息技术有限公司。All rights reserved.</p>
          <p class="mt-2">产品：问薪无愧 / PayProud</p>
        </div>
      </div>
    </footer>`;
}

function initHeaderInteractions() {
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const mobileIcon = document.querySelector('[data-mobile-icon]');
  const langTrigger = document.querySelector('[data-lang-trigger]');
  const langMenu = document.querySelector('[data-lang-menu]');

  if (mobileToggle && mobileMenu && mobileIcon) {
    mobileToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      mobileIcon.textContent = isHidden ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', String(isHidden));
    });
  }

  if (langTrigger && langMenu) {
    langTrigger.addEventListener('click', (event) => {
      event.stopPropagation();
      langMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => langMenu.classList.add('hidden'));
  }

  document.querySelectorAll('[data-lang-option]').forEach((button) => {
    button.addEventListener('click', () => {
      const label = button.getAttribute('data-lang-option') || '中文';
      localStorage.setItem('payproud-lang-label', label);
      document.querySelectorAll('[data-lang-label]').forEach((node) => {
        node.textContent = label;
      });
      if (langMenu) langMenu.classList.add('hidden');
    });
  });
}

function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const submitButton = form.querySelector('[data-submit-button]');
  const successBox = form.querySelector('[data-submit-success]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!(submitButton instanceof HTMLButtonElement)) return;

    submitButton.disabled = true;
    submitButton.textContent = '提交中...';

    window.setTimeout(() => {
      form.reset();
      submitButton.disabled = false;
      submitButton.textContent = '发送消息';
      if (successBox) {
        successBox.classList.remove('hidden');
        window.setTimeout(() => successBox.classList.add('hidden'), 3000);
      }
    }, 1000);
  });
}
