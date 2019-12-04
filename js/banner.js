$('.banner-scroll .banner .banner-preview img').each(function (index) {
    let i = 1;
    if($(this).data('n-img') === 1) return;
    setInterval(() => {
        $(this).fadeOut(150, () => {
            $(this).attr('src', `img/${$(this).attr('id')}/${i}.png`).fadeIn(150);
        });
        i = ((i + 1) % $(this).data('n-img'));
    }, 4000);
});