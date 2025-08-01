import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [bootDone, setBootDone] = useState(false);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const commands = {
  help: `
<span class="section-title">Available Commands:</span>

<span class="help-command">about</span>      - Learn more about me
<span class="help-command">skills</span>     - View my technical skills
<span class="help-command">experience</span> - See my work experience
<span class="help-command">projects</span>   - View my notable projects
<span class="help-command">education</span>  - See my educational background
<span class="help-command">contact</span>    - Get my contact information
<span class="help-command">clear</span>      - Clear the terminal
<span class="help-command">whoami</span>     - Display current user
<span class="help-command">date</span>       - Show current date and time
<span class="help-command">uname</span>      - System information

<span class="info">Tip: Use arrow keys to navigate command history</span>
  `,

  about: `
<span class="section-title">About Gaurav Yadav</span>

Hello! I'm Gaurav, a backend developer passionate about designing scalable systems and automating real-world workflows.  
I specialize in architecting resilient APIs, working with distributed systems, and leveraging cloud-native technologies  
to drive performance, scalability, and business value.

<span class="highlight">Core Strengths:</span>
• 🚀 Architecting modular, production-grade microservices (Django, FastAPI, Node.js)  
• 💸 Building secure and unified payment platforms with Razorpay, Juspay, and ICICI integrations  
• 💾 Designing scalable and optimized data models (PostgreSQL, MongoDB, Elasticsearch)  
• ☁️ Deploying serverless and containerized apps on AWS & GCP (Lambda, Cloud Functions, EC2)  
• 📈 Building internal tools and search systems that directly impact business metrics  
• 🧪 Enhancing test coverage and CI/CD pipelines for deployment agility  

<span class="success">Current Status:</span> Actively seeking impactful backend engineering roles and open to collaborations.
  `,

  skills: `
<span class="section-title">Technical Skills</span>

<span class="highlight">Languages & Frameworks:</span>
  • Python (Django, FastAPI, Flask)  
  • JavaScript (Node.js, Express.js)  
  • C++, Java  
  • Shell Scripting  

<span class="highlight">Databases:</span>
  • PostgreSQL, MongoDB  
  • Redis, MSSQL  
  • Database schema design & optimization  
  • ORM tools: Django ORM, SQLAlchemy  

<span class="highlight">Cloud & DevOps:</span>
  • AWS (EC2, Lambda, RDS), GCP (Cloud Functions, Pub/Sub, Cloud Tasks)  
  • Docker, Serverless architecture  
  • CI/CD pipelines (GitHub Actions, GitLab CI/CD)  

<span class="highlight">Tools & Technologies:</span>
  • Git, GitHub, Linux  
  • Elasticsearch  
  • Celery, Azure Service Bus  
  • Postman, Swagger/OpenAPI  

<span class="highlight">Architecture & Practices:</span>
  • Microservices & Serverless architecture  
  • RESTful API design  
  • Event-driven architecture  
  • Unit testing & code coverage  
  • Agile development & code reviews
  `,

  experience: `
<span class="section-title">Work Experience</span>

<span class="highlight">Backend Developer</span> | Betterhalf.ai (YC W’21)  
📅 July 2023 – Present  
• Designed a modular payment orchestration system using Django with Razorpay, Juspay, and ICICI integrations  
• Built a financial ledger using PostgreSQL and MongoDB to manage client and vendor transactions  
• Developed serverless media compression service cutting CDN costs by 40%  
• Replaced MongoDB with Elasticsearch for faster geospatial search (2.5x improvement)  
• Built core components for Ideabook (Pinterest-style wedding platform) improving search relevance  
• Created a Django lifecycle management tool, raising lead qualification rate from 25% to 38%  
• Automated custom wedding proposal generation under 1 minute to enhance client engagement  

<span class="highlight">Backend Developer Intern</span> | Betterhalf.ai  
📅 Jan 2023 – July 2023  
• Developed “Flash” microservice using FastAPI, Celery & Docker for scheduled job execution  
• Boosted test coverage from 75% to 93% across Django-based services  
• Contributed to admin panel, venue listings & SEO engine—helped raise traffic to 600K/month  

<span class="highlight">Software Engineer Intern</span> | Siemens-Energy  
📅 Jan 2022 – July 2022  
• Implemented Role-Based Access Control (RBAC) for secure feature access  
• Built a microservice for data validation/transformation using Azure Service Bus  
• Enabled multilingual support with German localization via i18n-react  

<span class="success">Key Achievements:</span>  
• Cut CDN/media costs by 40% with serverless compression  
• Increased serviceable lead quality by 52% using real-time checks  
• Helped raise monthly website traffic to 600K+ via SEO contributions  
• Twice awarded “Go-Getters Award” at Siemens for excellence
  `,

  projects: `
<span class="section-title">Notable Projects</span>

<span class="project-title">💬 Chat-app</span>
<span class="project-tech">Tech: React.js, Node.js, Socket.io</span>
• Real-time chat application with user authentication and group chat support

<span class="project-title">🐍 Python In-Memory Store</span>
<span class="project-tech">Tech: Python</span>
• In-memory, Redis-like key-value data store written in Python, with TTL support

<span class="project-title">💳 QuickPay</span>
<span class="project-tech">Tech: Django, PostgreSQL, Razorpay</span>
• Built seamless payment API integration via Django backend

<span class="project-title">🎲 Game Design</span>
<span class="project-tech">Tech: JavaScript</span>
• Turn-based simulated combat game demonstrating game-state management

<span class="project-title">🩺 AppointX</span>
<span class="project-tech">Tech: Node.js, MySQL, EJS, CSS</span>
• Web app for booking real-time doctor appointments, streamlining scheduling process

<span class="project-title">📝 Qt Textpad</span>
<span class="project-tech">Tech: C++, Qt</span>
• Desktop Notepad-style application built with Qt Creator, featuring copy/cut/clear functions

<span class="info">GitHub: <a href="https://github.com/theydvgaurav" target="_blank">https://github.com/theydvgaurav</a> (View more projects)</span>
  `,

  education: `
<span class="section-title">Education</span>

<span class="highlight">Bachelor of Technology (B.Tech)</span>
Computer Science Engineering  
📍 Indian Institute of Information Technology, Sonepat  
📅 2019 - 2023  
🎯 CGPA: 8.9/10
  `,

  contact: `
<span class="section-title">Contact Information</span>

<span class="highlight">Let's Connect!</span>

💼 LinkedIn: <a href="https://www.linkedin.com/in/theydvgaurav/" target="_blank">https://www.linkedin.com/in/theydvgaurav/</a><br>
🐱 GitHub:   <a href="https://github.com/theydvgaurav" target="_blank">https://github.com/theydvgaurav</a>

<span class="highlight">Preferred Communication:</span>
• Email for formal inquiries<br>
• LinkedIn for networking<br>
• GitHub for code collaboration

<span class="success">Status:</span> Currently open to new opportunities!<br>
<span class="info">Response Time:</span> Usually within 24 hours

<span class="warning">Note:</span> Feel free to reach out for:<br>
• Job opportunities<br>
• Technical discussions<br>
• Open source collaborations<br>
• Mentorship requests
  `,

  clear: 'CLEAR',

  whoami: `<span class="success">Gaurav Yadav - Backend Developer</span>`,

  date: `<span class="info">${new Date().toString()}</span>`,

  uname: `<span class="info">Portfolio OS 1.0.0 (Backend Developer Edition)</span>`
};


  useEffect(() => {
    const timer = setTimeout(() => setBootDone(true), 3000);
    document.addEventListener('click', () => inputRef.current?.focus());
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [history]);

  const handleCommand = () => {
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    let result = commands[cmd] ?? `<span class='error'>Command not found: ${cmd}</span>`;
    if (result === 'CLEAR') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, { cmd, result }]);
    }
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const nextIndex = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(nextIndex);
      setInput(history[history.length - 1 - nextIndex]?.cmd || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(nextIndex);
      setInput(history[history.length - 1 - nextIndex]?.cmd || '');
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn close"></span>
          <span className="btn minimize"></span>
          <span className="btn maximize"></span>
        </div>
        <div className="terminal-title">gaurav@portfolio:~$</div>
      </div>
      <div className="terminal-body" ref={outputRef}>
        {!bootDone ? (
          <div className="boot-sequence">
            <div className="boot-line">Starting Gaurav's Portfolio Terminal...</div>
            <div className="boot-line">Loading backend developer profile...</div>
            <div className="boot-line">Initializing command interface...</div>
            <div className="boot-line">System ready.</div>
            <div className="boot-line">Type 'help' to see available commands.</div>
          </div>
        ) : (
          <div className="terminal-content">
            {history.map((item, idx) => (
              <div key={idx}>
                <div className="command-history">gaurav@portfolio:~$ {item.cmd}</div>
                <div className="command-output" dangerouslySetInnerHTML={{ __html: item.result }} />
              </div>
            ))}
            <div className="input-line">
              <span className="prompt">gaurav@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                spellCheck={false}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
