<template>
    <div>
      <nuxtent-body :body="page.body"/>
    </div>
</template>

<script>

export default {
  async asyncData ({ app, route, params }) {
   return {
      page: await app.$content('/docs').get(route.path)
    }
  },
}
</script>
