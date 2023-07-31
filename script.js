    window.addEventListener('DOMContentLoaded', function() {
        var birthYear = prompt('Masukkan tahun lahir Anda:');
        var currentYear = new Date().getFullYear();
        var age = currentYear - birthYear;
        
        var ageElement = document.getElementById('age');
        ageElement.innerText = age;
    });
    