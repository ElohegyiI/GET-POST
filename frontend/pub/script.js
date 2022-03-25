


fetch("/pub/data.json")
    .then(response => response.json())

        .then(data => {

            for (const beer of data.cards) {

                document.getElementById("container").insertAdjacentHTML('beforeend', `
                <div class="cards">
                    <h2>${beer.title}</h2>
                    <p>${beer.sub}</p>
                    <p>${beer.text}</p>                
                `)
            }
        });