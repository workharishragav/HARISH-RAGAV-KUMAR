/* ================= RESET ================= */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Poppins', sans-serif; line-height: 1.6; background: var(--main-bg); color: var(--text-color); }

/* ================= VARIABLES ================= */
:root {
  --main-bg: #0a0a0a;          
  --card-bg: #141414;          
  --neon-purple: #b026ff;      
  --neon-cyan: #00f7ff;        
  --text-color: #eaeaea;       
  --muted-text: #888;          
}

/* ================= NAVBAR TOGGLE ================= */
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ================= CERTIFICATE DOWNLOAD =================
  const certBtn = document.querySelector('.about-btns a[href="certificate.pdf"]');
  if (certBtn) {
    certBtn.setAttribute("download", "Rajesh_Kumar_Certificate.pdf");
  }
});
