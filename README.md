# patrickrottman.com

**My personal portfolio website built with modern web technologies.**

---

## 🚀 Technology Stack

- **Framework**: Angular 19  
- **UI Components**: Angular Material  
- **Styling**: SCSS with CSS Custom Properties  
- **Animations**: CSS Transitions & Intersection Observer API  
- **Deployment**: GitHub Pages with GoDaddy DNS  
- **Icons**: Material Icons  

---

## 🌟 Features

- Responsive design optimized for all devices  
- Dark/Light theme with system preference detection  
- Smooth scroll animations  
- Progressive component loading  
- Modern, clean UI with consistent styling  
- Accessible navigation  

---

## 📂 Project Structure

```plaintext
src/
├── app/
│   ├── components/    # Reusable components
│   │   ├── contact/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── header/
│   │   ├── skills/
│   │   └── summary/
│   ├── pages/         # Route components
│   │   ├── home/
│   │   └── blog/
│   └── services/      # Application services
│       └── theme.service.ts
└── styles/            # Global styles
    ├── animations.scss
    └── theme.scss
```
---

## ⚙️ Development

1. **Clone the repository**  
   git clone https://github.com/patrickrottman/patrickrottman.com.git
   
2. **Install dependencies**  
   npm install
   
3. **Start development server**  
   ng serve

---

## 🚢 Deployment

The site is automatically deployed to GitHub Pages using a GitHub Actions workflow. The deployment process includes:  
- Building the Angular application based on the event type (push or pull request).  
- Deploying the build output to the `gh-pages` branch.  
- Configuring GoDaddy DNS to point `patrickrottman.com` to the GitHub Pages deployment.

### Deployment Workflow

The GitHub Actions workflow is defined as follows:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened]

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install
        working-directory: patrickrottman

      - name: Build
        working-directory: patrickrottman
        run: |
          if [ ${{ github.event_name }} == 'pull_request' ]; then
            npm run build -- --configuration production --base-href "/pr-${{ github.event.number }}/"
          else
            npm run build -- --configuration production --base-href "/"
          fi

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: patrickrottman/dist/patrickrottman/browser
          branch: gh-pages
          clean: false
          clean-exclude: |
            pr-*/**
          target-folder: ${{ github.event_name == 'pull_request' && format('pr-{0}', github.event.number) || '' }}
```

This workflow ensures:  
- **Push Events**: Automatically deploys the main branch build to `gh-pages`.  
- **Pull Requests**: Builds and deploys a preview with a `pr-{number}` base URL for easier review.  
- **DNS Integration**: GoDaddy DNS redirects `patrickrottman.com` to the GitHub Pages deployment.  

## 📧 Contact

For any questions or suggestions, feel free to reach out at:  
**patrick.rottman@icloud.com**
