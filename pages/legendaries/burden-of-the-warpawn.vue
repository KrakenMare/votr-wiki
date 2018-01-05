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
                   Burden of the Warpawn
                </h1>
                <h2 class="subtitle">
                  The end will be forever if we don't stop this war. -Vardon, the Remembered.
                </h2>
              </div>
            </div>
            
          </section>
                    <div class="card article">
            <div class="card-content">
             
            <div class="content article-body">
                <img src="https://i.imgur.com/ZWlxQl3.png" class="image is-128x128" alt="insurgency amulet">
                <h3>Stats.</h3>
                <p>
                    <li>Effet on self: Berserk for 5 seconds</li>
                    <li>Party Heal: 84HP within 5.6 squares.</li>
                    <li>Enemy Effect: Within 4.2 squares, stunned for 2.8 seconds</li>
                    <li>Shots pass through obstacles</li>
                    <li>+120 HP<li>
                    <li>+15 DEFENSE</li>
                    <li>+15 DEXTERITY</li>
                    <li>+15 VITALITY</li>
                    <li>MP Cost: 200</li>
                    <li>Fame Bonus: 8%</li>
                </p>
                <h3>How to obtain.</h3>
                <p>
                    <li>This helmet is purchasable in the Zol Shop.</li>
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
