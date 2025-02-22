function selectRole(role) {
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('gameplay').style.display = 'block';
    document.getElementById('gameplay').innerHTML = `<h2>Welcome, ${role.charAt(0).toUpperCase() + role.slice(1)}!</h2>`;
}
