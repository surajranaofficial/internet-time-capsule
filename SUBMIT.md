## 🚀 Quick Start Guide

### Local Setup
1. Clone or download this repository
2. Open `index.html` in any modern browser
3. That's it! No installation, no npm, no nonsense.

### Or just double-click
The beauty of vanilla web apps: just double-click `index.html` and you're in the apocalypse.

## 📝 How to Submit to Devpost

### Before Submitting:
1. **Test the app** - Add some messages, check filters work
2. **Take screenshots** - Capture the glitchy aesthetic
3. **Record a demo video** (optional but recommended)
4. **Push to GitHub** and make repo public

### Submission Checklist:
- [ ] GitHub repo is public
- [ ] README.md is complete with project description
- [ ] Screenshots/demo added to repo
- [ ] Test on multiple browsers
- [ ] Devpost submission filled out with:
  - Project name: **Internet Time Capsule**
  - Tagline: **What would you say if the internet was ending tomorrow?**
  - Description: Use content from DEVPOST.md
  - Built with: html5, css3, javascript, localstorage
  - Links: GitHub repo link

### GitHub Commands:
```bash
cd codepocalypse-project

# Create GitHub repo (using gh CLI)
gh repo create codepocalypse-time-capsule --public --source=. --remote=origin

# Push to GitHub
git branch -M main
git push -u origin main
```

Or create manually:
1. Go to github.com/new
2. Name: `codepocalypse-time-capsule`
3. Make it public
4. Don't initialize with README (we already have one)
5. Copy the remote URL and:
```bash
git remote add origin YOUR_GITHUB_URL
git branch -M main
git push -u origin main
```

## 🎬 Demo Video Tips (Optional)

Quick 2-minute video showing:
1. The apocalyptic UI (0:10)
2. Adding a message (0:30)
3. Filtering messages (0:20)
4. Stats dashboard (0:20)
5. The random glitch effect (0:10)
6. LocalStorage persistence (refresh page) (0:20)
7. Closing thoughts (0:10)

Tools: OBS, Loom, or even iPhone screen record

## 📸 Screenshot Ideas

Capture:
- Homepage with countdown
- Message input form
- Grid of messages (different types)
- Glitch effect happening
- Mobile responsive view

## 🏆 Awards to Target

When submitting, mention you're going for:
- ✅ **"Most Cursed Build"**
- ✅ **"Shouldn't Have Worked But Did"**
- ✅ **"Built While Sleep-Deprived"**
- ✅ **"Best Bug That Became a Feature"**

## 💡 Devpost Description Template

Copy content from `DEVPOST.md` and paste into Devpost submission form.

Key sections:
- **Inspiration** - Why we built this
- **What it does** - Features overview
- **How we built it** - Tech stack
- **Challenges** - What was hard
- **Accomplishments** - What we're proud of
- **What we learned** - Key takeaways
- **What's next** - Future plans

## ⚡ Last-Minute Improvements (If Time Allows)

Priority order:
1. Add more starter messages for demo
2. Make mobile responsive better
3. Add export messages feature
4. Add share button
5. Deploy to GitHub Pages

## 🌐 Deploy to GitHub Pages (5 minutes)

```bash
# After pushing to GitHub
gh repo edit --homepage "https://yourusername.github.io/codepocalypse-time-capsule"

# Enable GitHub Pages
# Go to repo Settings > Pages > Source: main branch > Save
```

Then add live link to Devpost!

---

**Good luck! The apocalypse waits for no one.** 🔥
