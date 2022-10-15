import { FEATURED_MOVIES, FEATURED_TV_SHOWS } from "../data";

export class Api {
   public featuredMovies = [
      {
         label: "Trending Movies",
         type: "movie",
         area: "trending",
      },
      {
         label: "Popular Movies",
         type: "movie",
         area: "popular",
      },
      {
         label: "Top Rated Movies",
         type: "movie",
         area: "top_rated",
      },
      {
         label: "Upcoming Movies",
         type: "movie",
         area: "upcoming",
      },
   ];

   public getMovies = async (query: string) => {
      try {
         const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`;
         const response = await fetch(url);
         const data = await response.json();
         data.results = data.results.map((tvShow: any) => {
            return {
               ...tvShow,
               type: "movie",
            };
         });
         return data;
      } catch (error) {
         console.error(error);
      }
   };

   public getTVShows = async (query: string) => {
      try {
         const url = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`;
         const response = await fetch(url);
         const data = await response.json();
         data.results = data.results.map((tvShow: any) => {
            return {
               ...tvShow,
               type: "tv",
            };
         });
         return data;
      } catch (error) {
         console.log(error);
      }
   };

   public fetchFeatured = async () => {
      const FEATURED: any = [];

      FEATURED_MOVIES.forEach(async (item: any) => {
         const result = await this.fetchFeaturedType(item.area, 1, "movie");
         FEATURED.push({
            ...result,
            label: item.label,
         });
      });

      FEATURED_TV_SHOWS.forEach(async (item: any) => {
         const result = await this.fetchFeaturedType(item.area, 1, "tv");
         FEATURED.push({
            ...result,
            label: item.label,
         });
      });

      return FEATURED;
   };

   public fetchFeaturedType = async (
      area: string,
      page: number,
      type: string
   ) => {
      try {
         const url = `https://api.themoviedb.org/${area}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=${page}`;
         const response = await fetch(url);
         const data = await response.json();

         data.results = data.results.map((item: any) => {
            return {
               ...item,
               type: type,
            };
         });
         return data;
      } catch (error) {
         console.error(error);
      }
   };

   public getPopularMovies = async () => {
      try {
         const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`;
         const response = await fetch(url);
         const data = await response.json();
         data.results = data.results.map((tvShow: any) => {
            return {
               ...tvShow,
               type: "movie",
            };
         });

         return data;
      } catch (error) {
         console.log(error);
         return [];
      }
   };

   public getPopularTVShows = async () => {
      try {
         const url = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language
         =en-US&page=1`;
         const response = await fetch(url);
         const data = await response.json();
         data.results = data.results.map((tvShow: any) => {
            return {
               ...tvShow,
               type: "tv",
            };
         });
         return data;
      } catch (error) {
         console.log(error);
         return [];
      }
   };

   public getTrendingTv = async () => {
      try {
         const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
         const response = await fetch(url);
         const data = await response.json();
         data.results = data.results.map((tvShow: any) => {
            return {
               ...tvShow,
               type: "tv",
            };
         });
         return data;
      } catch (error) {
         console.log(error);
         return [];
      }
   };

   public fetchDetails = async (type: string, id: number) => {
      try {
         const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`;
         const response = await fetch(url);
         const data = await response.json();

         return data;
      } catch (error) {
         console.log(error);
         return [];
      }
   };

   public getTrendingMovies = async () => {
      try {
         const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
         const response = await fetch(url);
         const data = await response.json();
         data.results = data.results.map((tvShow: any) => {
            return {
               ...tvShow,
               type: "movie",
            };
         });
         return data;
      } catch (error) {
         console.log(error);
         return [];
      }
   };

   public loadHome = async () => {
      const popularMovies = await this.getPopularMovies();
      const popularTv = await this.getPopularTVShows();
      const trendingTv = await this.getTrendingTv();
      const trendingMovies = await this.getTrendingMovies();
      return { popularMovies, popularTv, trendingTv, trendingMovies };
   };
}
