app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = 
    [
    	{
    	name: 'Panini',
      description: 'Wonderful bread with ham and tomato sauce',
      price: 9.95
        
      },
      {
    	name: 'Pizza Margarita',
      description: 'Simply delicious',
      price: 12.95
        
      },
    {
    	name: 'Pineapple',
      description: 'FRUIT!',
      price: 7.95
        
      },
  	];
  	  $scope.extras = 
    [
    	{
    	name: 'Ice cream',
      description: 'So coooooooold',
      price: 9.95
        
      },
      {
    	name: 'Hot Dogs',
      description: 'Simply  DOGLicious',
      price: 12.95
        
      },
    {
    	name: 'Pineapple',
      description: 'FRUIT!',
      price: 7.95
        
      },
  	];

}]);