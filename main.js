document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu.");
    } else {
      alert("Đăng nhập thành công!");
      // Chuyển hướng giả lập
      window.location.href = "/home";
    }
  });
});
