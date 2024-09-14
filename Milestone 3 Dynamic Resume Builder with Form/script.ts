// Function to handle form submission
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

    // Create resume content using a simple string template
    resumeOutput.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Work Experience:</strong> ${work}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;
}

// Add event listener to form submission
document.querySelector('#resume-form')!.addEventListener('submit', generateResume);
