function greet(callback) {
    console.log('salut');
    var data = {
        name:"mon nom"
    };
    callback(data);
}

greet(function(data){
    console.log('Moi!!'+data.name);
})
{}