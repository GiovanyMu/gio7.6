fetch('menu.json')
.then(response => response.json)
.then(data => {
    const menuContainer = document.getElementById
    ('menu-container')

    let total = 0;
    data.items.forEach(category=>{
        const categoryTitle= document.createElement('h3');
        categoryTitle.textContent= category.category;
        menucontainer.appendChild(categoryTitle);

        const table = document. createElement ('table');
        let tableContent =  '<tr><th>Foto</th><th>Descripcion</th><th>Precio</th><th>Seleccionar</th></tr>';
        category.items.forEach (item =>{
            tableBody +=
            `<tr>
            <td><img scr="${item.image}" alt="${item.name}"
            style = "width: 100px;"
               <td>${item.name} - "${item.description}"</td>
               <td>${item.price}</td>
               <td><input type="checkbox" data price =${item.price.replace('$','')}" onchange="updateTotal()
               "</td>

            </tr>`
        })
})
})