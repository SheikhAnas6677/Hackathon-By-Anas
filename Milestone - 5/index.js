var ResumeForm = document.getElementById("ResumeForm");
var ResumeOutput = document.getElementById("ResumeOutput");
var shareablelinkcontainer = document.getElementById("shareable-link-container");
var shareablelink = document.getElementById("shareable-link");
var downloadpdf = document.getElementById("Download-pdf");
ResumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skill").value;
    var experience = document.getElementById("experience").value;
    var resumedata = { name: name, email: email, phone: phone, education: education, skills: skills, experience: experience };
    localStorage.setItem(username, JSON.stringify(resumedata));
    var resumeHTML = "\n         <h4> Name : </h4>\n       <p> ".concat(name, " </p>\n\n        <h4> Email :  </h4>\n       <p> ").concat(email, " </p>\n\n       <h4> Phone: </h4> \n       <p> ").concat(phone, " </p>\n\n      <h4> Education : </h4>\n      <p> ").concat(education, "</p>\n\n       <h4> Skills : </h4>\n       <p >").concat(skills, "</p>\n\n      <h4> Experience : </h4>\n      <p> ").concat(experience, "</p>\n      \n      ");
    ResumeOutput.innerHTML = resumeHTML;
    var shareableURL = "".concat(window.location.origin, "? username = ").concat(encodeURIComponent(username));
    shareablelinkcontainer.style.display = "block";
    shareablelink.href = shareableURL;
    shareablelink.textContent = shareableURL;
});
downloadpdf.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlparams = new URLSearchParams(window.location.search);
    var username = urlparams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumedata = JSON.parse(savedResumeData);
            document.getElementById("username").value = username;
            document.getElementById("name").value = resumedata.name;
            document.getElementById("email").value = resumedata.email;
            document.getElementById("phone").value = resumedata.phone;
            document.getElementById("education").value = resumedata.education;
            document.getElementById("skills").value = resumedata.skills;
            document.getElementById("experience").value = resumedata.experience;
        }
    }
});
