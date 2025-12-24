document.addEventListener('DOMContentLoaded', function() {
    console.log("Malibu Sports Community website loaded!");
    
   
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navList = document.querySelector('.nav-list');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    
    const joinBtn = document.getElementById('joinBtn');
    
    joinBtn.addEventListener('click', function() {
      
        document.getElementById('join').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
       
        const form = document.getElementById('membershipForm');
        form.style.boxShadow = '0 0 0 3px rgba(255, 107, 53, 0.3)';
        setTimeout(() => {
            form.style.boxShadow = '';
        }, 2000);
    });
    
   
    const dayButtons = document.querySelectorAll('.day-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');
    
    dayButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            dayButtons.forEach(btn => btn.classList.remove('active'));
            
           
            this.classList.add('active');
            
           
            const day = this.getAttribute('data-day');
            
          
            daySchedules.forEach(schedule => schedule.classList.remove('active'));
            
            
            document.getElementById(day).classList.add('active');
        });
    });
    
    
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;
    
    
    function showSlide(index) {
       
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
       
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentSlide = index;
    }
    
    
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        showSlide(nextIndex);
    }
    
    
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1;
        showSlide(prevIndex);
    }
    
    
    nextBtn.addEventListener('click', function() {
        nextSlide();
        resetSlideInterval(); 
    });
    
    prevBtn.addEventListener('click', function() {
        prevSlide();
        resetSlideInterval(); 
    });
    
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showSlide(index);
            resetSlideInterval(); 
        });
    });
    
   
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    
    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }
    
    
    startSlideInterval();
    
    
    const membershipForm = document.getElementById('membershipForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const sportSelect = document.getElementById('sportInterest');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const sportError = document.getElementById('sportError');
    const formMessage = document.getElementById('formMessage');
    
   
    membershipForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        let isValid = true;
        
       
        nameError.textContent = '';
        emailError.textContent = '';
        sportError.textContent = '';
        formMessage.textContent = '';
        formMessage.className = 'form-message';
        
      
        if (fullNameInput.value.trim() === '') {
            nameError.textContent = 'Full name is required';
            isValid = false;
        } else if (fullNameInput.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            isValid = false;
        }
        
       
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }
        

        if (sportSelect.value === '') {
            sportError.textContent = 'Please select a sport interest';
            isValid = false;
        }
        
        
        if (isValid) {
            formMessage.textContent = `Thank you, ${fullNameInput.value.trim()}! Your application has been submitted. We'll contact you within 24 hours about ${sportSelect.options[sportSelect.selectedIndex].text} training.`;
            formMessage.style.color = '#2a5ca7';
            formMessage.style.backgroundColor = '#f0f7ff';
            formMessage.style.padding = '20px';
            formMessage.style.borderRadius = '8px';
            formMessage.style.borderLeft = '4px solid #2a5ca7';
            
            // Reset form
            membershipForm.reset();
            
            
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.style.padding = '0';
            }, 8000);
        }
    });
    
    
    fullNameInput.addEventListener('input', function() {
        if (this.value.trim().length > 1) {
            nameError.textContent = '';
        }
    });
    
    emailInput.addEventListener('input', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(this.value.trim())) {
            emailError.textContent = '';
        }
    });
    
    sportSelect.addEventListener('change', function() {
        if (this.value !== '') {
            sportError.textContent = '';
        }
    });
    
   
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    
    const sportCards = document.querySelectorAll('.sport-card');
    
    sportCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
   
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
