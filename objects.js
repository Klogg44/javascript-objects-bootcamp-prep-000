var playlist = { SmashMouth: 'Rockstar' };

function updatePlaylist (obj, name, title) {
  obj[name] = title;
  return obj
}

function removeFromPlaylist (playlist, artistName) {
  var newPlaylist = Object.assign({}, playlist);
  delete newPlaylist[artistName];
  return newPlaylist
}