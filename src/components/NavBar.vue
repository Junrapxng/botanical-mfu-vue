<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark topnav fixed-top">
      <div class="container-fluid">
        <router-link to="/" exact class="navbar-brand" id="logo">
          <img style="width: 4em" src="../assets/img/logoP.png" alt="logo" />
        </router-link>

        <div class="title">
          <ul class="rows">
            <li>สวนพฤกษศาสตร์มหาวิทยาลัยแม่ฟ้าหลวง เฉลิมพระเกียรติ 80 พรรษา มหาราชา</li>
            <li>Mae Fah Luang University Botanical Garden</li>
          </ul>
        </div>

        <div class="navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="item in items" :key="item.icon">
              <a :href="item.url" class="nav-link fa"><font-awesome-icon :icon="item.icon" /></a>
            </li>
            <!-- <li class="nav-item">
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
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    items: [
      {
        icon: 'fa-solid fa-house',
        url: '/'
      },
      {
        icon: 'fa-brands fa-facebook',
        url: 'https://www.facebook.com/mfubotanicalgarden/'
      },
      {
        icon: 'fa-brands fa-instagram',
        url: 'https://www.instagram.com/mfubotanicalgarden/?igshid=YTQwZjQ0NmI0OA%3D%3D&fbclid=IwAR1anPVbT5gPd-lkbHqhSx_l6bVgT5AT8T6OQa0aHtZ9TshmEY5beBipDTM'
      },
      {
        icon: 'fa-solid fa-earth-asia',
        url: 'https://bg.mfu.ac.th/bg-index.html'
      },
      {
        icon: 'fa-solid fa-user',
        url: 'https://bg.mfu.ac.th/bg-index.html'
      }
    ]
  })
}
</script>

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

/* Media queries for different screen sizes: */
@media (max-width: 768px) {
  .title {
    font-size: 0.8rem;
  }

  .fa {
    font-size: 1rem;
    display: none;  
  }

  .navbar-toggler {
    display: block;
  }
}

@media (min-width: 768px) {
  .navbar-toggler {
    display: none;
  }
}
</style>
