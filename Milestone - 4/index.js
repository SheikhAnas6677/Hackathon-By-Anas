var ResumeForm = document.getElementById("ResumeForm");
var ResumeOutput = document.getElementById("ResumeOutput");
function generateResume(data) {
    return "\n        <h2> Generated Resume </h2>\n        \n         <h4> Name : </h4>\n         <p> ".concat(data.name, " </p>\n\n         <h4> Email :  </h4>\n         <p> ").concat(data.email, " </p>\n\n         <h4> Phone: </h4> \n        <p> ").concat(data.phone, " </p>\n\n        <h4> Education : </h4>\n        <p> ").concat(data.education, "</p>\n\n        <h4> Skills : </h4>\n        <p >").concat(data.skills, "</p>\n\n        <h4> Experience : </h4>\n        <p> ").concat(data.experience, "</p>\n       \n       <button id=\"editresume\">Edit Resume</button>\n        ");
}
if (ResumeForm && ResumeOutput) {
    ResumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education")
            .value;
        var skills = document.getElementById("skill").value;
        var experience = document.getElementById("experience").value;
        ResumeOutput.innerHTML = generateResume({
            name: name,
            email: email,
            phone: phone,
            education: education,
            skills: skills,
            experience: experience,
        });
        var editbutton = document.getElementById("editresume");
        if (editbutton) {
            editbutton.addEventListener("click", function () {
                document.getElementById("name").value = name;
                document.getElementById("email").value = email;
                document.getElementById("phone").value = phone;
                document.getElementById("education").value =
                    education;
                document.getElementById("skill").value = skills;
                document.getElementById("experience").value =
                    experience;
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    });
}
else {
    console.error("form not found");
}
