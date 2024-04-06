<template>
  <div>
    <div class="focus">
      <div class="show">
        <div class="top">
          <div class="topic">
            <a
              href="javascript:void(0);"
              onclick="redirectToPath('/search')"
              style="display: flex; align-items: center"
            >
              <font-awesome-icon icon="fa-solid fa-angles-left" class="fa" />
              <span style="margin-left: 5px">กลับ BACK</span>
            </a>
          </div>
        </div>
        <div id="myModal" class="modal">
          <span class="close">&times;</span>
          <img class="modal-content" id="fullImage" />
          <div id="caption"></div>
        </div>
        <div class="content">
          <div style="width: 30%" class="img">
            <div style="height: 60%" id="imageContainer" class=""></div>
            <div id="addImage"></div>
          </div>
          <div class="result" style="width: 70%">
            <table>
              <tr>
                <td id="head">
                  <li>ชื่อไทย</li>
                </td>
                <td id="thaiName">:</td>
              </tr>
              <tr>
                <td>
                  <li>Common Name</li>
                </td>
                <td id="commonName">:</td>
              </tr>
              <tr>
                <td>
                  <li>ชื่ออื่น</li>
                </td>
                <td id="otherName">:</td>
              </tr>
              <tr>
                <td>
                  <li>ชื่อวิทยาศาตร์</li>
                </td>
                <td id="scientificName">:</td>
              </tr>

              <tr>
                <td>
                  <li>ชื่อวงศ์</li>
                </td>
                <td id="familyName">:</td>
              </tr>
              <tr>
                <td>
                  <li>ลักษณะ</li>
                </td>
                <td id="Characteristics">:</td>
              </tr>
              <tr>
                <td>
                  <li>นิเวศวิทยา</li>
                </td>
                <td id="Ecology">:</td>
              </tr>
              <tr>
                <td>
                  <li>การกระจายพันธุ์</li>
                </td>
                <td id="Distribution">:</td>
              </tr>

              <tr>
                <td>
                  <li>การใช้ประโยชน์</li>
                </td>
                <td id="Utilization">:</td>
              </tr>
              <tr>
                <td>
                  <li>ช่วงเวลาการออกดอก</li>
                </td>
                <td id="floweringTime">:</td>
              </tr>

              <tr>
                <td>
                  <li>ช่วงเวลาติดผล</li>
                </td>
                <td id="fruitingTime">:</td>
              </tr>

              <tr>
                <td>
                  <li>พื้นที่จัดแสดง</li>
                </td>
                <td id="Location">:</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#imageContainer {
  display: flex;
  align-items: flex-start;
}

#addImage {
  height: 150px;
  /* Set your desired fixed height */
  overflow-x: auto;
  /* Enable horizontal scrollbar */
  overflow-y: hidden;
  /* Hide vertical scrollbar */
  white-space: nowrap;
  display: flex;
  /* Ensure flex container for flex items */
}

#addImage img {
  width: auto;
  max-height: 150px;
  /* Set your desired fixed height */
  border-radius: 3em;
  padding: 1em;
  flex: 0 0 auto;
  /* Prevent images from shrinking */
}

#addImage::-webkit-scrollbar {
  height: 8px;
}

#addImage::-webkit-scrollbar-thumb {
  background-color: #2f835c;
  border-radius: 7px;
}

#addImage::-webkit-scrollbar-track {
  background-color: #7e817e;
  border-radius: 7px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: none;
  padding: 12px;
  text-align: left;
  vertical-align: top;
}

th {
  background-color: #f2f2f2;
}

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


.focus {
  height: 37em;
  background-size: cover;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* Center the container both horizontally and vertically */
  /* Add position absolute to center within the whole page */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.content {
  padding: 2em;
  font-family: 'Kanit', sans-serif;
  margin-bottom: 2em;
  width: 1000px;
  background-color: #dce6e4;
  border-radius: 20px;
  color: #13564b;
  display: flex;
}

.top {
  padding-left: 3em;
  display: flex;
  align-items: center;
}

.insearch {
  margin-left: 2em;
  width: 30em;
  height: 2.5em;
  border-radius: 2em;
  border: none;
}

.topic {
  border-right: 3px solid #ffffff;
  padding-right: 2em;
}

.show {
  margin-top: 12em;
  align-items: center;
  justify-content: center;
}

.result {
  margin-left: 1em;
  overflow: auto;
  height: 400px;
  /* For WebKit browsers (Chrome, Safari) */
  scrollbar-width: thin;
  scrollbar-color: #2f835c #7e817e;
  /* Thumb color and Track color */
}

.result::-webkit-scrollbar {
  width: 8px;
}

.result::-webkit-scrollbar-thumb {
  background-color: #2f835c;
  border-radius: 10px;
}

.result::-webkit-scrollbar-track {
  background-color: #7e817e;

  border-radius: 10px;
}

#head {
  width: 30%;
}

#thaiName {
  width: 70%;
}

.topic a {
  text-decoration: none;
  color: #13564b;
  /* Set the color to inherit from the parent */
  font-weight: 800;
  font-family: 'Kanit', sans-serif;
  align-items: center;
}

#myModal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.114);
}

.modal {
  margin-top: 3em;
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: transparent;
  /* Set background-color to transparent */
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  background-color: transparent;
  /* Set background-color to transparent */
}

#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #cccccc00;
  padding: 10px 0;
  height: 150px;
  background-color: transparent;
  /* Set background-color to transparent */
}

.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }

  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}

.responsive {
  width: 100%;
  height: auto;
}
</style>
