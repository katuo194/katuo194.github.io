// HTML内の特定のボタン要素を取得する
const button = document.getElementById('alertButton');

// ボタンがクリックされたときのイベント処理を追加する
button.addEventListener('click', () => {
    alert('こんにちは！Webサイトへようこそ！');
});