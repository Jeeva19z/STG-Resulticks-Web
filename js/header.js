function headerComponent(){ 
var resulticksHeader = `<nav class="navbar fixed-top white-theme navbar-expand-lg animated navigation flex-column" id="rs-header" >
       
<div class="container-fluid band-heading-container">
    <p class="band-heading">Resulticks Signs Amended and Restated Sale and Purchase Agreement with Diginex, Marking a Major Step Toward a Nasdaq-Listed Future <a class="band-heading-link" href="https://www.go.resul.io/newsroom/diginex-and-resulticks-sign-amended-definitive-agreement-to-create-a-global-ai-powered-group-spanning-customer-engagement-and-trusted-sustainability-data.html" target="_blank"  style="text-decoration: underline;">Know More</a></p>
</div>
        
        <div class="container-fluid">

            <a class="navbar-brand" href="/"></a>
            <button class="navbar-toggler navbar-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" id="navbarToggler">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
             
            <div class="header-links-container">
             
                <ul class="header-links">
           
                    <li><a href="contact-us.html" title="Contact us">Contact Us</a></li>
                    <li><a href="meeting-request.html" title="Request a meeting">Request a meeting</a></li>
                </ul>
                <ul class="navbar-nav mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" id="products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="resulticks-partner.html">Partners</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="javascript:;" data-bs-toggle="dropdown">About Us</a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-fade-up">
                            <li><a class="dropdown-item" href="resulticks-story.html">Resulticks Story</a></li>
                            <li><a class="dropdown-item" href="leadership.html">Leadership</a></li>
                            <li><a class="dropdown-item" href="global-offices.html">Global Offices</a></li>
							<li><a class="dropdown-item" href="our-policies.html">Our Policies</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
`;
document.getElementById('rs-header-wrapper').insertAdjacentHTML('afterbegin', resulticksHeader);

}
headerComponent();
