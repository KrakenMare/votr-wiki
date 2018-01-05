import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6ddaed20 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _58a9f6fa = () => import('../pages/legendaries/index.vue' /* webpackChunkName: "pages/legendaries/index" */).then(m => m.default || m)
const _06d5a08e = () => import('../pages/dungeons/index.vue' /* webpackChunkName: "pages/dungeons/index" */).then(m => m.default || m)
const _22c23555 = () => import('../pages/legendaries/gargoyle-crusher.vue' /* webpackChunkName: "pages/legendaries/gargoyle-crusher" */).then(m => m.default || m)
const _bf60a720 = () => import('../pages/legendaries/starcrash-ring.vue' /* webpackChunkName: "pages/legendaries/starcrash-ring" */).then(m => m.default || m)
const _0985c2a6 = () => import('../pages/legendaries/undead-nemesis.vue' /* webpackChunkName: "pages/legendaries/undead-nemesis" */).then(m => m.default || m)
const _1f4cc74c = () => import('../pages/legendaries/insurgency-amulet.vue' /* webpackChunkName: "pages/legendaries/insurgency-amulet" */).then(m => m.default || m)
const _223a5a4c = () => import('../pages/legendaries/chaos-theory.vue' /* webpackChunkName: "pages/legendaries/chaos-theory" */).then(m => m.default || m)
const _3a7d628e = () => import('../pages/legendaries/protector-of-grandeur.vue' /* webpackChunkName: "pages/legendaries/protector-of-grandeur" */).then(m => m.default || m)
const _0d2c41a8 = () => import('../pages/legendaries/pernicius-fate36.vue' /* webpackChunkName: "pages/legendaries/pernicius-fate36" */).then(m => m.default || m)
const _25c6d168 = () => import('../pages/legendaries/furious-gauntlet.vue' /* webpackChunkName: "pages/legendaries/furious-gauntlet" */).then(m => m.default || m)
const _48b3e226 = () => import('../pages/legendaries/scepter-of-the-other.vue' /* webpackChunkName: "pages/legendaries/scepter-of-the-other" */).then(m => m.default || m)
const _e6b2948a = () => import('../pages/legendaries/ring-of-solar-focus.vue' /* webpackChunkName: "pages/legendaries/ring-of-solar-focus" */).then(m => m.default || m)
const _62c669b4 = () => import('../pages/legendaries/gargoyle-stoneplate.vue' /* webpackChunkName: "pages/legendaries/gargoyle-stoneplate" */).then(m => m.default || m)
const _6f35ee45 = () => import('../pages/legendaries/burden-of-the-warpawn.vue' /* webpackChunkName: "pages/legendaries/burden-of-the-warpawn" */).then(m => m.default || m)
const _0e2dbc6c = () => import('../pages/legendaries/the-cataclysmic-veil.vue' /* webpackChunkName: "pages/legendaries/the-cataclysmic-veil" */).then(m => m.default || m)
const _e77f6046 = () => import('../pages/legendaries/cloud-edge.vue' /* webpackChunkName: "pages/legendaries/cloud-edge" */).then(m => m.default || m)
const _07f5d6cd = () => import('../pages/legendaries/dranbiel-garbs.vue' /* webpackChunkName: "pages/legendaries/dranbiel-garbs" */).then(m => m.default || m)
const _b06a70d0 = () => import('../pages/legendaries/hide-of-garutious.vue' /* webpackChunkName: "pages/legendaries/hide-of-garutious" */).then(m => m.default || m)
const _d470b7c6 = () => import('../pages/legendaries/rip-of-soul.vue' /* webpackChunkName: "pages/legendaries/rip-of-soul" */).then(m => m.default || m)
const _067fe3b8 = () => import('../pages/legendaries/the-odyssey.vue' /* webpackChunkName: "pages/legendaries/the-odyssey" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _6ddaed20,
			name: "index"
		},
		{
			path: "/legendaries",
			component: _58a9f6fa,
			name: "legendaries"
		},
		{
			path: "/dungeons",
			component: _06d5a08e,
			name: "dungeons"
		},
		{
			path: "/legendaries/gargoyle-crusher",
			component: _22c23555,
			name: "legendaries-gargoyle-crusher"
		},
		{
			path: "/legendaries/starcrash-ring",
			component: _bf60a720,
			name: "legendaries-starcrash-ring"
		},
		{
			path: "/legendaries/undead-nemesis",
			component: _0985c2a6,
			name: "legendaries-undead-nemesis"
		},
		{
			path: "/legendaries/insurgency-amulet",
			component: _1f4cc74c,
			name: "legendaries-insurgency-amulet"
		},
		{
			path: "/legendaries/chaos-theory",
			component: _223a5a4c,
			name: "legendaries-chaos-theory"
		},
		{
			path: "/legendaries/protector-of-grandeur",
			component: _3a7d628e,
			name: "legendaries-protector-of-grandeur"
		},
		{
			path: "/legendaries/pernicius-fate36",
			component: _0d2c41a8,
			name: "legendaries-pernicius-fate36"
		},
		{
			path: "/legendaries/furious-gauntlet",
			component: _25c6d168,
			name: "legendaries-furious-gauntlet"
		},
		{
			path: "/legendaries/scepter-of-the-other",
			component: _48b3e226,
			name: "legendaries-scepter-of-the-other"
		},
		{
			path: "/legendaries/ring-of-solar-focus",
			component: _e6b2948a,
			name: "legendaries-ring-of-solar-focus"
		},
		{
			path: "/legendaries/gargoyle-stoneplate",
			component: _62c669b4,
			name: "legendaries-gargoyle-stoneplate"
		},
		{
			path: "/legendaries/burden-of-the-warpawn",
			component: _6f35ee45,
			name: "legendaries-burden-of-the-warpawn"
		},
		{
			path: "/legendaries/the-cataclysmic-veil",
			component: _0e2dbc6c,
			name: "legendaries-the-cataclysmic-veil"
		},
		{
			path: "/legendaries/cloud-edge",
			component: _e77f6046,
			name: "legendaries-cloud-edge"
		},
		{
			path: "/legendaries/dranbiel-garbs",
			component: _07f5d6cd,
			name: "legendaries-dranbiel-garbs"
		},
		{
			path: "/legendaries/hide-of-garutious",
			component: _b06a70d0,
			name: "legendaries-hide-of-garutious"
		},
		{
			path: "/legendaries/rip-of-soul",
			component: _d470b7c6,
			name: "legendaries-rip-of-soul"
		},
		{
			path: "/legendaries/the-odyssey",
			component: _067fe3b8,
			name: "legendaries-the-odyssey"
		}
    ],
    fallback: false
  })
}
