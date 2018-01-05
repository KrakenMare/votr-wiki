<template>
    <div class="container">
    <!-- START NAV -->
    <nav class="navbar is-white">
      <div class="navbar-brand">
                      <nuxt-link to="/" class="navbar-item brand-text">Home</nuxt-link>

        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          
              <nuxt-link to="/legendaries" class="navbar-item">Legendaries</nuxt-link>
              <nuxt-link to="/dungeons" class="navbar-item">Dungeons</nuxt-link>

          
        </div>
      </div>
    </nav>
    <!-- END NAV -->
    <section class="articles">
        <div class="column is-8 is-offset-2">

          <!-- START PROMO BLOCK -->
          <section class="hero is-danger is-bold is-small promo-block">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  <i class="fa fa-bell-o"></i> 
                   The Executioner
                </h1>
                <h2 class="subtitle">
                  This is a joke and it's my death, wanderer. Kill me and see how long you live to tell the others.
                </h2>
              </div>
            </div>
            
          </section>
                    <div class="card article">
            <div class="card-content">
             
            <div class="content article-body">
                <img src="https://i.imgur.com/txybSJL.png" class="image is-128x128" alt="the executioner">
                <h3>Stats.</h3>
                <p>
                    <li>Shots: 2</li>
                    <li>Damage: 165-200</li>
                    <li>Range: 4.8</li>
                    <li>+10 SPEED</li>
                    <li>+8 WISDOM<li>
                    <li>+3 ATTACK</li>
                    <li>+3 DEXTERITY</li>
                    <li>Fame Bonus: 8%</li>
                </p>
                <h3>How to obtain.</h3>
                <p>
                    <li>This katana is purchasable from the Zol Shop.</li>
                </p>
              </div>
            </div>
          </div>

          </div>
          
</section>
</div>

</template>

<script>
import axios from '~/plugins/axios'
export default {
  async asyncData () {
    let { data } = await axios.get('/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Votr | Legendaries'
    }
  }
}
</script>

<style scoped>
</style>
