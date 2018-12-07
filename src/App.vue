<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <!--
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            -->
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson1">Lesson1</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson2">Lesson2</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson3">Lesson3</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson4">Lesson4</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson5">Lesson5</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson6">Lesson6</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson7">Lesson7</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson8">Lesson8</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson9">Lesson9</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson10">Lesson10</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lesson11">Lesson11</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    <div id="app" class="wrap"><router-view /></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  // data() {
  //   return {
  //     date: '2018-04-12',
  //     modalOpen: false,
  //     accountId: 7,
  //     showAnnouncement: false,
  //     showAnnouncementLesson10: false //true
  //   }
  // },
  components: {
    // UserSettingsForm,
    // UserSettingsFormStart,
    // DatePicker,
    // AnnouncementModal,
    // AnnouncementScrollingModal,
    // UserSettingsFormPortal,
    // UserSettingsFormReusablePortals,
    // AnnouncementModalReusablePortals,
    // PrimaryButton,
    // MediaCard,
    // UserSettingsFormLesson9,
    // AnnouncementModalLesson9,
    // UserSettingsFormLesson10,
    // AnnouncementModalLesson10,
    // ContactListLesson11
  }
}
</script>

<style src="./assets/css/bootstrap.css" /> <style src="./assets/css/app.css" />
<style>
/*#app {*/
/*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*-webkit-font-smoothing: antialiased;*/
/*-moz-osx-font-smoothing: grayscale;*/
/*text-align: center;*/
/*color: #2c3e50;*/
/*margin-top: 60px;*/
/*}*/
.wrap {
  /*-webkit-flex-wrap: wrap;*/
  /*flex-wrap: wrap;*/
}
</style>
