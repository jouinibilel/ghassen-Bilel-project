

var player=1
var p1Moves=[]
var p2Moves=[]
var p1Score=0
var p2Score=0
$('td').click(function(){
    var state=identifyState(this)
    if(!state){
    $(this).text(identifyPlayerSymbol(player))
    var id=$(this).attr('id')
    pushPlayerMoves(player,id)

    if(findSumCombOf3Eq15(player)){
        
        $('#msg').html(player + "won")
        
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
function findSumCombOf3Eq15(player){
    if(player===1){
    for (var i=0;i<p1Moves.length;i++){
        for(var j=i+1;j<p1Moves.length;j++){
            for(var h=j+1;h<p1Moves.length;h++){
                if(p1Moves[i]+p1Moves[j]+p1Moves[h]===15){
                    return true
                }
            }
        }
    }

    return false
}
else {for (var i=0;i<p2Moves.length;i++){
        for(var j=i+1;j<p2Moves.length;j++){
            for(var h=j+1;h<p2Moves.length;h++){
                if(p2Moves[i]+p2Moves[j]+p2Moves[h]===15){
                    return true
                }
            }
        }
    }
    return false
}
}
