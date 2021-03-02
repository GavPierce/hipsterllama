<template>
  <header class="header-main header-main2" :class="{ sticky: scrolled }">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="menu-wrap">
            <div class="brand-logo">
              <a href="#">
                <img src="../assets/img/logo/logo.jpg" alt="Brand Logo" />
              </a>
            </div>
            <div class="switch_wrapper">
              <i
                class="fa fa-fire"
                :class="{ fire_active: this.$store.state.switch }"
              ></i>

              <label class="switch">
                <input type="checkbox" @click="on" />
                <span class="slider round"></span>
              </label>
              <i class="fa fa-bolt"></i>
            </div>

            <div id="hamburger" v-on:click="display_menu()">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul class="main-menu main-menu__style-2">
              <li>
                <a v-on:click="close_menu()" href="#home" class="activee"
                  >Home</a
                >
              </li>
              <li><a v-on:click="close_menu()" href="#about">About</a></li>
              <li><a v-on:click="close_menu()" href="#review">Team</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      load: false,
      limitPosition: 200,
      scrolled: false,
      lastPosition: 500,
    };
  },
  methods: {
    // responsive menu script
    on() {
      this.$emit("switchCool");
    },
    display_menu: function() {
      var body = document.getElementsByTagName("body")[0];
      !body.classList.contains("display_menu")
        ? body.classList.add("display_menu")
        : body.classList.remove("display_menu");
    },
    close_menu: function() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("display_menu");
    },
    loaded: function() {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      this.load = true;
    },

    // sticky menu script
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
        // move up!
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = true;
        // move down
      }

      this.lastPosition = window.scrollY;
      this.scrolled = window.scrollY > 50;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  mounted() {
    (function() {
      scrollTo();
    })();

    function scrollTo() {
      const links = document.querySelectorAll("a");
      links.forEach((each) => (each.onclick = scrollAnchors));
    }

    function scrollAnchors(e, respond = null) {
      const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);
      e.preventDefault();
      var targetID = respond
        ? respond.getAttribute("href")
        : this.getAttribute("href");
      const targetAnchor = document.querySelector(targetID);
      if (!targetAnchor) return;
      const originalTop = distanceToTop(targetAnchor);
      window.scrollBy({ top: originalTop - 75, left: 0, behavior: "smooth" });
      const checkIfDone = setInterval(function() {
        const atBottom =
          window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight - 0;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
          targetAnchor.tabIndex = "-1";
          targetAnchor.focus();
          clearInterval(checkIfDone);
        }
      }, 800);
    }
    //scroll spy js
    window.addEventListener("load", function() {
      var section = document.querySelectorAll(".main-container > *");
      var sections = {};
      var i = 0;

      Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop - 85;
      });

      window.onscroll = function() {
        var scrollPosition =
          document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
          if (sections[i] <= scrollPosition) {
            document.querySelector(".activee").setAttribute("class", " ");
            document
              .querySelector("a[href*=" + i + "]")
              .setAttribute("class", "activee");
          }
        }
      };
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/components/header.scss";
.switch_wrapper {
  @media #{$md-device, $sm-device} {
    position: absolute;
    top: 90px;
    left: 35px;
  }
  i {
    font-size: 2em;
    padding: 0 2em;

    @media #{$md-device, $sm-device} {
      display: none;
    }
  }
}
img {
  max-width: fit-content;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.fire_active {
  color: orange;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
