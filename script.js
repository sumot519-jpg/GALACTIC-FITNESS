// ==========================================
// GALACTIC FITNESS - INTERACTIVE JAVASCRIPT
// ==========================================

// ==========================================
// DATA STRUCTURES
// ==========================================

// Equipment Data
const equipmentData = [
    {
        id: 1,
        name: 'Smith Machine',
        category: 'chest',
        image: './assets/equipment/smith-machine.webp',
        description: 'Professional grade Smith machine for safe heavy lifting'
    },
    {
        id: 2,
        name: 'Bench Press Station',
        category: 'chest',
        image: './assets/equipment/bench-press.webp',
        description: 'Olympic bench press with adjustable safety bars'
    },
    {
        id: 3,
        name: 'Cable Crossover',
        category: 'chest',
        image: './assets/equipment/cable-crossover.webp',
        description: 'Dual adjustable pulley system for cable exercises'
    },
    {
        id: 4,
        name: 'Lat Pulldown',
        category: 'back',
        image: './assets/equipment/lat-pulldown.webp',
        description: 'Premium lat pulldown with multiple grip options'
    },
    {
        id: 5,
        name: 'Rowing Machine',
        category: 'back',
        image: './assets/equipment/rowing-machine.webp',
        description: 'Commercial grade seated row machine'
    },
    {
        id: 6,
        name: 'Leg Press',
        category: 'legs',
        image: './assets/equipment/leg-press.webp',
        description: '45-degree leg press with 800lb capacity'
    },
    {
        id: 7,
        name: 'Squat Rack',
        category: 'legs',
        image: './assets/equipment/squat-rack.webp',
        description: 'Heavy-duty power rack with safety catches'
    },
    {
        id: 8,
        name: 'Leg Extension',
        category: 'legs',
        image: './assets/equipment/leg-extension.webp',
        description: 'Adjustable leg extension machine'
    },
    {
        id: 9,
        name: 'Shoulder Press',
        category: 'shoulders',
        image: './assets/equipment/shoulder-press.webp',
        description: 'Dual-action shoulder press station'
    },
    {
        id: 10,
        name: 'Lateral Raise Machine',
        category: 'shoulders',
        image: './assets/equipment/lateral-raise.webp',
        description: 'Iso-lateral shoulder raise machine'
    },
    {
        id: 11,
        name: 'Preacher Curl',
        category: 'arms',
        image: './assets/equipment/preacher-curl.webp',
        description: 'Adjustable preacher curl bench'
    },
    {
        id: 12,
        name: 'Tricep Dip Station',
        category: 'arms',
        image: './assets/equipment/tricep-dip.webp',
        description: 'Assisted dip and pull-up station'
    },
    {
        id: 13,
        name: 'Treadmill',
        category: 'cardio',
        image: './assets/equipment/treadmill.webp',
        description: 'Commercial treadmill with incline and sprint modes'
    },
    {
        id: 14,
        name: 'Assault Bike',
        category: 'cardio',
        image: './assets/equipment/assault-bike.webp',
        description: 'Air resistance bike for HIIT training'
    },
    {
        id: 15,
        name: 'Elliptical',
        category: 'cardio',
        image: './assets/equipment/elliptical.webp',
        description: 'Low-impact cardio elliptical trainer'
    },
    {
        id: 16,
        name: 'Battle Ropes',
        category: 'functional',
        image: './assets/equipment/battle-ropes.webp',
        description: 'Heavy-duty 50ft battle ropes'
    },
    {
        id: 17,
        name: 'Kettlebells',
        category: 'functional',
        image: './assets/equipment/kettlebells.webp',
        description: 'Complete kettlebell set (8kg-48kg)'
    },
    {
        id: 18,
        name: 'TRX Suspension',
        category: 'functional',
        image: './assets/equipment/trx.webp',
        description: 'Suspension training system'
    }
];

