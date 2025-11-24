// Fetch and populate portfolio data
async function loadPortfolioData() {
    try {
        const response = await fetch('./portfolio-data.json');
        const data = await response.json();

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

    // Fade out scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        const opacity = 1 - Math.min(1, scrolled / 300);
        scrollIndicator.style.opacity = opacity;
        scrollIndicator.style.transform = `translateY(${scrolled * 0.5}px)`; // Optional: move it down slightly while fading
    }
});

