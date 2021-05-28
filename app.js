const movie = new Movie('tt0993846');

const ui= new UI();

// get default movie on dom load
document.addEventListener('DOMContentLoaded', getMovie);


// change movie
document.getElementById('w-change-btn').addEventListener('click', (e)=> {
    e.preventDefault();
    const id= document.getElementById('movie_id').value;

    movie.changeMovie(id);

    getMovie();
    
    $('#locModal').modal('hide');
})



function getMovie() {
movie.getMovie()
.then(results=>{
     console.log(results);
     
    ui.paint(results);
    
})
.catch(err=>console.log(err));

}