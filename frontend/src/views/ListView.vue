<template>
  <div class="List">
    <h1>메모</h1>
    <table v-for="(memo,i) in memo" :key="i">
      <tr>
        <td>{{memo.id}}</td>
        <td>{{memo.writer}}</td>
        <td @click="$router.push(`/page/${memo.id}`)" >{{memo.memo}}</td>
      </tr>
    </table>
    <h3>메모 클릭 시 해당 페이지로 이동합니다</h3>
  </div>
</template>

<script>

export default {
  name: 'ListView',
  created() {
    this.$http.get('/api/memo')
    .then((response) => {
      console.log(response.data)
      this.memo = response.data
    })
  },
  data () {
    return {
      memo : []
    }
  }
  
}
</script>
