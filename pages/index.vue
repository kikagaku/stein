<template>
  <div class='container'>
    <h1>GSSをDB化</h1>
    <div>
      <table class='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>日程</th>
            <th scope='col'>開催時間</th>
            <th scope='col'>開催地詳細</th>
            <th scope='col'>空席状況</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(item, i) in items' :key='i'>
            <td>{{item.日程}}</td>
            <td>{{item.開催時間}}</td>
            <td>{{item.開催地詳細}}</td>
            <td>{{item.空席状況}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const url = encodeURI('https://api.steinhq.com/v1/storages/5ec0e9c683c30d0425e2c36c/シート1')
    const { data } = await axios.get(url)
    return {
      items: data
    }
  }
}
</script>