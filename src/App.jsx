import { useState, useEffect } from 'react'
import './App.css'
import { marked } from 'marked'

// Helper to import all markdown files in src/questions
function useQuestions() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    // Vite's import.meta.glob for dynamic imports
    const files = import.meta.glob('./questions/*.md', { as: 'raw' })
    const loadQuestions = async () => {
      const entries = await Promise.all(
        Object.entries(files).map(async ([path, loader]) => {
          const raw = await loader()
          // Extract first line as question, rest as answer
          const [first, ...rest] = raw.split('\n')
          const question = first.replace(/^# /, '').trim()
          const answer = rest.join('\n').trim()
          return { id: path.split('/').pop().replace('.md',''), question, answer }
        })
      )
      setQuestions(entries)
    }
    loadQuestions()
  }, [])

  return questions
}

function App() {
  const [expandedQuestions, setExpandedQuestions] = useState({})
  const questions = useQuestions()

  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }))
  }

  useEffect(() => {
    // Function to initialize Tenor embeds
    const initializeTenor = () => {
      if (window.TenorEmbed) {
        window.TenorEmbed.insert();
      }
    };

    // Check if script is already loaded
    if (window.TenorEmbed) {
      initializeTenor();
    } else {
      // Wait for script to load
      const script = document.createElement('script');
      script.src = 'https://tenor.com/embed.js';
      script.async = true;
      script.onload = initializeTenor;
      document.head.appendChild(script);
    }
  }, [])

  return (
    <div className="container">
      <main className="content">
        <h1>Why a PhD?</h1>
        
        <div className="header-section">
          <div className="author-card">
            <h3>Roger González March</h3>
            <p className="author-subtitle">PhD Candidate Aspirant</p>
            <p className="author-subtitle">Data Scientist | Urban Research</p>
            <p className="author-location">📍 Barcelona, Catalonia</p>
            
            <div className="social-links-compact">
              <a href="https://www.linkedin.com/in/roger-gonz%C3%A1lez-march" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a href="https://github.com/RogerGMarch" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a href="https://bsky.app/profile/rogergmarch.bsky.social" target="_blank" rel="noopener noreferrer" className="social-icon" title="Bluesky">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-2.67.297-5.568-.628-6.383-3.364C.378 9.418 0 4.458 0 3.768c0-.688.139-1.86.902-2.203C1.561 1.266 2.566.944 5.202 2.805c2.752 1.942 5.711 5.881 6.798 7.995z"/>
                  <path d="M12 10.8c1.087-2.114 4.046-6.053 6.798-7.995C21.434.944 22.439 1.266 23.098 1.565c.763.343.902 1.515.902 2.203 0 .69-.378 5.65-.624 6.479-.815 2.736-3.713 3.66-6.383 3.364-.136-.02-.275-.039-.415-.056.138.022.276.04.415.056 2.67.297 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24-2.752 1.942-5.711 5.881-6.798 7.995z"/>
                </svg>
              </a>
              
              <a href="mailto:rogergonzalezmarch@gmail.com" className="social-icon" title="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.637l1.363 1.023L12 13.12l8.364-8.276 1.363-1.023h.637c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="gif-section">
            <div className="tenor-gif-embed" data-postid="5310983" data-share-method="host" data-aspect-ratio="1.38462" data-width="100%">
              <a href="https://tenor.com/view/grad-bart-simpson-gif-5310983">Grad Bart GIF</a> from <a href="https://tenor.com/search/grad-gifs">Grad GIFs</a>
            </div>
          </div>
        </div>
        
        <div className="intro">
          <p>
            A lot of people ask me this—usually with a puzzled look, a sigh, or even a face that says <em>"poor soul."</em><br />
            They wonder: <em>"Why a PhD if you're already working in research?"</em>
          </p>
          
          <p>
            The truth is, life changes quickly. You may think you've mapped your future out clearly, but even the near-term is full of surprises. What feels like a stable plan can shift overnight. For me, doing a PhD is not about following a rigid path—it's about <strong>opening the right doors</strong> and <strong>reducing uncertainty</strong> in the long run.
          </p>
          
          <p>
            I've learned that to work on what you love <em>and</em> have stability, you need to design a path that blends both freedom and opportunity. That's what a PhD can offer: the space to dive deep, explore, and shape your own expertise—while staying embedded in the scientific ecosystem I already enjoy.
          </p>
          
          <p>
            Yes, it's hard. Yes, it's long. But I'm in a field (computational data science) where a PhD doesn't have to mean sacrificing your income or living precariously. There are ways to make it work—and even thrive—while doing meaningful, publishable, fun work.
          </p>
          
          <p>
            And honestly? I want to earn well. I want to grow. I want to be challenged. I could not settle for less.
          </p>
        </div>

        <div className="questions">
          {questions.map(q => (
            <div className="question" key={q.id}>
              <button 
                className="question-header"
                onClick={() => toggleQuestion(q.id)}
              >
                <h2>{q.question}</h2>
                <span className={`question-toggle ${expandedQuestions[q.id] ? 'expanded' : ''}`}>▼</span>
              </button>
              <div className={`question-content ${expandedQuestions[q.id] ? 'expanded' : 'collapsed'}`}
                dangerouslySetInnerHTML={{ __html: marked.parse(q.answer) }}
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="contact-card">
          <p>Feel free to reach out if you'd like to discuss anything about PhD journeys, research, or just want to chat!</p>
        </div>
      </footer>
    </div>
  )
}

export default App
