const image = document.getElementById('rotatingImage');

window.addEventListener('mousemove', (e) => {
    let centerX = window.innerWidth / 2;  // จุดกึ่งกลางแนวนอนของหน้าจอ
    let centerY = window.innerHeight / 2; // จุดกึ่งกลางแนวตั้งของหน้าจอ
    let mouseX = e.clientX; // ตำแหน่งเมาส์แนวนอน
    let mouseY = e.clientY; // ตำแหน่งเมาส์แนวตั้ง
    let maxRotation = 20;   // จำกัดองศาการหมุน (เช่น -20 ถึง 20 องศา)

    // คำนวณองศาการหมุนแนวนอน (ซ้าย-ขวา)
    let rotateY = ((mouseX - centerX) / centerX) * maxRotation;

    // คำนวณองศาการหมุนแนวตั้ง (บน-ล่าง)
    let rotateX = ((centerY - mouseY) / centerY) * maxRotation;

    // ใช้ transform เพื่อหมุนภาพ
    image.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});
const image1 = document.getElementById('rotatingImage1');

window.addEventListener('mousemove', (e) => {
    let centerX = window.innerWidth / 2;  // จุดกึ่งกลางแนวนอนของหน้าจอ
    let centerY = window.innerHeight / 2; // จุดกึ่งกลางแนวตั้งของหน้าจอ
    let mouseX = e.clientX; // ตำแหน่งเมาส์แนวนอน
    let mouseY = e.clientY; // ตำแหน่งเมาส์แนวตั้ง
    let maxRotation = 20;   // จำกัดองศาการหมุน (เช่น -20 ถึง 20 องศา)

    // คำนวณองศาการหมุนแนวนอน (ซ้าย-ขวา)
    let rotateY = ((mouseX - centerX) / centerX) * maxRotation;

    // คำนวณองศาการหมุนแนวตั้ง (บน-ล่าง)
    let rotateX = ((centerY - mouseY) / centerY) * maxRotation;

    // ใช้ transform เพื่อหมุนภาพ
    image1.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});
