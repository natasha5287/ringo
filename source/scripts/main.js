import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

// Menu

const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__toggle');

const toggleMenu = () => {
    header.classList.toggle('opened');
};

menuButton.addEventListener('click', toggleMenu);

// Scroll to menu's sections

const menuLinks = document.querySelectorAll('.menu-link');

const scrollToSection = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (!href && !href.startsWith("#")) return;

    const section = href.slice(1);
    const top = document.getElementById(section)?.offsetTop || 0;
    window.scrollTo({ top, behavior: "smooth" });
};

menuLinks.forEach((link) => link.addEventListener("click", scrollToSection));

// Title's animation

const animationItems = document.querySelectorAll('.anim-title');


if (animationItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animationItems.length; index++) {
            const animTitle = animationItems[index];

            const animTitleHeight = animTitle.offsetHeight;

            const animTitleOffset = offset(animTitle).top;
            const animStart = 4;

            let animTitlePoint = window.innerHeight - animTitleHeight / animStart;
            if (animTitleHeight > window.innerHeight) {
                animTitlePoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animTitleOffset - animTitlePoint) && scrollY < (animTitleOffset + animTitleHeight)) {
                animTitle.classList.add('active');
            } else {
                animTitle.classList.remove('active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}


// Slider banner 
const sliderBanner = new Swiper('.banner', {
    slidesPerView: 1,
    initialSlide: 2,
    watchOverflow: true,
    speed: 800,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// Slider Gallery

const sliderGallery = new Swiper('.gallery__slider', {
    slidesPerView: 1,
    initialSlide: 2,
    watchOverflow: true,
    speed: 800,
    loop: true,
    spaceBetween: 40,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1000: {
            slidesPerView: 1.6,
            spaceBetween: 40,
            centeredSlider: true,
            slidesOffsetBefore: 225,
        },
        1600: {
            slidesPerView: 2.55,
            spaceBetween: 40,
            centeredSlider: true,
            slidesOffsetBefore: 530,
        }
    }
}
)

// Slider Partners
const sliderPartners = new Swiper('.partners__slider', {
    slidesPerView: 2,
    initialSlide: 1,
    watchOverflow: true,
    speed: 800,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 4,
        }
    }
})

//Cursor-img

document.addEventListener('mousemove', e => {
    document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})

// Input add file

const inputs = document.querySelectorAll('.connection__file');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling;
    let labelVal = label.innerHTML;

    input.addEventListener('change', function (e) {
        var fileName = '';
        if (this.files && this.files.length > 1) {
            fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        } else {
            fileName = e.target.value.split('\\').pop();
        }

        if (fileName)
            label.querySelector('span').innerHTML = fileName;
        else
            label.innerHTML = labelVal;
    });
});

// Open modal 

const modalLinks = document.querySelectorAll('.modal-link');
const modalCloseButtons = document.querySelectorAll('.modal__close');

if (modalLinks.length > 0) {

    modalLinks.forEach((link) => link.addEventListener('click', function (e) {

        const modalName = link.getAttribute('href').replace('#', '');
        const currentModal = document.getElementById(modalName);
        currentModal.classList.add('opened');

        modalCloseButtons.forEach((btn) => btn.addEventListener('click', function () {
            currentModal.classList.remove('opened');
        }))

    }));

}





