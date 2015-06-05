import DS from 'ember-data';

var Project = DS.Model.extend({
  name: DS.attr("string"),
  thumbnail: DS.attr("string"),
  description: DS.attr("string")
});

Project.reopenClass({
    FIXTURES: [
            {
                id: 1,
                name: "Colorado.gov",
                thumbnail: "assets/images/thumbnail/cogov.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, {
                id: 2,
                name: "Rootspring Studios",
                thumbnail: "assets/images/thumbnail/rootspring.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, {
                id: 3,
                name: "Downtown Colorado Springs",
                thumbnail: "assets/images/thumbnail/cosprings.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, {
                id: 4,
                name: "Code Cove",
                thumbnail: "assets/images/thumbnail/codecove.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, {
                id: 5,
                name: "Wannago",
                thumbnail: "assets/images/thumbnail/wannago.jpg",
                description: "Wannago is a personal project. itsz gonna bdupe"
            }, {
                id: 6,
                name: "MLBPAA",
                thumbnail: "assets/images/thumbnail/mlbpaa.jpg",
                description: "Wannago is a personal project. itsz gonna bdupe"
            }, {
                id: 7,
                name: "Wannago",
                thumbnail: "assets/images/thumbnail/wannago.jpg",
                description: "Wannago is a personal project. itsz gonna bdupe"
            }, {
                id: 12,
                name: "Rootspring Studios",
                thumbnail: "assets/images/thumbnail/rootspring.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, {
                id: 13,
                name: "Downtown Colorado Springs",
                thumbnail: "assets/images/thumbnail/cosprings.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, {
                id: 14,
                name: "Code Cove",
                thumbnail: "assets/images/thumbnail/codecove.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, {
                id: 15,
                name: "Wannago",
                thumbnail: "assets/images/thumbnail/wannago.jpg",
                description: "Wannago is a personal project. itsz gonna bdupe"
            }, {
                id: 16,
                name: "MLBPAA",
                thumbnail: "assets/images/thumbnail/mlbpaa.jpg",
                description: "Wannago is a personal project. itsz gonna bdupe"
            }, {
                id: 17,
                name: "Wannago",
                thumbnail: "assets/images/thumbnail/wannago.jpg",
                description: "Wannago is a personal project. itsz gonna bdupe"
            }, {
                id: 29,
                name: "Rootspring Studios",
                thumbnail: "assets/images/thumbnail/rootspring.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, {
                id: 39,
                name: "Downtown Colorado Springs",
                thumbnail: "assets/images/thumbnail/cosprings.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
    ]
});

export default Project