// Trainers Data
const trainersData = [
    {
        id: 1,
        name: 'Marcus "The Titan" Johnson',
        specialty: 'Strength & Powerlifting',
        video: './assets/trainers/marcus.mp4',
        poster: './assets/trainers/marcus-poster.webp',
        bio: 'Former national powerlifting champion with 15 years of experience. Specialized in building raw strength and muscle mass.',
        experience: '15+',
        clients: '500+',
        certifications: 'NSCA-CPT, CSCS'
    },
    {
        id: 2,
        name: 'Sarah "Phoenix" Rodriguez',
        specialty: 'HIIT & Fat Loss',
        video: './assets/trainers/sarah.mp4',
        poster: './assets/trainers/sarah-poster.webp',
        bio: 'Elite fitness coach specializing in high-intensity training and body transformation. Transform your body in record time.',
        experience: '12+',
        clients: '750+',
        certifications: 'ACE-CPT, Precision Nutrition'
    },
    {
        id: 3,
        name: 'David "Iron Mind" Chen',
        specialty: 'CrossFit & Functional Training',
        video: './assets/trainers/david.mp4',
        poster: './assets/trainers/david-poster.webp',
        bio: 'CrossFit Level 3 coach and former competitive athlete. Master of functional movements and athletic performance.',
        experience: '10+',
        clients: '400+',
        certifications: 'CF-L3, USAW'
    },
    {
        id: 4,
        name: 'Emma "Zen Warrior" Thompson',
        specialty: 'Yoga & Mind-Body',
        video: './assets/trainers/emma.mp4',
        poster: './assets/trainers/emma-poster.webp',
        bio: 'Certified yoga instructor and wellness coach. Combines traditional yoga with modern fitness for holistic health.',
        experience: '8+',
        clients: '600+',
        certifications: 'RYT-500, E-RYT'
    },
    {
        id: 5,
        name: 'Alex "The Machine" Rivera',
        specialty: 'Bodybuilding & Nutrition',
        video: './assets/trainers/alex.mp4',
        poster: './assets/trainers/alex-poster.webp',
        bio: 'Professional bodybuilder and nutrition specialist. Expert in muscle hypertrophy and contest preparation.',
        experience: '13+',
        clients: '300+',
        certifications: 'ISSA-CPT, PN-L2'
    },
    {
        id: 6,
        name: 'Jessica "Storm" Martinez',
        specialty: 'Boxing & Combat Fitness',
        video: './assets/trainers/jessica.mp4',
        poster: './assets/trainers/jessica-poster.webp',
        bio: 'Former professional boxer and combat sports trainer. High-intensity workouts that build strength and endurance.',
        experience: '11+',
        clients: '450+',
        certifications: 'USA Boxing Coach, NASM-CPT'
    }
];

