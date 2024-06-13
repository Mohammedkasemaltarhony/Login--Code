document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('currentUser');
    if (userName) {
        document.getElementById('user-name').textContent = userName;
    } else {
        // Redirect to login if no user is logged in
        window.location.href = 'index.html';
    }
});

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
