
document.addEventListener('DOMContentLoaded', (event) => {
  //定義部ー------------------------------------
  let today = `${new Date().toLocaleDateString('ja', { year: "numeric", month: "short", day: "numeric"})}現在`;
  let kanaName = "タカハシツナミ"
  let kanjiName = "髙橋綱弥";
  let dateOfBirth = "1996年07月17日";
  let gender = "男";
  let postCode = "106-0032";
  let kanaAddress= "トウキョウトミナトクロッポンギ";
  let kanjiAddress = "東京都港区六本木";
  let mobilePhone = "090-9423-8717";
  let homePhone = "―";

  let info = {
    'today': today,
    'kana-name': kanaName,
    'date-of-birth': dateOfBirth,
    'gender': gender,
    'post-code': postCode,
    'kana-address': kanaAddress,
    'kanji-address': kanjiAddress,
    'mobile-phone': mobilePhone,
    'home-phone': homePhone
  };

  Object.entries(info).forEach( ([key, value]) => {
    document.getElementById(key).textContent = value;
  });
  
  let kanjiNames = document.querySelectorAll('.kanji-name');
  let name = kanjiName;
  
  kanjiNames.forEach( function( kanjiName ) {
    kanjiName.textContent = name;
  });
  //ヘッダー------------------------------------
  document.title = `${name} | 履歴書`;
  //個人情報------------------------------------
  
  //---学歴------------------------------------
  
  
  //---職歴------------------------------------
  
  
  //---資格------------------------------------
  
  
  //---コンバート-------------------------------
  
  
});