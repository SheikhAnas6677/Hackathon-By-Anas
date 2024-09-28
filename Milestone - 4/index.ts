const ResumeForm = document.getElementById(
  "ResumeForm"
) as HTMLInputElement | null;
const ResumeOutput = document.getElementById(
  "ResumeOutput"
) as HTMLInputElement | null;

function generateResume(data: {
  name: string;
  email: string;
  phone: string;
  education: string;
  skills: string;
  experience: string;
}) {
  return `
        <h2> Generated Resume </h2>
        
         <h4> Name : </h4>
         <p> ${data.name} </p>

         <h4> Email :  </h4>
         <p> ${data.email} </p>

         <h4> Phone: </h4> 
        <p> ${data.phone} </p>

        <h4> Education : </h4>
        <p> ${data.education}</p>

        <h4> Skills : </h4>
        <p >${data.skills}</p>

        <h4> Experience : </h4>
        <p> ${data.experience}</p>
       
       <button id="editresume">Edit Resume</button>
        `;
}

if (ResumeForm && ResumeOutput) {
  ResumeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement)
      .value;
    const skills = (document.getElementById("skill") as HTMLInputElement).value;
    const experience = (
      document.getElementById("experience") as HTMLInputElement
    ).value;

    ResumeOutput.innerHTML = generateResume({
      name,
      email,
      phone,
      education,
      skills,
      experience,
    });

    const editbutton = document.getElementById(
      "editresume"
    ) as HTMLButtonElement;
    if (editbutton) {
      editbutton.addEventListener("click", () => {
        (document.getElementById("name") as HTMLInputElement).value = name;
        (document.getElementById("email") as HTMLInputElement).value = email;
        (document.getElementById("phone") as HTMLInputElement).value = phone;
        (document.getElementById("education") as HTMLInputElement).value =
          education;
        (document.getElementById("skill") as HTMLInputElement).value = skills;
        (document.getElementById("experience") as HTMLInputElement).value =
          experience;

        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
} else {
  console.error("form not found");
}
