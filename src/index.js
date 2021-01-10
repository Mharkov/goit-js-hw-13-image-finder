import './styles.css';
import hitsTpl from './templates/hits.hbs';
import apiService from './js/apiService';

const searchForm = document.querySelector(".search-form")
const hitsContainer = document.querySelector(".gallery")
const loadMoreBtn = document.querySelector('[data-action="load-more"]')


searchForm.addEventListener ("submit", e =>{
e.preventDefault();
apiService.query = e.currentTarget.elements.query.value;

    hitsContainer.innerHTML="";
    loadMoreBtn.classList.add('is-hidden')
apiService.resetPage();
apiService.fetchArticles().then(hits =>{
    updateArticlesMarkup(hits);
    loadMoreBtn.classList.remove('is-hidden')

});
 });


function updateArticlesMarkup (hits) {
    const markup = hitsTpl(hits);
    hitsContainer.insertAdjacentHTML('beforeend',markup);

}

loadMoreBtn.addEventListener('click', () =>{
    apiService.fetchArticles().then(hits =>{
        updateArticlesMarkup(hits);
        loadMoreBtn.classList.remove('is-hidden')
        window.scrollBy({
            top: 900,
            left: 0,
            behavior: 'smooth',
          });
          
    });

 })