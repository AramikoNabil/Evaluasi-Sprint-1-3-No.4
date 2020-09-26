const mentorProgrammer = (nama, status, asal) => {
  nama();
  status();
  asal();
};

function nama() {
  console.log("Nama Mentor Wandi Pratama");
}

function status() {
  console.log("Status nya Santri");
}

function asal() {
  console.log("Berasal dari kota Prabumulih");
}

mentorProgrammer(nama, status, asal);
