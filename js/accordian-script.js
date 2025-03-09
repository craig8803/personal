<script>
    // Select all accordion buttons
    const accordions = document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});
</script>
