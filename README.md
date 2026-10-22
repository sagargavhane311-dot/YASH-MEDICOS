# Yash Medicos - Healthcare & Wellness Official Website

A modern, fast, mobile-responsive, and SEO-optimized business website created for **Yash Medicos** located in **Golegaon Bk, Sillod - 431112**.

---

## 🌟 Key Features

- **Professional Healthcare Aesthetic**: Clean, medical-grade color palette (emerald green, medical slate navy, and trust cyan) with modern typography (`Outfit` and `Plus Jakarta Sans`).
- **Complete Business Identity**:
  - **Business Name**: Yash Medicos
  - **Business Type**: Healthcare and Wellness / Pharmacy & Medical Store
  - **Location**: Golegaon Bk, Sillod - 431112, Dist. Chhatrapati Sambhajinagar, Maharashtra
  - **Phone / WhatsApp**: +91 9860384278
- **All 13 Requested Services Covered**:
  1. Prescription medicine sale
  2. Over the counter (OTC) medicine
  3. Healthcare product
  4. First-aid supplies & emergency kits
  5. Personal care products
  6. Baby care products & infant nutrition
  7. Nutritional products & dietary supplements
  8. Medicine availability and advance ordering
  9. Medicine usage guidance & pharmacist counseling
  10. Basic health monitoring (BP, Blood Glucose, SpO2)
  11. Health & hygiene awareness
  12. Chronic disease medication support (Diabetes, Hypertension)
  13. Medical equipment sales (BP monitors, Nebulizers, Vaporizers, Walking aids)
- **Interactive Service Filter**: Users can filter services by categories (Medicines, Baby & Personal Care, Health Monitoring, Medical Devices) with instant UI updates.
- **WhatsApp Quick-Order / Prescription Tool**:
  - Interactive on-page builder that lets customers enter their name, phone number, village, and required medicines or note that they have a prescription photo.
  - Automatically generates and formats a WhatsApp message ready to send to `+91 9860384278` with one tap!
- **Dual Contact Buttons**:
  - **WhatsApp Button**: Sticky floating pulse button + direct hero buttons.
  - **Call Button**: Direct telephone dialer (`tel:+919860384278`) on header and floating mobile dock.
- **Interactive Contact Form**:
  - Full client-side validation for Name, Indian Phone Number (10 digits), Service selection, and Message.
  - "Send via WhatsApp" alternative button that directly pipes form fields into WhatsApp.
  - Ready to connect to free form endpoints like **Formspree** or **Web3Forms**.
- **Customer Testimonials & FAQ Accordion**:
  - Highlighting genuine community experiences in Golegaon Bk & Sillod.
  - Accessible expandable FAQ answering common questions about prescriptions, delivery, and payments.
- **Embedded Location Map**:
  - Google Map embed centered on Golegaon Bk, Sillod 431112 with one-click direct directions link.
- **SEO & Social Media Meta Tags**:
  - Semantic HTML5 structure.
  - Open Graph & Twitter cards for sharing on WhatsApp, Facebook, etc.
  - Schema.org `Pharmacy` / `LocalBusiness` JSON-LD structured data for Google Search snippet indexing.
- **No Heavy Frameworks**: Pure vanilla HTML5, CSS3, and modern JavaScript. Fast loading and easily hostable on any static hosting platform.

---

## 📁 File Structure

```
yash/
├── index.html         # Main homepage with all sections, schema markup, SEO tags
├── style.css          # Root stylesheet proxy (imports css/style.css)
├── script.js          # Root script proxy (mirrors js/main.js)
├── css/
│   └── style.css      # Custom responsive styling, fluid typography, and media queries
├── js/
│   └── main.js        # Mobile drawer, scrollspy, category filter, WhatsApp generator
└── README.md          # Complete documentation and deployment guide
```

---

## 🚀 How to Preview and Test Locally

### Option 1: Direct Double Click
Simply double click `index.html` in your file explorer. It will open directly in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using Python (Local Web Server)
If you have Python installed, open your terminal / command prompt in this directory and run:
```bash
python -m http.server 8000
```
Then open your browser at: `http://localhost:8000`

### Option 3: Using VS Code Live Server
If using Visual Studio Code:
1. Install the "Live Server" extension.
2. Right-click `index.html` and select **"Open with Live Server"**.

---

## 📬 How to Connect the Contact Form to a Working Form Service

You can receive emails whenever someone submits the contact form using free services without writing any backend code:

### Method A: Using Formspree (Recommended - Takes 1 Minute)
1. Go to [https://formspree.io/](https://formspree.io/) and create a free account.
2. Click **"+ New Form"** and name it `Yash Medicos Contact`.
3. Copy your unique Form endpoint URL (e.g. `https://formspree.io/f/xyzqwkld`).
4. Open `js/main.js` and locate line 247:
   ```javascript
   const FORMSPREE_ENDPOINT = '';
   ```
5. Paste your URL between the quotes:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzqwkld';
   ```
6. Save the file. All submissions will now arrive directly in your email inbox!

### Method B: Using Web3Forms (No Registration Required)
1. Go to [https://web3forms.com/](https://web3forms.com/) and enter your email to get a free access key.
2. In `index.html`, add `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">` inside `<form id="contactForm">`.
3. Set the form `action="https://api.web3forms.com/submit"` and `method="POST"`.

---

## 🌐 How to Publish This Website on GitHub Pages (Free Hosting)

GitHub Pages provides free hosting with HTTPS and global CDN. Here is how to publish your website:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Click the **`+`** icon at the top right and select **New repository**.
3. Name your repository (e.g. `yash-medicos` or `<your-username>.github.io`).
4. Set the repository to **Public**.
5. Do **not** check "Initialize with README" (since you already have one).
6. Click **Create repository**.

### Step 2: Push Your Code to GitHub

#### Using Git Command Line:
Open PowerShell or Terminal in the project directory (`c:\Users\sagar\Downloads\yash`):

```bash
# 1. Initialize git repository
git init

# 2. Add all project files
git add .

# 3. Commit the files
git commit -m "Initial launch of Yash Medicos business website"

# 4. Set branch to main
git branch -M main

# 5. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/yash-medicos.git

# 6. Push to GitHub
git push -u origin main
```

*(Alternatively, if you don't use Git CLI, you can drag and drop all files from this folder directly into the GitHub web interface by clicking "Upload files" on your repository page).*

### Step 3: Enable GitHub Pages
1. On your GitHub repository page, click the **Settings** tab (the gear icon).
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. Wait 1 to 2 minutes. Refresh the page, and GitHub will display your live URL:
   ```
   https://<your-username>.github.io/yash-medicos/
   ```

---

## ⚙️ Customization Guide

- **Change Phone / WhatsApp Number**:
  - In `index.html`: Search and replace `9860384278` with your new 10-digit number.
  - In `js/main.js`: Update the constant `const PHARMACY_PHONE = '9860384278';` on line 10.
- **Change Store Hours**:
  - Search for `8:00 AM – 10:30 PM` in `index.html` and edit as needed.
- **Update Address**:
  - Search for `Golegaon Bk, Sillod - 431112` in `index.html` and update the street or landmark.

---

© 2026 Yash Medicos. All Rights Reserved. Golegaon Bk, Sillod 431112.
