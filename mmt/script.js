document.querySelector('.search-form').addEventListener('submit', function(event) {
    const inputs = this.querySelectorAll('input');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
            input.classList.add('error'); 
        } else {
            input.classList.remove(' error'); 
        }
    });

    if (!allFilled) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});

const inputs = document.querySelectorAll('.search-form input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.placeholder = '';
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.placeholder = this.dataset.placeholder;
        }
    });

    
    input.dataset.placeholder = input.placeholder;
});

const toggleFaresButton = document.createElement('button');
toggleFaresButton.textContent = 'Toggle Special Fares';
toggleFaresButton.style.marginTop = '20px';
document.querySelector('.hero-content').appendChild(toggleFaresButton);

const specialFares = document.querySelector('.special-fares');

toggleFaresButton.addEventListener('click', function() {
    if (specialFares.style.display === 'none' || specialFares.style.display === '') {
        specialFares.style.display = 'block';
        toggleFaresButton.textContent = 'Hide Special Fares';
    } else {
        specialFares.style.display = 'none';
        toggleFaresButton.textContent = 'Show Special Fares';
    }
});

specialFares.style.display = 'none';