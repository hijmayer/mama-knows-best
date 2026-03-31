# 🌸 Mama Knows Best — Setup Guide

A warm, professional baby advice blog built with pure HTML/CSS — no frameworks needed. Ready to deploy on GitHub Pages and monetize with Google AdSense.

---

## 🚀 How to Get Your Site Live (Step by Step)

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button → **New repository**
3. Name it: `mama-knows-best`
4. Make sure it's set to **Public**
5. Click **Create repository**

---

### Step 2: Upload Your Files

1. On the empty repo page, click **uploading an existing file** (or drag and drop)
2. Upload **all files and the `blog` folder** from this zip
3. Click **Commit changes**

> ⚠️ Make sure to upload the `blog/` folder as a folder, not the individual files separately

---

### Step 3: Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages** (in the left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch and **/ (root)** folder
4. Click **Save**

Your site will be live at:
**`https://YOUR-USERNAME.github.io/mama-knows-best/`**

(It may take 1–2 minutes to go live the first time.)

---

### Step 4: Update Your URLs

Once your site is live, do a find-and-replace in all HTML files:

- Replace: `YOUR-USERNAME`
- With: your actual GitHub username

You can do this right in GitHub — click any file, click the ✏️ edit button, make your changes, and click **Commit changes**.

---

## 💰 Setting Up Google AdSense

### Step 1: Apply for AdSense
1. Go to [google.com/adsense](https://www.google.com/adsense)
2. Sign in with your Google account
3. Enter your website URL (your GitHub Pages URL)
4. Apply and wait for approval (can take days to weeks for a new site)

> **Note:** Google requires your site to have original content and meet their policies. Your site already includes everything needed: privacy policy, disclaimer, and original articles.

### Step 2: Add Your AdSense Code
Once approved, Google gives you a script tag like:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

In each HTML file, find this comment near the top of the `<head>`:
```html
<!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script> -->
```

Remove the `<!-- -->` comment markers and replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual Publisher ID.

### Step 3: Replace Ad Placeholder Divs
Throughout the site you'll find placeholder divs like:
```html
<div class="ad-slot ad-slot--leaderboard">Advertisement</div>
```

Replace these with your actual AdSense ad unit code. Create ad units in your AdSense dashboard:
- **Leaderboard** (728×90) → for the top banner slots
- **Rectangle** (300×250) → for sidebar and mid-article slots

---

## ✏️ How to Edit Content in GitHub

Yes! You can edit everything right in GitHub without downloading anything:

1. Go to your repository on GitHub
2. Click the file you want to edit (e.g., `index.html`)
3. Click the **pencil icon** (✏️) at the top right of the file
4. Make your changes
5. Scroll down and click **Commit changes**

Your site will automatically update within about 30 seconds!

### Things you'll want to customize:
- **Blog post content** — edit the HTML files in the `blog/` folder
- **About page** — update `about.html` with your personal story
- **Social media links** — search for `href="#"` in any file and replace with your real links
- **Newsletter** — currently shows a success message but doesn't actually send. Connect to Mailchimp/ConvertKit by replacing the form with their embed code.

---

## 📁 File Structure

```
mama-knows-best/
├── index.html                          ← Homepage
├── about.html                          ← About page
├── privacy.html                        ← Privacy Policy
├── disclaimer.html                     ← Disclaimer
├── style.css                           ← All styles (edit to change colors/fonts)
├── README.md                           ← This file
└── blog/
    ├── sleep-training-guide.html
    ├── newborn-feeding-tips.html
    ├── baby-milestones-first-year.html
    └── best-baby-gear.html
```

---

## 💡 Tips for Growing Your AdSense Revenue

1. **Write more articles** — more content = more pages = more ad impressions. Aim for 2–3 articles per week.
2. **Target high-CPC keywords** — baby gear reviews and "best product" posts tend to earn more per click.
3. **Optimize for SEO** — each article already has meta descriptions and structured data. Update the `og:url` and `canonical` tags once your site is live.
4. **Promote on Pinterest** — parenting content does exceptionally well on Pinterest. Create pins for each article.
5. **Build your email list** — replace the newsletter form with a real email service (Mailchimp has a free tier) to build a direct audience.

---

## 🎨 Customizing the Design

All colors are defined as CSS variables at the top of `style.css`:

```css
:root {
  --rose:      #E8927C;   /* Main brand color */
  --deep-rose: #C96A52;   /* Darker accent */
  --blush:     #F7D6D0;   /* Light background tint */
  --sage:      #8EAD8B;   /* Green accent (tips strip) */
  --charcoal:  #3A3530;   /* Main text color */
}
```

Change these values to completely transform the look of the site.

---

## ❓ Need Help?

If anything is unclear, you can edit this README directly in GitHub too. Good luck, mama — you've got this! 🌸
