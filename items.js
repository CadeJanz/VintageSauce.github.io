function displayClothingItems(clothingData, itemType) {
    var container = document.getElementById('clothing-container');
    container.innerHTML = '';

    clothingData.forEach(function(item) {
        if(item.type === itemType){
            var itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            var image = document.createElement('img');
            image.src = item.image;
            itemDiv.appendChild(image);

            var name = document.createElement('p');
            name.textContent = item.name;
            itemDiv.appendChild(name);

            // Create a container for price and buy button
            var priceBuyContainer = document.createElement('div');
            priceBuyContainer.classList.add('price-buy-container');
            itemDiv.appendChild(priceBuyContainer);

            var price = document.createElement('p');
            price.textContent = item.price;
            priceBuyContainer.appendChild(price);

            var buyButton = document.createElement('button');
            buyButton.textContent = "Buy";
            priceBuyContainer.appendChild(buyButton);

            container.appendChild(itemDiv);
        }
    });
}

function showType(itemType){
    fetch('items.json')
        .then(response => response.json())
        .then(data => displayClothingItems(data, itemType))
        .catch(error => console.error('Error fetching clothing data:', error));
}


// Fetch clothing data from JSON file
document.getElementById('start').onclick = function (){
    document.getElementById('start').style.display = "none";

}