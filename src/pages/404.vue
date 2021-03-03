<template>
  <div class="error-not-found">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="error-inner text-center">
            <div class="image">
              <img src="../assets/img/404.png" alt="404" />
            </div>
            <h1 class="heading-h3 text-white">Looks like you are lost.</h1>
            <div class="error-text">
              <p class="text-white">
                The LLama Couldn't find your page. I mean, it really is just a
                single page site my friend.
              </p>
              <div class="error-button-group">
                <router-link class="btn-submit" to="/">
                  Go Back To Homepage
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/components/404.scss";
</style>
