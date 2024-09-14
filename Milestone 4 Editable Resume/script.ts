// Function to handle form submission and generate resume
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent page from refreshing

    // Get form values
    const name = (document.querySelector('#name') as HTMLInputElement).value;
    const email = (document.querySelector('#email') as HTMLInputElement).value;
    const education = (document.querySelector('#education') as HTMLInputElement).value;
    const work = (document.querySelector('#work') as HTMLTextAreaElement).value;
    const skills = (document.querySelector('#skills') as HTMLInputElement).value;

    // Get the resume output section
    const resumeOutput = document.querySelector('#resume-output') as HTMLElement;

    // Create resume content with editable sections
    resumeOutput.innerHTML = `
        <div contenteditable="true" id="resume-name">${name}</div>
        <div contenteditable="true" id="resume-email">${email}</div>
        <div contenteditable="true" id="resume-education">${education}</div>
        <div contenteditable="true" id="resume-work">${work}</div>
        <div contenteditable="true" id="resume-skills">${skills}</div>
    `;
}

// Add event listener to form submission
document.querySelector('#resume-form')!.addEventListener('submit', generateResume);