// Schedule Data
const scheduleData = {
    monday: [
        { time: '06:00', class: 'Morning Power Yoga', trainer: 'Emma Thompson', type: 'yoga', available: 8, capacity: 15 },
        { time: '07:30', class: 'CrossFit Foundations', trainer: 'David Chen', type: 'crossfit', available: 3, capacity: 12 },
        { time: '09:00', class: 'Strength Training 101', trainer: 'Marcus Johnson', type: 'strength', available: 5, capacity: 10 },
        { time: '12:00', class: 'HIIT Bootcamp', trainer: 'Sarah Rodriguez', type: 'hiit', available: 0, capacity: 20 },
        { time: '17:00', class: 'Boxing Conditioning', trainer: 'Jessica Martinez', type: 'cardio', available: 7, capacity: 15 },
        { time: '18:30', class: 'Evening Pilates', trainer: 'Emma Thompson', type: 'pilates', available: 10, capacity: 12 },
        { time: '19:30', class: 'Advanced Lifting', trainer: 'Marcus Johnson', type: 'strength', available: 4, capacity: 8 }
    ],
    tuesday: [
        { time: '06:00', class: 'Sunrise Cardio Blast', trainer: 'Sarah Rodriguez', type: 'cardio', available: 12, capacity: 20 },
        { time: '08:00', class: 'Bodybuilding Basics', trainer: 'Alex Rivera', type: 'strength', available: 6, capacity: 10 },
        { time: '10:00', class: 'Functional Fitness', trainer: 'David Chen', type: 'crossfit', available: 8, capacity: 15 },
        { time: '12:30', class: 'Power Yoga Flow', trainer: 'Emma Thompson', type: 'yoga', available: 5, capacity: 12 },
        { time: '17:30', class: 'HIIT Circuit', trainer: 'Sarah Rodriguez', type: 'hiit', available: 2, capacity: 18 },
        { time: '19:00', class: 'Combat Fitness', trainer: 'Jessica Martinez', type: 'cardio', available: 9, capacity: 15 }
    ],
    wednesday: [
        { time: '06:30', class: 'Morning Strength', trainer: 'Marcus Johnson', type: 'strength', available: 7, capacity: 10 },
        { time: '09:00', class: 'CrossFit WOD', trainer: 'David Chen', type: 'crossfit', available: 4, capacity: 12 },
        { time: '11:00', class: 'Sculpt & Tone', trainer: 'Alex Rivera', type: 'strength', available: 8, capacity: 12 },
        { time: '13:00', class: 'Yoga Foundations', trainer: 'Emma Thompson', type: 'yoga', available: 10, capacity: 15 },
        { time: '17:00', class: 'Fat Burn HIIT', trainer: 'Sarah Rodriguez', type: 'hiit', available: 0, capacity: 20 },
        { time: '18:30', class: 'Boxing Technique', trainer: 'Jessica Martinez', type: 'cardio', available: 6, capacity: 12 }
    ],
    thursday: [
        { time: '06:00', class: 'Power Pilates', trainer: 'Emma Thompson', type: 'pilates', available: 9, capacity: 12 },
        { time: '07:30', class: 'Strength & Conditioning', trainer: 'Marcus Johnson', type: 'strength', available: 5, capacity: 10 },
        { time: '10:00', class: 'Functional Training', trainer: 'David Chen', type: 'crossfit', available: 7, capacity: 15 },
        { time: '12:00', class: 'Cardio Kickboxing', trainer: 'Jessica Martinez', type: 'cardio', available: 11, capacity: 18 },
        { time: '17:30', class: 'HIIT Express', trainer: 'Sarah Rodriguez', type: 'hiit', available: 3, capacity: 15 },
        { time: '19:00', class: 'Hypertrophy Training', trainer: 'Alex Rivera', type: 'strength', available: 4, capacity: 8 }
    ],
    friday: [
        { time: '06:00', class: 'Friday Warrior Workout', trainer: 'David Chen', type: 'crossfit', available: 6, capacity: 15 },
        { time: '09:00', class: 'Full Body Burn', trainer: 'Sarah Rodriguez', type: 'hiit', available: 8, capacity: 20 },
        { time: '11:00', class: 'Powerlifting Fundamentals', trainer: 'Marcus Johnson', type: 'strength', available: 5, capacity: 8 },
        { time: '13:00', class: 'Yoga & Meditation', trainer: 'Emma Thompson', type: 'yoga', available: 12, capacity: 15 },
        { time: '17:00', class: 'Fight Fit Friday', trainer: 'Jessica Martinez', type: 'cardio', available: 7, capacity: 15 },
        { time: '18:30', class: 'Weekend Prep HIIT', trainer: 'Sarah Rodriguez', type: 'hiit', available: 4, capacity: 18 }
    ],
    saturday: [
        { time: '08:00', class: 'Saturday Sweat Session', trainer: 'Sarah Rodriguez', type: 'hiit', available: 10, capacity: 25 },
        { time: '10:00', class: 'CrossFit Open Gym', trainer: 'David Chen', type: 'crossfit', available: 15, capacity: 20 },
        { time: '11:30', class: 'Bodybuilding Workshop', trainer: 'Alex Rivera', type: 'strength', available: 6, capacity: 10 },
        { time: '14:00', class: 'Power Yoga Weekend', trainer: 'Emma Thompson', type: 'yoga', available: 8, capacity: 15 },
        { time: '16:00', class: 'Combat Conditioning', trainer: 'Jessica Martinez', type: 'cardio', available: 12, capacity: 18 }
    ],
    sunday: [
        { time: '08:00', class: 'Sunday Morning Yoga', trainer: 'Emma Thompson', type: 'yoga', available: 10, capacity: 15 },
        { time: '10:00', class: 'Recovery & Mobility', trainer: 'David Chen', type: 'crossfit', available: 14, capacity: 15 },
        { time: '11:30', class: 'Light Cardio Flow', trainer: 'Sarah Rodriguez', type: 'cardio', available: 16, capacity: 20 },
        { time: '14:00', class: 'Strength Foundations', trainer: 'Marcus Johnson', type: 'strength', available: 7, capacity: 10 },
        { time: '16:00', class: 'Sunday Wind Down', trainer: 'Emma Thompson', type: 'pilates', available: 11, capacity: 12 }
    ]
};

