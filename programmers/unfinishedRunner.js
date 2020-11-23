// 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 완주하지 못한 선수의 이름 return

// 마라톤에 참여한 선수들의 이름이 담긴 배열    > participant
// 완주한 선수들의 이름이 담긴 배열            > completion

// [Restriction]
// 1 <= the number of runners <= 100,000
// completion.length = participant.length - 1
// 1 <= ruunersName.length <= 20 (in samll letter)
// same name might exist

// test data 1
// const participant = ["leo", "kiki", "eden"];
// const completion = ["eden", "kiki"];

// test data 2
const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

// My Solution (order > compare)
// function solution(participant, completion) {
//   participant.sort();
//   completion.sort();

//   for (let i in participant) {
//     if (participant[i] !== completion[i]) {
//       console.log(participant[i]);
//       return participant[i];
//     }
//   }
// }

// solution 1 (map  > set & get)
// function solution(participant, completion) {
//   const map = new Map();
//   for (let i = 0; i < participant.length; i++) {
//     let p = participant[i];
//     let c = completion[i];
//     map.set(p, (map.get(p) || 0) + 1);
//     map.set(c, (map.get(c) || 0) - 1);
//   }
//   for (let [key, value] of map) {
//     if (value > 0) {
//       console.log(key);
//       return key;
//     }
//   }
// }

// solution 2 (pop)
// const solution = (participant, completion) => {
//   participant.sort();
//   completion.sort();

//   while (participant.length) {
//     let person = participant.pop();
//     if (person !== completion.pop()) {
//       console.log(person);
//       return person;
//     }
//   }
// };

// solution 3 (hash 1)
// function solution(participant, completion) {
//   const hash = {};

//   for (let val of participant) {
//     if (!hash[val]) hash[val] = 0;
//     hash[val]++;
//   }

//   const result = completion.forEach((val) => hash[val]--);

//   for (let key in hash) if (hash[key]) return key;
// }

// solution 4 (hash 2)
// function solution(participant, completion) {
//   let ret = [];
//   let hashed = [];
//   participant.forEach((entry) => {
//     hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1;
//   });
//   completion.forEach((entry) => {
//     hashed[entry] = hashed[entry] - 1;
//   });

//   for (var key in hashed) {
//     if (hashed[key] >= 1) return key;
//   }
// }

// solution 5 (map 2)
function solution(participant, completion) {
  let key = new Map();

  for (let i = 0; i < completion.length; i++) {
    if (!key.has(completion[i])) {
      key.set(completion[i], 1);
    } else {
      key.set(completion[i], key.get(completion[i]) + 1);
    }
  }

  for (let i = 0; i < participant.length; i++) {
    if (!key.has(participant[i])) {
      console.log(participant[i]);
      return participant[i];
    } else {
      let count = key.get(participant[i]);
      if (count === 0) {
        console.log(participant[i]);
        return participant[i];
      } else key.set(participant[i], count - 1);
    }
  }
}

// another solution (???)
// const solution = (participant, completion) =>
//   participant.find(
//     (name) => !completion[name]--,
//     completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
//   );

solution(participant, completion);
