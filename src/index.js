const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('#searchByID')
        console.log(input.value)

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then((response) => response.json())
            .then((data) => {
                const title = document.querySelector('#title_result')
                const summary = document.querySelector('#summary_result')
                
                
                title.innerText = data.title
                summary.innerText = data.summary
                // LOG: (3) [{…}, {…}, {…}]
            });
    })

}

document.addEventListener('DOMContentLoaded', init);