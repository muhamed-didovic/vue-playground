import Vue from 'vue'
import App from './App'
import router from './router'
import PortalVue from 'portal-vue'

Vue.config.productionTip = false
Vue.use(PortalVue)

new Vue({
  router,
  render: function(h) {
    return h(App)
  }
}).$mount('#app')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

//LESSONS:
//Lesson 1. Building Controlled Components
//https://codesandbox.io/s/oxxlx055xy?from-embed

//Lesson 2. Customizing Controlled Component Bindings
//https://codesandbox.io/s/mqnzm84plx?from-embed

//Lesson 3. Wrapping External Libraries
//https://codesandbox.io/s/n4qolyr42m?from-embed

//Lesson 4. Encapsulating Behavior Global Events
//https://codesandbox.io/s/1v1o4lvp9j?from-embed

//Lesson 5. Encapsulating Behavior Direct DOM Manipulation
//https://codesandbox.io/s/z0mx3w9km?from-embed

//Lesson 6. Encapsulating Behavior Portals
//https://codesandbox.io/s/vy0k8283o5?from-embed

//Lesson 7. Encapsulating Behavior Reusing Portals
//https://codesandbox.io/s/xv1ooy9v1p?from-embed

//Lesson 8. Injecting Content Using Slots
//https://codesandbox.io/s/8x54ow4vl9?from-embed

//Lesson 9. Native-Style Buttons Using Slots and Class Merging
//https://codesandbox.io/s/j4m180n11v?from-embed

//Lesson 10. Extending Components Using Composition
//https://codesandbox.io/s/jj8vjjxlk9?from-embed

//Lesson 11. Passing Data Up Using Scoped Slots
//https://codesandbox.io/s/nwz1xpkyl0?from-embed

//Lesson 12. Render Functions 101
//https://codesandbox.io/s/5vxlz052px?from-embed

//Lesson 13. Render Functions and Components
//https://codesandbox.io/s/k05o3npx25?from-embed

//Lesson 14. Render Functions and Children
//https://codesandbox.io/s/7w1pr58p6x?from-embed

//Lesson 15. Render Functions and Slots
//https://codesandbox.io/s/z2k1j94o8m?from-embed

//Lesson 16. Data Provider Components
//https://codesandbox.io/s/nk9qr8yz0p?from-embed

//Lesson 17. Getting Started with Renderless Components
//https://codesandbox.io/s/x1z0myl0p?from-embed

//Lesson 18. Passing Data Props
//https://codesandbox.io/s/k96ljlz7yv?from-embed

//Lesson 19. Passing Action Props
//https://codesandbox.io/s/9l2jwy14mp?from-embed

//Lesson 20. Passing Binding Props
//https://codesandbox.io/s/l5yoxyv02q?from-embed

//Lesson 21. Using Functions as Binding Props
//https://codesandbox.io/s/kn1nv6ypv?from-embed

//Lesson 22. Implementing Alternate Layouts with Renderless Components
//https://codesandbox.io/s/1r789z3nnl?from-embed

//Lesson 23. Configuring Renderless Components
//https://codesandbox.io/s/l9v91jn0zq?from-embed

//Lesson 24. Wrapping Renderless Components
//https://codesandbox.io/s/5z5056yoq4?from-embed

//Lesson 25. Building an Element Query Component
//https://codesandbox.io/s/20r8wnx44r?from-embed

//Lesson 26. Compound Components and ProvideInject
//https://codesandbox.io/s/jl6pz69ox3?from-embed

//Lesson 27. Building a Compound Sortable List Component
//https://codesandbox.io/s/o98y1l735y?from-embed

//Lesson 28. Building a Search Select Data Bindings
//https://codesandbox.io/s/ykypmk03xj?from-embed

//Lesson 29. Building a Search Select Filtering
//https://codesandbox.io/s/oozwlvk36?from-embed

//Lesson 30. Building a Search Select Focus Management
//https://codesandbox.io/s/o95oq681l6?from-embed

//Lesson 31. Building a Search Select Making It Controlled
//https://codesandbox.io/s/8n0mnm2v70?from-embed

//Lesson 32. Building a Search Select Keyboard Navigation
//https://codesandbox.io/s/n7mw5871v0?from-embed

//Lesson 33. Building a Search Select Click Outside Component
//https://codesandbox.io/s/w66mzknr27?from-embed

//Lesson 34. Building a Search Select Integrating Popper.js
//https://codesandbox.io/s/vyxl1z5pp5?from-embed
