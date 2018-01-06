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
                   Warped Worlds Staff
                </h1>
                <h2 class="subtitle">
                  A staff that binds our reality to another.
                </h2>
              </div>
            </div>
            
          </section>
                    <div class="card article">
            <div class="card-content">
             
            <div class="content article-body">
                <img src="https://i.imgur.com/5Eg73fN.png" class="image is-128x128" alt="warped worlds staff">
                <h3>Stats.</h3>
                <p>
                    <li>Damage: 55-205</li>
                    <li>Range: 6.6</li>
                    <li>Shots hit multiple targets</li>
                    <li>Rate of Fire: +40%</li>
                    <li>-6 Speed</li>
                    <li>Grants 'Damaging' after 45 seconds</li>
                </p>
                <h3>How to obtain.</h3>
                <p>
                    <li class="is-center">This item drops from The Illusionist in the Crypt of the Illusionist which is found through completing the Trial of the Illusionist</li>
                    <li class="is-center">dropped by djinns in godlands.</li>
                </p>
                <h3>Usage.</h3>
                <p>
                  <li>This staff has low dps until you wait for the damaging to kick in, to maximise the dps of this weapon wait the 45 seconds before attempting a boss</li>
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
      title: 'Votr | Untiered items'
    }
  }
}
</script>

<style scoped>
</style>
