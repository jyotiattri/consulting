Vue.component("header-component", {
    template: `
    <div class="header-area">
        <div class="main-header ">
            <div class="header-top d-none d-lg-block">
                <div class="container">
                    <div class="col-xl-12">
                        <div class="row d-flex justify-content-between align-items-center">
                            <div class="header-info-left">
                                <ul>     
                                    <li><i class="far fa-clock"></i> Mon - SAT: 6.00 am - 10.00 pm</li>
                                    <li>Sun:  Closed</li>
                                </ul>
                            </div>
                            <div class="header-info-right">
                                <ul class="header-social">    
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li> <a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom  header-sticky">
                <div class="container">
                    <div class="row align-items-center">
                        <!-- Logo -->
                        <div class="col-xl-2 col-lg-2">
                            <div class="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
                            </div>
                        </div>
                        <div class="col-xl-10 col-lg-10">
                            <div class="menu-wrapper  d-flex align-items-center justify-content-end">
                                <!-- Main-menu -->
                                <div class="main-menu d-none d-lg-block">
                                    <nav> 
                                        <ul id="navigation">                                                                                          
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="blog.html">Blog</a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog_details.html">Blog Details</a></li>
                                                    <li><a href="elements.html">Element</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div> 
                        <!-- Mobile Menu -->
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
});
Vue.component("slider-component", {
    template: `
    <div class="slider-area ">
    <div class="slider-active">
        <!-- Single Slider -->
        <div class="single-slider slider-height d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-7 col-md-8">
                        <div class="hero__caption">
                            <span data-animation="fadeInLeft" data-delay=".1s">Committed to success</span>
                            <h1 data-animation="fadeInLeft" data-delay=".5s" >We help to grow your business</h1>
                            <p data-animation="fadeInLeft" data-delay=".9s">Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate<br> velit esscillumlore eu quife nrulla parihatur.</p>
                            <!-- Hero-btn -->
                            <div class="hero__btn" data-animation="fadeInLeft" data-delay="1.1s">
                                <a href="industries.html" class="btn hero-btn">Our Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
        <!-- Single Slider -->
        <div class="single-slider slider-height d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-7 col-md-8">
                        <div class="hero__caption">
                            <span data-animation="fadeInLeft" data-delay=".1s">Committed to success</span>
                            <h1 data-animation="fadeInLeft" data-delay=".5s" >We help to grow your business</h1>
                            <p data-animation="fadeInLeft" data-delay=".9s">Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate<br> velit esscillumlore eu quife nrulla parihatur.</p>
                            <!-- Hero-btn -->
                            <div class="hero__btn" data-animation="fadeInLeft" data-delay="1.1s">
                                <a href="industries.html" class="btn hero-btn">Our Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    </div>
</div>
    `,
});
Vue.component("category-component", {
template: `
<div class="categories-area section-padding30">
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <!-- Section Tittle -->
            <div class="section-tittle mb-70">
                <span>Our Top Services</span>
                <h2>Our Best Services</h2>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6" v-for="service in services"
        :key="service.servicename">
            <div class="single-cat text-center mb-50">
                <div class="cat-icon">
                    <span :class="service.serviceicon"></span>
                </div>
                <div class="cat-cap">
                    <h5><a href="services.html">{{service.servicename}} </a></h5>
                    <p>{{service.servicedetails}}</p>
                </div>
            </div>
        </div>
        
    </div>
</div>
</div>
`,
data() {
    return {
        services: [
            {
                serviceicon: 'flaticon-development',
                servicename: 'Strategy Planning',
                servicedetails: 'There are many variations of passages of lorem Ipsum available but the new majority have suffered.',
            },
            {
                serviceicon: 'flaticon-result',
                servicename: 'Insurance Service',
                servicedetails: 'There are many variations of passages of lorem Ipsum available but the new majority have suffered.',
            },
            {
                serviceicon: 'flaticon-team',
                servicename: 'Audit & Evaluation',
                servicedetails: 'There are many variations of passages of lorem Ipsum available but the new majority have suffered.',
            },
        ]
    }
}
}),
Vue.component("support-component", {
    template: `
    <div class="support-company-area pt-100 pb-100 section-bg fix" data-background="assets/img/gallery/section_bg02.jpg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6">
                    <div class="support-location-img">
                        <img src="assets/img/gallery/about.png" alt="">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="right-caption">
                        <!-- Section Tittle -->
                        <div class="section-tittle section-tittle2 mb-50">
                            <span>Our Top Services</span>
                            <h2>Our Best Services</h2>
                        </div>
                        <div class="support-caption">
                            <p class="pera-top">Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>
                            <p class="mb-65">Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>
                            <a href="about.html" class="btn post-btn">More About Us</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `,
});
Vue.component("services-component", {
    template: `
    <div class="services-area section-padding3">
        <div class="container">
            <div class="row">
                <div class="cl-xl-7 col-lg-8 col-md-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle mb-70">
                        <span>Our Portfolios of cases</span>
                        <h2>Featured Case Study</h2>
                    </div> 
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-10" v-for="item in items"
                :key="item.itemname">
                    <div class="single-services mb-100">
                        <div class="services-img">
                            <img :src="item.itemimage" alt="">
                            </div>
                            <div class="services-caption">
                            <span>{{item.itemname}}</span>
                            <p><a href="#">{{item.itemdetails}}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            items: [
                {
                    itemimage: 'assets/img/gallery/services1.png',
                    itemname: 'Strategy planing',
                    itemdetails: 'Within the construction industry as their overdraft'
                },
                {
                    itemimage: 'assets/img/gallery/services2.png',
                    itemname: 'Strategy planing',
                    itemdetails: 'Within the construction industry as their overdraft'
                },
                {
                    itemimage: 'assets/img/gallery/services3.png',
                    itemname: 'Strategy planing',
                    itemdetails: 'Within the construction industry as their overdraft'
                },
                {
                    itemimage: 'assets/img/gallery/services4.png',
                    itemname: 'Strategy planing',
                    itemdetails: 'Within the construction industry as their overdraft'
                },
            ]
    }
}
});
Vue.component("testimonial-component", {
    template: `
    <div class="testimonial-area testimonial-padding" data-background="assets/img/gallery/section_bg04.jpg">
    <div class="container ">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-10 col-lg-10 col-md-9">
                <div class="h1-testimonial-active">
                    <!-- Single Testimonial -->
                    <div class="single-testimonial text-center">
                        <!-- Testimonial Content -->
                        <div class="testimonial-caption ">
                            <div class="testimonial-top-cap">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="67px" height="49px">
                                <path fill-rule="evenodd"  fill="rgb(240, 78, 60)"
                                d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"/>
                                </svg>
                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis por incididunt ut labore et dolore mas. </p>
                            </div>
                            <!-- founder -->
                            <div class="testimonial-founder d-flex align-items-center justify-content-center">
                                <div class="founder-img">
                                    <img src="assets/img/gallery/Homepage_testi.png" alt="">
                                </div>
                                <div class="founder-text">
                                    <span>Jessya Inn</span>
                                    <p>Chif Photographer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Single Testimonial -->
                    <div class="single-testimonial text-center">
                        <!-- Testimonial Content -->
                        <div class="testimonial-caption ">
                            <div class="testimonial-top-cap">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="67px" height="49px">
                                <path fill-rule="evenodd"  fill="rgb(240, 78, 60)"
                                d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"/>
                                </svg>
                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis por incididunt ut labore et dolore mas. </p>
                            </div>
                            <!-- founder -->
                            <div class="testimonial-founder d-flex align-items-center justify-content-center">
                                <div class="founder-img">
                                    <img src="assets/img/gallery/Homepage_testi.png" alt="">
                                </div>
                                <div class="founder-text">
                                    <span>Jessya Inn</span>
                                    <p>Chif Photographer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
});
Vue.component("count-down-component", {
    template: `
    <div class="count-down-area pb-120">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <!-- Counter Up -->
                <div class="single-counter text-center">
                    <span class="counter">8705</span>
                    <p>Projects Completed</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <!-- Counter Up -->
                <div class="single-counter active text-center">
                    <span class="counter">480</span>
                    <p> Active Clients</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <!-- Counter Up -->
                <div class="single-counter text-center">
                    <span class="counter">626</span>
                    <p>Cups of Coffee</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <!-- Counter Up -->
                <div class="single-counter text-center">
                    <span class="counter">9774</span>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
});
Vue.component("team-component", {
    template:`
    <div class="team-area section-padding30">
        <div class="container">
            <div class="row">
                <div class="cl-xl-7 col-lg-8 col-md-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle mb-70">
                        <span>Our Professional members </span>
                        <h2>Our Team Members</h2>
                    </div> 
                </div>
            </div>
            <div class="row">
                <!-- single Tem -->
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-" v-for="member in members"
                :key="member.membername">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <img :src="member.memberimage" alt="">
                        </div>
                        <div class="team-caption">
                            <h3><a href="#">{{member.membername}}</a></h3>
                            <span>{{member.memberdetails}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            members:[
                {
                    memberimage: 'assets/img/gallery/team1.png',
                    membername: 'Robert',
                    memberdetails: 'UX Designer'
                },
                {
                    memberimage: 'assets/img/gallery/team2.png',
                    membername: 'Charles',
                    memberdetails: 'Frontend Developer'
                },
                {
                    memberimage: 'assets/img/gallery/team3.png',
                    membername: 'Harry',
                    memberdetails: 'Marketing Head'
                },
            ]
        }
    }
});
Vue.component("wanttowork-component", {
    template: `
     <section class="wantToWork-area w-padding2 section-bg" data-background="assets/img/gallery/section_bg03.jpg">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-7 col-lg-9 col-md-8">
                    <div class="wantToWork-caption wantToWork-caption2">
                        <h2>Are you Searching<br> For a First-Class Consultant?</h2>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4">
                    <a href="#" class="btn btn-black f-right">More About Us</a>
                </div>
            </div>
        </div>
    </section>
`,
});
Vue.component("blog-component", {
    template: `
    <div class="home-blog-area section-padding30">
        <div class="container">
            <!-- Section Tittle -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-tittle mb-100">
                        <span>Recent News of us</span>
                        <h2>Our Recent Blog</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="assets/img/gallery/home_blog1.png" alt="">
                                <ul>
                                    <li>By Admin   -   October 27, 2020</li>
                                </ul>
                            </div>
                            <div class="blog-cap">
                                <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                                <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra.</p>
                                <a href="blog_details.html" class="more-btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="assets/img/gallery/home_blog2.png" alt="">
                                <ul>
                                    <li>By Admin   -   October 27, 2020</li>
                                </ul>
                            </div>
                            <div class="blog-cap">
                                <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                                <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra.</p>
                                <a href="blog_details.html" class="more-btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
});
Vue.component("brand-component", {
    template: `
    <div class="brand-area pb-140">
    <div class="container">
        <div class="brand-active brand-border pb-40">
            <div class="single-brand">
                <img src="assets/img/gallery/brand1.png" alt="">
            </div>
            <div class="single-brand">
                <img src="assets/img/gallery/brand2.png" alt="">
            </div>
            <div class="single-brand">
                <img src="assets/img/gallery/brand3.png" alt="">
            </div>
            <div class="single-brand">
                <img src="assets/img/gallery/brand4.png" alt="">
            </div>
            <div class="single-brand">
                <img src="assets/img/gallery/brand2.png" alt="">
            </div>
            <div class="single-brand">
                <img src="assets/img/gallery/brand5.png" alt="">
            </div>
        </div>
    </div>
</div>
`,
});
Vue.component("footer-component", {
    template: `
    <div class="footer-area section-bg" data-background="assets/img/gallery/footer_bg.jpg">
    <div class="container">
        <div class="footer-top footer-padding">
            <div class="row d-flex justify-content-between">
                <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                    <div class="single-footer-caption mb-50">
                        <!-- logo -->
                        <div class="footer-logo">
                            <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""></a>
                        </div>
                        <div class="footer-tittle">
                            <div class="footer-pera">
                                <p class="info1">Receive updates and latest news direct from Simply enter.</p>
                            </div>
                        </div>
                        <div class="footer-number">
                            <h4><span>+564 </span>7885 3222</h4>
                            <p>youremail@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                    <div class="single-footer-caption mb-50">
                        <div class="footer-tittle">
                            <h4>Location </h4>
                            <ul>
                                <li><a href="#">Advanced</a></li>
                                <li><a href="#"> Management</a></li>
                                <li><a href="#">Corporate</a></li>
                                <li><a href="#">Customer</a></li>
                                <li><a href="#">Information</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                    <div class="single-footer-caption mb-50">
                        <div class="footer-tittle">
                            <h4>Explore</h4>
                            <ul>
                                <li><a href="#">Cookies</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Proparties</a></li>
                                <li><a href="#">Licenses</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                    <div class="single-footer-caption mb-50">
                        <div class="footer-tittle">
                            <h4>Location</h4>
                            <div class="footer-pera">
                                <p class="info1">Subscribe now to get daily updates</p>
                            </div>
                        </div>
                        <!-- Form -->
                        <div class="footer-form">
                            <div id="mc_embed_signup">
                                <form target="_blank" action="#" method="get" class="subscribe_form relative mail_part" novalidate="true">
                                    <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'">
                                    <div class="form-icon">
                                        <button type="submit" name="submit" id="newsletter-submit" class="email_icon newsletter-submit button-contactForm">
                                            SIGN UP
                                        </button>
                                    </div>
                                    <div class="mt-10 info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-xl-9 col-lg-8">
                    <div class="footer-copy-right">
                      <p>All rights are reserved</p>  
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4">
                    <!-- Footer Social -->
                    <div class="footer-social f-right">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fas fa-globe"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
});
new Vue({
    el: '#app',
    data: {
    }
});


