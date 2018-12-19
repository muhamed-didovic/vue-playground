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
            <router-link class="nav-link" to="/1">1</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/2">2</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/3">3</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/4">4</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/5">5</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/6">6</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/7">7</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/8">8</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/9">9</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/10">10</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/11">11</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/12">12</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/13-1">13-1</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/13-2">13-2</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/14">14</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/15">15</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/16">16</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/17">17</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/18">18</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/19">19</router-link>
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
  name: 'app'
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
