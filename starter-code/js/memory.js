class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.status = false;
  }
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  checkIfPair(name1, name2) {
    if (name1 === name2) {
      this.pairsGuessed++;
      this.pairsClicked++;
      return (this.status = true);
    } else {
      this.pairsClicked++;
      return (this.status = false);
    }
  }
  isFinished() {
    if (this.pairsGuessed === 8) return true;
    return false;
  }
}

// console.log('connected');