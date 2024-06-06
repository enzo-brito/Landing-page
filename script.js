document.addEventListener('DOMContentLoaded', () => {
    const glideProdutos = new Glide('#produtos-carousel', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        focusAt: 'center',
        gap: 20,
        autoplay: 3000,
        animationDuration: 800,
        animationTimingFunc: 'ease-in-out',
        breakpoints: {
            768: {
                perView: 1,
                gap: 10
            }
        }
    }).mount();

    const glideNovidade = new Glide('#novidade-carousel', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        focusAt: 'center',
        gap: 20,
        autoplay: 3000,
        animationDuration: 800,
        animationTimingFunc: 'ease-in-out',
        breakpoints: {
            768: {
                perView: 1,
                gap: 10
            }
        }
    }).mount();

    function addActiveClass(glide, glideId) {
        glide.on(['mount.after', 'run'], () => {
            const slides = document.querySelectorAll(`${glideId} .glide__slide`);
            slides.forEach((slide, index) => {
                slide.classList.toggle('glide__slide--active', index === glide.index);
            });
        });
    }

    addActiveClass(glideProdutos, '#produtos-carousel');
    addActiveClass(glideNovidade, '#novidade-carousel');
});
function encaminharWhatsApp() {
    var numeroTelefone = "558681524834";
    var mensagem = "Olá, vim pelo seu site. Poderia me enviar o catálogo?";
    
    mensagem = encodeURIComponent(mensagem);
    
    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + mensagem;
    
    window.open(url);
}