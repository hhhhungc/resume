<template>
  <div class="header" id="top">
    <div class="mask"></div>
    <div class="header_text">
      <div class="header_name">
        HELLO ! <br />
        I' M RUBY CHEN !
      </div>
      <h2>WEB DEVELOPER</h2>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 900px;
  position: relative;
  background: url('@/assets/images/bg.jpeg') center center;
  background-size: cover;
  background-attachment: fixed;
}
.header_text {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.header_text h2 {
  font-size: 28px;
  margin: 40px 0;
  font-weight: normal;
}
.header_name {
  font-size: 58px;
  line-height: 100px;
  margin: 0;
  padding-bottom: 40px;
  position: relative;
}
.header_name::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 5px;
  width: 80px;
  background: var(--color-dark);
}

@media screen and (max-width: 768px) {
  .header_text {
    top: 15%;
  }
  .header_name {
    font-size: 40px;
  }
}
</style>
