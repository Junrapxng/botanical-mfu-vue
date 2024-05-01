<template>
  <div>
    <footer style="font-family: 'Kanit', sans-serif">
      <div>
        <ul class="rowsfoot" style="list-style: none">
          <li>ติดต่อเรา</li>
          <li>
            สวนพฤกษศาสตร์มหาวิทยาลัยแม่ฟ้าหลวง เฉลิมพระเกียรติ 80 พรรษา มหาราชา 333 ม.1 ต.ท่าสุด
            อ.เมือง จังหวัด เชียงราย 57100
          </li>
          <li>
            โทรศัพท์: 0 5391 6470 <span style="margin-left: 5px">อีเมล: botanical@mfu.ac.th</span>
          </li>
        </ul>
      </div>

      <div>
        <ul class="rowsfoot" style="list-style: none">
          <li>Contact</li>
          <li>
            Mae Fah Laung University Botanical Garden 333 Moo 1 Thasud Subdistrict, Mueang District,
            Chiang Rai Province 57100 Thailand
          </li>
          <li>Tel: 0 5391 6470 <span style="margin-left: 5px">Email: botanical@mfu.ac.th</span></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FOOTER'
}
</script>

<style scoped>
/* footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 10%;
  background-color: #13564b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
} */

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  background-color: #13564b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rowsfoot {
  font-family: 'Kanit', sans-serif;
  font-size: 11px;
  padding-top: 15px;
  list-style-type: none;
}
</style>
