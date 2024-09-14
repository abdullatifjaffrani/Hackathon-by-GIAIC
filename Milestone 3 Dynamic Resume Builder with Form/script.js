// script.ts
// Function to handle form submission
function generateResume(event) {
    event.preventDefault(); // Prevent page from refreshing
    // Get form values
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var education = document.querySelector('#education').value;
    var work = document.querySelector('#work').value;
    var skills = document.querySelector('#skills').value;
    // Get the resume output section
    var resumeOutput = document.querySelector('#resume-output');
    // Create resume content using a simple string template
    resumeOutput.innerHTML = "\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Work Experience:</strong> ").concat(work, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
}
// Add event listener to form submission
document.querySelector('#resume-form').addEventListener('submit', generateResume);
