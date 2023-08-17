const make_album = (artist_name: string, album_title: string, tracks?: number): object => {
  let album: { title: string; artist: string; tracks?: number } = {
    title: album_title,
    artist: artist_name,
  };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
};

const album1 = make_album("Coldplay", "Parachutes");
const album2 = make_album("Taylor Swift", "Fearless", 16);
const album3 = make_album("Ed Sheeran", "Divide", 12);

console.log(album1);
console.log(album2);
console.log(album3);