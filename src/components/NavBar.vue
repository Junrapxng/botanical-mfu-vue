<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark topnav fixed-top">
      <div class="container-fluid">
        <img
          class="navbar-brand"
          id="logo"
          style="width: 5%"
          src="../assets/img/logoP.png"
          alt=""
        />

        <div class="title">
          <ul class="rows">
            <li>สวนพฤกษศาสตร์มหาวิทยาลัยแม่ฟ้าหลวง เฉลิมพระเกียรติ 80 พรรษา มหาราชา</li>
            <li>Mae Fah Luang University Botanical Garden</li>
          </ul>
        </div>

        <div class="navbar-collapse">
          <!-- <ul class="navbar-nav me-auto"></ul> -->
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="/" class="nav-link fa fa-home"
                ><font-awesome-icon icon="fa-solid fa-house"
              /></a>
            </li>
            <li class="nav-item">
              <a href="https://www.facebook.com/mfubotanicalgarden/" class="nav-link fa fa-facebook"
                ><font-awesome-icon icon="fa-brands fa-facebook" />
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.instagram.com/mfubotanicalgarden/?igshid=YTQwZjQ0NmI0OA%3D%3D&fbclid=IwAR1anPVbT5gPd-lkbHqhSx_l6bVgT5AT8T6OQa0aHtZ9TshmEY5beBipDTM"
                class="nav-link fa fa-instagram"
              >
                <font-awesome-icon icon="fa-brands fa-instagram"
              /></a>
            </li>
            <li class="nav-item">
              <a href="https://bg.mfu.ac.th/bg-index.html" class="nav-link fa fa-globe"
                ><font-awesome-icon icon="fa-solid fa-earth-asia"
              /></a>
            </li>
            <li class="nav-item">
              <a href="/login" class="nav-link fa fa-user"
                ><font-awesome-icon icon="fa-solid fa-user"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.topnav {
  background-color: #13564b;
}

.title {
  font-family: 'Kanit', sans-serif;
  color: whitesmoke;
  margin-top: 1em;
  margin-left: 1em;
}

.rows {
  list-style-type: none;
  padding: 0;
}

.fa {
  color: white;
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
  opacity: 0.7;
}
</style>
