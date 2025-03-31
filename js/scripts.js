document.addEventListener('DOMContentLoaded', function() {
            const forms = document.querySelectorAll('form');

            forms.forEach(form => {
                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    window.location.href = '/thanks-page.html';
                });
            });
        });