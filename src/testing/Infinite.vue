<template>
  <div>
    <div v-infinite-scroll="showMore" infinite-scroll-distance="20" infinite-scroll-disabled="busy">
      <div class="d1" v-for="(item,i) in n" :key="i">当前列表项：{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n:20,
      busy:false
    }
  },
  methods: {
    // 触底时间产生后执行
    showMore(){
      console.log('show more...');
      // 模拟发请求
      this.busy=true; //无线滚动状态，繁忙
      setTimeout(()=>{
        this.n+=20;
        this.busy=false;  //无线滚动状态，空闲
      },2000);
    }
  },
}
</script>
<style scoped>
  .d1{
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
</style>
