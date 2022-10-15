export interface IList {
   uid: string;
   list: [number, "movie" | "tv" | "people"][];
}

export interface IListItem {
   id: number;
   type: "movie" | "tv" | "people";
}