function clck() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let format = "AM";
    let clock = document.querySelector("#clock")
    format = (h >= 12) ? "PM" : "AM";
    h = (h > 12) ? h - 12 : h;
    h = (h <= 9) ? "0" + h : h;
    m = (m <= 9) ? "0" + m : m;
    s = (s <= 9) ? "0" + s : s;
    clock.innerHTML = `${h}:${m}:${s} ${format}`;
    setInterval(clck, 1000);
}
clck();