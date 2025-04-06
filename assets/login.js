document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // تمنع إعادة تحميل الصفحة
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
      console.log("Response from server:", data);
  
      if (response.ok) {
        alert("تم تسجيل الدخول بنجاح!");
        // يمكنك تحويله لصفحة ثانية مثلاً:
        // window.location.href = "/dashboard.html";
      } else {
        alert("فشل في تسجيل الدخول: " + data.message);
      }
  
    } catch (err) {
      console.error("Error:", err);
      alert("حصل خطأ أثناء تسجيل الدخول.");
    }
  });