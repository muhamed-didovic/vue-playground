import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import home from '../components/home.vue'

// import UserSettingsForm from '../components/Lesson1/UserSettingsForm.vue'
import UserSettingsFormWrapperLesson1 from '../components/Lesson1/UserSettingsFormWrapper.vue'
import UserSettingsFormWrapperLesson2 from '../components/Lesson2/UserSettingsFormWrapper.vue'
import DatePickerWrapper from '../components/Lesson3/DatePickerWrapper.vue'
// import DatePickerWrapper from '../components/Lesson3/DatePickerWrapperOld.vue'
import AnnouncementModalLesson4Wrapper from '../components/Lesson4/AnnouncementModalLesson4Wrapper.vue'
import WrapperLesson5 from '../components/Lesson5/Wrapper.vue'
import WrapperLesson6 from '../components/Lesson6/Wrapper.vue'
import WrapperLesson7 from '../components/Lesson7/WrapperLesson7.vue'
import WrapperLesson8 from '../components/Lesson8/WrapperLesson8.vue'
import WrapperLesson9 from '../components/Lesson9/WrapperLesson9.vue'
import WrapperLesson10 from '../components/Lesson10/WrapperLesson10.vue'
import WrapperLesson11 from '../components/Lesson11/WrapperLesson11.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/lesson1',
      name: 'lesson1',
      component: UserSettingsFormWrapperLesson1
    },
    {
      path: '/lesson2',
      name: 'lesson2',
      component: UserSettingsFormWrapperLesson2
    },
    {
      path: '/lesson3',
      name: 'lesson3',
      component: DatePickerWrapper
    },
    {
      path: '/lesson4',
      name: 'lesson4',
      component: AnnouncementModalLesson4Wrapper
    },
    {
      path: '/lesson5',
      name: 'lesson5',
      component: WrapperLesson5
    },
    {
      path: '/lesson6',
      name: 'lesson6',
      component: WrapperLesson6
    },
    {
      path: '/lesson7',
      name: 'lesson7',
      component: WrapperLesson7
    },
    {
      path: '/lesson8',
      name: 'lesson8',
      component: WrapperLesson8
    },
    {
      path: '/lesson9',
      name: 'lesson9',
      component: WrapperLesson9
    },
    {
      path: '/lesson10',
      name: 'lesson10',
      component: WrapperLesson10
    },
    {
      path: '/lesson11',
      name: 'lesson11',
      component: WrapperLesson11
    }
  ]
})
