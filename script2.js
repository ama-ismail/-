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
  //chance is for deck
  //orderPlayer is for Players turn
  $("div.deck").click(function(){
    if(chance === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
      chance = 0;
    }
  });
  function youWin() {
    alert("Выиграл 1 игрок");
  }
  function youLose() {
    alert("Выиграл 2 игрок");
  }
  $(".player1").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[0] = show;
      $(".player1").css("background-image", "url('card1/" + player[0] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".player2").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[1] = show;
      $(".player2").css("background-image", "url('card1/" + player[1] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".player3").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[2] = show;
      $(".player3").css("background-image", "url('card1/" + player[2] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".player4").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[3] = show;
      $(".player4").css("background-image", "url('card1/" + player[3] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".player5").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[4] = show;
      $(".player5").css("background-image", "url('card1/" + player[4] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".player6").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[5] = show;
      $(".player6").css("background-image", "url('card1/" + player[5] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".player7").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[6] = show;
      $(".player7").css("background-image", "url('card1/" + player[6] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".comp1").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      comp[0] = show;
      $(".comp1").css("background-image", "url('card1/" + comp[0] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".comp2").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      comp[1] = show;
      $(".comp2").css("background-image", "url('card1/" + comp[1] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".comp3").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      comp[2] = show;
      $(".comp3").css("background-image", "url('card1/" + comp[2] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".comp4").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      comp[3] = show;
      $(".comp4").css("background-image", "url('card1/" + comp[3] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".comp5").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      comp[4] = show;
      $(".comp5").css("background-image", "url('card1/" + comp[4] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".comp6").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      comp[5] = show;
      $(".comp6").css("background-image", "url('card1/" + comp[5] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
  $(".comp7").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      comp[6] = show;
      $(".comp7").css("background-image", "url('card1/" + comp[6] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
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
        setTimeout(youWin, 1000);
      }
      if(compSame === 7){
        finish = 0;
        setTimeout(youLose, 1000);
      }
      same1 = 0;
      compSame = 0;
    }
  });
});
