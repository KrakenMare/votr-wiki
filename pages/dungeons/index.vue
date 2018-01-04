<template>
    <div class="container">
    <!-- START NAV -->
    <nav class="navbar is-white">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="../">
          Bulma Blog          
        </a>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#">
            Legendaries
          </a>
          <a class="navbar-item" href="#">
            Dungeons
          </a>
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
                   Votr Wikipedia
                </h1>
                <h2 class="subtitle">
                  For all your ingame needs. Info on everything in the game.
                </h2>
              </div>
            </div>
            
          </section>
                    <div class="card article">
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title article-title">How The Wiki Works</p>
                  <p class="subtitle is-6 article-subtitle">
                    <a href="http://arcanuo.me">Arcanuo</a>
                  </p>
                </div>
              </div>

            <div class="content article-body">
                <p>The wiki works on two categories as we fill it with data, www.votrproject.com/legendaries/item-name-seperated-by-dashes & www.votrproject.com/dungeons/name.</p>
                <h3 class="has-text-centered">Rules.</h3>
                <p> Be considerate of others’ experience.
Heated competition, profanity, and off-color humor are welcome here. Mean-spirited comments (whether to opponents or teammates), excessive negativity, and a general disregard for others’ experience are not. PURE is a community, and if you are making it an unwelcoming place for others, we’d rather not have you around.

No hate speech.
Although we are usually concerned with the intent behind language rather than the use of any particular words, we make an exception for language which is primarily associated with hate speech towards a particular demographic. Regardless of intent, the cultural associations with these words makes their usage unconducive to a friendly environment.  Some words result in an automatic kick from our servers; Play safely with others, and attempt to remain friendly. We're all here to play votr.

Do not consciously hinder your fellow players.
Examples of this include, but are not limited to, intentional dragging , excessive “fooling around”, or refusing to participate in clearing than teleporting to the boss. This is not about player skill; all skill levels are welcome as long as a player is making an honest effort to contribute to their team.

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
      title: 'Votr | Dungeons'
    }
  }
}
</script>

<style scoped>
</style>
