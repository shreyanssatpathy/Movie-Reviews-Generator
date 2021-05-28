class UI {
    constructor() {
        this.movie_name= document.getElementById('w-name');
         this.img= document.getElementById('w-img');
        this.year=document.getElementById('w-year')
        this.genre=document.getElementById('w-genre')
        this.cast=document.getElementById('w-cast')
        this.lang=document.getElementById('w-lang')
        this.revenue=document.getElementById('w-revenue')
        this.overview=document.getElementById('w-overview')
        this.review=document.getElementById('w-review')
        this.similar=document.getElementById('w-similar')
        
        
    }


    paint(movie){
        this.movie_name.innerHTML=`<h4 class='card-title display-4'><i class="fas fa-video mr-3"></i>${movie.original_title}</h4>`;

        //  this.img.innerHTML =`<img src='https://image.tmdb.org/t/p/w500/${movie.poster_path}'>`
        this.img.setAttribute('src',`https://image.tmdb.org/t/p/w200/${movie.poster_path}`);

        this.year.textContent=`Release: ${movie.release_date}`;
        this.genre.innerHTML=`Genre: <li class='d-inline'>${movie.genres[0].name},</li><li class='d-inline'>${movie.genres[1].name},</li><li class='d-inline'>${movie.genres[2].name}`;
        
        this.cast.innerHTML=`Cast: <li class='d-inline'>${movie.credits.cast[0].name}, </li><li class='d-inline'>${movie.credits.cast[1].name}, </li><li class='d-inline'>${movie.credits.cast[2].name}`;
        
         this.lang.innerHTML=`Lang: <li class='d-inline'>${movie.spoken_languages[0].name}, </li><li class='d-inline'>${movie.spoken_languages[1].name}, </li>`;
        
        this.revenue.textContent=`Revenue: ${movie.revenue} $`;

        this.overview.innerHTML=`<p class='main-overview'>Overview: ${movie.overview}</p>`;

        this.review.innerHTML= `<p class='author'>Author: ${movie.reviews.results[0].author}</p><p>${movie.reviews.results[0].content} </p><hr><p class='author'>Author: ${movie.reviews.results[1].author}</p><p>${movie.reviews.results[1].content} </p><hr>`;

        this.similar.innerHTML=`<p class='name'>1.${movie.similar.results[0].original_title}</p><img class='mt-1' src='https://image.tmdb.org/t/p/w200/${movie.similar.results[0].poster_path}'><p><span class='d-block'>Overview:</span> ${movie.similar.results[0].overview}</p>
        <p><span>Release Date: ${movie.similar.results[0].release_date}</span></p>
<hr>
        <p class='name mt-5'>2.${movie.similar.results[1].original_title}</p><img class='mt-1' src='https://image.tmdb.org/t/p/w200/${movie.similar.results[1].poster_path}'><p><span class='d-block'>Overview:</span> ${movie.similar.results[1].overview}</p>
        <p><span>Release Date: ${movie.similar.results[1].release_date}</span></p>
        <hr>
        <p class='name mt-5'>3.${movie.similar.results[2].original_title}</p><img class='mt-1'src='https://image.tmdb.org/t/p/w200/${movie.similar.results[2].poster_path}'><p><span class='d-block'>Overview:</span> ${movie.similar.results[2].overview}</p>
        <p><span>Release Date: ${movie.similar.results[2].release_date}</span></p>`
    } 

  

}
