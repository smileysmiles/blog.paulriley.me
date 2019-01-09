<template>
  <div id="menu">
      <div v-for="(item, index) in menuitems">
        <router-link v-if="(hasPermission(item))" :to="item.linkslug">
          <div class="menuitem">
            <p>{{ item.title }}</p>
          </div>
        </router-link>
      </div>
  </div>
</template>
<script>
  import { butter } from '@/buttercms'
  import { Auth } from 'aws-amplify'
  import { AmplifyEventBus } from 'aws-amplify-vue';

  export default{
    name: 'mainmenu',
    props:['signedIn'],
    data(){
      return {
        menuitems:[]
      }
    },
    methods:{
      hasPermission(item){
        console.log(item.auth)
        if (!item.auth || (item.auth && this.signedIn))
          return true;
        else
          return false;
      },
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
