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
import WrapperLesson12 from '../components/Lesson12/WrapperLesson12.vue'
import WrapperLesson13_1 from '../components/Lesson13/WrapperLesson13_1.vue'
import WrapperLesson13_2 from '../components/Lesson13/WrapperLesson13_2.vue'
import WrapperLesson14 from '../components/Lesson14/WrapperLesson14.vue'
import WrapperLesson15 from '../components/Lesson15/WrapperLesson15.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/1',
      name: 'lesson1',
      component: UserSettingsFormWrapperLesson1
    },
    {
      path: '/2',
      name: 'lesson2',
      component: UserSettingsFormWrapperLesson2
    },
    {
      path: '/3',
      name: 'lesson3',
      component: DatePickerWrapper
    },
    {
      path: '/4',
      name: 'lesson4',
      component: AnnouncementModalLesson4Wrapper
    },
    {
      path: '/5',
      name: 'lesson5',
      component: WrapperLesson5
    },
    {
      path: '/6',
      name: 'lesson6',
      component: WrapperLesson6
    },
    {
      path: '/7',
      name: 'lesson7',
      component: WrapperLesson7
    },
    {
      path: '/8',
      name: 'lesson8',
      component: WrapperLesson8
    },
    {
      path: '/9',
      name: 'lesson9',
      component: WrapperLesson9
    },
    {
      path: '/10',
      name: 'lesson10',
      component: WrapperLesson10
    },
    {
      path: '/11',
      name: 'lesson11',
      component: WrapperLesson11
    },
    {
      path: '/12',
      name: 'lesson12',
      component: WrapperLesson12
    },
    {
      path: '/13-1',
      name: 'lesson13-1',
      component: WrapperLesson13_1
    },
    {
      path: '/13-2',
      name: 'lesson13-2',
      component: WrapperLesson13_2
    },
    {
      path: '/14',
      name: 'lesson14',
      component: WrapperLesson14
    },
    {
      path: '/15',
      name: 'lesson15',
      component: WrapperLesson15
    }
  ]
})
