import CustomersHome from './components/customers/CustomersHome.vue'
import CustomerPage from './components/customers/CustomerPage.vue'
import FAQ from './FAQ.vue'
import Home from './Home.vue'
import BlogHome from './components/blog/BlogHome.vue'
import BlogPost from './components/blog/BlogPost.vue'

export const routes = [
  { path: '/customers', component: CustomersHome },
  { path: '/customers/:slug', component: CustomerPage },
  { path: '/faq', component: FAQ },
  { path: '/home', component: Home },
  { path: '/blog', component: BlogHome },
  { path: '/blog/:slug', component: BlogPost },
];
