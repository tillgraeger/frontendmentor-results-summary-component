fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
        const card = document.getElementById("category-container");
        json.forEach(element => {
            let category = document.createElement("div");
            let icon = document.createElement("img");
            let title = document.createElement("div");
            let score = document.createElement("div");
            let overall = document.querySelector(".score-overall");

            title.innerHTML = element.category;
            score.classList.add("category-score");
            score.innerHTML = "<span>" + element.score + "</span> / 100";
            icon.src = element.icon;
            icon.classList.add("category-icon");
            category.classList.add("category");
            category.classList.add(element.category.toLowerCase());
            category.appendChild(icon);
            category.appendChild(title);
            category.appendChild(score);
            card.appendChild(category);

            overall.innerHTML= getScore(json) + "<span>of 100</span>";
        });
    });



    function getScore(array) {
        let score = 0;
        array.forEach(element => score += element.score)
        return Math.round(score / array.length);
    }

    function showScore() {
        let scoreElement = document.querySelector(".card.score");
        scoreElement.classList.add("show-score");
        scoreElement.classList.remove("hide-score");
    }

    function hideScore() {
        let scoreElement = document.querySelector(".card.score");
        scoreElement.classList.add("hide-score");
        scoreElement.classList.remove("show-score");
    }