// Success Stories Data
const successStoriesData = [
    {
        id: 1,
        name: 'John Patterson',
        achievement: '15kg Weight Loss in 90 Days',
        image: './assets/success/john.webp',
        testimonial: 'Galactic Fitness transformed my life! The trainers pushed me beyond my limits, and the results speak for themselves. I feel stronger and more confident than ever.'
    },
    {
        id: 2,
        name: 'Michelle Chang',
        achievement: '200kg Deadlift Achievement',
        image: './assets/success/michelle.webp',
        testimonial: 'From never lifting weights to pulling 200kg! Marcus guided me every step of the way. This gym is a game-changer for anyone serious about strength.'
    },
    {
        id: 3,
        name: 'Robert "Tank" Williams',
        achievement: 'Body Fat: 28% → 12% in 6 Months',
        image: './assets/success/robert.webp',
        testimonial: 'Sarah\'s HIIT programs are intense but incredibly effective. I lost 16% body fat and gained muscle. The journey was tough, but worth every drop of sweat.'
    },
    {
        id: 4,
        name: 'Lisa Martinez',
        achievement: 'Marathon Finisher: 3h 45m',
        image: './assets/success/lisa.webp',
        testimonial: 'Training at Galactic prepared me for my first marathon. The cardio equipment is top-notch, and the trainers created a perfect endurance program for me.'
    },
    {
        id: 5,
        name: 'Kevin Zhao',
        achievement: '+12kg Lean Muscle Mass',
        image: './assets/success/kevin.webp',
        testimonial: 'Alex\'s bodybuilding expertise helped me pack on 12kg of pure muscle. The nutrition guidance and training programs are world-class. Highly recommend!'
    },
    {
        id: 6,
        name: 'Amanda Foster',
        achievement: 'CrossFit Regional Qualifier',
        image: './assets/success/amanda.webp',
        testimonial: 'David\'s CrossFit coaching took me from beginner to regional competitor in 18 months. The functional training here is unmatched. Best decision I ever made!'
    }
];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll to section
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ==========================================
// NAVIGATION
// ==========================================

// Sticky navbar on scroll
window.addEventListener('scroll', debounce(() => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10));

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    });
}

// Navigation link active state and smooth scroll
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        
        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
        
        // Smooth scroll
        smoothScroll(target);
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', debounce(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, 100));

// ==========================================
// DARK MODE
// ==========================================

const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

// Check for saved dark mode preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        sunIcon.classList.toggle('hidden');
        moonIcon.classList.toggle('hidden');
        
        // Save preference
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// ==========================================
// EQUIPMENT FILTER
// ==========================================

function renderEquipment(filterCategory = 'all') {
    const equipmentGrid = document.getElementById('equipment-grid');
    if (!equipmentGrid) return;
    
    const filteredEquipment = filterCategory === 'all' 
        ? equipmentData 
        : equipmentData.filter(item => item.category === filterCategory);
    
    equipmentGrid.innerHTML = filteredEquipment.map(item => `
        <div class="equipment-card" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="equipment-image" loading="lazy" onerror="this.src='./assets/placeholder-equipment.webp'">
            <div class="equipment-info">
                <h3 class="equipment-name">${item.name}</h3>
                <p class="equipment-category">${item.category.toUpperCase()}</p>
                <p style="color: var(--white-70); font-size: 0.875rem; margin-top: 0.5rem;">${item.description}</p>
            </div>
        </div>
    `).join('');
    
    // Animate cards
    const cards = equipmentGrid.querySelectorAll('.equipment-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Filter button handlers
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Render filtered equipment
        renderEquipment(filter);
    });
});

// ==========================================
// TRAINERS
// ==========================================

