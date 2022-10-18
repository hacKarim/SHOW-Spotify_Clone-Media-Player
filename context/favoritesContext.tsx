import nookies from "nookies";
import { createContext, ReactNode, useContext, useState } from "react";
import { Favorites, PlaylistData, Track } from "../helpers/types";

type favContextType = {
  fav: Favorites;
  addFav: (track: Track) => void;
  removeFav: (track: Track) => void;
  isFav: (track: Track) => boolean;
  setFav: (favorites: Favorites, change?: boolean) => void;
  favNumber: number;
};

const initFav: Favorites = {
  favlist: { init: { isFav: false, index: 0 } },
  totalLength: 0,
};

const favContextDefaultValues: favContextType = {
  fav: initFav,
  addFav: () => {},
  removeFav: () => {},
  isFav: () => false,
  setFav: () => {},
  favNumber: 0,
};

const FavContext = createContext<favContextType>(favContextDefaultValues);

export function useFav() {
  return useContext(FavContext);
}

type Props = {
  children: ReactNode;
};

export function initFavorites(playlist: PlaylistData): Favorites {
  // var favList = tracks.map((e) => { e.id: false })
  var favorites: Favorites = { favlist: {}, totalLength: 0 };
  var i: number = 0;

  playlist.tracks.map((e) => {
    favorites.favlist[e.track.id] = { isFav: false, index: i++ };
  });

  writeFavorites(favorites);

  return favorites;
}

export function fetchFavorites(
  context: any,
  playlist: PlaylistData
): Favorites {
  try {
    var favorites: Favorites = JSON.parse(nookies.get(context).favorites);
    return favorites;
  } catch (e) {}

  return initFavorites(playlist);
}

export function writeFavorites(favorites: Favorites) {
  try {
    nookies.set(null, "favorites", JSON.stringify(favorites), { path: "/" });
  } catch (e) {
    console.error("Can't write fav");
  }
}

export function FavProvider({ children }: Props) {
  const [fav, handleFav] = useState<Favorites>(initFav);
  const [favNumber, handleFavNumber] = useState<number>(0);

  const setFav = (favorites: Favorites, change?: boolean) => {
    writeFavorites(favorites);
    handleFav(favorites);

    // If change argument is provided, we add or remove a fav
    // if no change argument is provided, this means this is an init, and we neeed to recalculate favNumber
    if (change != null) {
      const newNumber: number = change == true ? favNumber + 1 : favNumber - 1;
      handleFavNumber(newNumber);
    } else {
      handleFavNumber(getFavNumber(favorites));
    }

    // Updating indexes
    var i: number = 0;
    for (var [key, value] of Object.entries(favorites.favlist)) {
      if (value.isFav == true) {
        favorites.favlist[key].index = i++;
      }
    }
  };

  const getFavNumber = (favorites: Favorites): number => {
    var favNumber = 0;
    for (var [key, value] of Object.entries(favorites.favlist)) {
      value.isFav == true && favNumber++;
    }
    return favNumber;
  };

  const addFav = (track: Track) => {
    if (isFav(track)) {
      console.error("Cannot Add Fav Twice");
      return false;
    }
    fav.favlist[track.id].isFav = true;
    fav.totalLength += track.duration_ms;

    setFav(fav, true);
    return true;
  };

  const removeFav = (track: Track) => {
    if (!isFav(track)) {
      console.error("Cannot remove fav that is not already fav");
      return false;
    }
    fav.favlist[track.id].isFav = false;
    fav.totalLength -= track.duration_ms;
    setFav(fav, false);
    return true;
  };

  const isFav = (track: Track): boolean => {
    return fav.favlist[track.id].isFav == true;
  };

  const value = {
    fav,
    addFav,
    removeFav,
    isFav,
    setFav,
    handleFav,
    favNumber,
  };

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
}
