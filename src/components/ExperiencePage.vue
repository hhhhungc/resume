<template>
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
</template>

<script setup>
import { ref } from 'vue'

const experience = ref([
  {
    company: '上海交通銀行-易誠互動',
    name: 'web前端工程師',
    time: '2022 / 06 - 2024/02',
    works: [
      '根據客戶提出的功能需求，進行系統的需求分析與討論，確定開發方案及方向',
      '使用 React 框架對後台管理系統頁面進行改造，搭配 Antd 框架完成頁面製作',
      '將重複性程式碼抽離製成公共組件，方便日後維護並减少開發時間',
      '根據需求開發頁面，完成前後端 API 連調，修改開發過程中或測試過程中出現的問題',
      '通過 git 實行程式碼分支管理和團隊合作'
    ]
  },
  {
    company: '區塊科技有限公司',
    name: '前端工程師',
    time: '2021 / 12 - 2022 / 02',
    works: [
      '使用 HTML、CSS 實現網站介面布局，運用 UI 框架 Bootstrap 完成響應式頁面開發',
      '負責新增、編輯作品模塊，使用原生 JavaScript、jQuery 設計頁面動態效果並完成表單驗證功能',
      '參與公司前端界面和共同組件的開發，配合後端 API 完成前端頁面開發及效果實現，及各種組件以及插件的開發和維護'
    ]
  },
  {
    company: '資策會數位教育研究所',
    name: '前端工程師就業養成班(618小時)',
    time: '2021 / 05 - 2021 / 10',
    works: [
      '學習 HTML、CSS、JavaScript 等前端程式語言，利用課後時間複習上課內容，並主動預習相關課程',
      '期末專案使用 React 框架開發前端頁面，後端使用 Node 搭建服務器，製作食譜網站平台',
      '負責客製化便當頁面，計算個人每日總消耗熱量，包含食材列表、客製化便當、計算便當總卡路里、登入會員可收藏便當、根據挑選的食材出現相關推薦品項'
    ]
  },
  {
    company: '東南旅行社有限公司',
    name: '網站行銷企劃/國內業務人員',
    time: '2017 / 05 - 2021 / 02',
    works: [
      '發想旅遊行程提案，電商後台系統商品上架、前台 HTML 製作',
      '商品網頁維護工作，以及優化網站增加使用者體驗',
      '代表公司擔任高鐵票務經銷商外聯工作，跨部門溝通處理高端旅遊專案'
    ]
  },
  {
    company: '台北大學',
    name: '企業管理學系',
    time: '2012 / 09 - 2016 / 06'
  }
])
</script>

<style scoped>
.experience .container {
  width: 800px;
  padding-bottom: 56px;
}
.timeline {
  padding: 20px 0px 32px 70px;
  position: relative;
  border-left: 2px solid var(--color-dark);
}
.timeline .timeline_time {
  background: var(--color-dark);
  color: var(--color-white);
  border-radius: 4px;
  display: inline-block;
  padding: 8px 20px;
}
.timeline_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
strong {
  font-size: 20px;
  color: var(--color-light);
}
span {
  font-weight: 800;
}
ol {
  margin: 0;
}
li {
  padding: 4px 0;
}
a {
  color: var(--color-light);
}
a:hover {
  color: var(--color-dark);
}
.timeline_time::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  display: block;
  top: 30px;
  left: -9px;
  border-radius: 50%;
  border: 2px solid var(--color-dark);
  background: var(--color-dark);
  transition: 0.5s;
}
.timeline:hover .timeline_time::before {
  border-radius: 2px;
  box-shadow: 0 0 0 10px var(--color-light-mute);
  transform: rotate(45deg);
  transition: 0.5s;
}
.timeline:last-child {
  border-image: linear-gradient(to bottom, var(--color-dark) 60%, transparent) 1
    100%;
}

@media screen and (max-width: 768px) {
  .experience .container {
    width: 360px;
  }
  .timeline {
    padding-right: 0;
    padding-left: 32px;
  }
  .timeline::before {
    left: 32px;
  }
  .timeline_title {
    flex-direction: column;
    align-items: stretch;
  }
  strong {
    padding-bottom: 4px;
  }
  ol {
    margin: 0;
    padding-left: 32px;
  }
}
</style>
