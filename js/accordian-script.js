<script>
    // Select all accordion buttons
    const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        accordions.forEach(item => {
            if (item !== this) {
                item.classList.remove('active');
                item.nextElementSibling.style.display = "none";
            }
        });

        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
    });
});
</script>
