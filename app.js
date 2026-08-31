
(function(){
  "use strict";

  /* ---------- WhatsApp links per location ---------- */
  var WA_PROVIDENCIA = "https://tr.ee/A0O_Srkdj2";
  var WA_LAS_CONDES   = "https://tr.ee/yymtXQYoIC";

  document.getElementById("topWhatsapp").href = WA_PROVIDENCIA;
  document.getElementById("qcProvidencia").href = WA_PROVIDENCIA;
  document.getElementById("qcLasCondes").href = WA_LAS_CONDES;

  /* ---------- Entrance animation ---------- */
  var loader = document.getElementById("loader");
  var app = document.getElementById("app");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealApp(){
    app.classList.add("is-visible");
    loader.classList.add("is-closing");
    setTimeout(function(){ loader.classList.add("is-hidden"); }, 1150);
  }

  if(reduced){
    loader.classList.add("is-closing","is-hidden");
    app.classList.add("is-visible");
  } else {
    window.addEventListener("load", function(){
      setTimeout(revealApp, 1900);
    });
    // fallback in case load event is delayed
    setTimeout(revealApp, 3200);
  }

  /* ---------- Panel navigation ---------- */
  var panels = document.querySelectorAll(".panel");
  var navButtons = document.querySelectorAll("[data-nav]");
  var tabButtons = document.querySelectorAll(".tab");
  var tabsEl = document.getElementById("tabs");
  var menuToggle = document.getElementById("menuToggle");

  function goTo(name){
    panels.forEach(function(p){
      p.classList.toggle("is-active", p.dataset.panel === name);
    });
    tabButtons.forEach(function(t){
      t.classList.toggle("is-active", t.dataset.nav === name);
    });
    document.getElementById("stage").scrollTop = 0;
    tabsEl.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded","false");
  }

  navButtons.forEach(function(btn){
    btn.addEventListener("click", function(){ goTo(btn.dataset.nav); });
  });

  menuToggle.addEventListener("click", function(){
    var open = tabsEl.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ---------- Quick contact popover ---------- */
  var qc = document.getElementById("quickContact");
  var qcBtn = document.getElementById("quickContactBtn");
  document.addEventListener("click", function(e){
    if(qcBtn.contains(e.target)){
      var open = qc.classList.toggle("is-open");
      qcBtn.setAttribute("aria-expanded", open ? "true" : "false");
    } else if(!qc.contains(e.target)){
      qc.classList.remove("is-open");
      qcBtn.setAttribute("aria-expanded","false");
    }
  });

  /* ---------- Menu data ---------- */
  var MENU = [
    { cat:"Ding Dong Deals", items:[
      {n:"Cachapa Queso + Americano", p:"$14.300", d:"Cachapa con queso más un rico café americano.", tags:[]},
      {n:"Arepa Pollo-Palta + Americano", p:"$11.900", d:"Arepa pollo-palta más un rico café americano.", tags:["Popular"]}
    ]},
    { cat:"Brunches", items:[
      {n:"Desayuno Ejecutivo", p:"$12.300", d:"Tostadas con mantequilla, palta hass y mermelada de frutos rojos. Incluye café americano y jugo natural.", tags:["Popular"]},
      {n:"Brunch Andino", p:"$17.200", d:"Tostadas con huevos revueltos, jamón, puré de palta hass y queque. Incluye café americano y jugo natural.", tags:[]},
      {n:"Brunch Naif", p:"$17.200", d:"Tostadas con huevos revueltos, jamón, queso blanco y medialuna de hoja. Incluye café americano y jugo natural.", tags:[]}
    ]},
    { cat:"Sándwiches", items:[
      {n:"Sandwich Capresse", p:"$11.200", d:"Queso mozzarella fundido con tomatitos cherry confitados y pesto de la casa.", tags:["Popular"]},
      {n:"Sandwich de Pollo", p:"$11.800", d:"Pechuga de pollo troceada con salsa tártara, mix de lechugas y rulos de betarraga.", tags:[]},
      {n:"Sandwich de Mechada", p:"$12.500", d:"Mechada de la casa, queso Gouda, palta laminada, lechugas, tomate y mayo.", tags:[]},
      {n:"Sandwich Roast Beef", p:"$14.900", d:"Roast beef de filete de vacuno, queso cheddar, lechugas, tomate y salsa deli.", tags:[]}
    ]},
    { cat:"Panes con Trigo y Salvado", items:[
      {n:"Planchado Jamón y Queso", p:"$7.100", d:"En pan artesanal, multigrano o masa madre, con jamón de pavo y queso Gouda.", tags:["Popular"]},
      {n:"Tostadas Palta y Mantequilla", p:"$6.500", d:"Tostadas con palta y mantequilla.", tags:[]},
      {n:"Paila de Huevos", p:"$6.600", d:"Huevos revueltos de gallina feliz (4), con tostadas.", tags:[]},
      {n:"Tostadas Mermelada y Mantequilla", p:"$6.600", d:"Tostadas de pan artesanal con mermelada y mantequilla.", tags:[]},
      {n:"Tostadas Pollo y Palta", p:"$7.800", d:"Pechuga de pollo mechada con palta hass y un toque de mayonesa.", tags:["Popular"]},
      {n:"Tostadas Caprese", p:"$7.600", d:"Queso mozzarella fundido con tomatitos cherry y pesto de la casa.", tags:[]},
      {n:"Tostadas Mechada/Queso", p:"$8.300", d:"Tostadas con queso Gouda fundido y mechada de la casa.", tags:[]}
    ]},
    { cat:"Arepas (Libres de Gluten)", items:[
      {n:"Arepa Jamón y Queso", p:"$7.600", d:"Rellena con lonjas de jamón de pechuga de pavo.", tags:[]},
      {n:"Arepa Pollo y Palta (Reina)", p:"$7.800", d:"Rellena con pechuga de pollo mechada, palta hass y mayonesa.", tags:["Popular"]},
      {n:"Arepa Caprese", p:"$7.600", d:"Queso mozzarella fundido con tomates cherry y pesto de la casa.", tags:[]},
      {n:"Arepa Porotos y Queso (Dominó)", p:"$7.600", d:"Porotos negros de la casa, acompañados con queso blanco.", tags:[]},
      {n:"Arepa Mechada y Queso", p:"$8.300", d:"Mechada de la casa y queso Gouda laminado.", tags:[]}
    ]},
    { cat:"Cachapas", items:[
      {n:"Cachapa con Queso", p:"$9.100", d:"Rellena con queso blanco bajo en grasas.", tags:["Popular"]},
      {n:"Cachapa Jamón y Queso", p:"$9.400", d:"Rellena con jamón y queso blanco bajo en grasas.", tags:["Bajo en grasa"]},
      {n:"Cachapa Mechada y Queso", p:"$10.300", d:"Con queso blanco bajo en grasas y mechada de la casa.", tags:["Bajo en grasa"]},
      {n:"Cachapa Pulled Pork y Queso", p:"$10.300", d:"Con queso blanco bajo en grasas y mechada de cerdo ahumado.", tags:["Bajo en grasa"]}
    ]},
    { cat:"A Cualquier Hora", items:[
      {n:"Copa de Yogurt con Granola", p:"$6.600", d:"Yogurt natural con una porción de nuestra granola artesanal.", tags:[]}
    ]},
    { cat:"Antojos", items:[
      {n:"Tequeños con Queso", p:"$7.100", d:"Dedos de queso blanco envueltos en fina masa y horneados.", tags:["Popular"]}
    ]},
    { cat:"Ensaladas", items:[
      {n:"Ensalada César", p:"$11.400", d:"Lechugas verdes, croutones, dressing césar, parmesano y pollo a la plancha.", tags:[]},
      {n:"Ensalada Caprese", p:"$9.400", d:"Tomates con bites de mozzarella, aceite de oliva, pesto y orégano.", tags:[]},
      {n:"Ensalada Naif", p:"$9.400", d:"Vegetales de estación, semillas y pan artesanal, con dressing gourmet del día.", tags:[]}
    ]},
    { cat:"Bites", items:[
      {n:"Muffins", p:"$3.900", d:"Muffins artesanales con jugo de naranja, semillas de amapola y cardamomo.", tags:[]},
      {n:"Queque de Vainilla", p:"$3.900", d:"Nuestro clásico queque casero.", tags:["Popular"]},
      {n:"Media Luna", p:"$2.300", d:"Elaborada con la receta argentina.", tags:["Popular"]},
      {n:"Brownie", p:"$3.900", d:"Brownie tradicional de la casa.", tags:[]},
      {n:"Queque de Limón", p:"$3.900", d:"Esponjoso queque de limón.", tags:[]},
      {n:"Queque Chocolate y Plátano", p:"$3.900", d:"Glaseado de chocolate y topping de nueces.", tags:["Contiene nueces"]},
      {n:"Galletón Delicia", p:"$3.900", d:"Galletón con mermelada de frambuesa.", tags:[]},
      {n:"Galletas de Almendras (2un)", p:"$3.900", d:"Ración de dos galletas de almendras.", tags:[]},
      {n:"Galletón Choco Chips S/G S/L", p:"$3.900", d:"Sin gluten, sin lactosa, endulzado con azúcar de coco.", tags:[]}
    ]},
    { cat:"Postres y Tortas", items:[
      {n:"Pie de Limón", p:"$5.900", d:"Limón, menta y jengibre con merengue y base de galleta crocante.", tags:["Popular"]},
      {n:"Quesillo Venezolano", p:"$5.900", d:"Suave flan acaramelado de receta venezolana (leche asada).", tags:[]},
      {n:"Carrot Cake", p:"$6.600", d:"Zanahoria y azúcar morena con nueces, frosting de queso crema.", tags:["Contiene nueces"]},
      {n:"Cheesecake", p:"$5.900", d:"Cheesecake New York-Style con base crocante de galleta.", tags:[]},
      {n:"Tres Leches", p:"$6.300", d:"Bizcocho de vainilla bañado en crema de leche, evaporada, condensada y canela.", tags:[]},
      {n:"Cuatro Leches", p:"$6.600", d:"Bizcocho de vainilla con merengue, bañado en cuatro leches y canela.", tags:[]},
      {n:"Tres Texturas Chocolate", p:"$6.600", d:"Bizcocho, ganache y mousse de chocolate belga.", tags:["Popular"]},
      {n:"Kuchen de Manzana", p:"$6.600", d:"Kuchen de manzana, sin azúcar.", tags:["Sin azúcar"]},
      {n:"Kuchen de Frambuesa", p:"$6.600", d:"Kuchen de frambuesa, sin azúcar.", tags:["Sin azúcar"]}
    ]},
    { cat:"Cafetería", items:[
      {n:"Té", p:"$4.400", d:"Té en hoja.", tags:[]},
      {n:"Ristretto", p:"$3.500", d:"15 ml de extracción de café.", tags:[]},
      {n:"Espresso", p:"$3.500", d:"30 ml de extracción de café.", tags:[]},
      {n:"Doppio", p:"$4.100", d:"60 ml, espresso doble.", tags:[]},
      {n:"Lungo", p:"$4.100", d:"Espresso y 30 ml de agua.", tags:[]},
      {n:"Americano", p:"$4.100", d:"Espresso y 90 ml de agua.", tags:[]},
      {n:"Macchiato", p:"$4.700", d:"Espresso y espuma de leche.", tags:[]},
      {n:"Cappuccino", p:"$4.800", d:"Espresso, leche texturizada y espuma de leche.", tags:["Popular"]},
      {n:"Cortado", p:"$4.800", d:"Espresso y leche texturizada, simple o doble.", tags:[]},
      {n:"Latte", p:"$5.300", d:"Espresso, leche texturizada y poca espuma.", tags:["Popular"]},
      {n:"Mocaccino", p:"$5.600", d:"Espresso, cacao en polvo, leche texturizada y espuma.", tags:[]},
      {n:"Café Frío", p:"$5.900", d:"Espresso, hielo y leche fría.", tags:[]},
      {n:"Copa de Café Helado", p:"$8.000", d:"Espresso, helado de vainilla, leche fría, syrup y crema chantilly.", tags:[]},
      {n:"Chai Latte", p:"$5.100", d:"Té chai con esencia de vainilla, texturizado en leche.", tags:["Popular"]}
    ]},
    { cat:"Bebidas", items:[
      {n:"Jugo Natural", p:"$5.800", d:"Naranja o manzana.", tags:["Popular"]},
      {n:"Smoothie de Frutas", p:"$5.900", d:"Con yogurt natural y pulpa de fruta a elección.", tags:["Popular"]},
      {n:"Milkshake de Oreo", p:"$7.500", d:"Milkshake de galletas Oreo.", tags:[]},
      {n:"Milkshake de Vainilla", p:"$7.500", d:"Milkshake de helado de vainilla con leche.", tags:[]},
      {n:"Coca-Cola Original 350ml", p:"$3.000", d:"", tags:[]},
      {n:"Coca-Cola Light 350ml", p:"$3.000", d:"", tags:["Sin azúcar"]},
      {n:"Coca-Cola sin Azúcar 350ml", p:"$3.000", d:"", tags:["Sin azúcar"]},
      {n:"Sprite Original 350ml", p:"$3.000", d:"", tags:[]},
      {n:"Sprite sin Azúcar 350ml", p:"$3.000", d:"", tags:["Sin azúcar"]},
      {n:"Agua con Gas 330ml", p:"$3.600", d:"", tags:[]},
      {n:"Agua sin Gas 330ml", p:"$3.600", d:"", tags:[]}
    ]}
  ];

  var pillsEl = document.getElementById("menuPills");
  var gridEl = document.getElementById("menuGrid");
  var CATS = ["Populares"].concat(MENU.map(function(c){ return c.cat; }));

  function cardHTML(item){
    var tagsHTML = item.tags.map(function(t){
      return '<span class="tag' + (t === "Popular" ? " is-popular" : "") + '">' + t + '</span>';
    }).join("");
    return (
      '<article class="item-card">' +
        '<div class="item-top"><h4 class="item-name">' + item.n + '</h4><span class="item-price">' + item.p + '</span></div>' +
        (item.d ? '<p class="item-desc">' + item.d + '</p>' : '') +
        (tagsHTML ? '<div class="item-tags">' + tagsHTML + '</div>' : '') +
      '</article>'
    );
  }

  function render(cat){
    var html = "";
    if(cat === "Populares"){
      MENU.forEach(function(c){
        c.items.forEach(function(it){
          if(it.tags.indexOf("Popular") !== -1) html += cardHTML(it);
        });
      });
    } else {
      MENU.forEach(function(c){
        if(c.cat === cat){
          c.items.forEach(function(it){ html += cardHTML(it); });
        }
      });
    }
    gridEl.innerHTML = html;
  }

  CATS.forEach(function(cat, i){
    var btn = document.createElement("button");
    btn.className = "pill" + (i === 0 ? " is-active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", function(){
      pillsEl.querySelectorAll(".pill").forEach(function(p){ p.classList.remove("is-active"); });
      btn.classList.add("is-active");
      render(cat);
    });
    pillsEl.appendChild(btn);
  });

  render("Populares");

})();
