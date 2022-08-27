apiService
    .fetchMoviesySearch()
    .then(({ results, total_pages }) => 
    {
        if (results.length === 0) {
            inputError.textContent =
                "Search result not successful. Enter the correct movie name and smile : )";
            return;
        }
        clearFilmsContainer();
        appendFilmsMarkup(results, filmsContainerIndex);
    })
    .catch(error => console.log(error));
};