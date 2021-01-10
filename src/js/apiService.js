const apiKey = "19800508-643be2b5e42611bb65677ceaa";
    export default {
        searchQuery: '',
        page: 1,
        fetchArticles () {
   
            const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`
            
            const options = {
            
                method: 'GET',
                headers: {
                 Accept: 'application/json',
                }
            }
            
           return fetch(url,options)
            .then(res => res.json())
            .then(({hits}) => {
               this.page +=1;
               return hits;
            })
            .catch (error => console.log(error));
            
            },

            resetPage(){
                this.page =1;
            },

            get query (){
              return this.searchQuery;

            },

            set query(value){

             this.searchQuery=value;

            }
    };