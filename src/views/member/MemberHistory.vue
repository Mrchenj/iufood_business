<template>
  <div class="form-main">
    <table>
      <thead>
        <tr>
          <th>序列號</th>
          <th>套餐</th>
          <th>金額</th>
          <th>時間</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in financeDate" >
          <td>{{item.number}}</td>
          <td>{{item.title}}</td>
          <td>{{item.amount}}</td>
          <td>{{item.date}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
    financeDate: [
      {
        number: '20160502',
        title: '單月套餐',
        amount: '5,414',
        date: '20160502',
      }, 
      {
        number: '20160502',
        title: '單月套餐',
        amount: '5,414',
        date: '20160502',
      }, 
      {
        number: '20160502',
        title: '單月套餐',
        amount: '5,414',
        date: '20160502',
      }, 
      {
        number: '20160502',
        title: '單月套餐',
        amount: '5,414',
        date: '20160502',
      }
      ],
    }
  },
};
</script>


<style lang="scss" scoped>

</style>
