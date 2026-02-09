let element = document.getElementById("products");
if(element) {
    element.addEventListener('click', () => {
        sessionStorage.setItem("sectionSelected", "true");
        window.location.href = location.origin + "/index.html";
    })
}

// let previousPage = document.referrer;

// let pages = [
//     "contact-us.html", "request-a-meeting.html", "resulticks-partner.html", "resulticks-story.html",
//     "leadership.html", "global-offices.html"
// ].map(page => {
//     if(document.referrer.includes(page)) {
//         // document.getElementsByClassName('product-menu')[0].addEventListener("click", function(){
//             window.scrollTo({
//                 top: 1675,
//                 behavior: 'smooth'
//             });
//         // });
//     }
// })







