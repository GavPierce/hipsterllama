<template>
  <section
    class="testimonial-area pt-100 fix section"
    id="review"
    :style="bgImg"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-center">
            <div class="title-icon"></div>
            <h2 class="title text-white">The Team</h2>
            <p>Meet The Team Behind Hipster LLama</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <carousel
            class="testimonial-active owl-dot-style"
            :items="1"
            :nav="false"
            :smartSpeed="1000"
          >
            <!-- testimonial item start -->
            <div
              v-for="(client, clients) in clients"
              :key="clients"
              class="testimonial-item"
            >
              <div class="testimonial-thumb">
                <img :src="client.clientThumb" alt="client thumb" />
              </div>
              <div class="testimonial-content">
                <h6 class="client">
                  {{ client.name }} - <span>{{ client.designation }}</span>
                </h6>
                <p>{{ client.desc }}</p>
              </div>
            </div>
            <!-- testimonial item end -->
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "Testimonial",
  components: {
    carousel,
  },
  data() {
    return {
      bgImg: {
        backgroundImage: `url(${require("../assets/img/clients-bg.jpg")})`,
      },
      clients: [
        {
          clientThumb: require("../assets/img/testimonial/joshua.png"),
          name: "Joshua Bowen",
          designation: "CEO",
          desc: "Joshua Bowen Comes up with the lightbulb ideas",
        },
        {
          clientThumb: require("../assets/img/testimonial/gavin.jpg"),
          name: "Gavin Pierce",
          designation: "Web Developer",
          desc: "Gavin Tries to keep things from exploding",
        },
        {
          clientThumb: require("../assets/img/testimonial/hayling.png"),
          name: "Hayling Pierce",
          designation: "Designer",
          desc: "Makes the things look Pretty",
        },
      ],
    };
  },
};
// Test
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/components/testimonial.scss";
</style>
