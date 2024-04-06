<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Button2 from '@/components/Button2.vue'
</script>

<template>
  <div>
    <NavBar />
    <div class="focus">
      <div class="content">
        <div class="top">
          <div class="topic">
            <ul class="rows1">
              <li>ฐานข้อมูลตัวอย่างพรรณไม้</li>
              <li>Herbarium Database</li>
            </ul>
          </div>

          <div class="inputsearch">
            <form action="/display_herbarium" method="post" style="display: flex">
              <input
                type="text"
                class="form-control insearch"
                id="keyword"
                placeholder="เติม '/'หน้าตัวอักษรเพื่อค้นหาทั้งหมด"
              />
              <button class="butsearch" type="submit">Search</button>
            </form>
          </div>
        </div>

        <div>
          ผลลัพธ์การค้นหา (1 รายการ)
          <table>
            <thead>
              <tr>
                <th v-for="lable in lables" :key="lable">
                  <ul class="rows2">
                    <li>{{ lable.th }}</li>
                    <li>{{ lable.en }}</li>
                  </ul>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id" @click="handleClick(item)">
                <td data-label="ลำดับ">{{ item.id }}</td>
                <td data-label="MFLU">{{ item.mfluNo }}</td>
                <td data-label="ชื่อวิทยาศาสตร์">{{ item.scientificName }}</td>
                <td data-label="ชื่อวงศ์">{{ item.FamilyName }}</td>
                <td data-label="ชื่อพื้นเมือง">{{ item.localName }}</td>
                <td data-label="ผู้เก็บตัวอย่าง">{{ item.collector }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <section>
      <Button2 />
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lables: [
        { th: 'ลำดับ', en: 'No.' },
        { th: '', en: 'MFLU' },
        { th: 'ชื่อวิทยาศาตร์', en: 'Scientific' },
        { th: 'ชื่อวงศ์', en: 'Family Name' },
        { th: 'ชื่อพื้นเมือง', en: 'Local Name' },
        { th: 'ผู้เก็บตัวอย่าง', en: 'Collector' }
      ],
      items: [
        {
          id: 1,
          mfluNo: '00010',
          scientificName: 'Capparis acutifolia Sweet subsp.',
          FamilyName: 'CAPPARACEAE',
          localName: 'ชิงชี่ใบแหลม',
          collector: 'นายอภิชาติ ส่องแสงจันทร์'
        },
        { id: 2, name: 'Item 2' }
        // ...
      ]
    }
  },
  methods: {
    handleClick(item) {
      this.$router.push(`/detail/${item.id}`) // Redirect to /detail/item.id
    }
  }
}
</script>

<style scoped>
.focus {
  height: 35em;
  margin-top: 10em;
  /* margin-bottom: 10em; */
  background-image: url(../assets/img/but01.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
}

.content {
  font-family: 'Kanit', sans-serif;
  margin-top: 2em;
  margin-bottom: 2em;
  width: 80%;
  background-color: rgba(38, 37, 37, 0.7);
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  color: white;
  align-items: center;
  padding-top: 2em;
  max-height: 500px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #2f835c #08350a;
}

.top {
  padding-left: 5em;
  display: flex;
  align-items: center;
}

.topic {
  border-right: 3px solid #ffffff;
  padding-right: 2em;
}

.rows1 {
  font-size: 20px;
  list-style-type: none;
  padding: 0;
}

.rows2 {
  list-style-type: none;
  padding: 0;
}

.insearch {
  margin-left: 2em;
  width: 30em;
  height: 2.5em;
  border-radius: 2em;
  border: none;
}

.butsearch {
  width: 8em;
  margin-left: 2em;
  height: 2.5em;
  border-radius: 2em;
  color: white;
  font-weight: 800;
  border: 3px solid #ffffff;
  background: linear-gradient(to right, #2f835c, #08350a);
}

table {
  text-align: center;
  color: white;
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th {
  border-bottom: 1px solid #ddd;
}

td {
  text-align: center;
}

tbody {
  tr:hover {
    /* opacity: 0.7; */
    background-color: #343a40;
  }
}
</style>
