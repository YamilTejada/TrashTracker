
const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        
        const input = this.previousElementSibling;

        if (input && input.tagName === 'INPUT') {
            
            if (input.type === "password") {
                input.type = "text";
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
                this.style.color = "var(--eco-accent)"; 
            } else {
                input.type = "password";
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
                this.style.color = "#888";
            }
        }
    });
});