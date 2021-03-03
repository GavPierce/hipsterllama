<template>
  <section
    class="about-area section-padding section"
    id="about"
    :class="AboutStyle"
  >
    <div class="container">
      <div class="row mtn-30 wrapper">
        <!-- single item start -->
        <div
          v-for="(about, abouts) in abouts"
          :key="abouts"
          class="col-lg-6 col-md-6 item"
        >
          <div class="about-item">
            <a href="#about">
              <div class="about-icon">
                <i :class="about.icon"></i></div
            ></a>
            <div class="about-content">
              <h4>{{ about.title }}</h4>
              <p>{{ about.desc }}</p>
            </div>
          </div>
        </div>
        <!-- single item end -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props: ["AboutStyle"],
  data() {
    return {
      abouts: [
        {
          title: "Lets Play Mafia",
          desc:
            "Hipster LLamas current project. A fresh take on the Classic game of Mafia",
          icon: "fa fa-gamepad",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/components/about.scss";
.row {
  justify-content: center;
}
p {
  font-size: 20px;
  color: white !important;
}
.about-content {
  width: 100%;
  p {
    color: rgb(112, 56, 56) !important;
    font-size: 1.3em;
  }
}
.wrapper {
  background-color: rgba(255, 255, 255, 0.459);
  border-radius: 2em;
}
.item {
  width: 100%;
}
.about-content h4 {
  color: rgb(128, 32, 32) !important;
}
</style>
