// // このやり方「自前サービスオブジェクト」とよばれる
// app.service('sharedObject', function() {
//     var service = {
//         hoge : 'cart'
//     };
//     return service;
// });

// app.controller('mainCtrl', function ($scope, 'sharedObject') {

// }

var app = angular.module('app', ["firebase"]);

$(document).on('ready page:load', function(){
  angular.bootstrap(document.body, ['app'])
});

app.controller('mainCtrl', function ($scope, $firebaseArray) {
  var ref = new Firebase("https://adanana.firebaseio.com/");
  $scope.users = $firebaseArray(ref);
  $scope.addUser = function() {
    $scope.users.$add($scope.user);
    // ユーザー追加処理記入
  }

  // 以下に初期値を入れておく
  $scope.user = {
    "adult":"adult",
    "gender":"male",
    "region": "-",
    "prefecture": "-"
  }
  // 以下にドロップダウンのリスト
  // $scope.regions = ['-',
  //                   '北海道',
  //                   '東北',
  //                   '関東',
  //                   '中部',
  //                   '近畿',
  //                   '中国',
  //                   '四国',
  //                   '九州',
  // ];
  var prefectures = {
  "-": ["-"],
  "北海道": ["-","北海道"],
  "東北": ["-","青森県","岩手県","宮城県","秋田県","山形県","福島県"],
  "関東": ["-","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県"],
  "中部": ["-","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県"],
  "近畿": ["-","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県"],
  "中国": ["-","鳥取県","島根県","岡山県","広島県","山口県"],
  "四国": ["-","香川県","徳島県","愛媛県","高知県"],
  "九州": ["-","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄"],
  };
  $scope.regions = Object.keys(prefectures);
  // regionを取得して、対応するprefecturesを出力させるメソッド
  $scope.selectRegion = function() {
    var selected_region = $scope.user.region;
    // var selected_no = $scope.regions.indexOf(selected_region);
    // debugger;
    // $scope.prefectures = prefectures[selected_no][selected_region];
    $scope.prefectures = prefectures[selected_region];
  }
  $scope.users = $firebaseArray(ref.orderByChild('gender')
    .equalTo('male'));
});
// app.controller('firebaseCtrl', function($scope, $firebaseArray) {
//   var ref new Firebase('https://adanana.firebaseio.com/');
// });
