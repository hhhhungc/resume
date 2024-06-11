<template>
  <section class="about" id="about">
    <h2 class="title">ABOUT ME</h2>
    <div class="container">
      <div class="about_left">
        <div class="about_image">
          <div class="face face1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="face face2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul>
          <li>HTML5 | CSS3 | JavaScript | jQuery</li>
          <li>Vue | React | Nodejs | Webpack</li>
        </ul>
      </div>
      <div class="about_right">
        <div class="about_title">
          享受挑戰
          <span>2 year Web Frontend Developer</span>
        </div>
        <p>
          {{ about }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const about = ref(
  '過去任職於電商網站的企劃人員，優化網頁時接觸 HTML、CSS 等程式語言，發現自己對程式相當感興趣，透過線上課程自學網頁開發，下定決心轉職成為一名前端開發人員。前端工程師2年經驗，熟練 HTML5、CSS3、JavaScript 等 web 開發程式語言，使用前端主流框架 React，搭配 Antd UI 開發後台管理系統，使用模塊化管理工具 Webpack 進行打包。電商網站有3年的工作經驗，做事情認真負責，曾代表公司擔任外聯窗口，善於溝通、協調，有較強的組織能力與團隊合作精神。'
)
</script>

<style scoped>
.about .container {
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
}
.about_left,
.about_right {
  width: 40%;
  padding: 0 32px;
}
.about_image {
  position: relative;
  height: 300px;
  width: 400px;
}
.face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
.face span {
  width: 100px;
  height: 100%;
  transition: 1s;
}
.face.face1 span {
  background: url('@/assets/images/avatar.jpg');
  transform-origin: top;
}
.about_image:hover .face.face1 span {
  transform: rotateX(90deg) translateY(-50%);
}
.face.face2 span {
  background: url('@/assets/images/avatar2.png');
  transform-origin: bottom;
  transform: rotateX(90deg) translateY(50%);
}
.about_image:hover .face.face2 span {
  transform: rotateX(0) translateY(0);
}
.face span:nth-child(1) {
  background-position-x: 0;
  transition-delay: 0s;
}
.face span:nth-child(2) {
  background-position-x: -100px;
  transition-delay: 0.2s;
}
.face span:nth-child(3) {
  background-position-x: -200px;
  transition-delay: 0.4s;
}
.face span:nth-child(4) {
  background-position-x: -300px;
  transition-delay: 0.6s;
}
.about_left ul {
  padding: 24px 0;
}
.about_left ul li {
  padding-bottom: 16px;
  text-align: center;
}
.about_right p {
  line-height: 32px;
}
.about_title {
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about_title span {
  color: var(--color-light);
  font-size: 12px;
}

@media screen and (max-width: 768px) {
  .about .container {
    display: block;
    padding-bottom: 0;
    padding: 20px;
  }
  .about_left,
  .about_right {
    width: 100%;
    padding: 0;
  }
  .about_image {
    margin: 0 auto;
  }
}
</style>
