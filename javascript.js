// let education = document.querySelectorAll('.education');
// window.onscroll = () => {
//     education.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop ;
//         let height = sec.offsetHeight;
         
//         if(top >= offset && top < offset + height){
//             sec.classList.add('animate');
    
//         }
//         else{
//             sec.classList.remove('animate');
//         }
//     })
// }
// window.onscroll = () =>{
//     let nav = document.querySelector('nav');
//     nav.classList.toggle('sticky' , window.scrollY > 100)
// }
ScrollReveal({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 100
   
 });
 ScrollReveal().reveal('.about,.hire,.yash,.about1,.education0,.skill,.animate1,', { interval:500, origin:'bottom' });

// const technical = document.querySelectorAll('technical');
// window.addEventListener('scroll', checkBoxes);
// checkBoxes();
// function checkBoxes(){
//   const triggerBottom =   console.log(window.innerHeight / 5 * 4);
//   technical.forEach(technical) => {
//     const technicalTop = technical.getBoundingClientRect().top;
//     if(technicalTop < triggerBottom){
//         technical.classList.add('show');
//     } else{
//         technical.classList.remove('show');
//     }
//   }
// }
function whatsapp(){
    let number = "+919347663579";
    let name = document.getElementsByClassName('name').value;
    let email = document.getElementsByClassName('email').value;
    let message = document.getElementsByClassName('message').value;
    let phone = document.getElementsByClassName('phone').value;
  
if(name == null){
    alert("enter details")

}


    var url = "https://wa.me//" + number + "?text="
    + "Name :"  +name+ "%0a" 
    + "Phone :"  +phone+ "%0a" 
    + "Email :"  +email+ "%0a"  
    + "Message :"  +message+ "%0a%0a"; 
    window.open(url , '_blank').focus();
    window.AnimationEffect(screenTop).AnimationEffect
}

function white(){
    document.body.style.background="white";
   
}
function black(){
    document.body.style.background="black";
   
}
window.addEventListener('scroll', function() {
    const element = document.querySelector('');
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight) {
        element.classList.add('animation');
    }
});