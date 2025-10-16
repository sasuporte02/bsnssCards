document.addEventListener('DOMContentLoaded', () => {
    let touchstartX = 0;
    let touchendX = 0;
    const switpThreshold = 50;

    const prevPageLink = document.getElementById('prev-page');
    const nextPageLink = document.getElementById('next-page');

    document.body.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    document.body.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handSwipe();
    });

    function handSwipe() {
        const diffx = touchendX - touchstartX;

        if (diffx > switpThreshold) {
            if (prevPageLink && prevPageLink.href) {
                window.location.href = prevPageLink.href;
            }
        }

        if (diffx < -switpThreshold) {
            if (nextPageLink && nextPageLink.href) {
                window.location.href = nextPageLink.href;
            }
        }
    }
});

