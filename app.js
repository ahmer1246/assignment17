function displayFormData() {
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    document.write(`<h1>Form Data</h1>`)
    document.write(`<strong>Name : </strong> ${name}`);
    document.write("</br>");
    document.write(`<strong>Email : </strong> ${email}`);
    document.write("</br>");
    document.write(`<strong>Password : </strong> ${password}`);
    
    
}
function toggleDetails(button) {
    const detailsParagraph = button.previousElementSibling;
    detailsParagraph.style.display = detailsParagraph.style.display === 'none' ? 'block' : 'none';
}