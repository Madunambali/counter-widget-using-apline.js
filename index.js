document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.querySelector('.counter');
    const incrementButton = document.querySelector('.increment');
    const decrementButton = document.querySelector('.decrement');
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.classList.add('reset');
    const container = document.querySelector('.container');
    const maxValue = 50;

    // Initial counter value
    let counterValue = 0;
    updateCounter();

  
    incrementButton.addEventListener('click', function() {
        if (counterValue < maxValue) {
            counterValue++;
            updateCounter();
        }
    });

    
    decrementButton.addEventListener('click', function() {
        if (counterValue > 0) {
            counterValue--;
            updateCounter();
        }
    });

    // Reset button click handler
    resetButton.addEventListener('click', function() {
        counterValue = 0;
        updateCounter();
    });
    
    
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.appendChild(resetButton);

   
    function updateCounter() {
        counterElement.textContent = counterValue;
    }
});
