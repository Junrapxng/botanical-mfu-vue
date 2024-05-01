<template>
  <div class="container-fluid">
    <div id="butshow01">
      <button class="but1 btn btn-outline-success" @click="$router.push('/search_plant')">
        <ul class="rows01">
          <li>ฐานข้อมูลพรรณไม้</li>
          <li>Plant Database</li>
        </ul>
      </button>

      <button class="but2 btn btn-outline-success" @click="$router.push('/search_herbarium')">
        <ul class="rows02">
          <li>ฐานข้อมูลตัวอย่างพรรณไม้</li>
          <li>Herbarium Database</li>
        </ul>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BUTTON'
}
</script>

<style scoped>
#butshow01 {
  padding-top: 20%;
  display: flex;
  /* position: fixed; */
  /* bottom: 0; */
  /* padding-bottom: 10%; */
  width: 100%;
  align-items: center;
  justify-content: center;
}

.rows01,
.rows02 {
  padding: 0em 0.5em 0em 0.5em;
  text-align: center;
  font-family: 'Kanit', sans-serif;
  color: #13564b;
  font-size: 23px;
  font-weight: 800;
  list-style-type: none;
  text-shadow:
    2px 2px 22px #ffffff,
    -2px 2px 12px #ffffff,
    2px 2px 0 #ffffff,
    2px -2px 22px #ffffff;
}

.but1 {
  background-image: url(../assets/img/but01.jpg);
}

.but2 {
  background-image: url(../assets/img/but02.jpg);
}

.but1,
.but2 {
  text-align: center;
  margin-right: 1em;
  margin-left: 1em;
  background-repeat: no-repeat;
  background-size: cover;
  width: 23%;
  height: 10em;
  border-radius: 3em;
  border: 4px solid #13564b;
  background-size: cover;
}

@media (max-width: 850px) {
  .but1,
  .but2 {
    height: 10em;
    width: 70%;
    margin: 2em 0;
  }
}

@media (max-width: 850px) {
  .rows01,
  .rows02 {
    font-size: 20px;
    text-shadow:
      2px 2px 2px #ffffff,
      -2px 2px 2px #ffffff,
      -2px -2px 0 #ffffff,
      2px -2px 0 #ffffff;
  }
}
</style>
