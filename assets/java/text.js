window.onload = function() {
    let headingText = document.getElementById('heading-text'); // หาค่า element โดยใช้ id
    let texts = ['ผลงานของฉัน', 'MY PROJECT']; // ข้อความที่จะเปลี่ยนไปมา
    let currentIndex = 0; // สถานะเริ่มต้นเป็น 0 (แสดง "ผลงานของฉัน")

    // ฟังก์ชันสำหรับการเปลี่ยนข้อความทุกๆ 3 วินาที
    setInterval(function() {
        headingText.textContent = texts[currentIndex]; // เปลี่ยนข้อความใน h1
        currentIndex = (currentIndex + 1) % texts.length; // เลื่อนไปที่ข้อความถัดไป และวนลูป
    }, 3000); // เปลี่ยนทุกๆ 3 วินาที
};
document.addEventListener("DOMContentLoaded", function() {
    var typedTextElement = document.getElementById("typed-text");
    var text = "Music DRUMER";
    var i = 0;

    function type() {
        if (i < text.length) {
            typedTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 500);  // ระยะเวลาในการพิมพ์แต่ละตัวอักษร
        }
    }
    type();
});
