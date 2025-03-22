// main.js (Entry point for Vue App)
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

createApp(App).mount('#app');

/*
Updated Portfolio Features:
- HTML & CSS only (No Tailwind)
- Smooth transitions with CSS animations

Project Structure:
- App.vue (Main Layout)
- components/
  - Home.vue (Intro, bio with fade-in animation)
  - Skills.vue (Your tech stack with hover effects)
  - Projects.vue (Showcase work with CSS transitions)
  - Contact.vue (Simple contact section with styling)
*/