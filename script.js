// Event listener untuk tombol CTA
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('ctaButton');
    
    ctaButton.addEventListener('click', function() {
        alert('Terima kasih telah mendaftar!');
    });
    
    console.log('Tombol CTA siap digunakan!');
});