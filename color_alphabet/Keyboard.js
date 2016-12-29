$(document).ready(function(){

  var color = ["#FEF7E4",  "#EC3300", "#833624", "#FFCABF",
  "#090606",  "#283FB9",  "#CCCCFF",  "#FFFF99",
  "#CCCC00",  "#66CCCC",  "#003399",  "#993399",
  "#009966",  "#CC0033",  "#CCCCCC",  "#FF9999",
  "#666666",  "#CCFF00",  "#FFCC99",  "#FFCC00",
  "#FF6666",  "#FFFF00",  "#0066CC",  "#996699",
  "#99CC66", "#003366"];

  var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


  window.onload = function(){

    for(i = 0; i < letter.length; i++){

      var order = letter[i];
      document.getElementById(order).value = color[i];
    }

     getText();
  }

  function getText(){

    var str = $('#letterPanel').val();
    $('#colorPanel').html("");
    var colorStr = "";
    var count = 0;

    function createLable(color, string)
    {
        var lable = document.createElement("div");
        lable.innerHTML = string;
        lable.style.width = "4px";
        lable.style.margin = "0 0";
        lable.style.backgroundColor = color;
        lable.style.padding = "0 8px 0 8px";
        lable.style.color = color;
        lable.style.float = "left";
        document.getElementById("colorPanel").appendChild(lable);
    }

    function createPunc(string)
    {
        var lable = document.createElement("div");
        lable.innerHTML = string;
        lable.style.width = "4px";
        lable.style.margin = "0 0";
        lable.style.padding = "0 8px";
        lable.style.color = "black";
        lable.style.float = "left";
        document.getElementById("colorPanel").appendChild(lable);

    }

    for(i=0;i<str.length;i++){

      if(count > 0 && count%30 == 0 && str[i] != "\n"){
        $('#colorPanel').append("<br>");
      }
      switch(str[i]) {
            case 'a': count += 1;
                      createLable(color[0], "a");
                      break;
            case 'b': count += 1;
                      createLable(color[1], "b");
                      break;
            case 'c': count += 1;
                      createLable(color[2], "c");
                      break;
            case 'd': count += 1;
                      createLable(color[3], "d");
                      break;
            case 'e': count += 1;
                      createLable(color[4], "e");
                      break;
            case 'f': count += 1;
                      createLable(color[5], "f");
                      break;
            case 'g': count += 1;
                      createLable(color[6], "g");
                      break;
            case 'h': count += 1;
                      createLable(color[7], "h");
                      break;
            case 'i': count += 1;
                      createLable(color[8], "i");
                      break;
            case 'j': count += 1;
                      createLable(color[9], "j");
                      break;
            case 'k': count += 1;
                      createLable(color[10], "k");
                      break;
            case 'l': count += 1;
                      createLable(color[11], "l");
                      break;
            case 'm': count += 1;
                      createLable(color[12], "m");
                      break;
            case 'n': count += 1;
                      createLable(color[13], "n");
                      break;
            case 'o': count += 1;
                      createLable(color[14], "o");
                      break;
            case 'p': count += 1;
                      createLable(color[15], "p");
                      break;
            case 'q': count += 1;
                      createLable(color[16], "q");
                      break;
            case 'r': count += 1;
                      createLable(color[17], "r");
                      break;
            case 's': count += 1;
                      createLable(color[18], "s");
                      break;
            case 't': count += 1;
                      createLable(color[19], "t");
                      break;
            case 'u': count += 1;
                      createLable(color[20], "u");
                      break;
            case 'v': count += 1;
                      createLable(color[21], "v");
                      break;
            case 'w': count += 1;
                      createLable(color[22], "w");
                      break;
            case 'x': count += 1;
                      createLable(color[23], "x");
                      break;
            case 'y': count += 1;
                      createLable(color[24], "y");
                      break;
            case 'z': count += 1;
                      createLable(color[25], "z");
                      break;
            case ' ': count += 1;
                      createLable("white");
                      break;
            case '\n': count = 0;
                      $('#colorPanel').append("<br>");
                      break;
            case ',': count += 1;
                      createPunc("&sbquo;");
                      break;
            case '.': count += 1;
                      createPunc("&#46;");
                      break;
            case '?': count += 1;
            		  createPunc("&#63;");
                      break;
            case '"': count += 1;
                      createPunc("&quot;");
                      break;
            case '-': count += 1;
                      createPunc("&ndash;");
                      break;

            default:  break;
            }
    }

  }
 document.onkeypress = function(e){
    if(e.keyCode >= 97 && e.keyCode <=122 || e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 46 || e.keyCode == 44 || e.keyCode == 63 || e.keyCode == 34 || e.keyCode == 45){
      document.getElementById('letterPanel').oninput = function(){
        console.log(e.keyCode);
        getText();
      }
    }else{
        return false;
    }
 }


  $('button').click(function(){

      var letter = $(this).val();
      var str = $('#letterPanel').val();
      if(letter == "/")
      {
        $('#letterPanel').val(str + "\n");

      }else{

        str += letter;
        $('#letterPanel').val(str);
      }
     getText();
  });

  $("input").on('change', function(){

    var index;
    for(i = 0; i < letter.length; i++){
      if(letter[i] == $(this).attr("id")){
        index = i;
      }
    }
    color[index] = this.value;
    getText();

  })

  document.getElementById('print').onclick = function(){
    window.print();
  }


});
