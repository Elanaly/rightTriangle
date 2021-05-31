console.log("読み込まれています");

$(function(){
    $("#answer-button").on("click", function(){
        //入力したそれぞれの変数に数字を入れる
         var height = $("#height").val();
         console.log(height);
         var width = $("#width").val();
         console.log(width);

         //inputをクリアする
         $("#width").val("");
         $("#height").val("");

         if(height == "" || width ==""){//もしいずれかが入力されなかった場合
             alert("数値を入力してください");
         }else if(height < 1 || width < 1){//いずれかが1未満だった場合
             alert("1~10000の数値を入力してください");
         }else if(height > 10000 || width > 10000){
             alert("1~10000の数値を入力してください");
         }else{
             //直角三角形の計算をする
             const answer = (Number(height) + Number(width)) / 2;
             //answerTextに新規のDOM要素を生成する
             var answerText = $('<h2>' + "答えは" + answer + "cm²です" + '</h2>');
             //#answerの子要素を削除する
             $("#answer").empty();
             //#answerの子要素にanswerTextを入れる
             $("#answer").append(answerText);
         }

     })
});