class Movie {
    constructor(id) {
        this.apiKey='241e3e2a4f6cc42b970bfb807c6a2305';
        this.id=id;
    }

     async getMovie() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${this.apiKey}&language=en-US&append_to_response=similar%2Creviews%2Ccredits`);

        const responseData= await response.json();
        return responseData;
    }


    changeMovie(id) {
        this.id=id;
    }
}