import phrases from "./Phrases.js"

const randomPhrasePickup = () => {
    let newArr = [];
    for (let i = 0; i < phrases.length; i++){
      let rand = Math.floor(Math.random() * phrases.length);
      while(newArr.some(num => num === rand)){
        rand = Math.floor(Math.random() * phrases.length);
      }
      newArr.push(rand)
    }
    return newArr;
}

export {randomPhrasePickup};