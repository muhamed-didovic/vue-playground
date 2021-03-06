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
import WrapperLesson16 from '../components/Lesson16/WrapperLesson16.vue'
import WrapperLesson17 from '../components/Lesson17/WrapperLesson17.vue'
import WrapperLesson18 from '../components/Lesson18/WrapperLesson18.vue'
import WrapperLesson19 from '../components/Lesson19/WrapperLesson19.vue'
import WrapperLesson20 from '../components/Lesson20/WrapperLesson20.vue'
import WrapperLesson21 from '../components/Lesson21/WrapperLesson21.vue'
import WrapperLesson22 from '../components/Lesson22/WrapperLesson22.vue'
import WrapperLesson23 from '../components/Lesson23/WrapperLesson23.vue'
import WrapperLesson24 from '../components/Lesson24/WrapperLesson24.vue'
import WrapperLesson25 from '../components/Lesson25/WrapperLesson25.vue'
import WrapperLesson26 from '../components/Lesson26/WrapperLesson26.vue'
import WrapperLesson27 from '../components/Lesson27/WrapperLesson27.vue'
import WrapperLesson28 from '../components/Lesson28/WrapperLesson28.vue'
import WrapperLesson29 from '../components/Lesson29/WrapperLesson29.vue'
import WrapperLesson30 from '../components/Lesson30/WrapperLesson30.vue'
import WrapperLesson31 from '../components/Lesson31/WrapperLesson31.vue'
import WrapperLesson32 from '../components/Lesson32/WrapperLesson32.vue'
import WrapperLesson33 from '../components/Lesson33/WrapperLesson33.vue'
import WrapperLesson34 from '../components/Lesson34/WrapperLesson34.vue'

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
    },
    {
      path: '/16',
      name: 'lesson16',
      component: WrapperLesson16
    },
    {
      path: '/17',
      name: 'lesson17',
      component: WrapperLesson17
    },
    {
      path: '/18',
      name: 'lesson18',
      component: WrapperLesson18
    },
    {
      path: '/19',
      name: 'lesson19',
      component: WrapperLesson19
    },
    {
      path: '/20',
      name: 'lesson20',
      component: WrapperLesson20
    },
    {
      path: '/21',
      name: 'lesson21',
      component: WrapperLesson21
    },
    {
      path: '/22',
      name: 'lesson22',
      component: WrapperLesson22
    },
    {
      path: '/23',
      name: 'lesson23',
      component: WrapperLesson23
    },
    {
      path: '/24',
      name: 'lesson24',
      component: WrapperLesson24
    },
    {
      path: '/25',
      name: 'lesson25',
      component: WrapperLesson25
    },
    {
      path: '/26',
      name: 'lesson26',
      component: WrapperLesson26
    },
    {
      path: '/27',
      name: 'lesson27',
      component: WrapperLesson27
    },
    {
      path: '/28',
      name: 'lesson28',
      component: WrapperLesson28
    },
    {
      path: '/29',
      name: 'lesson29',
      component: WrapperLesson29
    },
    {
      path: '/30',
      name: 'lesson30',
      component: WrapperLesson30
    },
    {
      path: '/31',
      name: 'lesson31',
      component: WrapperLesson31
    },
    {
      path: '/32',
      name: 'lesson32',
      component: WrapperLesson32
    },
    {
      path: '/33',
      name: 'lesson33',
      component: WrapperLesson33
    },
    {
      path: '/34',
      name: 'lesson34',
      component: WrapperLesson34
    }
  ]
})
