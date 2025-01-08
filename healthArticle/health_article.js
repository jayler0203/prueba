var xhr = new XMLHttpRequest();
var url = './health_article.json'; // Ruta corregida
xhr.open('GET', url, true);
xhr.responseType = 'json'; // Establecer el tipo de respuesta como JSON

xhr.onload = function () {
    if (xhr.status === 200) {
      var articles = xhr.response?.articles;
        if (articles) {
            var articlesDiv = document.getElementById('articles');

            articles.forEach(function (article) {
                var articleDiv = document.createElement('div');
                articleDiv.classList.add('article');

                var title = document.createElement('h2');
                title.textContent = article.title;

                var description = document.createElement('p');
                description.textContent = article.description;

                var waysHeader = document.createElement('h3');
                waysHeader.textContent = 'Formas de Lograrlo:';

                var waysList = document.createElement('ul');
                article.ways_to_achieve.forEach(function (way) {
                    var listItem = document.createElement('li');
                    listItem.textContent = way;
                    waysList.appendChild(listItem);
                });

                var benefitsHeader = document.createElement('h3');
                benefitsHeader.textContent = 'Beneficios:';

                var benefitsList = document.createElement('ul');
                article.benefits.forEach(function (benefit) {
                    var listItem = document.createElement('li');
                    listItem.textContent = benefit;
                    benefitsList.appendChild(listItem);
                });

                articleDiv.appendChild(title);
                articleDiv.appendChild(description);
                articleDiv.appendChild(waysHeader);
                articleDiv.appendChild(waysList);
                articleDiv.appendChild(benefitsHeader);
                articleDiv.appendChild(benefitsList);

                articlesDiv.appendChild(articleDiv);
            });
        } else {
            console.error('No se encontraron artículos en la respuesta.');
        }
    } else {
        console.error('Error en la solicitud:', xhr.status, xhr.statusText);
    }
};

xhr.onerror = function () {
    console.error('Error de red al intentar cargar el archivo JSON.');
};

xhr.send();
