<script>
    // Select all accordion buttons
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            // Check if the clicked panel is already open
            const panel = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all panels
            accordions.forEach(acc => {
                acc.classList.remove('active');
                acc.nextElementSibling.style.display = 'none';
            });
            
            // If the clicked panel was not active, open it
            if (!isActive) {
                this.classList.add('active');
                panel.style.display = 'block';
            }
        });
    });
</script>
