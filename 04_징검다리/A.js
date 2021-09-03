const stones = [5, 3, 4, 1, 3, 8, 3];
// const stones = [4, 5, 3];
const dogs = [
  {
    name: '루비독',
    age: '95년생',
    jump: '3',
    weight: '4',
  },
  {
    name: '피치독',
    age: '95년생',
    jump: '3',
    weight: '3',
  },
  {
    name: '씨-독',
    age: '72년생',
    jump: '2',
    weight: '1',
  },
  {
    name: '코볼독',
    age: '59년생',
    jump: '1',
    weight: '1',
  },
];

const survive = (stones, dogs) => {
  return dogs.reduce((acc, dog) => {
    // 현재 독의 위치
    let dogLocation = 0;
    // 독의 생존 여부
    let die = false;
    // 독의 위치가 징검다리 갯수보다 적을때까지만
    while (dogLocation < stones.length) {
      // 독의 점프력만큼 이동
      dogLocation += +dog.jump;
      // 독의 위치의 돌에서 무게만큼 차감
      stones[dogLocation - 1] -= +dog.weight;
      // 만약 돌의 무게가 0보다 작다면
      if (stones[dogLocation - 1] < 0) {
        // 독은 죽음
        die = true;
        // 반복문 멈춤
        break;
      }
    }
    // 만약 독이 안죽었다면
    if (!die) {
      // 생존자 배열에 추가
      acc.push(dog.name);
    }
    // 배열 리턴
    return acc;
  }, []);
};

console.log(survive(stones, dogs));