function renderTrainers() {
    const trainersGrid = document.getElementById('trainers-grid');
    if (!trainersGrid) return;
    
    trainersGrid.innerHTML = trainersData.map(trainer => `
        <div class="trainer-card">
            <video class="trainer-video" poster="${trainer.poster}" controls preload="metadata" onerror="this.poster='./assets/placeholder-trainer.webp'">
                <source src="${trainer.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="trainer-info">
                <h3 class="trainer-name">${trainer.name}</h3>
                <p class="trainer-specialty">${trainer.specialty}</p>
                <p class="trainer-bio">${trainer.bio}</p>
                <div class="trainer-stats">
                    <div class="stat-item">
                        <span class="stat-value">${trainer.experience}</span>
                        <span class="stat-label">Years</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${trainer.clients}</span>
                        <span class="stat-label">Clients</span>
                    </div>
                </div>
                <p style="font-size: 0.875rem; color: var(--white-70); margin-bottom: 1rem;">${trainer.certifications}</p>
                <button class="btn btn-primary btn-block glow-button" onclick="openBookingModal('trainer', '${trainer.name}')">
                    BOOK TRIAL SESSION
                </button>
            </div>
        </div>
    `).join('');
}

// ==========================================
// SCHEDULE
// ==========================================

let currentDay = 'monday';

