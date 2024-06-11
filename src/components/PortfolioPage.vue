<template>
  <section class="portfolio" id="portfolio">
    <h2 class="title">PORTFOLIO</h2>
    <div class="portfolio_container">
      <div class="portfolio_square" v-for="item in data" :key="item.title">
        <a :href="item.url" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <div class="portfolio_content">
            <h2>{{ item.title }}</h2>
            <ul v-for="skill in item.skills" :key="skill">
              <li>{{ skill }}</li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  {
    url: 'https://hhhhungc.github.io/shop_admin/',
    title: '後台管理系統',
    skills: ['Vue', 'Element UI', 'Vue Router', 'Axios', 'Webpack']
  },
  {
    url: 'https://hhhhungc.github.io/shop/',
    title: '仿購物網站',
    skills: ['Vue', 'Element UI', 'Vue Router', 'Vuex', 'Axios']
  }
])
</script>

<style scoped>
.portfolio {
  background: var(--color-dark);
  color: var(--color-white);
}
.portfolio_container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 120px;
}
.portfolio_square {
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 64px;
}
.portfolio_square span:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-light);
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  transition: 0.5s;
  animation: animate 6s linear infinite;
}
.portfolio_square:hover span:nth-child(1) {
  border: none;
  background: var(--color-light-mute);
}
.portfolio_square span:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-light);
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  transition: 0.5s;
  animation: animate 4s linear infinite;
}
.portfolio_square:hover span:nth-child(2) {
  border: none;
  background: var(--color-light-mute);
}
.portfolio_square span:nth-child(3) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-light);
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  transition: 0.5s;
  animation: animate2 10s linear infinite;
}
.portfolio_square:hover span:nth-child(3) {
  border: none;
  background: var(--color-light-mute);
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.portfolio_content {
  position: relative;
  padding: 40px 60px;
  color: var(--color-white);
  text-align: center;
  transition: 0.5s;
  z-index: 100;
}
.portfolio_content h2 {
  font-size: 20px;
}
.portfolio_content li {
  padding-bottom: 4px;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .portfolio_container {
    flex-direction: column;
    padding-bottom: 40px;
  }
  .portfolio_square {
    margin: 40px 0;
  }
}
</style>
