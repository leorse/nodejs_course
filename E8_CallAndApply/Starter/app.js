var obj = {
    name:'ams',
    greet: function() {
        console.log(`Hell ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name:'OrsE'});
obj.greet.apply({name:'OrsE2'});