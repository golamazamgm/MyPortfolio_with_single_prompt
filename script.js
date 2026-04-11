// Initialize AOS Animations
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out'
});

// Project Data
const projects = [
    {
        title: "E-Commerce Experience",
        tech: "MERN + Stripe",
        description: "Full-featured shopping experience with secure checkout.",
        link: "#",
        delay: 0
    },
    {
        title: "Real-time Chat App",
        tech: "Socket.io + React",
        description: "Instant messaging with global room connectivity.",
        link: "#",
        delay: 100
    },
    {
        title: "Developer Network",
        tech: "Express & MongoDB",
        description: "A social platform for developers to share portfolios.",
        link: "#",
        delay: 200
    }
];

const projectGrid = document.getElementById('project-grid');

function displayProjects() {
    projectGrid.innerHTML = projects.map(project => `
        <div class="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" 
             data-aos="fade-up" 
             data-aos-delay="${project.delay}">
            <div class="h-52 bg-indigo-50 flex items-center justify-center relative overflow-hidden">
                <i class="fas fa-laptop-code text-5xl text-indigo-200 group-hover:scale-125 group-hover:text-indigo-400 transition-all duration-700"></i>
                <div class="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors"></div>
            </div>
            <div class="p-8">
                <span class="text-xs font-bold text-indigo-500 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">${project.tech}</span>
                <h3 class="text-xl font-bold mt-4 mb-3 text-gray-800">${project.title}</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-6">${project.description}</p>
                <a href="${project.link}" class="inline-flex items-center gap-2 font-bold text-indigo-600 hover:gap-4 transition-all">
                    View Project <i class="fas fa-chevron-right text-xs"></i>
                </a>
            </div>
        </div>
    `).join('');
}

displayProjects();