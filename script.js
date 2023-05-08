$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scrool-up-btn').addClass("show");
        } else {
            $('.scrool-up-btn').removeClass("show");
        }
    });


    //slide-up script
    $('.scrool-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
    })

    // toogle menu navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.navbar i').toggleClass("active");
    });

    // animasi typing 
    var typed = new Typed(".typing", {
        strings: ["Youtuber", "Developer", "blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Youtuber", "Developer", "blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayTimePause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            1000: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
    // gallery
    $('.carousel-gallery').owlCarousel({
        // margin: 20,
        loop: true,
        // autoWidth: true,
        items: 5,
        autoPlayTimeOut: 2000,
        autoPlayTimePause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false
            }
        }
    });
    $('.carousel-project').owlCarousel({
        // margin: 20,
        loop: true,
        // autoWidth: true,
        items: 5,
        autoPlayTimeOut: 2000,
        autoPlayTimePause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            }
            // 600: {
            //     items: 3,
            //     nav: false
            // },
            // 1000: {
            //     items: 5,
            //     nav: false
            // }
        }
    });

    // AOS ANIMASI

    const galleryImage = document.querySelectorAll('#gallery .gallery-img');

    galleryImage.forEach((img, i) => {
        img.dataset.aos = 'flip-left';
        img.dataset.aosDelay = i * 1000;
        img.dataset.aosDuration = 1000;
    });
    AOS.init({
        once: true,
        duration: 2000,
    });

    // script GSAP
    // untuk gambar
    // gsap.from('.about img', {
    //     duration: 1,
    //     rotateY: 360,
    //     opacity: 0,
    //     ease: 'bounce'
    // });

    // titl js
    VanillaTilt.init(document.querySelectorAll(".skill-my"), {
        max: 25,
        speed: 1000,
        glare: true,
        maxGlare: .5
    });
    //It also supports NodeList

    // kirim data ke google excel
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzeXzRET1IG1SDQN2tHM4I3CjKXAuZd7i5PQYoCX8XIIQ5oRIva8W9mhebE7gL4ZEoW8g/exec';
    const form = document.forms['andri-portofolio'];

    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const myPesan = document.querySelector('.my-pesan');

    form.addEventListener('submit', e => {
        e.preventDefault();
        // ketika tombol kirim diklik
        // tampilkan tombol loading hilangkan tombol kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => {
                // tampilkan tombol loading hilangkan tombol loading
                btnLoading.classList.toggle('d-none');
                btnKirim.classList.toggle('d-none');
                // tampilkan alert
                myPesan.classList.toggle('d-none');
                // reset form
                form.reset();
                console.log('Success!', response);
            })
            .catch(error => console.error('Error!', error.message))
    })




});