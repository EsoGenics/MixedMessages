// Mixed Message Creator.
const MixedMessages = {
    _TJQ: ['Never put off till to-morrow what you can do to-day', 'Never trouble another for what you can do yourself.', 'Never spend your money before you have it.', 'Never buy what you do not want, because it is cheap; it will be dear to you.','Pride costs us more than hunger, thirst, and cold.'],
    _ALQ: ['Folks are usually about as happy as they make their minds up to be.', 'Whatever you are, be a good one', 'Do I not destroy my enemies when I make them my friends?', 'America will never be destroyed from the outside', 'My Best Friend is a person who will give me a book I have not read.'],
    _BFQ: ['Love your Enemies, for they tell you your Faults.','He that falls in love with himself will have no rivals.','There never was a good war or a bad peace.','He that lies down with Dogs, shall rise up with fleas','Better slip with foot than tongue.','Don’t throw stones at your neighbors, if your own windows are glass.'],
    _AEQ: ['Imagination is more important than knowledge.','Life is like riding a bicycle. To keep your balance you must keep moving.','Imagination is everything. It is the preview of life\'s coming attractions.','Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.','If you can\'t explain it simply, you don\'t understand it well enough.'],
    _qouotes(obj){
        switch(obj){
            case 0:
                this._quote(this._TJQ[Math.floor(Math.random() * this._TJQ.length)] + ' - Thomas Jefferson');
            break;
            case 1:
                this._quote(this._ALQ[Math.floor(Math.random() * this._TJQ.length)] + ' - Abraham Lincoln');
            break
            case 2:
                this._quote(this._BFQ[Math.floor(Math.random() * this._TJQ.length)] + ' - Benjamin Franklin');
            break;
            case 3:
                this._quote(this._AEQ[Math.floor(Math.random() * this._TJQ.length)] + ' - Albert Einstein');
            break
        }
    },
    _quote(obj){
        console.log(obj)
    },
    message(){
        this._qouotes(Math.floor(Math.random() * 3));
    }
}

MixedMessages.message();