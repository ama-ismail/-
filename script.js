$(document).ready(function(){
  let deck = [];
  for(let i = 1; i <= 84; i++){
    deck.push(i);
  }
  let comp = [];
  let player = [];
  let reset = [];
  let max = deck.length - 1;
  let min = 0;
  let show;
  let chance = 1;
  let orderPlayer = 1;
  let index;
  let compIndex;
  let compLast;
  let same1 = 0;
  let compSame = 0;
  let clone = player.slice(0);
  let cloneComp = comp.slice(0);
  let finish = 1;
  $("button.btn-success").click(function(){
    for(let i = 1; i <= 7; i++){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      comp.push(deck[index]);
      reset.push(deck.splice(index, 1));
      comp.sort((a, b) => a - b);
      comp.reverse();
    }
    for(let i = 1; i <= 7; i++){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      player.push(deck[index]);
      reset.push(deck.splice(index, 1));
      player.sort((a, b) => a - b);
      player.reverse();
    }
    //$("h1.comp7").text(comp[6]);
    $(".player1").css("background-image", "url('card1/" + player[0] + ".jpg')");
    $(".player2").css("background-image", "url('card1/" + player[1] + ".jpg')");
    $(".player3").css("background-image", "url('card1/" + player[2] + ".jpg')");
    $(".player4").css("background-image", "url('card1/" + player[3] + ".jpg')");
    $(".player5").css("background-image", "url('card1/" + player[4] + ".jpg')");
    $(".player6").css("background-image", "url('card1/" + player[5] + ".jpg')");
    $(".player7").css("background-image", "url('card1/" + player[6] + ".jpg')");
    $(".comp1").css("background-image", "url('card1/" + comp[0] + ".jpg')");
    $(".comp2").css("background-image", "url('card1/" + comp[1] + ".jpg')");
    $(".comp3").css("background-image", "url('card1/" + comp[2] + ".jpg')");
    $(".comp4").css("background-image", "url('card1/" + comp[3] + ".jpg')");
    $(".comp5").css("background-image", "url('card1/" + comp[4] + ".jpg')");
    $(".comp6").css("background-image", "url('card1/" + comp[5] + ".jpg')");
    $(".comp7").css("background-image", "url('card1/" + comp[6] + ".jpg')");
  });
  $(".deck").click(function(){
    if(chance === 1 && orderPlayer === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
      chance = 0;
    }
  });
  function compAlert() {
    alert("Компьютер поменял " + compIndex + " блок в башне с " + compLast + " на: " + show);
  }
  function youWin() {
    alert("Ты выиграл");
  }
  function youLose() {
    alert("Ты проиграл");
  }
  $(".player1").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[0] = show;
      $(".player1").css("background-image", "url('card1/" + player[0] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0  && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $(".comp1").css("background-image", "url('card1/" + comp[0] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $(".comp2").css("background-image", "url('card1/" + comp[1] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $(".comp3").css("background-image", "url('card1/" + comp[2] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $(".comp4").css("background-image", "url('card1/" + comp[3] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $(".comp5").css("background-image", "url('card1/" + comp[4] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $(".comp6").css("background-image", "url('card1/" + comp[5] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $(".comp7").css("background-image", "url('card1/" + comp[6] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;

  });
  $(".player2").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[1] = show;
      $(".player2").css("background-image", "url('card1/" + player[1] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0  && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $(".comp1").css("background-image", "url('card1/" + comp[0] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $(".comp2").css("background-image", "url('card1/" + comp[1] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $(".comp3").css("background-image", "url('card1/" + comp[2] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $(".comp4").css("background-image", "url('card1/" + comp[3] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $(".comp5").css("background-image", "url('card1/" + comp[4] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $(".comp6").css("background-image", "url('card1/" + comp[5] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $(".comp7").css("background-image", "url('card1/" + comp[6] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $(".player3").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[2] = show;
      $(".player3").css("background-image", "url('card1/" + player[2] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0  && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $(".comp1").css("background-image", "url('card1/" + comp[0] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $(".comp2").css("background-image", "url('card1/" + comp[1] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $(".comp3").css("background-image", "url('card1/" + comp[2] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $(".comp4").css("background-image", "url('card1/" + comp[3] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $(".comp5").css("background-image", "url('card1/" + comp[4] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $(".comp6").css("background-image", "url('card1/" + comp[5] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $(".comp7").css("background-image", "url('card1/" + comp[6] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $(".player4").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[3] = show;
      $(".player4").css("background-image", "url('card1/" + player[3] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0  && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $(".comp1").css("background-image", "url('card1/" + comp[0] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $(".comp2").css("background-image", "url('card1/" + comp[1] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $(".comp3").css("background-image", "url('card1/" + comp[2] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $(".comp4").css("background-image", "url('card1/" + comp[3] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $(".comp5").css("background-image", "url('card1/" + comp[4] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $(".comp6").css("background-image", "url('card1/" + comp[5] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $(".comp7").css("background-image", "url('card1/" + comp[6] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $(".player5").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[4] = show;
      $(".player5").css("background-image", "url('card1/" + player[4] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0  && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $(".comp1").css("background-image", "url('card1/" + comp[0] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $(".comp2").css("background-image", "url('card1/" + comp[1] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $(".comp3").css("background-image", "url('card1/" + comp[2] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $(".comp4").css("background-image", "url('card1/" + comp[3] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $(".comp5").css("background-image", "url('card1/" + comp[4] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $(".comp6").css("background-image", "url('card1/" + comp[5] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $(".comp7").css("background-image", "url('card1/" + comp[6] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $(".player6").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[5] = show;
      $(".player6").css("background-image", "url('card1/" + player[5] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0  && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $(".comp1").css("background-image", "url('card1/" + comp[0] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $(".comp2").css("background-image", "url('card1/" + comp[1] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $(".comp3").css("background-image", "url('card1/" + comp[2] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $(".comp4").css("background-image", "url('card1/" + comp[3] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $(".comp5").css("background-image", "url('card1/" + comp[4] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $(".comp6").css("background-image", "url('card1/" + comp[5] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $(".comp7").css("background-image", "url('card1/" + comp[6] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $(".player7").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[6] = show;
      $(".player7").css("background-image", "url('card1/" + player[6] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0  && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $(".comp1").css("background-image", "url('card1/" + comp[0] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $(".comp2").css("background-image", "url('card1/" + comp[1] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $(".comp3").css("background-image", "url('card1/" + comp[2] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $(".comp4").css("background-image", "url('card1/" + comp[3] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $(".comp5").css("background-image", "url('card1/" + comp[4] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $(".comp6").css("background-image", "url('card1/" + comp[5] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $(".comp7").css("background-image", "url('card1/" + comp[6] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
});
