function contactPage(){
    let container = document.createElement("div");
    container.classList.add("contactPage", "container");

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p1.textContent = "📌 Under the Sea, Nowhere.";
    p2.innerHTML = '<span class="gold-text">☎</span> 12 34 56 78 91';

    let map = document.createElement("iframe");
    map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13750.518065150349!2d-10.831717311064747!3d30.50323370891378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8071585bc18af765!2zMzDCsDMwJzExLjYiTiAxMMKwNDknMjIuNyJX!5e0!3m2!1sen!2sma!4v1662219405665!5m2!1sen!2sma");
    map.setAttribute("width", "75%");
    map.setAttribute("height", "450px");
    map.setAttribute("style", "border:0;");
    map.setAttribute("loading", "lazy");
    map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    map.setAttribute("allowfullscreen", "");


    container.append(p1, p2, map);

    return container;
}

export default contactPage;