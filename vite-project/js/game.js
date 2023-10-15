export function preload() {
  this.load.image("boxbackground", "../public/img/boxbackground.png");
  this.load.image(`boxframe`, `../public/img/boxframe.png`);
  this.load.image(`cloud`, `../public/img/cloud.jpg`);
  this.load.image(`evolutionRing`, `../public/img/evolutionRing.png`);
}

export function create() {
  this.cameras.main.setBackgroundColor("#fafad2"); // lightgoldenrodyellow
  const boxbackground = this.add.image(650, 410, "boxbackground"); //箱の背景
  boxbackground.setScale(0.7);
  const boxframe = this.add.image(650, 410, "boxframe"); //箱の枠
  boxframe.setScale(0.7);
  const cloud = this.add.image(650, 65, "cloud"); //フルーツ落とす雲
  cloud.setScale(0.7);
  const evolutionRing = this.add.image(1085, 500, "evolutionRing"); //進化の輪
  evolutionRing.setScale(0.3);
  const evolutionRingText = this.add.text(1085, 300, "進化リング", {
    fontFamily: "Arial",
    fontSize: "40px",
    fill: "#000",
  }); // テキストを表示
  evolutionRingText.setOrigin(0.5); // テキストの中央を中心に配置
  evolutionRingText.setPadding(0, 4, 0, 0);

  const graphics = this.add.graphics(); // グラフィクスオブジェクトを作成
  const nextCircle = new Phaser.Geom.Circle(1085, 150, 120); // 円の位置と半径を指定
  graphics.fillStyle(0xf5deb3, 1); // 塗りつぶしのスタイルを設定（赤色）
  graphics.fillCircleShape(nextCircle); // 円を描画
  const nextCnnerCircle = new Phaser.Geom.Circle(1085, 150, 110); // 円の位置と半径を指定
  graphics.fillStyle(0xfafad2, 1); // 塗りつぶしのスタイルを設定（赤色）
  graphics.fillCircleShape(nextCnnerCircle); // 円を描画
  const nextText = this.add.text(1085, 40, "ネクスト", {
    fontFamily: "Arial",
    fontSize: "40px",
    fill: "#000",
  }); // テキストを表示
  nextText.setOrigin(0.5); // テキストの中央を中心に配置
  nextText.setPadding(0, 4, 0, 0);

  const scorecircle = new Phaser.Geom.Circle(200, 150, 120); // 円の位置と半径を指定
  graphics.fillStyle(0xf5deb3, 1); // 塗りつぶしのスタイルを設定（赤色）
  graphics.fillCircleShape(scorecircle); // 円を描画
  const scoreinnerCircle = new Phaser.Geom.Circle(200, 150, 110); // 円の位置と半径を指定
  graphics.fillStyle(0xfafad2, 1); // 塗りつぶしのスタイルを設定（赤色）
  graphics.fillCircleShape(scoreinnerCircle); // 円を描画
  const scoreText = this.add.text(200, 40, "スコア", {
    fontFamily: "Arial",
    fontSize: "40px", fill: "#000",
  }); // テキストを表示
  scoreText.setOrigin(0.5); // テキストの中央を中心に配置
  scoreText.setPadding(0, 4, 0, 0);
}

export function update() {}
