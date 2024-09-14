// Function to handle form submission and generate resume
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
    // Create resume content with editable sections
    resumeOutput.innerHTML = "\n        <div contenteditable=\"true\" id=\"resume-name\">".concat(name, "</div>\n        <div contenteditable=\"true\" id=\"resume-email\">").concat(email, "</div>\n        <div contenteditable=\"true\" id=\"resume-education\">").concat(education, "</div>\n        <div contenteditable=\"true\" id=\"resume-work\">").concat(work, "</div>\n        <div contenteditable=\"true\" id=\"resume-skills\">").concat(skills, "</div>\n    ");
}
// Add event listener to form submission
document.querySelector('#resume-form').addEventListener('submit', generateResume);
