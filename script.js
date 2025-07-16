
// Add interactive functionality to the Wordle website
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add click tracking for external links
    const externalLinks = document.querySelectorAll('a[href^="https://wordleunlimitedunblocked.com/"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('User clicked on Wordle Unblocked link');
            // You can add analytics tracking here if needed
        });
    });

    // Add hover effects for table rows
    const tableRows = document.querySelectorAll('.games-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f1f3f4';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // Add loading animation for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            setTimeout(() => {
                this.textContent = originalText;
            }, 1000);
        });
    });

    // Add dynamic content update for today's puzzle
    const todayRow = document.querySelector('.games-table tbody tr:first-child');
    if (todayRow) {
        const wordCell = todayRow.querySelector('td:nth-child(2)');
        const difficultyCell = todayRow.querySelector('td:nth-child(3)');
        const attemptsCell = todayRow.querySelector('td:nth-child(4)');
        const successCell = todayRow.querySelector('td:nth-child(5)');

        // Simulate dynamic content (in a real app, this would come from an API)
        setTimeout(() => {
            wordCell.textContent = 'WORDS';
            difficultyCell.innerHTML = '<span class="difficulty easy">Easy</span>';
            attemptsCell.textContent = '3.8';
            successCell.textContent = '92%';
        }, 2000);
    }

    // Add scroll-to-top functionality
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 500) {
            if (!document.querySelector('.scroll-to-top')) {
                const scrollButton = document.createElement('button');
                scrollButton.className = 'scroll-to-top';
                scrollButton.innerHTML = '↑';
                scrollButton.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #74b9ff;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    font-size: 20px;
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    z-index: 1000;
                    transition: all 0.3s ease;
                `;
                scrollButton.addEventListener('click', function() {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
                document.body.appendChild(scrollButton);
            }
        } else {
            const scrollButton = document.querySelector('.scroll-to-top');
            if (scrollButton) {
                scrollButton.remove();
            }
        }
    });

    // Add typing effect for the hero section
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        setTimeout(typeWriter, 500);
    }

    // Add animation for content cards
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

    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    console.log('Wordle Unblocked Hub loaded successfully!');
});
