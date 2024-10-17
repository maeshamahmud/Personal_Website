function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showTimeline() {
    var x = document.getElementById("professional-timeline");
    var y = document.getElementById("extracurricular-timeline");

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }

    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
      } else {
        y.style.display = "none";
        x.style.display = "block";
      }
  }

  function showTimeline2() {
    var x = document.getElementById("extracurricular-timeline");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

