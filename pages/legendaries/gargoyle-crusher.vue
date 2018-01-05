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
                   Gargoyle Crusher
                </h1>
                <h2 class="subtitle">
                  A gigantic mace made of gargoyle stone plates. The pure crush of this mace cripples it's victims.
                </h2>
              </div>
            </div>
            
          </section>
                    <div class="card article">
            <div class="card-content">
             
            <div class="content article-body">
                <img src="https://i.imgur.com/rUxrrEs.png" class="image is-128x128" alt="gargoyle crusher">
                <h3>Stats.</h3>
                <p>
                    <li>Damage: 680-965</li>
                    <li>Range: 3.1</li>
                    <li>Shot Effect: Paralyzed for 0.25 seconds</li>
                    <li>+200 MP</li>
                    <li>-15 DEXTERITY<li>
                    <li>-10 LUCK</li>
                    <li>Fame Bonus: 8%</li>
                </p>
                <h3>How to obtain.</h3>
                <p>
                    <li>This melee weapon is forged with the Shard of the Stone Soul</li>
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