function renderSchedule(day, classTypeFilter = 'all') {
    const scheduleGrid = document.getElementById('schedule-grid');
    if (!scheduleGrid) return;
    
    const daySchedule = scheduleData[day] || [];
    const filteredSchedule = classTypeFilter === 'all'
        ? daySchedule
        : daySchedule.filter(item => item.type === classTypeFilter);
    
    scheduleGrid.innerHTML = filteredSchedule.map(item => {
        const availabilityClass = item.available === 0 ? 'full' : item.available < 5 ? 'limited' : 'available';
        const availabilityText = item.available === 0 ? 'FULL' : `${item.available} SPOTS LEFT`;
        
        return `
            <div class="schedule-item">
                <div class="schedule-time">${item.time}</div>
                <div class="schedule-details">
                    <h4>${item.class}</h4>
                    <p class="schedule-trainer">with ${item.trainer}</p>
                </div>
                <div class="schedule-action">
                    <span class="availability-badge ${availabilityClass}">${availabilityText}</span>
                    <button class="btn btn-primary glow-button" 
                            onclick="bookClass('${item.class}', '${day}', '${item.time}')"
                            ${item.available === 0 ? 'disabled' : ''}>
                        ${item.available === 0 ? 'WAITLIST' : 'BOOK NOW'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Day selector handlers
const dayButtons = document.querySelectorAll('.day-btn');
dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        const day = button.getAttribute('data-day');
        currentDay = day;
        
        // Update active state
        dayButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        
        // Render schedule
        const classTypeFilter = document.getElementById('class-type-filter')?.value || 'all';
        renderSchedule(day, classTypeFilter);
    });
});

// Class type filter
const classTypeFilter = document.getElementById('class-type-filter');
if (classTypeFilter) {
    classTypeFilter.addEventListener('change', (e) => {
        renderSchedule(currentDay, e.target.value);
    });
}

// ==========================================
// SUCCESS STORIES
// ==========================================

function renderSuccessStories() {
    const successGrid = document.getElementById('success-grid');
    if (!successGrid) return;
    
    successGrid.innerHTML = successStoriesData.map(story => `
        <div class="success-card">
            <img src="${story.image}" alt="${story.name}" class="success-image" loading="lazy" onerror="this.src='./assets/placeholder-success.webp'">
            <div class="success-info">
                <h3 class="success-name">${story.name}</h3>
                <p class="success-achievement">${story.achievement}</p>
                <p class="success-testimonial">"${story.testimonial}"</p>
            </div>
        </div>
    `).join('');
}

// ==========================================
// BOOKING MODAL
// ==========================================

let currentBookingType = '';
let currentBookingData = {};

function openBookingModal(type, additionalData = '') {
    const modal = document.getElementById('booking-modal');
    const modalTitle = document.getElementById('booking-modal-title');
    
    currentBookingType = type;
    currentBookingData = { additionalData };
    
    // Update modal title based on booking type
    const titles = {
        'trial': 'Claim Your First-Time Visitor Offer',
        'starter': 'Book Starter Membership',
        'pro': 'Book Pro Membership',
        'elite': 'Book Elite Membership',
        'trainer': `Book Trial Session with ${additionalData}`
    };
    
    modalTitle.textContent = titles[type] || 'Book Your Session';
    modal.classList.add('active');
    
    // Set focus to first input
    setTimeout(() => {
        document.getElementById('booking-name')?.focus();
    }, 100);
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    modal.classList.remove('active');
}

// Modal close button
const modalCloseBtn = document.querySelector('.modal-close');
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeBookingModal);
}

// Close modal on outside click
const bookingModal = document.getElementById('booking-modal');
if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            closeBookingModal();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal?.classList.contains('active')) {
        closeBookingModal();
    }
});

// Booking form submission
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('booking-name').value,
            email: document.getElementById('booking-email').value,
            phone: document.getElementById('booking-phone').value,
            date: document.getElementById('booking-date').value,
            time: document.getElementById('booking-time').value,
            whatsappReminder: document.getElementById('whatsapp-reminder').checked,
            smsReminder: document.getElementById('sms-reminder').checked,
            bookingType: currentBookingType,
            bookingData: currentBookingData
        };
        
        // Here you would typically send this to your backend
        console.log('Booking submitted:', formData);
        
        // Show success message
        alert(`Booking confirmed! ${formData.whatsappReminder ? 'WhatsApp' : ''} ${formData.smsReminder ? 'and SMS' : ''} reminders will be sent to ${formData.phone}.`);
        
        // Reset form and close modal
        bookingForm.reset();
        closeBookingModal();
    });
}

// Book class function
function bookClass(className, day, time) {
    currentBookingType = 'class';
    currentBookingData = { className, day, time };
    
    const modal = document.getElementById('booking-modal');
    const modalTitle = document.getElementById('booking-modal-title');
    
    modalTitle.textContent = `Book ${className}`;
    modal.classList.add('active');
    
    // Pre-fill date and time if possible
    // This would require more complex date manipulation
}

// ==========================================
// MEMBER PORTAL LOGIN
// ==========================================

const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically authenticate with your backend
        console.log('Login attempt:', { email });
        
        // Simulate successful login
        alert('Login functionality would redirect to member dashboard. (Backend integration required)');
    });
}

// ==========================================
// INSTAGRAM FEED
// ==========================================

function loadInstagramFeed() {
    const instagramGrid = document.getElementById('instagram-feed');
    if (!instagramGrid) return;
    
    // Placeholder Instagram posts (in production, use Instagram Graph API)
    const placeholderPosts = Array(8).fill(null).map((_, i) => ({
        id: i + 1,
        image: `./assets/instagram/post-${i + 1}.webp`,
        link: '#'
    }));
    
    instagramGrid.innerHTML = placeholderPosts.map(post => `
        <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="instagram-post">
            <img src="${post.image}" alt="Instagram post ${post.id}" loading="lazy" onerror="this.src='./assets/placeholder-instagram.webp'">
        </a>
    `).join('');
}

// ==========================================
// ACCESSIBILITY - KEYBOARD NAVIGATION
// ==========================================

// Trap focus in modal
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
}

if (bookingModal) {
    trapFocus(bookingModal);
}

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});

// ==========================================
// PERFORMANCE MONITORING
// ==========================================

// Monitor page load performance
window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
        
        // Track this metric (would send to analytics in production)
        if (pageLoadTime > 3000) {
            console.warn('Page load time exceeds 3 seconds. Consider optimizations.');
        }
    }
});

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Render all dynamic content
    renderEquipment();
    renderTrainers();
    renderSchedule('monday');
    renderSuccessStories();
    loadInstagramFeed();
    
    // Set minimum date for booking to today
    const bookingDateInput = document.getElementById('booking-date');
    if (bookingDateInput) {
        const today = new Date().toISOString().split('T')[0];
        bookingDateInput.setAttribute('min', today);
    }
    
    console.log('Galactic Fitness initialized successfully! 🚀');
});

// ==========================================
// SERVICE WORKER REGISTRATION (PWA)
// ==========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(err => console.log('ServiceWorker registration failed'));
    });
}
