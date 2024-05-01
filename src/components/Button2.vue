<template>
  <div>
    <section>
      <div class="container-fluid">
        <div id="butshow01">
          <button class="but1 btn btn-outline-success" @click="$router.push('/search_plant')">
            <ul class="rows01">
              <li>ฐานข้อมูลพรรณไม้</li>
              <li>Plant Database</li>
            </ul>
          </button>
          <div>
            <div class="vertical-line"></div>
          </div>
          <button class="but2 btn btn-outline-success" @click="$router.push('/search_herbarium')">
            <ul class="rows02">
              <li>ฐานข้อมูลตัวอย่างพรรณไม้</li>
              <li>Herbarium Database</li>
            </ul>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ButtonItem',
}
</script>

<style scoped>
#butshow01 {
  margin-top: 1em;
  margin-bottom: 6em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rows01,
.rows02 {
  padding: 0em 0.5em 0em 0.5em;
  text-align: center;
  font-family: 'Kanit', sans-serif;
  color: #13564b;
  font-size: 20px;
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
  width: 20%;
  height: 6em;
  border-radius: 2em;
  border: 4px solid #13564b;
  background-size: cover;
}

.vertical-line {
  /* margin-top: 1em; */
  border: 3px solid #13564b;
  /* Set the border properties */
  height: 70px;
  /* Set the height of the line */
  transform: rotate(0deg);
  /* Rotate the line to make it vertical */
  transform-origin: 0 0;
  /* Set the rotation origin to the top-left corner */
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
