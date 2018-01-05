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
                   Hand of Zeus
                </h1>
                <h2 class="subtitle">
                  A powerful weapon that sends the energy and force of Zeus in the form of a lightning bolt to it's enemies.
                </h2>
              </div>
            </div>
            
          </section>
                    <div class="card article">
            <div class="card-content">
             
            <div class="content article-body">
                <img src="https://i.imgur.com/eEh6JOL.png" class="image is-128x128" alt="hand of zeus">
                <h3>Stats.</h3>
                <p>
                    <li>Damage 96-185</li>
                    <li>Range: 6.9</li>
                    <li>Shots hit multiple targets</li>
                    <li>Ignores defense of target</li>
                    <li>Rate of Fire: +65%<li>
                    <li>+30 MIGHT</li>
                    <li>+30 LUCK</li>
                    <li>+16 SPEED</li>
                    <li>Fame Bonus: 6%</li>
                </p>
                <h3>How to obtain.</h3>
                <p>
                    <li>This wand is forged with the Shard of Cosmic Collapse.</li>
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
