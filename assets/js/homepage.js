//set parameter for the function
var getUserRepos = function(user){
    //format the github api url. insert parameter to the api URL
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //make request to url -- using formatted URL from apiURL
    fetch(apiUrl).then(function(response){
    response.json().then(function(data){
        console.log(data);
    });
});
}
getUserRepos();