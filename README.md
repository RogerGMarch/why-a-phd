# Why a PhD? – Personal Q&A Webpage

This is a simple, modern, and easily customizable React-based webpage for sharing your motivations, doubts, and experiences about pursuing a PhD. It is designed for PhD students, candidates, or anyone who wants to explain their journey and inspire others.

## Features

- Built with [Vite](https://vitejs.dev/) and React functional components
- Clean, semantic HTML and modern CSS (CSS modules or inline styles)
- Responsive and accessible design
- Q&A content is stored in Markdown files for easy editing and localization
- Minimal dependencies for fast loading and easy maintenance

---

## How to Use This Template

### 1. Clone the Repository

```sh
git clone https://github.com/YOUR_USERNAME/Why_a_PhD.git
cd Why_a_PhD
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Customize Your Q&A

All questions and answers are stored as Markdown files in `src/questions/`.

- To edit a question, open the corresponding `.md` file and modify the content.
- To add a new question, create a new Markdown file in `src/questions/` with your question as the heading and your answer below.
- To remove a question, simply delete the corresponding file.

**Example:**

```markdown
# What motivated you to start a PhD?

Your answer here...
```

### 4. Run Locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see your site.

---

## Deploying to Vercel

You can deploy this site for free using [Vercel](https://vercel.com/), which integrates seamlessly with GitHub.

### Steps:

1. **Push your project to a GitHub repository**

   - If you haven't already, create a new repository on GitHub and push your code:

     ```sh
     git remote add origin https://github.com/YOUR_USERNAME/Why_a_PhD.git
     git branch -M main
     git push -u origin main
     ```

2. **Sign in to [Vercel](https://vercel.com/) with your GitHub account**

3. **Import your repository**
   - Click "New Project" and select your `Why_a_PhD` repository.
   - Vercel will auto-detect the framework (Vite + React).
   - For the build command, use: `npm run build`
   - For the output directory, use: `dist`

4. **Deploy**
   - Click "Deploy" and wait for the build to finish.
   - Your site will be live at `https://your-project-name.vercel.app`

5. **(Optional) Set up a custom domain**
   - In your Vercel dashboard, you can add a custom domain for your site.

---

## Contributing

Feel free to fork this project and adapt it for your own PhD journey or research group. Pull requests are welcome!

---

**Inspire others by sharing your story!**
