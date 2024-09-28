const ResumeForm = document.getElementById('ResumeForm') as HTMLInputElement | null;
const ResumeOutput = document.getElementById('ResumeOutput') as HTMLInputElement | null;

if (ResumeForm && ResumeOutput ){
    ResumeForm.addEventListener('submit',(event) => {
        event.preventDefault();

        const name= (document.getElementById('name') as HTMLInputElement).value;
        const email= (document.getElementById('email') as HTMLInputElement).value;
        const phone= (document.getElementById('phone') as HTMLInputElement).value;
        const education= (document.getElementById('education') as HTMLInputElement).value;
        const skills= (document.getElementById('skill') as HTMLInputElement).value;
        const experience= (document.getElementById('experience') as HTMLInputElement).value;
        


        const ResumeHTML = `
        <h2> Generated Resume </h2>
        
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
        ResumeOutput.innerHTML=ResumeHTML
    })
} else{
    console.error("form not found")
};

