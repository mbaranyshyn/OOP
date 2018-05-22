var SlotMachine = function(slotMachimeStartSum, isLucky) {
    this.slotMachineSum = slotMachimeStartSum;
    this.isLucky = isLucky;

    this.getSlotMachineSum = function() {
        return this.slotMachineSum;
    }

    this.takeMoneyFromSlotMachine = function(number) {
        this.slotMachineSum -= number;
        return 'Take money - ' + number;
    }

    this.putMoneyInSlotMachine = function(number) {
        return 'Put money - ' + number + ' Total sum - ' + (this.slotMachineSum += number);

    }

    this.play = function(number) {
        this.putMoneyInSlotMachine(number);
        this.isLucky ? randomNumber = Math.floor(Math.random() * 900 + 100) : randomNumber = 777;
        if (randomNumber == 777) {
            return 'You win: ' + this.takeMoneyFromSlotMachine(this.getSlotMachineSum()) + ' :)';

        } else {
            var arrayOfNumbers = Array.from(randomNumber.toString());
            if (arrayOfNumbers[0] == arrayOfNumbers[1] == arrayOfNumbers[2]) {
                return 'You win: ' + this.takeMoneyFromSlotMachine(number * 5) + ' :)';
            } else if (arrayOfNumbers[0] == arrayOfNumbers[1] ||
                arrayOfNumbers[0] == arrayOfNumbers[2] ||
                arrayOfNumbers[1] == arrayOfNumbers[2]) {
                return 'You win: ' + this.takeMoneyFromSlotMachine(number * 2) + ' :)';
            } else {
                return 'You have lost :('
            }
        }

    }


}
var Casino = function(slotMachineCount, casinoStartSum) {

    if (slotMachineCount < 0) {
        throw new UserException('Bad input');
    };

    if (casinoStartSum < 0) {
        throw new UserException('Bad input');

    };


    this.slotMachines = [];
    this.slotMachineCount = slotMachineCount;
    this.slotMachimeStartSum = casinoStartSum / slotMachineCount;
    this.indexOfLuckySlotMachine = Math.floor(Math.random() * slotMachineCount);

    for (var i = 0; i < slotMachineCount; i++) {
        if (i == this.indexOfLuckySlotMachine) {
            this.slotMachines[i] = new SlotMachine(this.slotMachimeStartSum, true);
        } else {
            this.slotMachines[i] = new SlotMachine(this.slotMachimeStartSum, false);
        }
    }
    this.slotMachines[0].putMoneyInSlotMachine(casinoStartSum % slotMachineCount);
    this.slotMachines.sort(function(a, b) {
        return b.getSlotMachineSum() - a.getSlotMachineSum();
    })

    this.getSum = function() {
        var totalSum = 0;
        for (var i = 0; i < slotMachineCount; i++) {
            totalSum += this.slotMachines[i].getSlotMachineSum();
        }
        return totalSum;
    }

    this.getSlotMashinesCount = function() {
        return this.slotMachines.length;
    }

    this.addSlotMachine = function() {
        var indexOfSlotMachineWithBiggestSum = 0;
        var biggestSum = this.slotMachines[0].getSlotMachineSum();

        for (var i = 1; i < slotMachineCount; i++) {
            var currentBiggestSum = this.slotMachines[i].getSlotMachineSum();
            if (currentBiggestSum > biggestSum) {
                indexOfSlotMachineWithBiggestSum = i;
                biggestSum = currentBiggestSum;
            }
        }

        var slotMachineToAdd = new SlotMachine(biggestSum / 2, false);
        this.slotMachines.push(slotMachineToAdd);
        this.slotMachines[indexOfSlotMachineWithBiggestSum].takeMoneyFromSlotMachine(biggestSum / 2);
        this.slotMachineCount += 1;
        return this.slotMachines.length;
    }

    this.removeSlotMachine = function(index) {
        var sumOfSlotMachineToRemove = this.slotMachines[index].getSlotMachineSum();
        this.slotMachines.splice(index, 1);
        slotMachineCount -= 1;
        for (var i = 0; i < slotMachineCount; i++) {
            this.slotMachines[i].putMoneyInSlotMachine(sumOfSlotMachineToRemove / slotMachineCount);
        }
        return index;
    }

    this.takeMoneyFromCasino = function(number) {
        this.slotMachines.sort();
        var numberToRemove = number;
        for (var i = 0; i < slotMachineCount; i++) {
            var sumOfCurrentSlotMachine = this.slotMachines[i].getSlotMachineSum();
            if (numberToRemove > sumOfCurrentSlotMachine) {
                this.slotMachines[i].takeMoneyFromSlotMachine(sumOfCurrentSlotMachine);
                numberToRemove -= sumOfCurrentSlotMachine;
            } else {
                this.slotMachines[i].takeMoneyFromSlotMachine(numberToRemove);
                break;
            }
        }
        return number - numberToRemove;
    }
    this.getSlotMachinesSum = function() {
        var sumString = '';
        for (var i = 0; i < this.slotMachineCount; i++) {
          if(this.slotMachines[i]!==undefined){  
          sumString += 'Slot machine ' + (i + 1) + ' - ' + this.slotMachines[i].getSlotMachineSum() + '\n';
        }
      }
        return sumString;
    }


}



var casino = new Casino(9, 8767);
console.log(casino.getSlotMachinesSum());
console.log('Total sum - ' + casino.getSum()+"\n");
console.log('Count of slot machines - ' + casino.getSlotMashinesCount()+"\n");
casino.addSlotMachine();
console.log('Slot Machine added. Total number of slot machines - ' + casino.getSlotMashinesCount());
console.log(casino.getSlotMachinesSum());
console.log('Deleted Stot Machine - ' + casino.removeSlotMachine(5));
console.log(casino.getSlotMachinesSum());
console.log('Was taken sum - ' + casino.takeMoneyFromCasino(798));

console.log('----------------------------------------------------');

var machine = new SlotMachine(950, 777);
console.log(machine.play(254));
console.log(machine.getSlotMachineSum());
console.log(machine.takeMoneyFromSlotMachine(187));
console.log(machine.putMoneyInSlotMachine(347));
console.log(machine.getSlotMachineSum());
