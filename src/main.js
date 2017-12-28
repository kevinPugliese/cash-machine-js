export default class CashMachine {
  constructor(notes) {
    this.availableNotes = notes;
  }
  withdraw(value) {
    CashMachine.valueExist(value);
    CashMachine.isOddValue(value);
    const notes = this.getMoney(value);

    return notes;
  }
  static valueExist(value) {
    if (typeof value === 'undefined') {
      throw new Error('Value not passed');
    }
  }
  static isOddValue(value) {
    if (!((value % 2) === 0)) {
      throw new Error('Invalid number');
    }
  }
  getMoney(value) {
    let withdrawMoney = value;
    const notes = [];
    this.availableNotes.forEach((element) => {
      if (element <= withdrawMoney) {
        notes.push(element);
        withdrawMoney -= element;
      }
    });

    return notes;
  }
}
