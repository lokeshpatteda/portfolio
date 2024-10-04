// ********* Date and time *******

function updateTime() {
    const obj = new Date();
    const day = obj.getUTCDate();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const year = obj.getUTCFullYear();

    const monthName = months[new Date().getMonth()];


    document.getElementById("days").innerHTML = day;
    document.getElementById("months").innerHTML = monthName;
    document.getElementById("years").innerHTML = year;



    const formatAMPM = (date) => {
        let hour = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hour >= 12 ? 'PM' : 'AM';

        hour %= 12;
        hour = hour || 12;
        hour = hour < 10 ? `0${hour}` : hour;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        const strTime = `${hour}:${minutes} ${ampm}`;

        return strTime;
    };

    formatAMPM(new Date());

    document.getElementById("hours").innerHTML = formatAMPM(new Date());

}

setInterval(updateTime, 10000);
updateTime();


var today = new Date();
var hourNow = today.getHours();
if (hourNow <= 12) {
    document.getElementById("wathr").innerHTML = ` <img  class="weather" src="./assets/img/cloudy-day.png" alt="">`;
} else  if (hourNow <= 18){
    document.getElementById("wathr").innerHTML = ` <img  class="weather" src="./assets/img/sun.png" alt="">`;
}else  if (hourNow <= 24){
    document.getElementById("wathr").innerHTML = ` <img  class="weather" src="./assets/img/night.png" alt="">`;
}


// ********* Date and time *******


// ********* json *******

let showicon = '';

fetch("./assets/js/icon.json")
    .then(Response => Response.json())
    .then(idata => {
        // console.log(idata.iconsimg)
        idata.iconsimg.forEach(icon => {
            console.log(icon)
            showicon += `<div class="col-md-2 mb-3"> <div class="card" > <div class="card-body text-center"> <img src="${icon.image}" height="80px" /> <p class="mb-0 pt-2">${icon.name} </p> </div> </div> </div>`
        });
        document.getElementById('icon_card').innerHTML = showicon;
    }

    )




// *************   Contact form **************

const contactForm = document.getElementById('contact-form'),

contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    //check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === ''){
        // show message
        contactName.classList.add('error-input');
        contactEmail.classList.add('error-input');
        contactSubject.classList.add('error-input');
        contactMessage.classList.add('error-input');
        errorMessage.classList.add('faild-mess');
        errorMessage.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>  Please fill all the input fields'
    }
    else {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_uxkq5l2','template_4mdxwuf','#contact-form','e1133SZ42WQENu6MQ').then(() => {
            // show message and add color, window + dot to open emoji

            errorMessage.classList.add('color-first');
            errorMessage.innerHTML ='<i class="fa-solid fa-circle-check"></i> Message sent  ';
            // remove message after 5 seconds

            setTimeout(() => {
                errorMessage.textContent='';
            }, 5000);
        }, (error) => {
            alert('OOPs! Somting went wrong ...', error)
        }
    );

    // clear input field
    contactName.value='';
    contactEmail.value='';
    contactSubject.value='';
    contactMessage.value='';
  }
};

contactForm.addEventListener('submit', sendEmail);

// *************   Contact form end **************

// *************   header scroll **************

function scrollHeader() {
    const header = document.getElementById('header');
    // whene the scroll is greater than 80 viewport height, add the scorll-header class to header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// *************   header scroll end **************


// *************   Progress circle **************


$(document).ready(function($) {
    function animateElements() {
      $('.progressbar').each(function() {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find('.circle').attr('data-percent');
        var percentage = parseInt(percent, 10) / parseInt(100, 10);
        var animate = $(this).data('animate');
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data('animate', true);
          $(this).find('.circle-1').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#640D5F'
            },
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();

            $(this).data('animate', true);
            $(this).find('.circle-2').circleProgress({
            startAngle: -Math.PI / 1,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#982B1C'
            },
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();

           $(this).data('animate', true);
            $(this).find('.circle-3').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#1A4870'
            },
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
          
          $(this).data('animate', true);
            $(this).find('.circle-4').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#F3FEB8'
            },
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
           
          $(this).data('animate', true);
            $(this).find('.circle-5').circleProgress({
            startAngle: -Math.PI / 7,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#DC5F00'
            },
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
           
          $(this).data('animate', true);
            $(this).find('.circle-6').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#1679AB'
            },
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
           
          $(this).data('animate', true);
            $(this).find('.circle-7').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#F4CE14'
            },
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
           
          $(this).data('animate', true);
            $(this).find('.circle-8').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#FF4C4C'
            },
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
           
          $(this).data('animate', true);
            $(this).find('.circle-9').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#AD49E1'
            },
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
           
          $(this).data('animate', true);
            $(this).find('.circle-10').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 10,
            fill: {
              color: '#C7253E'
            }
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
        }
      });
    }
  
    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
  });