AOS.init({ duration: 1000, once: true });

// 1. Theme Logic (Start on Light)
const themes = ['dark', 'light', 'neon'];
let currentThemeIndex = 1; 
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    document.documentElement.setAttribute('data-theme', newTheme);
    
    if(newTheme === 'dark') themeIcon.className = 'fas fa-moon';
    else if(newTheme === 'light') themeIcon.className = 'fas fa-sun';
    else themeIcon.className = 'fas fa-bolt';
});

// 2. Mobile Menu Logic (Fixed Clarity)
const mobileBtn = document.getElementById('mobile-btn');
const closeBtn = document.getElementById('close-mobile');
const overlay = document.getElementById('mobile-overlay');
const body = document.body;

function toggleMenu() {
    body.classList.toggle('mobile-menu-active');
}

mobileBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// 3. Project Data
const projects = [
    { title: "API Hub (First API)", url: "https://golamazamgm.github.io/B9A6-solve/", desc: "API data rendering solve." },
    { title: "DOM Logic (First JS)", url: "https://golamazamgm.github.io/B9A5-solve/", desc: "Vanilla JS interaction solve." },
    { title: "Tailwind UI (Assn 3)", url: "https://golamazamgm.github.io/assignment3/", desc: "Responsive utility-first design." },
    { title: "Core Web (Assn 2)", url: "https://golamazamgm.github.io/assignment2/", desc: "Structural web fundamentals." }
];

// 4. Showcase Logic
const projectList = document.getElementById('project-list');
const iframe = document.getElementById('project-iframe');
const browserUrl = document.getElementById('browser-url');
const loader = document.getElementById('loader');
const newTabBtn = document.getElementById('new-tab-btn');

function renderShowcase() {
    projectList.innerHTML = projects.map((p, i) => `
        <button class="project-tab w-full glass p-5 rounded-2xl text-left border-l-4 border-transparent hover:border-[var(--color-primary)] transition-all" data-url="${p.url}">
            <h3 class="font-black text-xs uppercase tracking-tight">${p.title}</h3>
            <p class="text-[9px] opacity-50 mt-1">${p.desc}</p>
        </button>
    `).join('');

    const tabs = document.querySelectorAll('.project-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => loadProject(tab.getAttribute('data-url'), tab));
    });

    loadProject(projects[0].url, tabs[0]);
}

function loadProject(url, activeTab) {
    loader.style.display = 'flex';
    iframe.style.opacity = '0';
    iframe.src = url;
    browserUrl.textContent = url;
    newTabBtn.href = url;

    document.querySelectorAll('.project-tab').forEach(t => t.classList.remove('border-[var(--color-primary)]', 'bg-[var(--color-primary)]/5'));
    activeTab.classList.add('border-[var(--color-primary)]', 'bg-[var(--color-primary)]/5');
}

iframe.onload = () => {
    loader.style.display = 'none';
    iframe.style.opacity = '1';
};

renderShowcase();