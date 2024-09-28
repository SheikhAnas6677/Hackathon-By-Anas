const ResumeForm = document.getElementById("ResumeForm") as HTMLInputElement;
const ResumeOutput = document.getElementById("ResumeOutput") as HTMLDivElement;
const shareablelinkcontainer = document.getElementById("shareable-link-container") as HTMLDivElement;
const shareablelink = document.getElementById("shareable-link") as HTMLAnchorElement;
const downloadpdf = document.getElementById("Download-pdf") as HTMLButtonElement;

  ResumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const username = (document.getElementById("username") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skill") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const resumedata = {name, email, phone, education, skills, experience};
    localStorage.setItem(username,JSON.stringify(resumedata));


    const resumeHTML = `
         <h4> Name : </h4>
       <p> ${name} </p>

        <h4> Email :  </h4>
       <p> ${email} </p>

       <h4> Phone: </h4> 
       <p> ${phone} </p>

      <h4> Education : </h4>
      <p> ${education}</p>

       <h4> Skills : </h4>
       <p >${skills}</p>

      <h4> Experience : </h4>
      <p> ${experience}</p>
      
      `;


      ResumeOutput.innerHTML = resumeHTML;

      const shareableURL = `${window.location.origin}? username = ${encodeURIComponent(username)}`

      shareablelinkcontainer.style.display = "block";
      shareablelink.href = shareableURL;
      shareablelink.textContent = shareableURL;
    });

    downloadpdf.addEventListener("click",()=> {
      window.print();
    })

    window.addEventListener("DOMContentLoaded", () =>{
        const urlparams = new URLSearchParams(window.location.search);
        const username = urlparams.get("username");

        if(username){
          const savedResumeData = localStorage.getItem(username);

          if (savedResumeData){
            const resumedata = JSON.parse(savedResumeData);
            (document.getElementById("username")as HTMLInputElement).value=username;
            (document.getElementById("name")as HTMLInputElement).value=resumedata.name;
            (document.getElementById("email")as HTMLInputElement).value=resumedata.email;
            (document.getElementById("phone")as HTMLInputElement).value=resumedata.phone;
            (document.getElementById("education")as HTMLInputElement).value=resumedata.education;
            (document.getElementById("skills")as HTMLInputElement).value=resumedata.skills;
            (document.getElementById("experience")as HTMLInputElement).value=resumedata.experience;


          }
        }

    });
