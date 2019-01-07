<template>
  <div id="menu">
      <div v-for="(item, index) in menuitems">
        <router-link :to="item.linkslug">
          <div class="menuitem">
            <p>{{ item.title }}</p>
          </div>
        </router-link>
      </div>
  </div>
</template>
<script>
  import { butter } from '@/buttercms'

  export default{
    name: 'mainmenu',
    data(){
      return {
        menuitems:[]
      }
    },
    methods:{
      getMenu(){
        butter.content.retrieve(['mainmenu'])
          .then((res) => {
            console.log(res.data.data);
            this.menuitems = res.data.data.mainmenu;
          }).catch((res) => {
            console.log(res);
          })
        }
      },
    created(){
      this.getMenu()
    }
  }
</script>
<style>
  a.router-link-active { font-weight: 700;}
</style>
