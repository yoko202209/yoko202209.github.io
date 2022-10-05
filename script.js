const songlist= getSongList();
let display = document.getElementById('display');
let SongsHtml = ""

function showSongs(){
  display.innerHTML = SongsHtml;
}

function createSongCard(name,){

}

function searchSongs(){
  SongsHtml = "";
  let level = document.getElementById('level').value;
  console.log("search Lv["+level+"]");
  for (let i = 0; i < songlist.length ; i++){
    if(level == songlist[i]['BDP']||level == 0&&songlist[i]['BDP'] != '-'){
      SongsHtml += "<div class=\"col-lg-3\"><div class=\"row song_card d-flex justify-content-center m-1 p-3\"><div class=\"row g-0 mb-3\"><h2 class=\"mb-0 song_title\">" + songlist[i]['name'] + "</h2><div class=\"col-8\"><span class=\"difficulty bdp\">BDP Lv" + songlist[i]['BDP'] + "</span></div><div class=\"col-4\"><span class=\"rank_title rank_noplay\">no Play</span></div></div></div></div>";
    }
    if(level == songlist[i]['DDP']||level == 0&&songlist[i]['DDP'] != '-'){
      SongsHtml += "<div class=\"col-lg-3\"><div class=\"row song_card d-flex justify-content-center m-1 p-3\"><div class=\"row g-0 mb-3\"><h2 class=\"mb-0 song_title\">" + songlist[i]['name'] + "</h2><div class=\"col-8\"><span class=\"difficulty ddp\">DDP Lv" + songlist[i]['DDP'] + "</span></div><div class=\"col-4\"><span class=\"rank_title rank_noplay\">no Play</span></div></div></div></div>";
    }
    if(level == songlist[i]['EDP']||level == 0&&songlist[i]['EDP'] != '-'){
      SongsHtml += "<div class=\"col-lg-3\"><div class=\"row song_card d-flex justify-content-center m-1 p-3\"><div class=\"row g-0 mb-3\"><h2 class=\"mb-0 song_title\">" + songlist[i]['name'] + "</h2><div class=\"col-8\"><span class=\"difficulty edp\">EDP Lv" + songlist[i]['EDP'] + "</span></div><div class=\"col-4\"><span class=\"rank_title rank_noplay\">no Play</span></div></div></div></div>";
    }
    if(level == songlist[i]['CDP']||level == 0&&songlist[i]['CDP'] != '-'){
      SongsHtml += "<div class=\"col-lg-3\"><div class=\"row song_card d-flex justify-content-center m-1 p-3\"><div class=\"row g-0 mb-3\"><h2 class=\"mb-0 song_title\">" + songlist[i]['name'] + "</h2><div class=\"col-8\"><span class=\"difficulty cdp\">CDP Lv" + songlist[i]['CDP'] + "</span></div><div class=\"col-4\"><span class=\"rank_title rank_noplay\">no Play</span></div></div></div></div>";
    }
  }
}

searchSongs();
showSongs();