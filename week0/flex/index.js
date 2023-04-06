const words =
  "Lorem ipsum dolor sit, amet :) consectetur :) adipisicing elit. Similique :) temporibus placeat rerum et aut animi Beatae quis explicabo hic soluta asperiores voluptas numquam sequi cupiditate molestias perferendis exercitationem voluptate officia";

const arrOfWords = words.split(" ");

let count = 0;
for (let i = 0; i < arrOfWords.length; i++) {
  if (arrOfWords[i] === ":)") {
    count++;
  }
}

console.log(count);
