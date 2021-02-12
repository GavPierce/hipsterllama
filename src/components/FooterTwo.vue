<template>
    <footer>
        <div class="footer-widget-area section-padding" :class="FooterStyle">
            <div class="container">
                <div class="row mtn-40">
                    <div class="col-lg-4">
                        <div class="widget-item">
                            <h5 class="widget-title">ABOUT US</h5>
                            <div class="widget-body">
                                <ul class="widget-info">
                                    <li><strong>Adddress :</strong><span>40 Sreet 133/2 NewYork City,United States.</span></li>
                                    <li><strong>Phone :</strong>(+800) 123 456 789</li>
                                    <li><strong>Email :</strong>demo@domain.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                   

                    <div class="col-lg-4">
                        <div class="widget-item">
                            <h5 class="widget-title">Follow Us!</h5>
                            <div class="widget-body newsletter-widget">
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod.</p>
                                <form class="newsletter-form">
                                    <input type="text" class="newsletter-field" placeholder="Email Here">
                                    <button type="submit" class="subscribe-btn">SUBSCRIBE</button>
                                </form>
                                <ul class="footer-social-link">
                                    <li v-for="(social, socials) in socials" :key="socials">
                                        <a href="#"><i :class=social.icon></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom light-blue-bg" :class="FooterStyle">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 order-2 order-md-1">
                        <div class="copyright">
                            <p>Copyright © <a href="#">Hipser LLama LLC</a>. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterTwo',
    props: ["FooterStyle"],
    data () {
        return {
            socials: [
                {icon: "fa fa-facebook"},
                {icon: "fa fa-twitter"},
                {icon: "fa fa-dribbble"}
            ]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/footer.scss';
</style>
