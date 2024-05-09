
$('#mistake').change(function() {
    var selectedOption = $(this).val();

    // チーム構成が選択された場合
    if (selectedOption === 'チーム構成') {
        $('#output').html('<img src="img/team.png" alt="チーム構成">');
    } 
  
        
    // 資金調達が選択された場合
    else if (selectedOption === '資金調達') {
        $('#output').html('<img src="img/shikin.png" alt="資金調達">');
    } 

    else if (selectedOption === '戦略') {
        $('#output').html('<img src="img/strategy.png" alt="戦略">');
    } 

    else if (selectedOption === 'ネットワーキング') {
        $('#output').html('<img src="img/net.png" alt="ネットワーキング">');
    } 

    else if (selectedOption === 'ブランド力') {
        $('#output').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/4eIDBV4Mpek?si=RnCegD135jZ_LW1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
    } 

    else if (selectedOption === 'ピッチ') {
        $('#output').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/l0hVIH3EnlQ?si=h_LLzoKX6kEX2jyj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
    } 

    else if (selectedOption === 'ゆい') {
        $('#output').html('<img src="img/biz.png" alt="ゆい">');
} 



    




    // 他のオプションに対する処理も同様に追加する

    // ボタンを押しても選択内容がクリアされないようにする
    $(this).prop('selectedIndex', 0);
});

// 「知ろう！」ボタンがクリックされた時の処理
$('#checkButton').click(function() {
    // 選択されたオプションの値を取得
    var selectedOption = $('#mistake').val();

 

    // ボタンを押しても選択内容がクリアされないようにする
    $('#mistake').prop('selectedIndex', 0);
});






