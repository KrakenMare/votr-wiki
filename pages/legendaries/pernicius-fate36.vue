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
                   Pernicius Fate-36
                </h1>
                <h2 class="subtitle">
                  Don't believe them when they say you'll become a demon. We are your friends not your end.
                </h2>
              </div>
            </div>
            
          </section>
                    <div class="card article">
            <div class="card-content">
             
            <div class="content article-body">
                <img src="https://i.imgur.com/6U5mh3L.png" class="image is-128x128" alt="pernicius fate-36">
                <h3>Stats.</h3>
                <p>
                    <li>Damage: 650 to 7 targets</li>
                    <li>Effect on self: Berserk for 3.25 seconds</li>
                    <li>Shot effect: Slowed for 2.2 seconds</li>
                    <li>+120 HP</li>
                    <li>+6 ATTACK</li>
                    <li>Fame Bonus: 8%</li>
                    <li>MP Cost: 105</li>
                </p>
                <h3>How to obtain.</h3>
                <p>
                    <li>This scepter is forged with the Shard of Cosmic Collapse.</li>
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
