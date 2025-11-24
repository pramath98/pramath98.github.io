// Fetch and populate portfolio data
// Portfolio Data
const portfolioData = {
    "personal": {
        "name": "Pramath",
        "fullName": "Pramath Kelkar",
        "title": "Senior Software Engineer with passion to build scalable websites",
        "email": "pramath98@gmail.com",
        "socials": {
            "github": "https://www.github.com/pramath98",
            "linkedin": "https://www.linkedin.com/in/pramath-kelkar/"
        }
    },
    "about": {
        "description": "Experienced in developing robust frontend solutions with efficient state management, improving application performance by 30% through optimized code and seamless load times. Skilled in backend development using Spring Boot to create scalable RESTful APIs, ensuring secure and efficient data handling. Proficient in leveraging Docker for containerization and deploying applications on cloud platforms like AWS. Previously worked extensively with SPFx, Power Automate for automation solutions. Passionate about delivering end-to-end solutions with a focus on performance, scalability, and best coding practices."
    },
    "skills": [
        {
            "name": "React.js",
            "icon": "fab fa-react",
            "color": "#61dafb"
        },
        {
            "name": "JavaScript",
            "icon": "fab fa-js-square",
            "color": "#f7df1e"
        },
        {
            "name": "TypeScript",
            "icon": "fab fa-js-square",
            "color": "#3178c6"
        },
        {
            "name": "Java",
            "icon": "fab fa-java",
            "color": "#ed8b00"
        },
        {
            "name": "Spring Boot",
            "icon": "fas fa-leaf",
            "color": "#6db33f"
        },
        {
            "name": "PostgreSQL",
            "icon": "fas fa-database",
            "color": "#336791"
        },
        {
            "name": "MongoDB",
            "icon": "fas fa-database",
            "color": "#47a248"
        },
        {
            "name": "MySQL",
            "icon": "fas fa-database",
            "color": "#4479a1"
        },
        {
            "name": "Docker",
            "icon": "fab fa-docker",
            "color": "#2496ed"
        },
        {
            "name": "Kubernetes",
            "icon": "fas fa-cube",
            "color": "#326ce5"
        },
        {
            "name": "AWS",
            "icon": "fab fa-aws",
            "color": "#ff9900"
        },
        {
            "name": "Redux",
            "icon": "fas fa-sync-alt",
            "color": "#764abc"
        },
        {
            "name": "Testing",
            "icon": "fas fa-vial",
            "color": "#e74c3c"
        },
        {
            "name": "CI/CD",
            "icon": "fas fa-code-branch",
            "color": "#9b59b6"
        },
        {
            "name": "Agile",
            "icon": "fas fa-users",
            "color": "#3498db"
        }
    ],
    "experience": {
        "professional": [
            {
                "title": "Senior Software Engineer",
                "company": "HSBC Technology",
                "companyIcon": "fas fa-university",
                "period": "Jul 2024 - Present",
                "description": [
                    "Currently working on innovative financial technology solutions and contributing to HSBC's digital transformation initiatives."
                ]
            },
            {
                "title": "Senior Systems Engineer",
                "company": "Infosys Ltd.",
                "companyIcon": "fas fa-building",
                "period": "Jan 2022 - Jul 2024",
                "description": [
                    "Led development of scalable RESTful APIs using Spring Boot and React.js, improving application performance by 30% and managing containerized deployments with Docker/Kubernetes for major healthcare clients.",
                    "Spearheaded maintenance of 3-4 high-traffic React.js applications, improved code quality by 15% through comprehensive reviews, and collaborated with cross-functional teams to deliver seamless frontend-backend integration."
                ]
            }
        ],
        "freelance": [
            {
                "title": "Creative Head",
                "company": "APlize Social",
                "companyIcon": "fas fa-palette",
                "period": "Jun 2020 - Dec 2021",
                "description": [
                    "With problem solving and development skills, managed end-to-end project lifecycles for 10+ web applications, from concept through deployment, consistently delivering within deadlines and achieving a 98% client satisfaction rate"
                ]
            }
        ]
    }
};

// Load portfolio data
async function loadPortfolioData() {
    try {
        const data = portfolioData;

        // Populate home section (if elements exist)
        const homeName = document.getElementById('home-name');
        if (homeName) homeName.textContent = data.personal.name;

        const homeTitle = document.getElementById('home-title');
        if (homeTitle) homeTitle.textContent = data.personal.title;

        // Populate about section
        document.getElementById('about-description').textContent = data.about.description;

        // Populate skills section
        populateSkills(data.skills);

        // Populate professional experience
        populateExperience(data.experience.professional, 'professional-timeline');

        // Populate freelance experience
        populateExperience(data.experience.freelance, 'freelance-timeline');

        // Populate header
        populateHeader(data.personal);

    } catch (error) {
        console.error('Error loading portfolio data:', error);
    }
}

// Populate skills grid
function populateSkills(skills) {
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = '';

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.setAttribute('data-skill', skill.name);

        skillItem.innerHTML = `
            <i class="${skill.icon}" style="color: ${skill.color}"></i>
            <span class="skill-name">${skill.name}</span>
        `;

        skillsGrid.appendChild(skillItem);
    });
}

// Populate experience timeline
function populateExperience(experiences, timelineId) {
    const timeline = document.getElementById(timelineId);
    timeline.innerHTML = '';

    experiences.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        const descriptionList = exp.description.map(desc => `<li>${desc}</li>`).join('');

        timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <div class="company-logo">
                        <i class="${exp.companyIcon}"></i>
                        <span class="company-name">${exp.company}</span>
                    </div>
                    <h3>${exp.title}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <div class="timeline-period">${exp.period}</div>
                </div>
                <div class="timeline-description">
                    <ul>${descriptionList}</ul>
                </div>
            </div>
        `;

        timeline.appendChild(timelineItem);
    });
}

// Populate header
function populateHeader(personal) {
    const emailLink = document.getElementById('email-link');
    const githubLink = document.getElementById('github-link');
    const linkedinLink = document.getElementById('linkedin-link');

    emailLink.href = `mailto:${personal.email}`;
    githubLink.href = personal.socials.github;
    linkedinLink.href = personal.socials.linkedin;
}

// Existing scroll functionality
const header = document.querySelector('.header');
const btn = document.querySelector('#scroll-to-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('on-scroll');
        btn.style.display = 'flex';
    } else {
        header.classList.remove('on-scroll');
        btn.style.display = 'none';
    }
});

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mouse follow effect function
const applyMouseFollowEffect = (element) => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const strength = 0.1;
        element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)';
    });
};

// Apply mouse follow effect to elements
document.addEventListener('DOMContentLoaded', () => {
    // Load portfolio data first
    loadPortfolioData().then(() => {
        // Then apply mouse follow effects
        const btn = document.querySelector('.email-cta');
        if (btn) applyMouseFollowEffect(btn);
    });
});

// Parallax Effect for Blobs
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const blobs = document.querySelectorAll('.blob');

    blobs.forEach((blob, index) => {
        // Increased speeds for more visible parallax
        const speed = 0.2 + (index * 0.15);
        const yPos = -(scrolled * speed);

        blob.style.marginTop = `${yPos}px`;
    });
});

