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
  let scannedLevel = document.getElementById('level').value;
  console.log("search Lv["+scannedLevel+"]");
  for (let i = 0; i < songlist.length ; i++){
    for (let j = 0; j <= 3; j++){
      let difficulty = "";
      switch (j){
        case 0:
          difficulty = 'BDP';
          break;
          
        case 1:
          difficulty = 'DDP';
          break;
          
        case 2:
          difficulty = 'EDP';
          break;
          
        case 3:
          difficulty = 'CDP';
          break;
      }
      if(scannedLevel == songlist[i][difficulty]||scannedLevel == 0&&songlist[i][difficulty] != '-'){
        //TODO:htmlの追加処理が汚い！ここでDOM操作のcreateElement()を使いたい。
          SongsHtml += "<div class=\"col-lg-3\"><div class=\"row song_card d-flex justify-content-center m-1 p-3\"><div class=\"row g-0 mb-3\"><h2 class=\"mb-0 song_title\">" + songlist[i]['name'] + "</h2><div class=\"col-8\"><span class=\"difficulty "+ difficulty.toLowerCase() +"\">"+difficulty+" Lv" + songlist[i][difficulty] + "</span></div><div class=\"col-4\"><span class=\"rank_title rank_noplay\">no Play</span></div></div></div></div>";
        }
    }
  }
}

searchSongs();
showSongs();