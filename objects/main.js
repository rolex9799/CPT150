const pen = {
    type: "ballpoint",
    color: "black",
    brand: "Milano"
  };
  
  pen.price ="2.5";

  console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

  console.log(`My pen costs ${pen.price} dollars`);
  

//   const author = {

//     name: "Immanuel Kahn",
//     nationality: "German",
//     profession: "thinker",
//   };

//   console.log(`${author.name} was a ${author.nationality} ${author.profession} in the 19th century`);

  const author = {

    name: "Immanuel Kahn",
    nationality: "German",
    profession: "thinker",

    describe(){

        return `${this.name} was a ${this.nationality} ${this.profession} in the 19th century`;
    }
  };

console.log(author.describe());


// TODO: create the character object here

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 45,
    xp: 30,

    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`
    }
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength -= 10;

// Aurora learn a new skill
aurora.xp -= 15;

console.log(aurora.describe());

