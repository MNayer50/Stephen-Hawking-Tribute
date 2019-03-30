ScrollReveal().reveal('.list', { distance: '50px', reset: true });
ScrollReveal().reveal('.reveal', { delay: 100, distance: '50px', reset: true, easing: 'ease-in' });

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#4B0082", "#F5FFFA", "#FFFFF0", "#FFE4E1"]
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 2,
        "color": "#ddd"
      },
      "polygon": {
        "nb_sides": 10
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.8,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
    }
  },
  "retina_detect": true
});
