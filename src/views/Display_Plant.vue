<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Button2 from '@/components/Button2.vue'
</script>

<template>
  <NavBar />

  <div>
    <body>
      <div class="focus">
        <div class="content">
          <div class="top">
            <div class="topic">
              <ul class="rows1">
                <li>ฐานข้อมูลพรรณไม้</li>
                <li>Plant Database</li>
              </ul>
            </div>

            <div class="inputsearch">
              <form action="/display" method="post" style="display: flex">
                <input
                  type="text"
                  class="form-control insearch"
                  id="keyword"
                  name="keyword"
                  placeholder="เติม '/'หน้าตัวอักษรเพื่อค้นหาทั้งหมด"
                />
                <button class="butsearch" type="submit">Search</button>
              </form>
            </div>
          </div>

          <div>
            ผลลัพธ์การค้นหา (20 รายการ)
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
                <tr onclick="redirectToDetails('655f8a020845552236772e67')">
                  <td data-label="ลำดับ">1</td>
                  <td data-label="ชื่อไทย">ตีนฮุ้งดอย</td>
                  <td data-label="ชื่ออื่น">สัตฤๅษี</td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Paris polyphylla </i>Sm.</td>
                  <td data-label="ชื่อวงศ์">MELANTHIACEAE</td>
                </tr>
                <tr onclick="redirectToDetails('65fa4cf2768d1e2a479ab11b')">
                  <td data-label="ลำดับ">2</td>
                  <td data-label="ชื่อไทย">ไคร้ย้อย</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Elaeocarpus grandiflorus</i>Sm.</td>
                  <td data-label="ชื่อวงศ์">Elaeocarpaceae</td>
                </tr>
                <tr onclick="redirectToDetails('65f910ba768d1e2a479ab10d')">
                  <td data-label="ลำดับ">3</td>
                  <td data-label="ชื่อไทย">จันทร์กะพ้อ</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Vatica diospyroides</i>Symington</td>
                  <td data-label="ชื่อวงศ์">Dipterocarpaceae</td>
                </tr>
                <tr onclick="redirectToDetails('66038e62768d1e2a479ab14b')">
                  <td data-label="ลำดับ">4</td>
                  <td data-label="ชื่อไทย">กำแพงเจ็ดชั้น</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Salacia chinensis</i>L.</td>
                  <td data-label="ชื่อวงศ์">Celastraceae</td>
                </tr>
                <tr onclick="redirectToDetails('65a60732768d1e2a479ab0b5')">
                  <td data-label="ลำดับ">5</td>
                  <td data-label="ชื่อไทย">จามจุรี</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Samanea saman</i>(Jacq.) Merr.</td>
                  <td data-label="ชื่อวงศ์">Fabaceae</td>
                </tr>
                <tr onclick="redirectToDetails('655f8a020845552236772e7d')">
                  <td data-label="ลำดับ">6</td>
                  <td data-label="ชื่อไทย">โสกเขา</td>
                  <td data-label="ชื่ออื่น">สมโศก เข็มแดง</td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Saraca declinata </i>(Jack) Miq.</td>
                  <td data-label="ชื่อวงศ์">FABACEAE</td>
                </tr>
                <tr onclick="redirectToDetails('65e15bdd768d1e2a479ab104')">
                  <td data-label="ลำดับ">7</td>
                  <td data-label="ชื่อไทย">โสก</td>
                  <td data-label="ชื่ออื่น">โสกน้ำ</td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Saraca indica</i>L.</td>
                  <td data-label="ชื่อวงศ์">Fabaceae</td>
                </tr>
                <tr onclick="redirectToDetails('65e15e61768d1e2a479ab105')">
                  <td data-label="ลำดับ">8</td>
                  <td data-label="ชื่อไทย">โสกเหลือง</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Saraca thaipingensis</i>Cantley ex Prain</td>
                  <td data-label="ชื่อวงศ์">Fabaceae</td>
                </tr>
                <tr onclick="redirectToDetails('65b9c848768d1e2a479ab0d5')">
                  <td data-label="ลำดับ">9</td>
                  <td data-label="ชื่อไทย">ส้มป่อย</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Senegalia pennata</i>(L.) Maslin</td>
                  <td data-label="ชื่อวงศ์">Fabaceae</td>
                </tr>
                <tr onclick="redirectToDetails('65a60a9b768d1e2a479ab0b7')">
                  <td data-label="ลำดับ">10</td>
                  <td data-label="ชื่อไทย">ชุมเห็ดเทศ</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Senna alata</i>(L.) Roxb.</td>
                  <td data-label="ชื่อวงศ์">Fabaceae</td>
                </tr>
                <tr onclick="redirectToDetails('65a5e129768d1e2a479ab0a7')">
                  <td data-label="ลำดับ">11</td>
                  <td data-label="ชื่อไทย">ขี้เหล็ก</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์">
                    <i>Senna siamea</i>(Lam.) H.S.Irwin &amp; Barneby
                  </td>
                  <td data-label="ชื่อวงศ์">Fabaceae</td>
                </tr>
                <tr onclick="redirectToDetails('65a5e99f768d1e2a479ab0a9')">
                  <td data-label="ลำดับ">12</td>
                  <td data-label="ชื่อไทย">ขี้เหล็กอเมริกัน</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์">
                    <i>Senna spectabilis</i>(DC.) H.S.Irwin &amp; Barneby
                  </td>
                  <td data-label="ชื่อวงศ์">Fabaceae</td>
                </tr>
                <tr onclick="redirectToDetails('65a61fa0768d1e2a479ab0b9')">
                  <td data-label="ลำดับ">13</td>
                  <td data-label="ชื่อไทย">ชุมเห็ดไทย</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Senna tora</i>(L.) Roxb.</td>
                  <td data-label="ชื่อวงศ์">Fabaceae</td>
                </tr>
                <tr onclick="redirectToDetails('655f8a020845552236772e4c')">
                  <td data-label="ลำดับ">14</td>
                  <td data-label="ชื่อไทย">สาละ</td>
                  <td data-label="ชื่ออื่น">สาละอินเดีย</td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Shorea robusta</i>C.F.Gaertn.</td>
                  <td data-label="ชื่อวงศ์">DIPTEROCARPACEAE</td>
                </tr>
                <tr onclick="redirectToDetails('65dfe3ce768d1e2a479ab0fb')">
                  <td data-label="ลำดับ">15</td>
                  <td data-label="ชื่อไทย">มะดูก</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Siphonodon celastrineus</i>Griff.</td>
                  <td data-label="ชื่อวงศ์">Celastraceae</td>
                </tr>
                <tr onclick="redirectToDetails('65a5f9c9768d1e2a479ab0af')">
                  <td data-label="ลำดับ">16</td>
                  <td data-label="ชื่อไทย">แคแสด</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Spathodea campanulata</i>P.Beauv.</td>
                  <td data-label="ชื่อวงศ์">Bignoniaceae</td>
                </tr>
                <tr onclick="redirectToDetails('655f8a020845552236772e57')">
                  <td data-label="ลำดับ">17</td>
                  <td data-label="ชื่อไทย">แคแสด</td>
                  <td data-label="ชื่ออื่น">แคแดง ยามแดง</td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Spathodea campanulata </i>P.Beauv.</td>
                  <td data-label="ชื่อวงศ์">BIGNONIACEAE</td>
                </tr>
                <tr onclick="redirectToDetails('655f8a020845552236772e76')">
                  <td data-label="ลำดับ">18</td>
                  <td data-label="ชื่อไทย">ลำดวน</td>
                  <td data-label="ชื่ออื่น">หอมดวน</td>
                  <td data-label="ชื่อวิทยาศาสตร์">
                    <i>Sphaerocoryne lefevrei </i>(Baill.) D. M. Johnson &amp; N. A. Murray
                  </td>
                  <td data-label="ชื่อวงศ์">ANNONACEAE</td>
                </tr>
                <tr onclick="redirectToDetails('660e225c768d1e2a479ab15f')">
                  <td data-label="ลำดับ">19</td>
                  <td data-label="ชื่อไทย">ข่อย</td>
                  <td data-label="ชื่ออื่น"></td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Streblus asper</i>Lour.</td>
                  <td data-label="ชื่อวงศ์">Moraceae</td>
                </tr>
                <tr onclick="redirectToDetails('655f8a020845552236772e5d')">
                  <td data-label="ลำดับ">20</td>
                  <td data-label="ชื่อไทย">มะฮอกกานีใบเล็ก</td>
                  <td data-label="ชื่ออื่น">-</td>
                  <td data-label="ชื่อวิทยาศาสตร์"><i>Swietenia mahagoni </i>(L.) Jacq.</td>
                  <td data-label="ชื่อวงศ์">MELIACEAE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </body>
  </div>

  <section>
    <Button2 />
  </section>

  <section>
    <Footer></Footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lables: [
        { th: 'ลำดับ', en: 'No.' },
        { th: 'ชื่อไทย', en: 'Thai Name' },
        { th: 'ชื่ออื่น', en: 'Other Name' },
        { th: 'ชื่อวิทยาศาตร์', en: 'Scientific' },
        { th: 'ชื่อวงศ์', en: 'Family Name' }
      ]
    }
  },

  components: {}
}
</script>

<style>
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
    background-color: #343a40;
  }
}
</style>
