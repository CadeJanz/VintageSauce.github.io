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

function showList()
{
    var listItems = document.querySelectorAll('#sidebar .menu .dropdown ul li');
    listItems.forEach(function(item) {
        item.style.display = 'block';
    });
}
function showType(itemType){
    fetch('items.json')
        .then(response => response.json())
        .then(data => displayClothingItems(data, itemType))
        .catch(error => console.error('Error fetching clothing data:', error));


    if (window.innerWidth < 600) {
        var listItems = document.querySelectorAll('#sidebar .menu .dropdown ul li');
        listItems.forEach(function(item) {
            item.style.display = 'none';
        });
    }
}

function handleScreenSizeChange() {
    if (window.innerWidth > 600) {
        var listItems = document.querySelectorAll('#sidebar .menu .dropdown ul li');
        listItems.forEach(function(item) {
            item.style.display = 'inline-block';
        });
    }
}

// Run the function initially to set the initial state based on the current screen size
handleScreenSizeChange();

// Add an event listener for the resize event to handle changes in screen size
window.addEventListener('resize', handleScreenSizeChange);


// Fetch clothing data from JSON file
document.getElementById('start').onclick = function (){
    document.getElementById('start').style.display = "none";

}
