<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
// import Button from '@/components/Button.vue'
</script>

<template>
  <NavBar />

  <section>
    <div class="focus">
      <div>
        <!-- <div class="img"><img width="15%" src="../assets/img/logoP.png" alt="" /></div> -->
        <div class="content">
          <div class="top">
            <div class="topic">
              <ul class="rows1">
                <li>
                  <h1>ฐานข้อมูลพรรณไม้</h1>
                </li>
                <li>สวนพฤกษศาสตร์มหาวิทยาลัยแม่ฟ้าหลวง เฉลิมพระเกียรติ 80 พรรษา มหาราชา</li>
                <li>Mae Fah Luang University Botanical Garden Plant Database</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="inputsearch">
              <form action="/displayOne" method="post">
                <div>
                  <input
                    class="insearch"
                    type="text"
                    id="keyword"
                    name="keyword"
                    placeholder="plant name, Genus or Species (เติม '/'หน้าตัวอักษรเพื่อค้นหา)"
                  />
                </div>
                <button class="butsearch" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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

  <Footer />
</template>

<style scoped>
.rows1 {
  font-size: 20px;
  padding: 1em;
  list-style-type: none;
  color: white;
}

.focus {
  margin-top: 8em;
  background-image: url(../assets/img/but01.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  display: flex;
}

h1 {
  font-weight: 700;
}

.img {
  padding-top: 0em;
}

.content {
  padding-bottom: 1em;
  font-family: 'Kanit', sans-serif;
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
  background-color: rgba(38, 37, 37, 0.7);
  border-radius: 20px;
}

.insearch {
  text-align: center;
  margin-top: 1em;
  width: 35em;
  height: 2.5em;
  border-radius: 2em;
  border: none;
}

.butsearch {
  margin-top: 2em;
  width: 8em;
  height: 2.5em;
  border-radius: 2em;
  color: white;
  font-weight: 800;
  border: 3px solid #ffffff;
  background: linear-gradient(to right, #2f835c, #08350a);
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
