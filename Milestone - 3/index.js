var ResumeForm = document.getElementById('ResumeForm');
var ResumeOutput = document.getElementById('ResumeOutput');
if (ResumeForm && ResumeOutput) {
    ResumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skill').value;
        var experience = document.getElementById('experience').value;
        var ResumeHTML = "\n        <h2> Generated Resume </h2>\n        \n         <h4> Name : </h4>\n         <p> ".concat(name, " </p>\n\n         <h4> Email :  </h4>\n         <p> ").concat(email, " </p>\n\n         <h4> Phone: </h4> \n        <p> ").concat(phone, " </p>\n\n        <h4> Education : </h4>\n        <p> ").concat(education, "</p>\n\n        <h4> Skills : </h4>\n        <p >").concat(skills, "</p>\n\n        <h4> Experience : </h4>\n        <p> ").concat(experience, "</p>\n\n        ");
        ResumeOutput.innerHTML = ResumeHTML;
    });
}
else {
    console.error("form not found");
}
;
