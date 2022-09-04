function menu(){
    let items = [
        menuItem("HotBurg", "images/hot_burg.jpg", "A spicy burger for the brave."),
        menuItem("ChickBurg", "images/Chicken_burg.jpg", "A burger for the weak of hearts."),
        menuItem("ItalianBurg", "images/italian_burg.jpg", "A circular burger, italians are weird."),
        menuItem("LongBurg", "images/not_a_burg.jpg", "Extra long burger."),
        menuItem("VeggieBurg", "images/Veggie_burg.jpg", "Scared are we?"),
    ];

    let menu = document.createElement("div");
    menu.classList.add("menuPage", "container");

    items.forEach((item)=>{
        let menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        let img = document.createElement("img");
        img.setAttribute("src", item.image);

        let name = document.createElement("h2");
        name.classList.add("menu-item-title", "gold-text", "fancy-text");
        name.textContent = item.name;

        let desc = document.createElement("p");
        desc.textContent = item.desc;

        menuItem.append(img, name, desc);
        menu.append(menuItem);
    });

    return menu;
}

let menuItem = (name, image, desc)=>{ return {name, image, desc} };

export default menu;