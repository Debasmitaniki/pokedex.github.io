(function() {
    var app = angular.module('pokedex', []);

    app.controller('PokemonController', function() {
        /*this.tab = 1;*/

        this.pokemon = {
            abilities: ["Blaze", "Solar Power"],
            height: "2′4″ (0.71m)",
            id: "001",
            name: "Charmander",
            species: "Lizard Pokémon",
            type: ["Fire"],
            weight: "15.2 lbs (6.9 kg)",
            stats: {
                hp: 45,
                attack: 49,
                defense: 49,
                "sp.atk": 45,
                "sp.def": 65,
                speed: 45,
                total: 318,
            },
            evolution: ["Charmander", "Charmeleon", "Charizard"]
        };
    });

    app.controller('TabsController', function(){
        this.tab = 1;

        this.selectTab = function(tab){
            this.tab = tab;
        };
    });

    app.controller('CommentsController', function(){
        this.comments = [];
        this.comment = {};
        // Me permitira decir si el panel esta oculto o no 
        this.show = false;

        this.toggle = function(){
            this.show = !this.show;
        };

        this.anonymousChanged = function(){
            if (this.comment.anonymous) {
                this.comment.email = "";
            };
        };

        this.addComment = function(){
            this.comment.date = Date.now();
            this.comments.push(this.comment);
            this.comment = {};
        };
    });

    app.filter('imageify', function(){
        return function (input){
            var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
            return url;
        };
    });

    app.directive('pokemonData', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-data.html'
        };
    });

    app.directive('pokemonName', function(){
        return {
            restrict: 'E',
            templateUrl: '/partials/pokemon-data.html'  
        };
    });

})();