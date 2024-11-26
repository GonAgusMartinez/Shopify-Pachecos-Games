(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner");
    const banners = document.querySelectorAll(".banner-item");
    const totalBanners = banners.length;
    let currentIndex = 0;

    for (let i = 0; i < totalBanners; i++) {
      const clone = banners[i].cloneNode(true);
      banner.appendChild(clone);
    }

    function moveBanner() {
      if (currentIndex < totalBanners) {
        currentIndex++;
      }

      if (currentIndex >= totalBanners) {
        currentIndex = 0;
        banner.style.transition = "none";
        banner.style.transform = `translateX(0)`;
        setTimeout(function () {
          banner.style.transition = "transform 1s ease-in-out";
        }, 50);
      }

      if (currentIndex < totalBanners) {
        banner.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }

    setInterval(moveBanner, 3000);
  });
})();
