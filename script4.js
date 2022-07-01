$(document).ready(function(){
  let deck = [];
  for(let i = 1; i <= 84; i++){
    deck.push(i);
  }
  let p1 = [];
  let p2 = [];
  let p3 = [];
  let p4 = [];
  let reset = [];
  let show;
  //for random
  let max = deck.length - 1;
  let min = 0;
  let index;
  //for deck
  let chance = 1;
  let orderPlayer = 1;
  //equality of clones with p
  let same1 = 0;
  let same2 = 0;
  let same3 = 0;
  let same4 = 0;
  //clones
  let clone1 = p1.slice(0);
  let clone2 = p2.slice(0);
  let clone3 = p3.slice(0);
  let clone4 = p4.slice(0);

  let finish = 1;
  for(let i = 1; i <= 7; i++){
    max = deck.length - 1;
    min = 0;
    index = Math.floor(Math.random()*(max-min+1)) + min;
    p1.push(deck[index]);
    reset.push(deck.splice(index, 1));
  }
  p1.sort((a, b) => a - b);
  p1.reverse();
  for(let i = 1; i <= 7; i++){
    max = deck.length - 1;
    min = 0;
    index = Math.floor(Math.random()*(max-min+1)) + min;
    p2.push(deck[index]);
    reset.push(deck.splice(index, 1));
  }
  p2.sort((a, b) => a - b);
  p2.reverse();
  for(let i = 1; i <= 7; i++){
    max = deck.length - 1;
    min = 0;
    index = Math.floor(Math.random()*(max-min+1)) + min;
    p3.push(deck[index]);
    reset.push(deck.splice(index, 1));
  }
  p3.sort((a, b) => a - b);
  p3.reverse();
  for(let i = 1; i <= 7; i++){
    max = deck.length - 1;
    min = 0;
    index = Math.floor(Math.random()*(max-min+1)) + min;
    p4.push(deck[index]);
    reset.push(deck.splice(index, 1));
  }
  p4.sort((a, b) => a - b);
  p4.reverse();
  $("button.btn-success").click(function(){
    $(".1player1").css("background-image", "url('card1/" + p1[0] + ".jpg')");
    $(".1player2").css("background-image", "url('card1/" + p1[1] + ".jpg')");
    $(".1player3").css("background-image", "url('card1/" + p1[2] + ".jpg')");
    $(".1player4").css("background-image", "url('card1/" + p1[3] + ".jpg')");
    $(".1player5").css("background-image", "url('card1/" + p1[4] + ".jpg')");
    $(".1player6").css("background-image", "url('card1/" + p1[5] + ".jpg')");
    $(".1player7").css("background-image", "url('card1/" + p1[6] + ".jpg')");
    $(".2player1").css("background-image", "url('card1/" + p2[0] + ".jpg')");
    $(".2player2").css("background-image", "url('card1/" + p2[1] + ".jpg')");
    $(".2player3").css("background-image", "url('card1/" + p2[2] + ".jpg')");
    $(".2player4").css("background-image", "url('card1/" + p2[3] + ".jpg')");
    $(".2player5").css("background-image", "url('card1/" + p2[4] + ".jpg')");
    $(".2player6").css("background-image", "url('card1/" + p2[5] + ".jpg')");
    $(".2player7").css("background-image", "url('card1/" + p2[6] + ".jpg')");
    $(".3player1").css("background-image", "url('card1/" + p3[0] + ".jpg')");
    $(".3player2").css("background-image", "url('card1/" + p3[1] + ".jpg')");
    $(".3player3").css("background-image", "url('card1/" + p3[2] + ".jpg')");
    $(".3player4").css("background-image", "url('card1/" + p3[3] + ".jpg')");
    $(".3player5").css("background-image", "url('card1/" + p3[4] + ".jpg')");
    $(".3player6").css("background-image", "url('card1/" + p3[5] + ".jpg')");
    $(".3player7").css("background-image", "url('card1/" + p3[6] + ".jpg')");
    $(".4player1").css("background-image", "url('card1/" + p4[0] + ".jpg')");
    $(".4player2").css("background-image", "url('card1/" + p4[1] + ".jpg')");
    $(".4player3").css("background-image", "url('card1/" + p4[2] + ".jpg')");
    $(".4player4").css("background-image", "url('card1/" + p4[3] + ".jpg')");
    $(".4player5").css("background-image", "url('card1/" + p4[4] + ".jpg')");
    $(".4player6").css("background-image", "url('card1/" + p4[5] + ".jpg')");
    $(".4player7").css("background-image", "url('card1/" + p4[6] + ".jpg')");
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
  function fisrt() {
    alert("Выиграл 1 игрок");
  }
  function second() {
    alert("Выиграл 2 игрок");
  }
  function third() {
    alert("Выиграл 3 игрок");
  }
  function fourth() {
    alert("Выиграл 4 игрок");
  }
  $(".1player1").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      p1[0] = show;
      $(".1player1").css("background-image", "url('card1/" + p1[0] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
      clone1 = p1.slice(0);
      clone1.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p1[i] === clone1[i]){
          same1++;
        }
      }
      if(same1 === 7){
        finish = 0;
        setTimeout(first, 1000);
      }
      same1 = 0;
    }
  });
  $(".1player2").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      p1[1] = show;
      $(".1player2").css("background-image", "url('card1/" + p1[1] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
      clone1 = p1.slice(0);
      clone1.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p1[i] === clone1[i]){
          same1++;
        }
      }
      if(same1 === 7){
        finish = 0;
        setTimeout(first, 1000);
      }
      same1 = 0;
    }
  });
  $(".1player3").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      p1[2] = show;
      $(".1player3").css("background-image", "url('card1/" + p1[2] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
      clone1 = p1.slice(0);
      clone1.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p1[i] === clone1[i]){
          same1++;
        }
      }
      if(same1 === 7){
        finish = 0;
        setTimeout(first, 1000);
      }
      same1 = 0;
    }
  });
  $(".1player4").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      p1[3] = show;
      $(".1player4").css("background-image", "url('card1/" + p1[3] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
      clone1 = p1.slice(0);
      clone1.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p1[i] === clone1[i]){
          same1++;
        }
      }
      if(same1 === 7){
        finish = 0;
        setTimeout(first, 1000);
      }
      same1 = 0;
    }
  });
  $(".1player5").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      p1[4] = show;
      $(".1player5").css("background-image", "url('card1/" + p1[4] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
      clone1 = p1.slice(0);
      clone1.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p1[i] === clone1[i]){
          same1++;
        }
      }
      if(same1 === 7){
        finish = 0;
        setTimeout(first, 1000);
      }
      same1 = 0;
    }
  });
  $(".1player6").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      p1[5] = show;
      $(".1player6").css("background-image", "url('card1/" + p1[5] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
      clone1 = p1.slice(0);
      clone1.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p1[i] === clone1[i]){
          same1++;
        }
      }
      if(same1 === 7){
        finish = 0;
        setTimeout(first, 1000);
      }
      same1 = 0;
    }
  });
  $(".1player7").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      p1[6] = show;
      $(".1player7").css("background-image", "url('card1/" + p1[6] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 2;
      clone1 = p1.slice(0);
      clone1.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p1[i] === clone1[i]){
          same1++;
        }
      }
      if(same1 === 7){
        finish = 0;
        setTimeout(first, 1000);
      }
      same1 = 0;
    }
  });
  $(".2player1").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      p2[0] = show;
      $(".2player1").css("background-image", "url('card1/" + p2[0] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 3;
      clone2 = p2.slice(0);
      clone2.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p2[i] === clone2[i]){
          same2++;
        }
      }
      if(same2 === 7){
        finish = 0;
        setTimeout(second, 1000);
      }
      same2 = 0;
    }
  });
  $(".2player2").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      p2[1] = show;
      $(".2player2").css("background-image", "url('card1/" + p2[1] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 3;
      clone2 = p2.slice(0);
      clone2.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p2[i] === clone2[i]){
          same2++;
        }
      }
      if(same2 === 7){
        finish = 0;
        setTimeout(second, 1000);
      }
      same2 = 0;
    }
  });
  $(".2player3").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      p2[2] = show;
      $(".2player3").css("background-image", "url('card1/" + p2[2] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 3;
      clone2 = p2.slice(0);
      clone2.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p2[i] === clone2[i]){
          same2++;
        }
      }
      if(same2 === 7){
        finish = 0;
        setTimeout(second, 1000);
      }
      same2 = 0;
    }
  });
  $(".2player4").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      p2[3] = show;
      $(".2player4").css("background-image", "url('card1/" + p2[3] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 3;
      clone2 = p2.slice(0);
      clone2.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p2[i] === clone2[i]){
          same2++;
        }
      }
      if(same2 === 7){
        finish = 0;
        setTimeout(second, 1000);
      }
      same2 = 0;
    }
  });
  $(".2player5").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      p2[4] = show;
      $(".2player5").css("background-image", "url('card1/" + p2[4] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 3;
      clone2 = p2.slice(0);
      clone2.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p2[i] === clone2[i]){
          same2++;
        }
      }
      if(same2 === 7){
        finish = 0;
        setTimeout(second, 1000);
      }
      same2 = 0;
    }
  });
  $(".2player6").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      p2[5] = show;
      $(".2player6").css("background-image", "url('card1/" + p2[5] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 3;
      clone2 = p2.slice(0);
      clone2.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p2[i] === clone2[i]){
          same2++;
        }
      }
      if(same2 === 7){
        finish = 0;
        setTimeout(second, 1000);
      }
      same2 = 0;
    }
  });
  $(".2player7").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      p2[6] = show;
      $(".2player7").css("background-image", "url('card1/" + p2[6] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 3;
      clone2 = p2.slice(0);
      clone2.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p2[i] === clone2[i]){
          same2++;
        }
      }
      if(same2 === 7){
        finish = 0;
        setTimeout(second, 1000);
      }
      same2 = 0;
    }
  });
  $(".3player1").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      p3[0] = show;
      $(".3player1").css("background-image", "url('card1/" + p3[0] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 4;
      clone3 = p3.slice(0);
      clone3.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p3[i] === clone3[i]){
          same3++;
        }
      }
      if(same3 === 7){
        finish = 0;
        setTimeout(third, 1000);
      }
      same3 = 0;
    }
  });
  $(".3player2").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      p3[1] = show;
      $(".3player2").css("background-image", "url('card1/" + p3[1] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 4;
      clone3 = p3.slice(0);
      clone3.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p3[i] === clone3[i]){
          same3++;
        }
      }
      if(same3 === 7){
        finish = 0;
        setTimeout(third, 1000);
      }
      same3 = 0;
    }
  });
  $(".3player3").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      p3[2] = show;
      $(".3player3").css("background-image", "url('card1/" + p3[2] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 4;
      clone3 = p3.slice(0);
      clone3.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p3[i] === clone3[i]){
          same3++;
        }
      }
      if(same3 === 7){
        finish = 0;
        setTimeout(third, 1000);
      }
      same3 = 0;
    }
  });
  $(".3player4").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      p3[3] = show;
      $(".3player4").css("background-image", "url('card1/" + p3[3] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 4;
      clone3 = p3.slice(0);
      clone3.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p3[i] === clone3[i]){
          same3++;
        }
      }
      if(same3 === 7){
        finish = 0;
        setTimeout(third, 1000);
      }
      same3 = 0;
    }
  });
  $(".3player5").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      p3[4] = show;
      $(".3player5").css("background-image", "url('card1/" + p3[4] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 4;
      clone3 = p3.slice(0);
      clone3.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p3[i] === clone3[i]){
          same3++;
        }
      }
      if(same3 === 7){
        finish = 0;
        setTimeout(third, 1000);
      }
      same3 = 0;
    }
  });
  $(".3player6").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      p3[5] = show;
      $(".3player6").css("background-image", "url('card1/" + p3[5] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 4;
      clone3 = p3.slice(0);
      clone3.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p3[i] === clone3[i]){
          same3++;
        }
      }
      if(same3 === 7){
        finish = 0;
        setTimeout(third, 1000);
      }
      same3 = 0;
    }
  });
  $(".3player7").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      p3[6] = show;
      $(".3player7").css("background-image", "url('card1/" + p3[6] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 4;
      clone3 = p3.slice(0);
      clone3.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p3[i] === clone3[i]){
          same3++;
        }
      }
      if(same3 === 7){
        finish = 0;
        setTimeout(third, 1000);
      }
      same3 = 0;
    }
  });
  $(".4player1").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      p4[0] = show;
      $(".4player1").css("background-image", "url('card1/" + p4[0] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
      clone4 = p4.slice(0);
      clone4.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p4[i] === clone4[i]){
          same4++;
        }
      }
      if(same4 === 7){
        finish = 0;
        setTimeout(fourth, 1000);
      }
      same4 = 0;
    }
  });
  $(".4player2").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      p4[1] = show;
      $(".4player2").css("background-image", "url('card1/" + p4[1] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
      clone4 = p4.slice(0);
      clone4.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p4[i] === clone4[i]){
          same4++;
        }
      }
      if(same4 === 7){
        finish = 0;
        setTimeout(fourth, 1000);
      }
      same4 = 0;
    }
  });
  $(".4player3").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      p4[2] = show;
      $(".4player3").css("background-image", "url('card1/" + p4[2] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
      clone4 = p4.slice(0);
      clone4.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p4[i] === clone4[i]){
          same4++;
        }
      }
      if(same4 === 7){
        finish = 0;
        setTimeout(fourth, 1000);
      }
      same4 = 0;
    }
  });
  $(".4player4").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      p4[3] = show;
      $(".4player4").css("background-image", "url('card1/" + p4[3] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
      clone4 = p4.slice(0);
      clone4.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p4[i] === clone4[i]){
          same4++;
        }
      }
      if(same4 === 7){
        finish = 0;
        setTimeout(fourth, 1000);
      }
      same4 = 0;
    }
  });
  $(".4player5").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      p4[4] = show;
      $(".4player5").css("background-image", "url('card1/" + p4[4] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
      clone4 = p4.slice(0);
      clone4.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p4[i] === clone4[i]){
          same4++;
        }
      }
      if(same4 === 7){
        finish = 0;
        setTimeout(fourth, 1000);
      }
      same4 = 0;
    }
  });
  $(".4player6").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      p4[5] = show;
      $(".4player6").css("background-image", "url('card1/" + p4[5] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
      clone4 = p4.slice(0);
      clone4.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p4[i] === clone4[i]){
          same4++;
        }
      }
      if(same4 === 7){
        finish = 0;
        setTimeout(fourth, 1000);
      }
      same4 = 0;
    }
  });
  $(".4player7").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      p4[6] = show;
      $(".4player7").css("background-image", "url('card1/" + p4[6] + ".jpg')");
      $(".show").css("background-image", "none");
      chance = 1;
      orderPlayer = 1;
      clone4 = p4.slice(0);
      clone4.sort((a, b) => a - b);
      for(let i = 0; i < 7; i++){
        if(p4[i] === clone4[i]){
          same4++;
        }
      }
      if(same4 === 7){
        finish = 0;
        setTimeout(fourth, 1000);
      }
      same4 = 0;
    }
  });
});
