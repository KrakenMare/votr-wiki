<template>
    <div class="container">
    <!-- START NAV -->
    <nav class="navbar is-white">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="../">
          Home          
        </a>
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
      <div class="column is-center">
        <div class="box content">
          <article class="post">
            <h4>Warped Worlds Staff</h4>
            <span class="pull-right has-text-grey-light"><i class="fa fa-comments"></i> 1</span>
            <div class="media">
              <div class="media-left">
                <p class="image is-32x32">
                  <img src="http://bulma.io/images/placeholders/128x128.png">
                </p>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <nuxt-link to="/untiered/warped-worlds-staff" class="navbar-item">Warped Worlds Staff</nuxt-link>
 
                    <span class="tag">Page</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
      </div>


<!-- COPY ABOVE & CHANGE -->
</div>
    <!-- END NAV -->
      
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
.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8F99A3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E6EAEE;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
</style>
