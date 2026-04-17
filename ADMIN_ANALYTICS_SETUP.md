# Admin Analytics Setup

这个项目的推荐后台方案为：

- 公开官网：`https://payproud.cn`
- 管理后台：`https://admin.payproud.cn`
- 分析内核：`Umami`
- 行为分析增强：`Microsoft Clarity`

选择理由：

- `Umami` 支持管理员登录、网站统计、自定义事件、路径分析、漏斗、访问来源等，适合作为你自己的网页版后台。
- `Clarity` 提供热力图、滚动深度、会话回放，适合补充“用户看了哪里、卡在哪”的行为分析。

参考文档：

- Umami 介绍：<https://umami.is/docs>
- Umami About：<https://docs.umami.is/docs/about>
- Umami Insights：<https://docs.umami.is/docs/insights>
- Umami on Railway：<https://docs.umami.is/docs/guides/running-on-railway>
- Railway Umami 模板：<https://railway.com/deploy/umami-analytics>
- Clarity 安装：<https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-setup>

## 你最终会得到什么

部署完成后，你可以通过浏览器打开：

- `admin.payproud.cn`

并使用管理员账号密码登录，查看：

- 总访问量
- 独立访客
- 热门页面
- 来源渠道
- 停留时长
- 设备与地区
- 自定义事件
- 关键区块进入与停留
- 联系按钮点击
- 中英文切换

如果同时启用 Clarity，还可以查看：

- 热力图
- 点击分布
- 滚动深度
- 会话回放

## 本项目已经准备好的埋点

前端已经预埋了以下事件：

- `hero_primary_click`
- `hero_secondary_click`
- `home_product_detail_click`
- `about_cta_click`
- `product_cta_click`
- `header_contact_click`
- `mobile_contact_click`
- `language_switch`
- `mobile_language_switch`
- `contact_mailto_open`
- `section_view`
- `section_engaged`

当前被追踪的核心区块包括：

- 首页 Hero
- 首页 About
- 首页 Product
- 首页 Company Info
- 产品页 Hero / Intro / Features / Scenarios / FAQ / CTA
- 关于页 CTA
- 联系页主区块

## 启用 Umami

在 [`assets/js/main.js`](/Users/gg-new/Documents/New%20project/payproud-site/assets/js/main.js) 顶部找到：

```js
const ANALYTICS_CONFIG = {
  umami: {
    scriptUrl: "https://admin.payproud.cn/script.js",
    websiteId: "",
    domains: "payproud.cn,www.payproud.cn",
  },
  clarity: {
    projectId: "",
  },
};
```

部署好 Umami 后：

1. 登录 `admin.payproud.cn`
2. 在 Umami 里新增一个网站，域名填写 `payproud.cn`
3. 复制该网站的 `Website ID`
4. 填回 `websiteId`
5. 提交并重新发布官网

## 启用 Clarity

1. 在 Clarity 新建项目，域名填写 `payproud.cn`
2. 拿到 `Project ID`
3. 填回 `ANALYTICS_CONFIG.clarity.projectId`
4. 重新发布官网

## Railway 推荐部署路径

### 方案

- 用 Railway 的 Umami 模板部署
- 使用模板自动创建的 PostgreSQL
- 自定义域名绑定 `admin.payproud.cn`

### Railway 内需要做的事情

1. 部署 Umami 模板
2. 等容器和数据库都启动成功
3. 打开 Umami 后台
4. 修改默认管理员密码
5. 新建网站 `payproud.cn`
6. 记录 `Website ID`
7. 给 Railway 服务绑定自定义域名 `admin.payproud.cn`

### DNS 需要新增的记录

按 Railway 最终给出的目标地址，在阿里云新增：

- 主机记录：`admin`
- 记录类型：通常为 `CNAME`
- 记录值：Railway 分配的域名

具体值以 Railway 后台显示为准。

## 后续可扩展

如果你后面想把后台做得更像经营面板，还可以继续做：

- 多管理员账号
- 周报邮件
- 自定义报表
- 按页面或按钮的转化漏斗
- 访客来源对比
- A/B 版本对比
- 线索收集与表单记录

但第一阶段不建议把官网直接升级成重后台系统。先把 `Umami + Clarity + 自定义事件` 跑起来，已经足够实用。
