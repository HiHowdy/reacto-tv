import { IHomeResults, IResult, IResults } from "./api";
import { IList } from "./list";
import { IUser } from "./user";

export interface IStore {
   isLoggingIn: boolean;
   isRegistering: boolean;
   search: {
      query: string;
      results: IResults[] | undefined;
      searchActive: boolean;
   };
   list: IList | undefined;
   user: IUser | undefined;
   featured: IHomeResults[] | undefined;
   selected: {
      type: "movie" | "tv" | "people";
      id: number;
      details: IResult | undefined;
      visible: boolean;
      busy: boolean;
   };
   setUserList: (list: IList) => void;
   setUserListItems: (list: [number, "movie" | "tv" | "people"]) => void;
   setUser: (user: IUser | undefined) => void;
   setSelected: (id: number, type?: "movie" | "tv" | "people") => void;
   removeSelected: () => void;
   setSelectedBusy: (busy: boolean) => void;
   setSelectedResult: (result: IResult) => void;
   setLoggingIn: (isLoggingIn: boolean) => void;
   setRegistering: (isRegistering: boolean) => void;
   setPopularMovies: (movies: IResults | undefined) => void;
   setPopularTv: (tv: IResults | undefined) => void;
   setHomeFeatured: (featured: IHomeResults[] | undefined) => void;
   setSearchQuery: (query: string) => void;
   setSearchResults: (results: IResults[] | undefined) => void;
}
