function homepage(){
    let container = document.createElement("div");
    container.classList.add("home", "container", "white-text");

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p1.textContent = "Best burgers in the whole wide world";
    p2.innerHTML = 'Made with <span class="gold-text">love</span> and <span class="gold-text">passion</span> since 1988.';

    let img = document.createElement("img");
    img.setAttribute("src", "images/chef.jpg");
    img.setAttribute("alt", "Bob");

    let btn = document.createElement("button");
    btn.classList.add("order-btn","fancy-text");
    btn.textContent = "Order Now";


    container.append(p1, p2, img, btn);

    return container;
}

export default homepage;