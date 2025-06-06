document.addEventListener('DOMContentLoaded', () => {
    const dialogueTextElement = document.getElementById('dialogue-text');
    const backButton = document.getElementById('back-button');
    const nextButton = document.getElementById('next-button');
    const centerImageContainer = document.querySelector('.center-image-container'); // 画像コンテナを取得
    const fairyImage = document.getElementById('fairy-image'); // 妖精の画像要素を取得
    const gameContainer = document.querySelector('.game-container');
    const textBox = document.getElementById('text-box');
    const navigationButtons = document.querySelector('.navigation-buttons');

    const dialogues = [
        "このみプロジェクトへようこそ！",
        "私はこのゲームのゲームマスターの妖精だよ。",
        "次に進むボタンを押して、謎を解き進めよう。",
        "何か困ったことがあれば、いつでも「戻る」ボタンで前の会話に戻れるよ。",
        "さあ、一緒に冒険の始まりだ！",
        "（...さらにセリフを追加できます...）"
    ];

    let currentDialogueIndex = 0;

    /**
     * 妖精の画像のサイズを動的に調整する関数
     */
    function adjustFairyImageSize() {
        const minScreenDimension = Math.min(window.innerWidth, window.innerHeight);

        // 画面サイズに対する画像のターゲットサイズを計算
        // 例: 画面の短い方の辺の 50% のサイズにする (0.5)
        // この値を調整して、妖精画像の大きさを変更できます。
        let targetSize = Math.floor(minScreenDimension * 0.5); 
        
        // 最小サイズを設定（小さすぎないように）
        const minDisplaySize = 100; // 例えば、最低100pxの高さ/幅を保証
        targetSize = Math.max(minDisplaySize, targetSize);

        // 画像の幅と高さを設定 (ピクセルがぼやけないように整数値にする)
        fairyImage.style.width = `${targetSize}px`;
        fairyImage.style.height = `${targetSize}px`;
    }

    function displayDialogue(index) {
        if (index >= 0 && index < dialogues.length) {
            dialogueTextElement.textContent = dialogues[index];
            currentDialogueIndex = index;
            backButton.disabled = (currentDialogueIndex === 0);
            nextButton.disabled = (currentDialogueIndex === dialogues.length - 1);
        }
    }

    nextButton.addEventListener('click', () => {
        if (currentDialogueIndex < dialogues.length - 1) {
            displayDialogue(currentDialogueIndex + 1);
        }
    });

    backButton.addEventListener('click', () => {
        if (currentDialogueIndex > 0) {
            displayDialogue(currentDialogueIndex - 1);
        }
    });

    displayDialogue(currentDialogueIndex);

    function debounceAdjust() {
        requestAnimationFrame(() => {
            adjustFairyImageSize();
        });
    }

    window.addEventListener('load', () => {
        debounceAdjust();
    });
    window.addEventListener('resize', debounceAdjust);
});