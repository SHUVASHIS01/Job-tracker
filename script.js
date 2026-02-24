const initialJobs = [
    {
        id: 1,
        companyName: "Google",
        position: "Frontend Software Engineer",
        location: "Mountain View, CA",
        type: "Full-time",
        salary: "$150,000 - $180,000",
        description: "Join our core team to build scalable and highly performant web applications used by millions.",
        status: "all"
    },
    {
        id: 2,
        companyName: "Meta",
        position: "React Native Developer",
        location: "Menlo Park, CA (Hybrid)",
        type: "Full-time",
        salary: "$140,000 - $170,000",
        description: "Help us build the next generation of mobile experiences. Strong experience with React and mobile ecosystems required.",
        status: "all"
    },
    {
        id: 3,
        companyName: "Stripe",
        position: "Backend Engineer, Payments",
        location: "Remote",
        type: "Full-time",
        salary: "$160,000 - $190,000",
        description: "Design and implement API endpoints for our core payment processing infrastructure.",
        status: "all"
    },
    {
        id: 4,
        companyName: "Netflix",
        position: "UI Developer",
        location: "Los Gatos, CA",
        type: "Contract",
        salary: "$80/hr - $100/hr",
        description: "Create stunning TV interfaces using modern JavaScript frameworks and proprietary toolkits.",
        status: "all"
    },
    {
        id: 5,
        companyName: "Spotify",
        position: "Data Visualization Specialist",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $160,000",
        description: "Transform complex listening data into compelling visuals for creators and internal analytics.",
        status: "all"
    },
    {
        id: 6,
        companyName: "Airbnb",
        position: "Full Stack Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$145,000 - $175,000",
        description: "Work across the entire stack, from database optimization to frontend UI implementation.",
        status: "all"
    },
    {
        id: 7,
        companyName: "Vercel",
        position: "Developer Advocate",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $150,000",
        description: "Engage with the developer community, create technical content, and help improve our platform's DX.",
        status: "all"
    },
    {
        id: 8,
        companyName: "Discord",
        position: "Systems Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$155,000 - $185,000",
        description: "Build distributed systems capable of handling millions of concurrent users in real-time.",
        status: "all"
    }
];

let jobs = [...initialJobs];
let currentTab = 'all';

// DOM Elements
const jobsContainer = document.getElementById('jobs-container');
const emptyState = document.getElementById('empty-state');
const sectionJobCount = document.getElementById('section-job-count');
const tabsContainer = document.getElementById('tabs-container');
const totalCountEl = document.getElementById('total-count');
const interviewCountEl = document.getElementById('interview-count');
const rejectedCountEl = document.getElementById('rejected-count');

function toggleEmptyState(show) {
    if (show) {
        jobsContainer.innerHTML = '';
        jobsContainer.classList.add('hidden');
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
    } else {
        emptyState.classList.add('hidden');
        emptyState.classList.remove('flex');
        jobsContainer.classList.remove('hidden');
    }
}

function renderJobs() {
    let filteredJobs = jobs;
    if (currentTab !== 'all') {
        filteredJobs = jobs.filter(job => job.status === currentTab);
    }

    // Update section UI count
    sectionJobCount.textContent = filteredJobs.length;

    if (filteredJobs.length === 0) {
        toggleEmptyState(true);
    } else {
        toggleEmptyState(false);
        jobsContainer.innerHTML = filteredJobs.map(job => `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 justify-between transition-all hover:shadow-md hover:-translate-y-1 duration-200 cursor-pointer">
                <div class="flex-1">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="text-lg font-bold text-[#0f172a]">${job.companyName}</h3>
                        <button class="delete-btn text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50" data-id="${job.id}" title="Delete Job">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                    </div>
                    <p class="text-gray-500 font-medium mb-3">${job.position}</p>
                    <p class="text-sm text-gray-400 mb-4 flex flex-wrap gap-2 items-center">
                        <span><svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>${job.location}</span>
                        <span>•</span>
                        <span>${job.type}</span>
                        <span>•</span>
                        <span class="font-semibold text-gray-600">${job.salary}</span>
                    </p>
                    
                    <div class="mb-4">
                        <span class="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded">NOT APPLIED</span>
                    </div>
                    <p class="text-sm text-gray-600 line-clamp-2">${job.description}</p>
                    
                    <div class="mt-6 flex flex-wrap gap-3">
                        <button class="interview-btn px-4 py-1.5 rounded text-sm font-bold transition-all ${job.status === 'interview' ? 'bg-teal-500 text-white shadow-sm hover:bg-teal-600' : 'bg-transparent text-teal-600 border border-teal-500 hover:bg-teal-50 hover:shadow-sm'}" data-id="${job.id}">
                            ${job.status === 'interview' ? 'INTERVIEWING' : 'INTERVIEW'}
                        </button>
                        <button class="rejected-btn px-4 py-1.5 rounded text-sm font-bold transition-all ${job.status === 'rejected' ? 'bg-red-500 text-white shadow-sm hover:bg-red-600' : 'bg-transparent text-red-600 border border-red-500 hover:bg-red-50 hover:shadow-sm'}" data-id="${job.id}">
                            ${job.status === 'rejected' ? 'REJECTED' : 'REJECTED'}
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    updateDashboardCounts();
}

function updateDashboardCounts() {
    const total = jobs.length;
    const interview = jobs.filter(job => job.status === 'interview').length;
    const rejected = jobs.filter(job => job.status === 'rejected').length;

    totalCountEl.textContent = total;
    interviewCountEl.textContent = interview;
    rejectedCountEl.textContent = rejected;
}

// Event Delegation for action buttons
jobsContainer.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-btn');
    const interviewBtn = e.target.closest('.interview-btn');
    const rejectedBtn = e.target.closest('.rejected-btn');

    if (deleteBtn) {
        const id = parseInt(deleteBtn.dataset.id);
        jobs = jobs.filter(job => job.id !== id);
        renderJobs();
    } else if (interviewBtn) {
        const id = parseInt(interviewBtn.dataset.id);
        const job = jobs.find(j => j.id === id);
        if (job) {
            job.status = job.status === 'interview' ? 'all' : 'interview';
            renderJobs();
        }
    } else if (rejectedBtn) {
        const id = parseInt(rejectedBtn.dataset.id);
        const job = jobs.find(j => j.id === id);
        if (job) {
            job.status = job.status === 'rejected' ? 'all' : 'rejected';
            renderJobs();
        }
    }
});

// Tab Switching logic
tabsContainer.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.tab-btn');
    if (!tabBtn) return;

    // Update active state
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-blue-500', 'text-white', 'active');
        btn.classList.add('bg-white', 'text-gray-600');
    });
    
    tabBtn.classList.remove('bg-white', 'text-gray-600');
    tabBtn.classList.add('bg-blue-500', 'text-white', 'active');

    currentTab = tabBtn.dataset.tab;
    renderJobs();
});

// Initial Render
renderJobs();
