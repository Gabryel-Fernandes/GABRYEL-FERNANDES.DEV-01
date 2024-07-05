let elementsbar = document.querySelector('.cards-bar');
let elementSlider = elementsbar.querySelector('.slider');
let elementsdaughters = Array.from(elementSlider.children);

elementsdaughters.forEach((item) =>{
    let duplicateElement =item.cloneNode(true);

    elementSlider.appendChild(duplicateElement);
    console.log(item);
})

// console.log(elementsdaughters);