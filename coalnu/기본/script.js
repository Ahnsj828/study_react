// object shorthand assignment

// let name = "sj";
// let name2 = "Ahn";
// let age = 20;

// // let person = {
// //   name: name,
// //   age: age,
// // };

// // 짧게 줄이는 방법

// let person = {
//   name,
//   age,
// };

// // 이럴때는 줄이지 못한다

// let person2 = {
//   name: name2,
//   age,
// };

// console.log(person);

// --------------------------------------

// Destructuring(구조 분해하는거)

// let person = {
//   name: "sj",
//   age: 20,
// };

// // 값을 봅아쓸 때
// // let name = person.name;
// // let age = person["age"];

// // 이렇게 바꿀 수 있다.
// let { name, age } = person;

// console.log(name, age);

// let array = [1, 2, 3, 4];
// // let [a, b] = array;
// let [a, b, ...rest] = array;

// console.log(a, b);
// console.log(rest);

// --------------------------------------

// // spread(...이랑 똑같이 생겼는데 완전 다르다)
// let person = { name: "sj", age: 20 };

// //person을 그대로 복사해서 쓰고싶다면
// let person2 = { ...person };
// // 새로운 객체가 생성됐다
// // 객체의 깊은 복사

// let person3 = person;

// console.log(person2);
// console.log(person3);
// // person2와 person3가 같은 값이 나온다. 근데 둘 차이는 뭐냐?

// // person3는 바로 할당하게 되면 { name: "sj", age: 20 }이거의 주소값을 가져간다
// // 객체의 주소값만 복사 - 즉, 객체는 하나이고 그 객체를 참조하는 변수가 두개다.
// // 그러니까 { name: "sj", age: 20 } 이 객체가 새로 생긴게 아니라 기존에 있는 객체를 person3도 참조를 할 뿐이다.
// // 객체 자체는 하나만 있는데 person과 person3가 보고있는것 뿐이다.

// // let person2 = { ...person }; 이거는 실제로 객체를 하나 더 생성하는 것 이다.
// // 그래서 { name: "sj", age: 20 } 이 객체와 { ...person } 이 객체는 다른거다.

// console.log(person == person2); // false
// console.log(person == person3); // true

// // 이 문법 많이 사용된다.

// let person4 = { ...person, address: "Seoul" };
// // 뒤에 내용도 추가 가능하다

// let person5 = { ...person, name: "Ahn" };
// // 내용 변경할 수도 있다.

// // --------------------------------------

// // 배열에도 똑같이 적용된다.
// let a = [1, 2];
// let b = [...a, 3];
// console.log(b);
// let c = [...a, ...b];
// console.log(c);
