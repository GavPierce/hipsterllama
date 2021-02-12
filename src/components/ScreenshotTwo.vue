<template>
    <section class="screenshot-style-2 section-padding bg-cover section" id="screenshot" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-2">
                        <h2 class="title">Roles</h2>
                        <p >All the Classic Roles</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="screenshot-gallery text-center">
                        <swiper :options="swiperOption">
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/screenshot/mafia.png" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/screenshot/doctor.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/screenshot/detective.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/screenshot/town.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/screenshot/joker.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <!-- Optional controls -->
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'ScreenshotTwo',
        data (){
            return {
                bgImg: {
                },
                swiperOption: {
                    speed: 600,
                    loop: true,
                    slidesPerView: 3,
                    effect: 'coverflow',
                    // grabCursor: true,
                    centeredSlides: true,
                    coverflowEffect: {
                        rotate: -25,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : false,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                     breakpoints: {
                         768: {
                            spaceBetween: 60
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }
                }
            }
        }
    }

</script>
<style scoped>
.scr-thumb {
    border-radius: 10px;
}
.scr-thumb img {
    border-radius: 2em 2emgit;
}

.title-style-2 p {
    color: white;
}
</style>
