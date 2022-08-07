import { createRouter,createWebHashHistory } from 'vue-router'

import Main from '@/views/Main'
import Demo from '@/views/Demo'
import News from "@/views/News"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', redirect: '/main'},
    { path: '/main',
      component: Main,
      children: [
          {path: '/demo', component: Demo},
          {path: '/news', component: News}
      ]
    },
    { path: '/goHome', redirect: '/main'},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
export default router