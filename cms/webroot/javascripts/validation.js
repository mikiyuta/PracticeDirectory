$(function(){
    let textSubmitFlag = true;
    let birthSubmitFlag = true;
    //ユーザーテキスト欄が変更された場合に発火
    //発火タイミング
    //..フォーカスが別に移った時
    //..valueが変更された状態でEnterkeyが押された時
    $("#jsName").change(function(){
        const userName = $(this).val();
        if(!checkText(userName))
            textSubmitFlag = false;
    });

    $("#number_validate").change(function(){
        const userBirthday = $(this).val();
        if(!checkBirthday(userBirthday))
            birthSubmitFlag = false;
    });

    //【無料で占う】ボタンを押下した時に発火
    //ユーザー名を取得し、ひらがなで入力されているかチェックします。
    //ユーザーテキスト欄でそのままEnterが押されてバリデーションに引っかかった場合は
    //falseを返す
    $("#form_text").submit(function(){
        const userName = $("#jsName").val();
        if(textSubmitFlag && birthSubmitFlag){ 
            if(checkText(userName)){
                return checkBirthday($("#number_validate").val());
            }else{
                textSubmitFlag = true;
                birthSubmitFlag = true;
                return false;
            }
        }else{
        textSubmitFlag = true;
        birthSubmitFlag = true;
        return false;
        }
    });

    
    //【没】日本語で入力していないところから末尾までを消す
    //@return 変換された文字
    // function replaceText(userName){
    //   return userName.replace(/[^あ-ん].*$/,"");
    // }
});

//日本語で入力しているのかをチェックする
function checkText(userName){
    if(validateHiragana(userName)){
      if(validateStrLength(userName)){
          return true;
      }else{
          alert("ニックネームは15文字以内で入力してください。");
          return false;
      }
    }else{
        alert("ニックネームは平仮名で入力してください。");
        return false;
    }
}

//平仮名で入力されているかどうかをチェック
function validateHiragana(userName){
    return userName.match(/^[あ-ん]+$/);
}

//文字数のチェック
//15文字以内かどうか
function validateStrLength(userName){
    return (userName.length <= 15)? true : false;
}



function checkBirthday(number){
    if(validateBirthLength(number)){
        if(validateBirthYear(number)){
            return true;
        }else{
            alert("有効な生年月日を入力して下さい。");
            return false;
        }
    }else{
        alert("有効な生年月日を入力して下さい。");
        return false;
    }
}

//YYYY/MM/dd...合わせて8文字か
function validateBirthLength(number){
   return number.length == 8;
}

//現在の年からユーザーの誕生日を引いて200年いないか
function validateBirthYear(number){
    const currentYear   = new Date().getFullYear();
    const userBirthYear = number.slice(0,4);
    return (currentYear - userBirthYear) < 200;
}


