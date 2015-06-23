


//   Route.all();


// });

// var Route = {
//   all: function(){
//     $.get('/routes', function(routes){
//       $.each(routes, function(index, routes){
//         console.log('route-all');
//         View.render($('#route-template'), routes, $('#list-routes'));
//       })
//     })
//   },
//   create: function(routeParams){
//     $.post('/routes', routeParams)
//     .done(function(response){
//       var route = JSON.parse(response);
//       var template = '<li class="list-route-item">'
//       template += route.start + route.end;
//       template += 'span class="label label-default">' + route.place + '</span>';
//       template += '<button data-id="' + food.id + '" type="button" class="js-close close" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
//       template += '</li>';
//       $('#list-routes').append(template);
//     })
//     .done(function() {
//       $('#route-form').trigger('reset');
//     });
//   }
// }


// var View = {
//   render: function(templateElement, object, parentElement){
//     var template = templateElement.html();
//     Mustache.parse(template);
//     var rendered = Mustache.render(template, object);
//     parentElement.append(rendered);
//   },
//   initialize: function(){
//     $('#route-form').on('submit', function(event){
//       event.preventDefault();
//       console.log($this);
//     })
//   }
// }




