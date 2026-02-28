document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('drawButton');
    const lottoRows = document.querySelectorAll('.lotto-row');

    function generateLottoNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        return numbers.sort((a, b) => a - b).map(n => n.toString().padStart(2, '0'));
    }

    function draw() {
        lottoRows.forEach((row, index) => {
            // Add a small delay for each row to create a sequence effect
            setTimeout(() => {
                const numbers = generateLottoNumbers();
                row.textContent = numbers.join(' ');
                row.classList.add('active');
                
                // Remove active class after animation
                setTimeout(() => {
                    row.classList.remove('active');
                }, 1000);
            }, index * 100);
        });
    }

    drawButton.addEventListener('click', draw);
});
