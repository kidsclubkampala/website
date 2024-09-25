Swal.fire({
  title: " Build a safe home",
  html: `
  <h1 class="text-center display-1 "> <span class="bi bi-house text-dark"></span></h1> 
  <p class="py-3">Help us build a safe home for a Vulnerable family of 6 who are currently under alternative care at Kids' Club Kampala under Ewafe home.</p>   
 <p class="p-2 bg-light fw-bold  my-3">Every penny counts </p>
 <p>Donate via  <span class="fw-bold text-danger"> Airtel Money


0200905793  </span> (Wambayo Samuel)</p>
  <p><a class="btn btn-secondary mr-2 m-2" onclick="Swal.close()">Not Yet</a><a class="btn btn-warning m-2" onclick="contact()">Use Bank</a></p>
    
    `,
  showCloseButton: true,
  showCancelButton: false,
  showConfirmButton: false,
});

function close() {
  Swal.close();
}

function contact() {
  window.location.href = "/give";
}
