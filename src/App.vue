<template>
  <div class="container">
    <h1>Experience Premium Credit Cards</h1>
    <p>Exclusive benefits, curated for you.</p>
    
    <div class="cards">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <img :src="card.image" alt="Card Image" class="card-image" />
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
      </div>
    </div>
    
    <div class="videos">
      <video 
        v-for="(video, index) in videos" 
        :key="index" 
        :src="video.src" 
        class="video" 
        ref="videoRefs"
        muted 
        playsinline 
        @play="disableScroll" 
        @pause="enableScroll">
      </video>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import video1 from './assets/videos/video1.mp4';
import video2 from './assets/videos/video2.mp4';
import video3 from './assets/videos/video3.mp4';
// import './styles.scss';

export default {
  setup() {
    const cards = ref([
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_E6YgWc95x9yJwE3ScaXCbgrjac1Q-6New&s', title: 'Premium Card', description: 'Get exclusive rewards.' },
      { image: 'https://img.freepik.com/fotos-premium/fondo-creativo-abstracto-usando-su-proyecto-ui-ux-design_155807-1052.jpg?w=360', title: 'Luxury Card', description: 'Best for high-spenders.' },
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SEi3hvIa8k7wk9BxmeL1sT0toYL11GWzt6yQH0obRuKAQ1OFxLP_fZoKihMPHQEY1ag&usqp=CAU', title: 'Travel Card', description: 'Maximize your miles.' }
    ]);
    
    const videos = ref([
      { src: video1 },
      { src: video2 },
      { src: video3 }
    ]);
    
    const videoRefs = ref([]);

    onMounted(() => {
      window.addEventListener('scroll', checkVideos);
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', checkVideos);
    });
    
    const checkVideos = () => {
      videoRefs.value.forEach((video) => {
        if (video) {
          const rect = video.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            if (video.paused) {
              video.play();
            }
          } else {
            video.pause();
          }
        }
      });
    };

    const disableScroll = () => {
      document.body.classList.add('no-scroll');
    };

    const enableScroll = () => {
      document.body.classList.remove('no-scroll');
    };

    return { cards, videos, videoRefs, disableScroll, enableScroll };
  },
  
};
</script>

<style lang="scss">
body {
  background-color: #111;
}
.container {
  text-align: center;
  background: #111;
  color: white;
  padding: 50px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: #222;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 250px;
  text-align: center;
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}

.videos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 50px;
}

.video {
  width: calc(100vw - 250px);
  height: calc(100vh - 40px);
  object-fit: cover;
  border-radius: 10px;
}

body.no-scroll {
  overflow: hidden;
}
</style>
