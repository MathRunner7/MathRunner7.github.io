document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a FormData object to hold the form data
    const formData = new FormData(this);

    // Construct the Google Forms submission URL
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdXPlfPExC2vSpdEbUy1miEsToGdif4UiCzmoJK_yNKZAz1jA/formResponse';

    // Submit the form data using fetch API
    fetch(googleFormURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Required to avoid CORS issues
    })
    .then(() => {
        alert('Form submitted successfully!');
        this.reset(); // Optionally reset the form
    })
    .catch(() => {
        alert('There was an error submitting the form.');
    });
});