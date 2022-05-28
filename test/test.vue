<template>
  <div>
    <div class="title">{{ data.title }}</div>
    <div v-if="data.children">
      <detailed-list :data="data.children"> </detailed-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeatailedList",
  props: {
    data: Object,
  },
  methods:{
    setTimer(){
      let tiemr =  setInterval(()=>{

      }, time)
      this.$once('hook:beforeDestory', ()=>{
        clearInterval(tiemr)
      }])
    }
  }
};
</script>

<style></style>
