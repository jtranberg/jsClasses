
class Player {
    #score = 0;             //#makes it privare field  //initialized for all players hard coded to be equal for all player
    numLives = 10;                        //hard coded to be equal for all player
    constructor(first, last) {
       this.first = first;
       this.last = last;
    }
    get fullName() {
   return`${this.first} ${this.last}`
    }
    get score() {                         //getter
        return this.#score;                //setter
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("sore must be positive!");
        }
        this.#score = newScore
    }
    // getScore() {
    //     return this.#score;
    // }
    updateScore(newScore) {
        this.#score = newScore;
    }
    tuant() {
        console.log("booyaah")
    }
    loseLife(){
        this.numLives -= 1;
    }
}

const player1 = new Player("Misty", "Muchicci");
  player1.tuant();
    console.log(player1.first)
    console.log(player1.last)
    console.log(player1)
   console.log(player1.numLives);
player1.loseLife();
    console.log(player1.numLives);
    // console.log(player1.getScore());
    // console.log(player1.updateScore(28));
    // console.log(player1.getScore());
    console.log(player1.fullName);      //getter fulName
    console.log(player1.score);
    player1.score = 45475;
    console.log(player1.score);

const player2 = new Player("Shiva", "Von Lucien");
  player2.tuant();
    console.log(player2.first)
    console.log(player2.last)

    class AdminPlayer extends Player {
       constructor(first, last, powers) { 
        super(first, last);               // super runs function from parent class first
        this.powers = powers;
    }
        isAdmin = true;
    }
    const admin = new AdminPlayer(["jay", "jay","ice", "heat"]);
    