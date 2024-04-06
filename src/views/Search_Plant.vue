<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Button2 from '@/components/Button2.vue'
// import Button from '@/components/Button.vue'
</script>

<template>
  <NavBar />

  <section>
    <div class="focus">
      <div>
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
              <form @submit.prevent="handleSubmit">
                <div>
                  <input
                    v-model="keyword"
                    class="insearch"
                    type="text"
                    id="keyword"
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
    <Button2 />
  </section>
  <Footer></Footer>
</template>

<script>
export default {
  components: {
    NavBar,
    Button2
    // Footer
  },
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        path: `/display_plant/${this.keyword}`
      })
    }
  }
}
</script>

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
  align-items: center;
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

#keyword::placeholder {
  color: #000;
}
</style>
