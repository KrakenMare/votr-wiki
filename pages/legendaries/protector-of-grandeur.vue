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
                   Protector of Grandeur
                </h1>
                <h2 class="subtitle">
                  A shield forged for the most outstanding of knights that also has magical aspects.
                </h2>
              </div>
            </div>
            
          </section>
                    <div class="card article">
            <div class="card-content">
             
            <div class="content article-body">
                <img src="https://i.imgur.com/d7ZAyzd.png" class="image is-128x128" alt="protector of grandeur">
                <h3>Stats.</h3>
                <p>
                    <li>SHOTS: 8</li>
                    <li>DAMAGE: 380-420</li>
                    <li>RANGE: 3.2</li>
                    <li>Shots hit multiple targets</li>
                    <li>Shots pass through obstacles</li>
                    <li>Stuns for 4.25 seconds</li>
                    <li>+15 DEFENSE</li>
                    <li>+2 RESTORATION</li>
                    <li>+40 HP</li>
                    <li>+12 DEXTERITY</li>
                    <li>MP Cost: 110</li>
                    <li>Fame Bonus: 8%</li>
                </p>
                <h3>How to obtain.</h3>
                <p>
                    <li>This shield is forged with the Shard of Cosmic Collapse</li>
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
