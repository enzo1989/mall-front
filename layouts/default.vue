<template>
  <div>
    <Header></Header>
  
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<style>
</style>

<script>
//引入组件
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  // 注册组件
  components: {
    Header:Header,
    Footer:Footer
  },
  head: {
    title: "标题",
    link: [
      { rel: "stylesheet", href: "/style/base.css" },
      { rel: "stylesheet", href: "/style/global.css" },
      { rel: "stylesheet", href: "/style/header.css" },
      { rel: "stylesheet", href: "/style/index.css" },
      { rel: "stylesheet", href: "/style/bottomnav.css" },
      { rel: "stylesheet", href: "/style/footer.css" },
    ],
    script: [
      { type: 'text/javascript', src: '/js/jquery-1.8.3.min.js' },
    ]
  },
}
</script>
