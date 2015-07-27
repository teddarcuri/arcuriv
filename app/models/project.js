import DS from 'ember-data';

var Project = DS.Model.extend({
  name: DS.attr("string"),
  types: DS.attr("string"),
  thumbnail: DS.attr("string"),
  photos: DS.attr("string"),
  techs: DS.attr("string"),
  url: DS.attr("string"),
  description: DS.attr("string")
});

Project.reopenClass({
    FIXTURES: [
            {
                id: 1,
                name: "Colorado.gov",
                types: "Web",
                thumbnail: "assets/images/thumbnail/cogov.jpg",
                photos: ["assets/images/sliders/cogov/homepage.png", "assets/images/sliders/cogov/services.png", "assets/images/sliders/cogov/search.png" ],
                techs: ["Drupal", "jQuery", "Sass", "Handlebars"],
                url: "http://www.colorado.gov",
                description: "I led the front-end implementation for this project with a small, tight-knit Drupal team. Accesibility, broweser compatibility and usability were key for this product due to the audience."
            }, {
                id: 2,
                name: "Rootspring Studios",
                types: "Logo | Web | Print",
                thumbnail: "assets/images/thumbnail/rootspring.jpg",
                photos: ["assets/images/sliders/rootspring/rwd.png"],
                techs: ["Illustrator", "RWD"],
                url: "http://www.rootspringstudios.com",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, {
                id: 7,
                name: "Olive",
                types: "Logo | Web",
                thumbnail: "assets/images/thumbnail/olive.jpg",
                photos: ["assets/images/sliders/olive/homepage.png", "assets/images/sliders/olive/map.png", "assets/images/sliders/olive/listings.png" ],
                techs: ["web", "logo"],
                url: "http://www.olivereg.com",
                description: "Wannago is a personal project. itsz gonna bdupe"
            }, {
                id: 3,
                name: "Downtown Colorado Springs",
                types: "Web",
                thumbnail: "assets/images/thumbnail/cosprings.jpg",
                photos: ["assets/images/sliders/downtowncs/homepage.png"],
                techs: ["PHP", "Sass", "RWD", "Photoshop"],
                url: "http://www.downtowncs.com",
                description: "Downtown Colorado Springs was the first 'big' project we landed at the start of Rootspring Studios."
            }, {
                id: 4,
                name: "Code Cove",
                types: "Logo | Web",
                thumbnail: "assets/images/thumbnail/codecove.jpg",
                photos: ["assets/images/sliders/codecove/logo.png", "assets/images/sliders/codecove/rwd.png"],
                techs: ["Ember.js", "Rails", "Velocity.js"],
                url: null,
                description: "Codecove is a personal project of mine. The idea spurred from a need to store my code."
            }, {
                id: 5,
                name: "Wannago",
                types: "Logo | Web",
                thumbnail: "assets/images/thumbnail/wannago.jpg",
                photos: ["assets/images/sliders/cogov/homepage.jpg", "assets/images/sliders/cogov/homepage.jpg" ],
                techs: ["web", "logo"],
                url: null,
                description: "Wannago is a personal project. itsz gonna bdupe"
            }, {
                id: 6,
                name: "MLBPAA",
                types: "Logo | Collateral",
                thumbnail: "assets/images/thumbnail/mlbpaa.jpg",
                photos: ["assets/images/sliders/mlbpaa/infographic-spread.png", "assets/images/sliders/mlbpaa/infographic-front.png" ],
                techs: ["web", "logo"],
                url: null,
                description: "Wannago is a personal project. itsz gonna bdupe"
            }, {
                id: 8,
                name: "Pacific",
                types: "Logo | Web",
                thumbnail: "assets/images/thumbnail/pacific.jpg",
                photos: ["assets/images/sliders/olive/homepage.png", "assets/images/sliders/olive/map.png", "assets/images/sliders/olive/listings.png" ],
                techs: ["web", "logo"],
                url: "http://www.olivereg.com",
                description: "Wannago is a personal project. itsz gonna bdupe"
            }, {
                id: 9,
                name: "My FDA",
                types: "Web",
                thumbnail: "assets/images/thumbnail/myfda.jpg",
                photos: ["assets/images/sliders/olive/homepage.png", "assets/images/sliders/olive/map.png", "assets/images/sliders/olive/listings.png" ],
                techs: ["web", "logo"],
                url: "http://www.olivereg.com",
                description: "Wannago is a personal project. itsz gonna bdupe"
            }
    ]
});

export default Project
