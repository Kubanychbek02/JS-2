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
        let currentHours = new Date().getHours();
        let currentDay = new Date().getDay();

        if(currentDay >= 6) {
            document.write("Close <br>")
        } else {
            if (currentHours > 10 && currentHours < 22) {
                document.write("Open <br>")
            } else {
                document.write("Close <br>")
            }
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
