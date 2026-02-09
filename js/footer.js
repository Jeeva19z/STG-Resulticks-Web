// window.addEventListener("load", footerComponent, false);
function footerComponent(){ 
var resulticksFooter = `
    <footer class="footer-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm footer-links">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="https://www.go.resul.io/" title="RESUL" rel="external">RESUL <span class="footer-icon"><img src="images/icons/footer-link-icon.svg" alt="icon" /> </span></a></li>
                        <li><a href="https://www.marketingstar.io/" title="Marketing Star" rel="external">Marketing Star <span class="footer-icon"><img src="images/icons/footer-link-icon.svg" alt="icon" /> </span></a></li>
                        <li><a href="https://www.smartdx.co/" title="SmartDX" rel="external">SmartDX <span class="footer-icon"><img src="images/icons/footer-link-icon.svg" alt="icon" /> </span></a></li>
                        <li><a href="https://www.grape.us.com/" title="GRAPE" rel="external">GRAPE <span class="footer-icon"><img src="images/icons/footer-link-icon.svg" alt="icon" /> </span></a></li>
                        <li><a href="https://www.reachertech.co/" title="REACHER" rel="external">REACHER <span class="footer-icon"><img src="images/icons/footer-link-icon.svg" alt="icon" /> </span></a></li>

                    </ul>
                    <h4><a href="resulticks-partner.html" title="Partners">Partners</a></h4>
                </div>
                <div class="col-sm footer-links">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="resulticks-story.html" title="Resulticks Story">Resulticks Story</a></li>
                        <li><a href="leadership.html" title="Leadership">Leadership</a></li>
                        <li><a href="global-offices.html" title="Global Offices">Global Offices</a></li>
						<li><a href="our-policies.html" title="Our Policies">Our Policies</a></li>
                    </ul>
                    <h4><a href="contact-us.html" title="Contact Us">Contact Us</a></h4>
                    <h4><a href="https://www.go.resul.io/careers" title="Careers" rel="external">Careers</a></h4>
                </div>
                <div class="col-sm footer-links">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="privacy-policy.html" title="Privacy Policy">Privacy Policy</a></li>
                        <li><a href="cookie-policy.html" title="Cookie Policy">Cookie Policy</a></li>
                        <li><a href="terms-and-conditions.html" title="T&amp;C">T&amp;C</a></li>
                    </ul>
                </div>
                <div class="col-sm footer-links">
                    <h4><a href="https://www.go.resul.io/data-security-and-governance" title="Security" rel="external">Security</a></h4>
                    <ul>
                        <li><a href="javascript:;">Enterprise-grade 5 layer security</a></li>
                    </ul>
                    <ul class="security-links">
                        <li><a href="javascript:;">ISO 27001</a></li>
                        <li><a href="javascript:;">TrustArc Privacy Central</a></li>
                        <li><a href="javascript:;">Zero Trust Security</a></li>
                        <li><a href="javascript:;">EU-US Data Privacy Framework & UK</a></li>
                        <li><a href="javascript:;">Extension</a></li>
                        <li><a href="javascript:;">GDPR, HIPAA & CCPA Compliant</a></li>
                        <li><a href="javascript:;">Single Sign-On [SSO]</a></li>
                        <li><a href="javascript:;">Dedicated Security Team</a></li>
                    </ul>
                </div>    
                <div class="col-sm text-center">
                    <div class="subscribe">
                        <ul class="subscribe-list">
                            <li>
                                <a href="javascript:void(0);" class="newsletter" data-bs-toggle="modal" data-bs-target="#subscribeModal"><img src="images/icons/mail-icon.svg" alt="mail-icon" /> Subscribe to our newsletter 
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-4">
                        <a href="https://privacy.truste.com/privacy-seal/validation?rid=9cad093d-876e-48dc-bf54-53dd33b13361" target="_blank" title="TRUSTe">
                            <img src="https://privacy-policy.truste.com/privacy-seal/seal?rid=9cad093d-876e-48dc-bf54-53dd33b13361" alt="TRUSTe"  width="142" height="45" />
                        </a>
                    </div>
                    
                </div>

            </div>
        </div>
    </footer>

    <section class="footer-sub">
        <div class="shadow"></div>
            <div class="container">
                <div class="footer-copy-space">
                    <div>
                        <ul class="footer-sm-menus">
                            <li><img src="images/icons/c-cloud.svg" class="c-cloud" alt="Resulticks" width="50"/></li>
                            <li><a href="javascript:;">Copyright &copy; <span id="currentyear"></span> RESULTICKS Solution Inc</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul class="social-icons">   
                            <li><a href="https://www.facebook.com/resulticks" title="Facebook" class="fb" rel="external"></a></li>
                            <li><a href="https://www.linkedin.com/company/resulticks" title="Linked in" class="in" rel="external"></a></li>
                            <li><a href="https://twitter.com/resulticks" title="Twitter" class="tw" rel="external"></a></li>
                            <li><a href="https://www.youtube.com/resulticks" title="Youtube" class="yt" rel="external"></a></li>
                            <li><a href="https://www.instagram.com/resulticks/" title="Instagram" class="ins" rel="external"></a></li>
                        </ul>
                    </div>
                </div>
            </div>  
    </section>

    <section class="footer-strip">
        <div class="footer-bg fbg-1">&nbsp;</div>
        <div class="footer-bg fbg-2">&nbsp;</div>
        <div class="footer-bg fbg-3">&nbsp;</div>
        <div class="footer-bg fbg-4">&nbsp;</div>
        <div class="footer-bg fbg-5">&nbsp;</div>
    </section>  
    
    <a href="javascript:void(0)" class="back-to-top" title="top" id="back-to-top"></a>`;
document.getElementById('wrapper').insertAdjacentHTML('beforeend', resulticksFooter);
// get current year
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

const scrollToTopButton = document.getElementById('back-to-top');

const scrollFunc = () => {
    let y = document.documentElement.scrollTop || document.body.scrollTop;
    if (y > 70) {
        scrollToTopButton.className = "back-to-top show";
    } else {
        scrollToTopButton.className = "back-to-top";
    }
}; 

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
}

let targetElements = document.querySelectorAll("[rel='external']");
if(targetElements.length) {
    targetElements.forEach(element => {
        element.addEventListener("click", (event) => {
            try {
				event.preventDefault();
                let url = event.target.getAttribute('href');
                if(!!url) {
                     window.open(url, "_blank")   
                }
            } catch (error) { 
    
            }
        })
    })
}

}

footerComponent();