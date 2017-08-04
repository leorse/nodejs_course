function Emitter()
{
    this.events = {};
}

//2 parametres
//type d'événement
//le listener
Emitter.prototype.on  = function(type, listener)
{
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit  = function(type)
{
    if(this.events[type])
        {
            this.events[type].forEach(function(listener) {
                listener();
            }, this);
        }
}

module.exports = Emitter;