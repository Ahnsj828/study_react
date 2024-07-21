// const a = 5;
// //    integer

// function df(x, y) {
//   return x + y;
// }

// df(2, 3);
// console.log(df(2, 3))
//   =>  2와 3을 매개변수로 받은 df함수를 log함수의 매개변수로 사용했고, log 함수를 호출함으써 실행하며 console창에 출력했다.

// 1. 함수를 정의하고
// 2. 함수를 호출 함으로써 실행

const BasicLayout = ({ children }) => {
  return (
    <>
      <header className="bg-teal-400 p-5">
        <h1 className="text-2xl md:text-4xl">Header</h1>
      </header>

      <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
          {children}
        </main>
        <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
          <h1 className="text-2xl md:text-4xl">Sidebar</h1>
        </aside>
      </div>
    </>
  );
};

export default BasicLayout;
