const albums = document.querySelectorAll('.album');
const videos = document.querySelectorAll('.video-container');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
       entry.target.classList.add('fade-in');
       entry.target.classList.add('slide');
      }
  })
});

albums.forEach(album => {
    observer.observe(album);
})

videos.forEach(album => {
    observer.observe(album);
})
