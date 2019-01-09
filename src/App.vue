<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-menu :signedIn="signedIn"></app-menu>
    <div v-if="!signedIn">
      <amplify-authenticator></amplify-authenticator>
    </div>
    Logged In : {{ username.username}}
    Authed: {{ signedIn }}
    <div v-if="signedIn">
      <amplify-sign-out></amplify-sign-out>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from '@/components/shared/menu.vue'
import { Auth } from 'aws-amplify'
import { components } from 'aws-amplify-vue'
import { AmplifyEventBus } from 'aws-amplify-vue';

export default {
  name: 'App',
  data() {
    return {
      signedIn:false,
      username: ''
    }
  },
  components: {
    'app-menu' : Menu,
    'components' : components
    },
  async beforeCreate(){
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.username=user;
      console.log(user);
      this.signedIn = true;
    } catch (err) {
      this.signedIn = false;
    };

    AmplifyEventBus.$on('authState', info => {
      console.log(`Here is the auth event that was just emitted by an Amplify component: ${info}`)
      if (info === 'signedIn') {
        Auth.currentAuthenticatedUser()
          .then( user => {
            this.username=user;
            console.log(user);
            this.signedIn = true;
          }).catch(err => {
            console.log(err);
          })
        }
      else {
        this.username = '';
        this.signedIn = false;
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {height:10%; width:10%}
</style>
