class Resturan {
    constructor(name, type, open, served = 0) {
        this.name = name;
        this.type = type;
        this.open = open;
        this.served = served;
    }

    sayName() {
        document.write(`Это ресторан ${this.name} <br> Тип кухни ${this.type} <br>`);
    };

    setStatus(status) {
        this.open = status;
    }

    showStatus() {
        if (this.open ) {
            document.write("Open <br>")
        }
        else{
            document.write("Close <br>")
        }
    }

    serve() {
        return this.served++;
    }

    setServed(numberOfServed){
        this.served += numberOfServed;
    }

    showTotalServed(){
        document.write(`Всего: ${this.served}<br>`);
    }
}

const rest = new Resturan("Frunze", "fransus");
rest.sayName();
rest.setStatus(false);
rest.showStatus();
rest.serve();
rest.showTotalServed();
rest.serve();
rest.showTotalServed();
rest.setServed(5);
rest.showTotalServed()