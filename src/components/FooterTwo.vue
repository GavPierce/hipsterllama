<template>
  <footer>
    <div class="footer-widget-area section-padding" :class="FooterStyle">
      <div class="container">
        <div class="row mtn-40">
          <div class="col-lg-4">
            <a href="mailto:48subzero@gmail.com">
              <div class="widget-item">
                <h5 class="widget-title">Contact Us</h5>
                <div class="widget-body">
                  <ul class="widget-info">
                    <li><strong>Email :</strong>JBowen@hipsterllama.com</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom light-blue-bg" :class="FooterStyle">
      <div class="container">
        <div class="row">
          <div class="col-md-6 order-2 order-md-1">
            <div class="copyright">
              <p>
                Copyright © {{ new Date().getFullYear() }}
                <a href="#">Hipser LLama LLC.</a> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterTwo",
  props: ["FooterStyle"],
  data() {
    return {
      socials: [
        { icon: "fa fa-facebook" },
        { icon: "fa fa-twitter" },
        { icon: "fa fa-dribbble" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/components/footer.scss";
.copyright {
  text-align: center;
}
.widget-item {
  background-color: rgba(255, 255, 255, 0.397);
  padding: 2em;
  border-radius: 2em;
  &:hover {
    background-color: white;
  }
  .widget-info {
    color: white !important;
  }
}

.widget-item:hover {
  color: white;
}
</style>
