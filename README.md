# PayProud Static Corporate Website

这是一个可直接部署的纯静态企业官网项目，面向 `payproud.cn` 使用场景，技术栈为原生 `HTML + CSS + JavaScript`，不依赖复杂前端框架。当前版本已包含中英文双语页面结构。

## 项目结构

```text
payproud-site/
├── about.html
├── company.html
├── contact.html
├── en
│   ├── about.html
│   ├── company.html
│   ├── contact.html
│   ├── index.html
│   ├── privacy.html
│   ├── product.html
│   └── terms.html
├── favicon.svg
├── index.html
├── privacy.html
├── product.html
├── terms.html
└── assets
    ├── css
    │   └── style.css
    ├── images
    │   ├── line-orbit.svg
    │   ├── phone-home.svg
    │   └── phone-product.svg
    └── js
        └── main.js
```

## 页面说明

- `index.html`：首页，包含 Hero、企业信息卡、关于预览、业务方向、产品预览和页脚。
- `about.html`：关于我们，说明公司定位、对外表达原则和官网用途。
- `product.html`：产品介绍，包含产品定位、价值模块、功能卡片、FAQ 与联系引导。
- `company.html`：正式企业信息页，适合审核友好展示。
- `contact.html`：公开联系页，包含前端校验表单。
- `privacy.html`：中英文隐私政策。
- `terms.html`：中英文服务条款。

## 本地预览

可直接双击 `index.html` 本地打开。

如果你想用本地服务器预览，也可以在项目目录执行：

```bash
cd /Users/gg-new/Documents/New\ project/payproud-site
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 可修改配置

联系方式与多语言公共壳层等集中在：

```text
assets/js/main.js
```

当前需要重点关注：

- `CONTACT_EMAIL`

## 多语言说明

- 默认中文站点位于根目录页面
- 英文站点位于 `en/` 目录
- 页头语言按钮会在中英文对应页面之间跳转

## 部署说明

这是纯静态项目，没有构建步骤。部署时只需要把整个目录中的文件上传到静态托管平台。

通用部署步骤：

1. 将 `payproud-site` 目录下所有文件上传到静态托管根目录。
2. 确保默认首页为 `index.html`。
3. 确保静态资源目录 `assets/` 与页面文件保持同级结构。
4. 在托管平台绑定自定义域名 `payproud.cn`。
5. 按托管平台提供的 DNS 记录要求，在域名控制台添加对应解析。
6. 如平台支持 HTTPS，开启证书并强制跳转 HTTPS。

## 替换素材建议

- 手机效果图可替换 `assets/images/phone-home.svg` 和 `assets/images/phone-product.svg`
- 线条装饰图可替换 `assets/images/line-orbit.svg`
- 站点图标可替换 `favicon.svg`
- 页面文案可直接在各个 `.html` 文件中编辑

## 注意事项

- 当前联系表单会唤起本地邮箱应用，不会提交到服务器数据库。
- 页面中未使用虚构团队、客户、合作伙伴、融资或下载量数据。
- 产品文案已明确说明其不是投资平台、不是理财平台、不是金融收益工具。
