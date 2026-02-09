if(sessionStorage.getItem("sectionSelected") == "true") {
    window.scrollTo({
        top: 1475,
        behavior: 'smooth'
    });
    sessionStorage.setItem("sectionSelected", "false");
}

window.addEventListener('load', () => {
    var productLink = document.getElementById("products");
    if(productLink) {
        productLink.addEventListener('click', () => {
            // console.log("Triggered")
            // sessionStorage.removeItem('key');
            window.scrollTo({
                top: 1475,
                behavior: 'smooth'
            });
        });
    }

    // setTimeout(function() {
    //     document.getElementById("loading").classList.add('loader-hide');
    // }, 1000);
    

    // AOS animation init
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        once: true
    });

});