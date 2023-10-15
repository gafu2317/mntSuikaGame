export function preload() {
  this.load.image("boxbackground", "../public/img/boxbackground.png");
  this.load.image(`boxframe`, `../public/img/boxframe.png`);
  this.load.image(`cloud`, `../public/img/cloud.jpg`);
  this.load.image(`evolutionRing`, `../public/img/evolutionRing.png`);
  this.load.image(`image1`, `../public/img/1.1.png`);
  this.load.image(`image2`, `../public/img/2.1.png`);
  this.load.image(`image3`, `../public/img/3.1.png`);
  this.load.image(`image4`, `../public/img/4.1.png`);
  this.load.image(`image5`, `../public/img/5.1.png`);
  this.load.image(`image6`, `../public/img/6.1.png`);
  this.load.image(`image7`, `../public/img/7.1.png`);
  this.load.image(`image8`, `../public/img/8.1.png`);
  this.load.image(`image9`, `../public/img/9.1.png`);
  this.load.image(`image10`, `../public/img/10.1.png`);
  this.load.image(`image11`, `../public/img/11.1.png`);
}

var images;
var enterKey;

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
    fontSize: "40px",
    fill: "#000",
  }); // テキストを表示
  scoreText.setOrigin(0.5); // テキストの中央を中心に配置
  scoreText.setPadding(0, 4, 0, 0);

  const imageArray = ["image1", "image2", "image3", "image4", "image5"];
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  const nextImage = this.add.image(1085, 150, imageArray[randomIndex]);
  nextImage.setScale(1.6);

  images = this.physics.add.group();
  const fallingImage = images.create(650, 65+70, imageArray[randomIndex]);
  fallingImage.setImmovable(true); // 画像を固定
  // enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
}

export function update() {
  // if (Phaser.Input.Keyboard.JustDown(enterKey)) {
  //   // エンターキーが押されたら画像の固定を解除
  //   group.children.iterate(function(fallingImage) {
  //       fallingImage.setImmovable(false);
  //   });
  // }
}
