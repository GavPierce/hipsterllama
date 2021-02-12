<template>
    <footer>
        <div class="footer-main dark-bg section-padding" :class="FooterStyle">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="footer-content text-center">
                            <ul class="footer-social-link">
                                <li v-for="(social, socials) in socials" :key="socials">
                                    <a href="#"><i :class=social.icon></i></a>
                                </li>
                            </ul>
                            <h3 class="footer-title">THANKS FOR STOPPING BY OUR WEBSITE!</h3>
                            <p>Stay Tuned for more great products!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom black-bg" :class="FooterStyle">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 order-2 order-md-1">
                        <div class="copyright">
                            <p>Copyright © <a href="#">Hipster LLama LLC</a>. All Rights Reserved</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
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
