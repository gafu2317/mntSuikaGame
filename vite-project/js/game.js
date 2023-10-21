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

let enterKey;
let boxframes;
let fallingImage;
let fallingImages;
let nextImage;
const halfRotationDegree = Math.PI;

export function create() {
  this.cameras.main.setBackgroundColor("#fafad2"); // lightgoldenrodyellow
  const boxbackground = this.add.image(650, 410, "boxbackground"); //箱の背景
  boxbackground.setScale(0.7);

  boxframes = this.physics.add.staticGroup();

  const boxframeUnder = boxframes.create(650, 682, "boxframe"); //箱の下枠
  boxframeUnder.setScale(0.7);

  const boxframeRight = boxframes.create(871, 410, "boxframe"); //箱の右枠
  boxframeRight.setDisplaySize(800 * 0.7, 20);
  boxframeRight.setRotation((1 / 2) * halfRotationDegree);
  boxframeRight.setOrigin(0.5, -0.5); //謎
  boxframeRight.setSize(boxframeRight.height, boxframeRight.width);

  const boxframeLeft = boxframes.create(471, 410, "boxframe"); //箱の左枠

  boxframeLeft.setDisplaySize(800 * 0.7, 20);
  boxframeLeft.setRotation((1 / 2) * halfRotationDegree);
  boxframeLeft.setOrigin(0.5, -0.5); //謎
  boxframeLeft.setSize(boxframeLeft.height, boxframeLeft.width);

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

  // nextImageにランダムに1つの画像を表示
  const randomImageKey = "image" + Phaser.Math.Between(1, 5);
  nextImage = this.add.image(1085, 150, randomImageKey);
  nextImage.setScale(1.6);

  // fallingImageを表示し、非表示に設定
  fallingImage = this.physics.add.image(650, 65 + 70, randomImageKey);
  fallingImage.setVisible(false);
  fallingImage.body.setAllowGravity(false); // 重力を無効にする

  // キーボードイベントを設定
  enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

  // const image1 = this.textures.get("image1");
  // const image2 = this.textures.get("image2");
  // const image3 = this.textures.get("image3");
  // const image4 = this.textures.get("image4");
  // const image5 = this.textures.get("image5");
  // const image6 = this.textures.get("image6");
  // const image7 = this.textures.get("image7");
  // const image8 = this.textures.get("image8");
  // const image9 = this.textures.get("image9");
  // const image10 = this.textures.get("image10");
  // const image11 = this.textures.get("image11");
  this.physics.add.collider(fallingImage, boxframes);
  this.physics.add.collider(fallingImage, fallingImage);


  // this.physics.add.collider(image1, image1, hitImage1, null, this);
  // this.physics.add.collider(image2, image2, hitImage2, null, this);
  // this.physics.add.collider(image3, image3, hitImage3, null, this);
  // this.physics.add.collider(image4, image4, hitImage4, null, this);
  // this.physics.add.collider(image5, image5, hitImage5, null, this);
  // this.physics.add.collider(image6, image6, hitImage6, null, this);
  // this.physics.add.collider(image7, image7, hitImage7, null, this);
  // this.physics.add.collider(image8, image8, hitImage8, null, this);
  // this.physics.add.collider(image9, image9, hitImage9, null, this);
  // this.physics.add.collider(image10, image10, hitImage10, null, this);
  // this.physics.add.collider(image11, image11, hitImage11, null, this);

  // function hitImage1() {

  // }
}

export function update() {
  if (Phaser.Input.Keyboard.JustDown(enterKey)) {
    nextImage.destroy();

    fallingImage.setVisible(true);
    fallingImage.body.setAllowGravity(true);

    const randomImageKey = "image" + Phaser.Math.Between(1, 5);
    nextImage = this.add.image(1085, 150, randomImageKey);

    fallingImage = this.physics.add.image(650, 65 + 70, randomImageKey);
    fallingImage.setVisible(false);
    fallingImage.body.setAllowGravity(false); // 重力を無効にする

    this.physics.add.collider(fallingImage, boxframes);
    // fallingImages.push(fallingImage);
    // fallingImages.add(fallingImage);
  }
  fallingImages = this.physics.add.group();
  this.physics.add.collider(fallingImages, fallingImages);
}
