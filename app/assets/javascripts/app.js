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
    "gender":"male"
  }
  // 以下にドロップダウンのリスト
  $scope.regions = ['北海道',
                        '東北',
                        '関東',
                        '中具',
                        '近畿',
                        '中国',
                        '四国',
                        '九州',
  ];
  $scope.prefectures = ['red',
                        'blue',
  ];
});
