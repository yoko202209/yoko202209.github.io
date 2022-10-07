const songlist= getSongList();
let display = document.getElementById('display');
let SongsHtml = ""

function showSongs(){
  display.innerHTML = SongsHtml;
}

function createSongCard(title,difficulty,level,clearRank){
  let divCol = document.createElement('div');
  divCol.classList.add("col-lg-3");
  display.appendChild(divCol);

  let divCard = document.createElement('div');
  divCard.classList.add("row");
  divCard.classList.add("song_card");
  divCard.classList.add("d-flex");
  divCard.classList.add("justify-content-center");
  divCard.classList.add("m-1");
  divCard.classList.add("p-3");

  divCol.appendChild(divCard);

  let divRow = document.createElement('div');
  divRow.classList.add("mb-3");
  divRow.classList.add("g-0");
  divRow.classList.add("row");
  divCard.appendChild(divRow);

  //TODO:cssの指定
  let songTitle = document.createElement('h2');
  songTitle.classList.add("song_title");
  songTitle.classList.add("mb-0");
  songTitle.textContent = title;
  divRow.appendChild(songTitle);

  let divDifficulty = document.createElement('div');
  divDifficulty.classList.add("col-8");
  divDifficulty.textContent = difficulty + level;
  divRow.appendChild(divDifficulty);

  let divClearRank = document.createElement('div');
  divClearRank.classList.add("col-4");
  divClearRank.textContent = clearRank;
  divRow.appendChild(divClearRank);
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
          //TODO:htmlの追加処理が汚い！ここでDOM操作のcreateElement()を使いたい。(javascript 16章)
          createSongCard(songlist[i]["name"],difficulty,songlist[i][difficulty],"noPlay");
          //SongsHtml += "<div class=\"col-lg-3\"><div class=\"row song_card d-flex justify-content-center m-1 p-3\"><div class=\"row g-0 mb-3\"><h2 class=\"mb-0 song_title\">" + songlist[i]['name'] + "</h2><div class=\"col-8\"><span class=\"difficulty "+ difficulty.toLowerCase() +"\">"+difficulty+" Lv" + songlist[i][difficulty] + "</span></div><div class=\"col-4\"><span class=\"rank_title rank_noplay\">no Play</span></div></div></div></div>";
        }
    }
  }
}

searchSongs();
showSongs();