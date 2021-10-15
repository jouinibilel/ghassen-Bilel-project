

var player=1
var p1Moves=[]
var p2Moves=[]
var p1Score=0
var p2Score=0
$("#reset").click(function(){
    p1Score=0
    p2Score=0
    p2Moves=[]
    p1Moves=[]
    player=1
    $("td").empty()
    $('#sp1').html(p1Score)
    $('#sp2').html(p2Score)
    $('#msg').html("forget the past, let's play a new game")
})

$('td').click(function(){
    var state=identifyState(this)
    if(!state){
    $(this).text(identifyPlayerSymbol(player))
    var id=$(this).attr('id')
    pushPlayerMoves(player,id)
        var targetmovesarray=getPlayerMovesArray(player)
    if(findSumCombOf3Eq15(targetmovesarray)){
        
        $('#msg').html("player " + player + " won")
        
        if(player===1){
            p1Score++
            $('#sp1').html(p1Score)
           }
           else{p2Score++
            $('#sp2').html(p2Score)
        }
        $("td").empty()
        p1Moves=[]
        p2Moves=[]
        return
    }
    if(p1Moves.length+p2Moves.length===9){
        $('#msg').html("null match")
        $("td").empty()
        p1Moves=[]
        p2Moves=[]
        return
    }

    
    player =switchPlayer(player);
    $('#msg').html('player '+player+' its your turn')
    }
    else{$('#msg').html('already crossed')}
    
})


function identifyState(td){
    if($(td).text()==="x" || $(td).text()==="o"){
        return true 
    }
    else{ return false}
}
function identifyPlayerSymbol(player){
    if(player===1){
        return"x"
    }
    else {return "o"}
}
function pushPlayerMoves(player,id){
 if (player===1){
    p1Moves.push(Number(id))
 }
 else {p2Moves.push(Number(id))}


}
function switchPlayer(player){
    if(player===1){
        
        return 2 
    }
    else{
        
        return 1
    }
}
function findSumCombOf3Eq15(arr){

    for (var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            for(var h=j+1;h<arr.length;h++){
                if(arr[i]+arr[j]+arr[h]===15){
                    return true
                }
            }
        }
    }

    return false
}

function getPlayerMovesArray(player){
    if(player===1){return p1Moves}
    else return p2Moves
}

function showDiv2(){
 $('.div-container1').hide()
  $('.div-container2').show()
}
$('.div-container2').hide()
function returnHome(){
    $('.div-container2').hide()
  $('.div-container1').show()
}
