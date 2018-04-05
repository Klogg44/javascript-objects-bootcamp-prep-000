var playlist = { SmashMouth: 'Rockstar' };

function updatePlaylist (obj, name, title) {
  obj[name] = title;
  return obj
}

function removeFromPlaylist (obj, name) {
  var newPlaylist = Object.assign(obj);
  delete newPlaylist.name;
  return newPlaylist
}