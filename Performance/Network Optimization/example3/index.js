(() => {
    const large = document.querySelector(".large .image");
  
    document.querySelectorAll(".thumbnails .image").forEach((n) => {
      n.addEventListener("click", (e) => {
        if (n.src) {
          large.src = n.src;
        } else if (n.getAttribute("data-src")) {
          large.style.backgroundImage = `url(${n.getAttribute("data-src")})`;
        }
      });
    });
  })();
  