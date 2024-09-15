var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePic = document.getElementById('profile-pic').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill !== ''; });
    var resumeHTML = "\n        <header class=\"personal-info\">\n            ".concat(profilePic ? "<img src=\"".concat(profilePic, "\" alt=\"Profile Picture\" class=\"profile-picture\" contenteditable=\"false\">") : '', "\n            <h1 contenteditable=\"true\">").concat(name, "</h1>\n            <p contenteditable=\"true\">Email: ").concat(email, "</p>\n            <p contenteditable=\"true\">Phone: ").concat(phone, "</p>\n        </header>\n\n        <section class=\"education\" onclick=\"editSection(this)\">\n            <h2>Education</h2>\n            <p contenteditable=\"true\">").concat(education, "</p>\n        </section>\n\n        <section class=\"work-experience\" onclick=\"editSection(this)\">\n            <h2>Work Experience</h2>\n            <p contenteditable=\"true\">").concat(workExperience, "</p>\n        </section>\n\n        <section class=\"skills\" onclick=\"editSection(this)\">\n            <h2>Skills</h2>\n            <ul contenteditable=\"true\">\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n            </ul>\n        </section>\n    ");
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.classList.remove('hidden');
});
function editSection(section) {
    var _a, _b;
    (_a = section.querySelector('p')) === null || _a === void 0 ? void 0 : _a.setAttribute('contenteditable', 'true');
    (_b = section.querySelector('ul')) === null || _b === void 0 ? void 0 : _b.setAttribute('contenteditable', 'true');
}
