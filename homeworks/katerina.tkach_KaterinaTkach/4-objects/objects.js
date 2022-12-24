const tamagochi = {
    name: 'Gachi',
    gachiHitPoints: 90,
    gachiMoralPoints: 100,
    gachiPleasurePoints: 70,
    gachiManaPoints: 50,

    wrestling() {
        this.gachiHitPoints -= 10;
        this.gachiMoralPoints += 91;
        this.gachiPleasurePoints -= 29;
        this.gachiManaPoints -= 42;
    },
    selebrate() {
        this.gachiHitPoints += 10;
        this.gachiMoralPoints += 17;
        this.gachiPleasurePoints += 69;
        this.gachiManaPoints += 100;
    },
    rest() {
        this.gachiHitPoints += 70;
        this.gachiMoralPoints -= 22;
        this.gachiPleasurePoints -= 54;
        this.gachiManaPoints += 29;
    },
    gym() {
        this.gachiHitPoints += 69;
        this.gachiMoralPoints -= 10;
        this.gachiPleasurePoints -= 69;
        this.gachiManaPoints += 10;
    },
    gachiStatsLvl() {
        if (this.gachiHitPoints <= 0
            || this.gachiMoralPoints <= 0
            || this.gachiPleasurePoints <= 0
            || this.gachiManaPoints <= 0) {
            console.log(`${this.name} you dead!`);
        } else {
            console.log(`Hello world, my name is ${this.name}`);
        }
    },
};

tamagochi.wrestling();
tamagochi.selebrate();
tamagochi.rest();
tamagochi.gym();
tamagochi.gachiStatsLvl();
