const firebaseConfig = {
    apiKey: "AIzaSyBy5lIZ9vvrlqIInN3sTxpb7few2VO8DCQ",
    authDomain: "elemental-kite-341611.firebaseapp.com",
    databaseURL: "https://elemental-kite-341611-default-rtdb.firebaseio.com",
    projectId: "elemental-kite-341611",
    storageBucket: "elemental-kite-341611.appspot.com",
    messagingSenderId: "427106993538",
    appId: "1:427106993538:web:313acf74fb69f9d8163b9b",
    measurementId: "G-670MXFF81W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function product(img, name, price) {
    var div1 = document.createElement('div');
    div1.classList.add("product");
    var img1 = document.createElement('img');
    img1.src = "./assets/pro" + img + ".png";

    var div2 = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = name;
    var h2 = document.createElement('h2');
    h2.innerHTML = "$" + price;

    var btn = document.createElement('button');
    btn.innerHTML = "Add to Cart";

    var products = document.getElementById('products');
    div2.append(h1, h2, btn);
    div1.append(img1, div2);

    products.append(div1);
}

firebase.database().ref().once("value", items => {
    items.forEach(item => {
        product(item.val().src, item.val().name, item.val().price);
    });
});