<template>
  <section class="contact" id="contact">
    <h2 class="title">CONTACT</h2>
    <div class="mask"></div>
    <div class="container">
      <ul class="contact_link">
        <a :href="item.url" v-for="item in data" :key="item.title">
          <li>
            <font-awesome-icon :icon="item.icon" />
            <strong>{{ item.title }}</strong>
          </li>
        </a>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  {
    title: '台灣',
    icon: ['fas', 'location-dot']
  },
  {
    url: 'https://github.com/hhhhungc',
    title: 'GitHub',
    icon: ['fab', 'github']
  },
  {
    url: 'https://codepen.io/hhhhungc',
    title: 'CodePen',
    icon: ['fab', 'codepen']
  },
  {
    url: `mailto:'dial012@yahoo.com.tw'`,
    title: 'Email',
    icon: ['fas', 'envelope']
  }
])
</script>

<style scoped>
.contact {
  position: relative;
  background: url('@/assets/images/bg.jpeg') center bottom;
  background-size: cover;
  background-attachment: fixed;
}
.contact .title {
  z-index: 1;
  color: var(--color-white);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.contact_link {
  width: 100%;
  padding: 200px 0 100px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact_link li {
  width: 140px;
  height: 140px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.5);
  position: relative;
  margin: 24px;
  transition: 0.5s;
  overflow: hidden;
}
.contact_link li svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  transition: 0.5s;
}
.contact_link li strong {
  position: absolute;
  left: 50%;
  bottom: -20px;
  transform: translateX(-50%);
  transition: 0.5s;
}
.contact_link li:hover {
  background: rgba(0, 0, 0, 0.8);
}
.contact_link li:hover svg {
  color: var(--color-light);
  transition: 0.5s;
  top: 40%;
}
.contact_link li:hover strong {
  bottom: 25px;
  color: var(--color-light);
  transition: 0.5s;
  transition-delay: 0.5s;
}

@media screen and (max-width: 768px) {
  .contact_link {
    padding-top: 120px;
    flex-wrap: wrap;
  }
}
</style>
