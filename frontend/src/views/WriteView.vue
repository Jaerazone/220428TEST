<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다</h1>  
    <input type="text" v-model="title"> <br>
    <textarea name="" cols="30" rows="10" v-model="memo"></textarea> <br>
    <button @click="addmemo">전송</button>
  </div>
</template>

<script>

export default {
  name: 'WriteView',
  data () {
    return {
      memo : '',
      title: ''
    }
  },
  methods : {
    addmemo () {
      this.$http.post('api/memo', {
        data : {
          title : this.title,
          memo : this.memo
        }
      })
      .then ((response) => {
        console.log(response.data)
        this.$router.push('/')
      })
    }
  }
  
}
</script>
