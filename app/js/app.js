(function(){
'use strict';

// Declare app level module which depends on views, and components
angular.module('readingList',[])

.controller('ReadingListCtrl',function(){
  this.books=books;
  this.genres=genres;
})

.directive('bookGenres',function(){
  return{
    restrict:'E',
    templateUrl:'partials/book-genres.html'
  }
})

.directive('bookRating',function(){
  return{
    restrict:'A',
    templateUrl:'partials/book-rating.html'
  }
})

.directive('reviewForm',function(){
  return {
    restrict:'E',
    templateUrl:'partials/review-form.html',
    //If you create your own controller, you cannot access to parents' controller's objects
    controller:function(){
      //you have to let the chirl controller to know this object cus it cannot be accessed directly from parents' as others
      //this.genres=genres;
      this.showForm=false;
    },
    controllerAs:'reviewCtrl',
    //due to upper situation, this method can help to pass-in the objects even from parents'
    scope:{
      books:'=',
      genres:'='
    }
  }
});

  var genres=['g1','g2','g3'];
  var books = [
    {
      title:'Book1',
      author:'author1',
      isbn:'111111',
      review:'sdsfsdfsfsfdsfes',
      rating:4,
      genres:{'g1':true,'g2':true}
    },
    {
      title:'Book222',
      author:'author2',
      isbn:'22222',
      review:'kkkkkkkkkkkk',
      rating:2,
      genres:{'g1':true}
    },
    {
      title:'Book3',
      author:'author3',
      isbn:'33333',
      review:'uuuiuiuiuiuiui',
      rating:3,
      genres:{'g2':true,'g3':true}
    },
  ];

})();
