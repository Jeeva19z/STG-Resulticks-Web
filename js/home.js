if(sessionStorage.getItem("sectionSelected") == "true") {
    window.scrollTo({
        top: 1675,
        behavior: 'smooth'
    });
    sessionStorage.setItem("sectionSelected", "false");
}

window.addEventListener('load', () => {
    var productLink = document.getElementById("products");
    // if(productLink) {
    //     productLink.addEventListener('click', () => {
    //         // console.log("Triggered")
    //         // sessionStorage.removeItem('key');
    //         window.scrollTo({
    //             top: 1475,
    //             behavior: 'smooth'
    //         });
    //     });
    // }

    const target = document.getElementById('products-section');
    productLink?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: target.offsetTop - 60, // 100px offset
            behavior: 'smooth'
        });
    });

    document.getElementById('products')?.addEventListener('click', function () {
        const menu = document.querySelector('.navbar-collapse');
        const toggler = document.querySelector('.navbar-toggler.navbar-icon');

        if (menu.classList.contains('show')) {
            toggler.click();
        }
    });
    

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