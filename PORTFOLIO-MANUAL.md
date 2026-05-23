# Portfolio Website — Content Update Manual

**For: Anyone updating the portfolio on a new Mac (no coding experience required)**

---

## Table of Contents

1. [What You'll Need](#1-what-youll-need)
2. [One-Time Setup on a New Mac](#2-one-time-setup-on-a-new-mac)
3. [Getting the Project Files](#3-getting-the-project-files)
4. [Understanding the Folder Structure](#4-understanding-the-folder-structure)
5. [Adding a New Artwork](#5-adding-a-new-artwork)
6. [Editing an Existing Artwork](#6-editing-an-existing-artwork)
7. [Removing an Artwork](#7-removing-an-artwork)
8. [Updating Your Homepage & Personal Intro](#8-updating-your-homepage--personal-intro)
9. [Customising Fonts](#9-customising-fonts)
10. [Customising Colors & Layout](#10-customising-colors--layout)
11. [Previewing Your Changes Before Publishing](#11-previewing-your-changes-before-publishing)
12. [Publishing Your Changes to the Live Website](#12-publishing-your-changes-to-the-live-website)
13. [Quick Reference Card](#13-quick-reference-card)
14. [Troubleshooting](#14-troubleshooting)

---

## 1. What You'll Need

- A Mac computer with an internet connection
- The portfolio project files (either from GitHub or from the export ZIP — see Section 3)
- Your GitHub username and password (for publishing changes to the live site)
- The image file(s) for any new artwork you want to add

**Time required for first-time setup:** about 20–30 minutes
**Time required to add a new artwork after setup:** about 5 minutes

---

## 2. One-Time Setup on a New Mac

> You only need to do this once per computer. Skip to Section 3 if these tools are already installed.

### Step 2.1 — Install Xcode Command Line Tools (includes Git)

Git is the tool that saves and uploads your changes to the website.

1. Open the **Terminal** application:
   - Press **Command (⌘) + Space** on your keyboard to open Spotlight Search
   - Type `Terminal` and press **Enter**
   - A black window will appear — this is the Terminal

2. In the Terminal, type the following exactly and press **Enter**:
   ```
   xcode-select --install
   ```

3. A pop-up window will appear asking you to install the tools. Click **Install**.

4. Wait for the download to finish (5–10 minutes depending on your internet speed). Click **Done** when it finishes.

5. Verify it worked by typing this in the Terminal and pressing **Enter**:
   ```
   git --version
   ```
   You should see something like `git version 2.39.0`. If you see a version number, it worked.

---

### Step 2.2 — Install Node.js

Node.js is the engine that runs the website locally on your computer so you can preview changes before publishing.

1. Open your web browser and go to: **https://nodejs.org**

2. Click the big green button that says **"LTS"** (Long Term Support). This downloads the installer file.

3. Once downloaded, double-click the file in your **Downloads** folder.

4. Follow the installer steps — click **Continue**, **Continue**, **Agree**, **Install**. Enter your Mac password if asked.

5. When it says "The installation was successful", click **Close**.

6. Verify it worked by typing this in the Terminal and pressing **Enter**:
   ```
   node --version
   ```
   You should see something like `v20.12.0`. If you see a version number, it worked.

---

### Step 2.3 — Install Visual Studio Code (Text Editor)

VS Code is a free text editor that makes it easy to edit the portfolio files. You can use any text editor, but VS Code is recommended.

1. Open your browser and go to: **https://code.visualstudio.com**

2. Click the blue **Download for Mac** button.

3. A ZIP file will download. Double-click it to extract it. You will see a file called **Visual Studio Code**.

4. Drag **Visual Studio Code** into your **Applications** folder.

5. Open VS Code from your Applications folder. If a warning says "This is downloaded from the internet, are you sure?", click **Open**.

---

## 3. Getting the Project Files

You have two options. **Option A** is recommended if you plan to publish changes to the live website. **Option B** is for working offline or testing.

---

### Option A — Download from GitHub (Recommended)

> This keeps your work connected to the live website so you can publish changes.

1. Open the **Terminal** application (see Step 2.1 for how to open it).

2. Decide where you want to save the project. The Desktop is a good place. Type this and press **Enter**:
   ```
   cd ~/Desktop
   ```
   (`cd` means "change directory" — you're telling Terminal to navigate to your Desktop folder.)

3. Download the project files by typing this and pressing **Enter**:
   ```
   git clone https://github.com/Altriaart/Altriaart.github.io.git
   ```
   Wait for it to finish. You will see a folder called `Altriaart.github.io` appear on your Desktop.

4. Navigate into that folder by typing this and pressing **Enter**:
   ```
   cd Altriaart.github.io
   ```

5. Install the project's required software packages by typing this and pressing **Enter**:
   ```
   npm install
   ```
   This may take 1–2 minutes. Many lines of text will scroll by — this is normal. Wait until you see your cursor (the blinking `$`) return.

6. That's it! The project is ready. Continue to Section 4.

---

### Option B — Use the Export ZIP Package

> Use this if someone has given you a ZIP file called `portfolio-export.zip`.

1. Copy the `portfolio-export.zip` file to your Desktop.

2. Double-click `portfolio-export.zip` to extract it. A folder will appear on your Desktop.

3. Open the **Terminal** application.

4. Navigate to the extracted folder by typing this and pressing **Enter** (replace `portfolio-export` with the actual folder name if it's different):
   ```
   cd ~/Desktop/portfolio-export
   ```

5. Install the required software packages:
   ```
   npm install
   ```
   Wait for it to finish.

6. Continue to Section 4.

> **Note:** With Option B, you can preview the site locally but you will need to set up GitHub (Option A) before you can publish changes to the live website.

---

## 4. Understanding the Folder Structure

After opening the project folder in VS Code (File → Open Folder → select the project folder), you will see these folders on the left side panel. Here is what each one is for:

```
📁 Your Portfolio Project
│
├── 📁 public
│   └── 📁 images
│       ├── 📁 artwork      ← Your artwork image files go here
│       ├── 📁 projects     ← Project image files go here
│       └── 🖼️ profile.jpg  ← Your profile/portrait photo
│
├── 📁 src
│   └── 📁 content
│       ├── 📁 artwork      ← Text information about each artwork goes here
│       └── 📁 projects     ← Text information about each project goes here
│
└── (other files — do not touch these)
```

**Think of it like a filing cabinet:**

- The `public/images/artwork/` folder is like a photo album — it holds the actual image files.
- The `src/content/artwork/` folder is like a label card for each photo — it holds the title, date, medium, and description.

**Every artwork needs TWO things:**
1. An **image file** placed in `public/images/artwork/`
2. A **text file** (called a markdown file, ending in `.md`) placed in `src/content/artwork/`

---

## 5. Adding a New Artwork

This is the most common task. Follow these steps carefully.

### Step 5.1 — Prepare Your Image File

1. Have your artwork image ready on the Mac (JPEG or PNG format is fine).

2. **Rename the image file** before copying it. Use only letters, numbers, and hyphens. No spaces, no special characters.
   - ✅ Good: `cherry-blossom-study.jpg`
   - ✅ Good: `night-thoughts-03.jpg`
   - ❌ Bad: `Cherry Blossom Study.jpg` (spaces cause problems)
   - ❌ Bad: `夜想曲.jpg` (non-English characters can cause problems)

3. **Resize the image if it is very large.** A file size between 500 KB and 2 MB is ideal for websites. Very large files (over 5 MB) will make the page slow to load.
   - To check file size: right-click the image → **Get Info** → look at "Size"
   - To resize: open the image in **Preview** (double-click it) → Tools menu → **Adjust Size** → set width to around 1600 pixels → Save

### Step 5.2 — Copy the Image to the Project

1. Open the project folder in **Finder**:
   - In VS Code, right-click any file in the left panel → **Reveal in Finder**
   - OR navigate to your project folder in Finder directly

2. Navigate to `public` → `images` → `artwork`

3. Copy your renamed image file into this `artwork` folder.

   > **Tip:** You can drag and drop the image file directly into this folder.

### Step 5.3 — Create the Text File for the Artwork

1. Open VS Code.

2. In the left panel, navigate to `src` → `content` → `artwork`.

3. Right-click on the `artwork` folder → **New File**.

4. Name the file using only letters, numbers, and hyphens, ending with `.md`. This name will become the web address for the artwork.
   - Example: `cherry-blossom-study.md`
   - The artwork will be viewable at: `https://Altriaart.github.io/artwork/cherry-blossom-study`

5. Click on the new file to open it. It will be empty.

6. Copy and paste the following template into the file:

```
---
title: "Your Artwork Title Here"
date: 2026-01-15
medium: "Medium Here (e.g., Watercolour on paper)"
dimensions: "30 × 21 cm"
image: "/images/artwork/your-image-filename.jpg"
tags: [painting, landscape]
featured: false
---

Write your description of the artwork here. You can write as much or as little as you like.

This can be multiple paragraphs.
```

7. **Edit each field** to match your artwork:

   | Field | What to put | Example |
   |-------|------------|---------|
   | `title:` | The artwork's title, in quotes | `"Cherry Blossom Study"` |
   | `date:` | The date, in YYYY-MM-DD format | `2026-03-15` |
   | `medium:` | The materials used, in quotes | `"Watercolour on paper"` |
   | `dimensions:` | Size of the work, in quotes (optional — delete the whole line if not needed) | `"30 × 21 cm"` |
   | `image:` | Path to your image file — always starts with `/images/artwork/` followed by your exact filename | `"/images/artwork/cherry-blossom-study.jpg"` |
   | `tags:` | Labels for filtering, no quotes needed, separated by commas inside `[ ]` | `[painting, landscape, watercolour]` |
   | `featured:` | Type `true` to show on the homepage, `false` to show only in the gallery | `false` |

8. After the `---` at the bottom of the info block, write your description of the artwork.

9. Press **Command (⌘) + S** to save the file.

### Step 5.4 — Verify Your Work

Your completed file should look something like this:

```
---
title: "Cherry Blossom Study"
date: 2026-03-15
medium: "Watercolour on paper"
dimensions: "21 × 29.7 cm"
image: "/images/artwork/cherry-blossom-study.jpg"
tags: [painting, watercolour, nature]
featured: false
---

A study of the cherry blossoms in the park near my flat. Painted over two early mornings in late March, chasing the light before the crowds arrived.
```

**Check before continuing:**
- [ ] The image file name in the `image:` field exactly matches the image file you placed in `public/images/artwork/` (including uppercase/lowercase letters)
- [ ] The `---` lines at the top and bottom of the info block are exactly three hyphens
- [ ] All text fields (title, medium, dimensions, image) are wrapped in double quotes `" "`
- [ ] The date is in YYYY-MM-DD format with no quotes

---

## 6. Editing an Existing Artwork

### To change the title, description, date, medium, or dimensions:

1. In VS Code, navigate to `src` → `content` → `artwork`
2. Click on the `.md` file for the artwork you want to edit
3. Make your changes
4. Press **Command (⌘) + S** to save

### To replace the image:

1. Copy your new image into `public/images/artwork/` (give it a new filename)
2. Open the artwork's `.md` file in `src/content/artwork/`
3. Update the `image:` field to point to the new filename
4. Save the file
5. (Optional) Delete the old image file from `public/images/artwork/`

### To mark/unmark as Featured (shown on homepage):

1. Open the artwork's `.md` file
2. Change `featured: false` to `featured: true` (or vice versa)
3. Save the file

---

## 7. Removing an Artwork

1. In VS Code, navigate to `src` → `content` → `artwork`
2. Right-click the `.md` file for the artwork → **Delete**
3. Confirm deletion
4. (Optional but recommended) Also delete the image file from `public/images/artwork/` to keep the project tidy

---

## 8. Updating Your Homepage & Personal Intro

The homepage is the first thing visitors see. It contains your name, profile photo, and the text you write about yourself. Everything on the homepage lives in a single file.

**File to edit:** `src/pages/index.astro`

Open this file in VS Code. It will look like this (simplified):

```
<Base title="Your Name">
  <section class="about-section">
    <img src="/images/profile.jpg" alt="Your Name" class="profile-pic" />
    <h1>Your Name</h1>
    <p>
      A short sentence about who you are...
    </p>
    <p>
      A second paragraph...
    </p>
    <p>
      Email: <a href="mailto:you@example.com">you@example.com</a>
    </p>
  </section>
</Base>
```

### 8.1 — Change Your Name

Your name appears in **three places**. Search for `Your Name` in VS Code (press **Command ⌘ + F** and type `Your Name`) to find all of them:

1. **Page title** — at the top: `<Base title="Your Name">` — this appears in the browser tab
2. **Heading** — `<h1>Your Name</h1>` — the large name on the page
3. **Navigation bar & footer** — these are in a different file: `src/layouts/Base.astro`

To update the name in the nav bar and footer:
1. Open `src/layouts/Base.astro`
2. Find `<a href="/" class="site-name">Your Name</a>` — change `Your Name` to your actual name
3. Find `<p>&copy; {new Date().getFullYear()} Your Name</p>` near the bottom — change `Your Name` here too
4. Save the file

### 8.2 — Update Your Intro Paragraphs

In `src/pages/index.astro`, find the `<p>` blocks (paragraphs) and replace the placeholder text with your own words.

Each paragraph is wrapped in `<p>` and `</p>` tags:

```
<p>
  Write your first paragraph here. Replace all of this text.
</p>
<p>
  Write your second paragraph here. Replace all of this text.
</p>
```

> **Rules:**
> - Keep the `<p>` at the start and `</p>` at the end of each paragraph — they tell the browser where the paragraph begins and ends
> - You can add more paragraphs by duplicating the `<p>...</p>` block
> - You can remove a paragraph by deleting everything from `<p>` to `</p>` (including those tags)
> - Do NOT delete the `</section>` tag at the bottom

### 8.3 — Update Your Email Address

Find this line:
```
<a href="mailto:you@example.com">you@example.com</a>
```

Replace `you@example.com` in **both** places (inside `href="mailto:..."` and as the visible text) with your actual email address.

To remove the email line entirely, delete the whole `<p>` block containing it.

### 8.4 — Replace Your Profile Photo

1. Prepare your new photo: square crop recommended, at least 300×300 pixels, JPEG or PNG
2. Rename the file to `profile.jpg`
3. Copy it into `public/images/` — replacing the existing `profile.jpg`

> If you want to keep the old photo as a backup, name your new file something else (e.g. `profile-2026.jpg`), copy it to `public/images/`, then update `src/pages/index.astro`: find `src="/images/profile.jpg"` and change it to match your new filename.

The profile photo on the homepage is circular, 120×120 px on screen. The source image can be larger — it will be cropped automatically.

### 8.5 — Control Which Artworks Appear in "Selected Works"

The homepage shows a grid of artworks marked as featured. To add or remove pieces from this section, open the artwork's `.md` file in `src/content/artwork/` and change:

- `featured: true` → shown on homepage
- `featured: false` → only shown in the artwork gallery

---

## 9. Customising Fonts

All fonts are controlled in one file: `public/styles/global.css`

Open this file in VS Code and look for the section at the top labelled `/* ── Tokens ── */`. You will see:

```css
:root {
  --font-body: 'Georgia', serif;
  --font-ui: system-ui, sans-serif;
}
```

- **`--font-body`** is the serif font used for headings and body text (artwork descriptions, your intro paragraphs)
- **`--font-ui`** is the sans-serif font used for smaller labels, navigation, buttons, and card titles

### 9.1 — Using a Built-in Mac/Web Font

You can replace `Georgia` with any of these fonts that are already available on most computers without any extra setup:

| Font name | Style | Use in CSS as |
|-----------|-------|---------------|
| Georgia | Serif, classic | `'Georgia', serif` |
| Palatino | Serif, elegant | `'Palatino Linotype', serif` |
| Garamond | Serif, literary | `'Garamond', serif` |
| Times New Roman | Serif, traditional | `'Times New Roman', serif` |
| Arial | Sans-serif, clean | `'Arial', sans-serif` |
| Helvetica | Sans-serif, minimal | `'Helvetica Neue', sans-serif` |
| Futura | Sans-serif, geometric | `'Futura', sans-serif` |

**Example:** To change body text to Palatino:
```css
--font-body: 'Palatino Linotype', serif;
```

Just replace the text inside the quotes and keep the fallback (`, serif` or `, sans-serif`) after it.

### 9.2 — Using a Google Font (Free, More Options)

Google Fonts gives you access to hundreds of free fonts. This takes two steps.

**Step 1 — Get the font link from Google Fonts:**

1. Go to **https://fonts.google.com** in your browser
2. Find a font you like (e.g. "Cormorant Garamond" for a refined serif, or "Inter" for a modern sans-serif)
3. Click on the font name
4. Click the **"Get font"** button (top right)
5. Click **"Get embed code"**
6. You will see a block of code that looks like this:
   ```
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap" rel="stylesheet">
   ```
7. Copy that entire block

**Step 2 — Add it to the project:**

1. Open `src/layouts/Base.astro`
2. Find the line `<link rel="stylesheet" href="/styles/global.css" />`
3. Paste the Google Fonts code **above** that line:
   ```
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="/styles/global.css" />
   ```
4. Save `Base.astro`

**Step 3 — Use the font in the CSS:**

1. Open `public/styles/global.css`
2. Find `--font-body:` in the `:root` block
3. Replace it with the font name exactly as shown on Google Fonts (spaces replaced with spaces, wrapped in quotes):
   ```css
   --font-body: 'Cormorant Garamond', serif;
   ```
4. Save the file

### 9.3 — Changing Font Sizes

All font sizes are also in `global.css`. Find this section:

```css
/* ── Typography ── */
h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); ... }
h2 { font-size: 1.4rem; ... }
h3 { font-size: 1.1rem; ... }
p  { margin-bottom: 1rem; }
```

- `rem` is a unit relative to the base font size. `1rem` = 16px, `1.5rem` = 24px, `2rem` = 32px
- `h1` uses `clamp(min, preferred, max)` — the size flexes with the screen width between the min and max values
- You can simply replace `1.4rem` with a larger or smaller number

---

## 10. Customising Colors & Layout

### 10.1 — Changing Colors

All colors are stored as named variables in `public/styles/global.css` inside the `:root { }` block at the very top of the file:

```css
:root {
  --bg:     #fafaf8;   /* page background color */
  --text:   #1a1a1a;   /* main text color */
  --muted:  #666;      /* secondary text (labels, dates) */
  --accent: #2a2a2a;   /* accent (currently same as text) */
  --border: #e0e0e0;   /* lines, card borders */
}
```

Colors are written as **hex codes** — a `#` followed by 6 characters. You can find hex codes for any color using:
- Google: search "color picker" — Google has a built-in color tool
- **https://coolors.co** — generates harmonious palettes
- **https://colorhunt.co** — curated palette collections

**Example — Change to a warm cream background:**
```css
--bg: #fdf6ec;
```

**Example — Change to a dark mode:**
```css
--bg:     #111111;
--text:   #f0ede8;
--muted:  #888;
--border: #2a2a2a;
```

> After changing colors, save the file and check the preview (Section 11) — some color combinations can make text hard to read. Make sure there is enough contrast between `--bg` and `--text`. Make sure there is enough contrast between `--bg` and `--text`.

### 10.2 — Changing the Maximum Content Width

The content area has a maximum width so it doesn't stretch too wide on large monitors. Find this in the `:root` block:

```css
--max-w: 1100px;
```

- Decrease the number (e.g. `900px`) for a narrower, more column-like feel
- Increase the number (e.g. `1400px`) to use more of the screen on wide monitors

### 10.3 — Changing the Gallery Grid Card Size

The artwork gallery uses a responsive grid. Each card has a minimum width before the grid wraps to the next row. Find this in `global.css`:

```css
.gallery-grid {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
```

- Change `280px` to a larger number (e.g. `380px`) for bigger cards / fewer columns
- Change it to a smaller number (e.g. `200px`) for smaller cards / more columns

### 10.4 — Changing the Profile Photo Size & Shape

The profile photo is controlled by these styles in `global.css`:

```css
.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;   /* 50% = circle. Use 0 for square, 8px for rounded square */
  object-fit: cover;
  margin-bottom: 1.5rem;
}
```

- Change `120px` (both width and height) to resize the photo
- Change `border-radius: 50%` to `border-radius: 0` for a square photo
- Change `border-radius: 50%` to `border-radius: 8px` for a rounded square

### 10.5 — Changing Spacing

```css
--gap: 1.5rem;   /* space between grid cards and general element gaps */
```

Increase this for more breathing room between cards; decrease for a denser layout.

The main content padding around the page:
```css
main {
  padding: 3rem var(--gap);   /* 3rem top/bottom, --gap left/right */
}
```

Change `3rem` to add/reduce the top and bottom spacing of the main content area.

---

## 11. Previewing Your Changes Before Publishing

Before sending your changes to the live website, you can preview them on your own computer.

1. Open the **Terminal** application

2. Navigate to your project folder. If your project is on the Desktop:
   ```
   cd ~/Desktop/Altriaart.github.io
   ```
   (If you used Option B and the folder has a different name, replace `Altriaart.github.io` with that name.)

3. Start the local preview server:
   ```
   npm run dev
   ```
   You will see text appear saying something like:
   ```
   astro  v4.0.0 ready in 342 ms
   
   ┃ Local    http://localhost:4321/
   ```

4. Open your web browser and go to: **http://localhost:4321**

5. You will see your website exactly as it will appear when published. Browse to your artwork page to check everything looks right.

6. **To stop the preview server:** Go back to Terminal and press **Control (^) + C**

> **Tip:** While the preview server is running, any changes you save in VS Code will automatically refresh in the browser within a few seconds.

---

## 12. Publishing Your Changes to the Live Website

> This step requires a GitHub account and access to the Altriaart repository. If you don't have this access, send your changed files to the repository owner.

Publishing works by "pushing" (uploading) your changes to GitHub. GitHub will automatically rebuild and update the live website within about 2–3 minutes.

### Step 9.1 — Set Up Your Identity (First Time Only)

1. Open Terminal
2. Type the following, replacing the email and name with yours, and press **Enter** after each line:
   ```
   git config --global user.email "your-email@example.com"
   git config --global user.name "Your Name"
   ```

### Step 9.2 — Navigate to the Project Folder

In Terminal, make sure you're in the project folder:
```
cd ~/Desktop/Altriaart.github.io
```

### Step 9.3 — Check What Has Changed

Type this and press **Enter**:
```
git status
```
You will see a list of files you've added or changed, shown in red. This is just a summary — nothing has been saved to GitHub yet.

### Step 9.4 — Stage Your Changes

Tell Git which changes to include. Type this and press **Enter**:
```
git add .
```
(The period means "include all changes".)

### Step 9.5 — Write a Save Message

Type this and press **Enter**, replacing the message with a brief description of what you did:
```
git commit -m "add artwork: Cherry Blossom Study"
```

Other example messages:
- `"add artwork: Night Thoughts No. 4"`
- `"update description for Peaking At Me"`
- `"remove old landscape painting"`

### Step 9.6 — Upload to GitHub

Type this and press **Enter**:
```
git push
```

If prompted for a username and password:
- **Username:** your GitHub username
- **Password:** your GitHub Personal Access Token (not your GitHub account password — see the note below)

> **Note about GitHub passwords:** GitHub no longer accepts your account password for command-line operations. You need a Personal Access Token. To create one:
> 1. Go to **github.com** and sign in
> 2. Click your profile photo (top right) → **Settings**
> 3. Scroll down → **Developer settings** (bottom of left sidebar)
> 4. **Personal access tokens** → **Tokens (classic)**
> 5. Click **Generate new token (classic)**
> 6. Give it a name (e.g., "Portfolio Mac"), set expiration to 90 days, check the **repo** box
> 7. Click **Generate token** and copy it immediately (you won't see it again)
> 8. Use this token as your "password" when Terminal asks

### Step 9.7 — Wait for the Site to Update

1. Go to **https://github.com/Altriaart/Altriaart.github.io/actions** in your browser
2. You will see a workflow running (yellow circle = in progress, green tick = done)
3. Once the green tick appears, your changes are live at **https://Altriaart.github.io**

The process usually takes 1–3 minutes.

---

## 13. Quick Reference Card

### Terminal Commands Cheat Sheet

| What you want to do | Command |
|---------------------|---------|
| Go to project folder (Desktop) | `cd ~/Desktop/Altriaart.github.io` |
| Preview the site locally | `npm run dev` |
| Stop the preview | Press **Control + C** |
| Check what has changed | `git status` |
| Stage all changes | `git add .` |
| Save with a message | `git commit -m "your message here"` |
| Upload to GitHub | `git push` |
| Download latest from GitHub | `git pull` |

### Artwork File Naming Rules

- Use only: **a–z, 0–9, hyphens (-)**
- No spaces, no capitals, no special characters
- Always end with `.jpg` or `.png` for images, `.md` for text files
- ✅ `night-thoughts-03.jpg` and `night-thoughts-03.md`
- ❌ `Night Thoughts #3.jpg`

### Required Fields for Every Artwork

```
---
title: "Title in quotes"
date: YYYY-MM-DD
medium: "Medium in quotes"
image: "/images/artwork/filename.jpg"
---
```

`dimensions:`, `tags:`, `featured:`, and the description below the `---` are optional.

---

## 14. Troubleshooting

### "command not found: git"
Git isn't installed. Go back to Step 2.1 and install Xcode Command Line Tools.

### "command not found: npm" or "command not found: node"
Node.js isn't installed. Go back to Step 2.2 and install Node.js.

### The preview shows an error instead of my artwork
Check the `.md` file for these common mistakes:
- Missing or extra `---` lines at the top/bottom of the info block
- The image filename in `image:` doesn't exactly match the file in `public/images/artwork/` (check uppercase/lowercase letters)
- The `date:` is not in the YYYY-MM-DD format
- A field's value is missing quotes (e.g., `title: My Painting` instead of `title: "My Painting"`)

### My image doesn't appear on the page
- Make sure the image file is in `public/images/artwork/` (not just anywhere in the project)
- Make sure the `image:` field in the `.md` file starts with `/images/artwork/` (with the leading slash)
- Check that the filename matches exactly, including the file extension (`.jpg` vs `.JPG`)

### "git push" asks for a password but it doesn't accept my GitHub password
You need a Personal Access Token instead of your password. See the note in Step 9.6 for instructions.

### "Updates were rejected because the remote contains work that you do not have locally"
Someone else (or the GitHub Actions workflow) has made changes to GitHub that you don't have on your computer. First run:
```
git pull
```
Then try `git push` again.

### The website hasn't updated after 10 minutes
1. Check the Actions tab: **https://github.com/Altriaart/Altriaart.github.io/actions**
2. If there's a red cross (failed build), click on it to see the error
3. Common cause: a typo in a `.md` file that makes the build fail — check for missing quotes or incorrectly named image files

---

*Manual version: May 2026 | Website: https://Altriaart.github.io*
