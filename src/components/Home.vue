<template>
  <div>
    <nav :class="{ 'background-white': isBackground }">
      <div class="container">
        <div class="nav_title">RUBY</div>
        <ul class="menu_list" :class="{ menu_left: !isOpen }">
          <li><a href="#about">ABOUT ME</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div class="menu_btn" @click="isOpen = !isOpen">
          <span class="iconfont icon-menu"></span>
        </div>
      </div>
    </nav>

    <div class="header" id="top">
      <div class="mask"></div>
      <div class="header_text">
        <div class="header_name">
          HELLO <span>!</span> <br />
          I<span>'</span> M RUBY CHEN <span>!</span>
        </div>
        <h2>WEB DEVELOPER</h2>
      </div>
    </div>

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
            享受挑战
            <span>3 year Web Frontend Developer</span>
          </div>
          <p>
            对写代码兴趣浓厚，透过网站 Udemy
            线上课程、阅览文章自学前端课程，成为一名前端开发人员。<br />
            前端工程师3年经验，熟练 HTML5、CSS3、JavaScript 等 web
            开发程式语言，使用前端主流框架 React，搭配 Antd UI
            进行购物网站、后台管理系统开发，完成非同步请求处理，使用模块化管理工具
            Webpack 进行打包。
            <br />
            电商网站有4年的工作经验，做事情认真负责，代表公司担任外联窗口，善于沟通、协调，有较强的组织能力与团队合作精神。
          </p>
        </div>
      </div>
    </section>

    <section class="experience" id="experience">
      <h2 class="title">EXPERIENCE</h2>
      <div class="container">
        <div class="timeline" v-for="item in experience" :key="item.name">
          <div class="timeline_time">{{ item.time }}</div>
          <div class="timeline_title">
            <strong>{{ item.name }}</strong>
            <span>{{ item.company }} </span>
          </div>
          <ol>
            <li v-for="(i, key) in item.works" :key="key">
              {{ i }}
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="portfolio" id="portfolio">
      <h2 class="title">PORTFOLIO</h2>
      <div class="portfolio_container">
        <div
          class="portfolio_square"
          v-for="item in portfolio"
          :key="item.title"
        >
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

    <section class="contact" id="contact">
      <h2 class="title">CONTACT</h2>
      <div class="mask"></div>
      <div class="container">
        <ul class="contact_link">
          <li>
            <span class="iconfont icon-locationfill"></span>
            <strong>上海</strong>
          </li>
          <a href="https://github.com/hhhhungc" target="_blank">
            <li>
              <span class="iconfont icon-github-fill"></span>
              <strong>GitHub</strong>
            </li>
          </a>
          <a href="https://codepen.io/hhhhungc" target="_blank">
            <li>
              <span class="iconfont icon-codepen"></span>
              <strong>CodePen</strong>
            </li>
          </a>
          <a href="mailto:'2257414537@qq.com'">
            <li>
              <span class="iconfont icon-email-fill"></span>
              <strong>Email</strong>
            </li>
          </a>
        </ul>
      </div>
    </section>

    <footer>
      <div class="container">
        &copy; 2023 by RUBY CHEN
        <a href="#"><span class="iconfont icon-arrow-up"></span></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      experience: [
        {
          company: '上海交通银行-易诚互动',
          name: 'web前端工程师',
          time: '2022 / 06 - 至今',
          works: [
            '根据客户提出的功能需求，进行系统的需求分析与讨论，确定开发方案及方向',
            '主要负责使用 React 框架对原有页面进行改造，完成 PC 端的 HTML 页面制作',
            '使用 Antd 组件统一各个模块的 UI 交互，减少开发时间',
            '根據接口文檔，完成前后端连调，独立完成页面开发交互，修改开发过程中或测试过程中出现的 bug',
            '通过 git  仓库实行代码分支管理和团队协作'
          ]
        },
        {
          company: '区块科技有限公司',
          name: 'web前端工程师',
          time: '2020 / 02 - 2022 / 02',
          works: [
            '使用 HTML、CSS 实现网站介面布局，运用 UI 框架 Bootstrap 完成响应式页面开发',
            '负责新增、编辑作品模块，使用原生 JavaScript、jQuery 设计页面动态效果并完成表单验证功能',
            '参与公司 vue 项目前端界面和模块化组件的开发，配合后端接口实现前后端交互，完成前端页面开发及效果实现，及各种组件以及插件的开发和维护。',
            '运用 vuex 管理状态，供全局调用，解决跨组件通信问题'
          ]
        },
        {
          company: '东南旅行社有限公司',
          name: '网站企划',
          time: '2017 / 05 - 2020 / 02',
          works: [
            '发想旅游行程提案，电商后台系统商品上架、前台 HTML 制作',
            '商品网页维护工作，以及优化网站增加使用者体验',
            '代表公司担任高铁票务经销商外联工作，负责规划年度策略、业绩。连续两年帮公司拿下台湾高铁经销商业绩第三名'
          ]
        },
        {
          company: '台北大学',
          name: '企业管理学系',
          time: '2012 / 09 - 2016 / 06'
        }
      ],
      portfolio: [
        {
          url: 'https://hhhhungc.github.io/shop_admin/',
          title: '后台管理系统',
          skills: ['Vue', 'Element UI', 'Vue Router', 'Axios', 'Webpack']
        },
        {
          url: 'https://hhhhungc.github.io/shop/',
          title: '仿购物网站',
          skills: ['Vue', 'Element UI', 'Vue Router', 'Vuex', 'Axios']
        }
      ],
      isBackground: false,
      isOpen: false
    }
  },
  methods: {
    handleScroll() {
      let scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      // console.log(scrollTop)
      if (scrollTop !== 0) {
        this.isBackground = true
      } else {
        this.isBackground = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.background-white {
  background: #eee;
}
</style>
