<template>
  <div id="customers-home">
    <h1>TEST</h1>
    <h1>{{ page_title }}</h1>
      <div v-for="(page, index) in pages" :key="page.slug + '_' + index">
        <router-link :to="'/customers/' + page.slug">
          <div>
            <img :src="page.fields.customer_logo" alt="">
            <h2>{{ page.slug }}</h2>
          </div>
        </router-link>
      </div>
  </div>
</template>
<script>
  import { butter } from '@/buttercms'

  export default{
    name: 'customers',
    data(){
      return {
        page_title: 'Customers',
        pages:[]
      }
    },
    methods:{
      getPages(){
        console.log("GetPages()")
        butter.page.list('customer_case_study')
          .then((res) => {
            console.log(res);
            this.pages = res.data.data
          }).catch(function(resp) {
            console.log(resp)
          });
      }
    }   ,
    created(){
      this.getPages()
    }
  }
</script>
