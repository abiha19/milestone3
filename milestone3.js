// TypeScript code to handle form submission and generate the resume
// Get the form and resume output section
var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePic = document.getElementById('profile-pic').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill !== ''; });
    // Create resume HTML
    var resumeHTML = "\n        <header class=\"personal-info\">\n            ".concat(profilePic ? "<img src=\"".concat(profilePic, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : '', "\n            <h1>").concat(name, "</h1>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n        </header>\n\n        <section class=\"education\">\n            <h2>Education</h2>\n            <p>").concat(education, "</p>\n        </section>\n\n        <section class=\"work-experience\">\n            <h2>Work Experience</h2>\n            <p>").concat(workExperience, "</p>\n        </section>\n\n        <section class=\"skills\">\n            <h2>Skills</h2>\n            <ul>\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n            </ul>\n        </section>\n    ");
    // Display the generated resume
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.classList.remove('hidden');
});
