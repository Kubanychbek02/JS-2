class Car {
    constructor(brand, yer, power, color) {
        this.brand = brand;
        this.yer = yer;
        this.power = power;
        this.color = color;
    };

    show() {
        document.write(`<b>Марка:</b> ${this.brand} <br> <b>год:</b> ${this.yer} <br> <b>дивигатель:</b> ${this.power} <br> <b>цвет:</b> ${this.color} <br> <hr>`);
    }
};

const car = new Car("BMW", "2022", "5", "белый");
car.show();


class ElectroCar extends Car {
    constructor(brand, yer, power, color, acum, promoute) {
        super(brand, yer, power, color);
        this.acum = acum;
        this.promoute = promoute;
    }

    show() {
        return document.write(super.show() + ' <h1>Ты сможещь</h1> ' + this.promoute + " <b>Мошность акумлятора:</b> " + this.acum)
    }

    // sayPromoute() {
    //     document.write(`<h1>Ты сможещь</h1> ${this.promoute}`)
    // }

    // showElectro() {
    //     document.write(`<b>Марка:</b> ${this.brand} <br> <b>Год:</b> ${this.yer} <br> <b>Дивигатель:</b> ${this.power} <br> <b>Цвет:</b> ${this.color} <br> <b>Мошность акумлятора:</b> ${this.acum}<br>`);
    // }
}

const electro = new ElectroCar("BMW", "2021", "4", "белый", '2000', `<img style = 'width: 100%' src='https://www.bmw.kg/content/dam/bmw/common/all-models/x-series/x5/2018/at-a-glance/bmw-g05-x5-onepager-stage-sp-xxl.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1526634693510.jpg'/>`);
electro.show();
// electro.sayPromoute();