
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
    }
  });
};





menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
  });
};

// Example JavaScript code to dynamically set percentage for circle progress
document.querySelectorAll('.progress-circle').forEach(circle => {
  const percentage = circle.style.getPropertyValue('--percentage');
  circle.innerHTML = `<span>${percentage}%</span>`;
});



// EmailJS code //

function sendMail(){
  event.preventDefault();
  let params = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    phone_id : document.getElementById("phone").value,
    subject_id : document.getElementById("subject").value,
    message : document.getElementById("msg").value,

  }

  emailjs.send("service_k8g62dr", "template_q4bdorn", params)
  .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
  })
  .catch(function(error) {
      console.error("FAILED...", error);
      alert("Message failed to send. Please try again.");
  });

}

// function SendMail() {

//   var params = {
//     from_name : document.getElementById("name").value,
//     email_id : document.getElementById("email").value,
//     phone_id : document.getElementById("phone").value,
//     subject_id : document.getElementById("subject").value,
//     message : document.getElementById("msg").value
//   }
//   emailjs.send("service_k8g62dr", "template_q4bdorn", params).then(alert("Message sent Successfully !!"))

// }
