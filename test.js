function* generator() {
    const i = 1000;
    yield i;
    const result = yield 0;
    console.log(result,i)
    yield i ;
   }
   // init
   const gen = generator();
   // use
   console.log(gen.next());  // {value: 1000, done: false}
   console.log(gen.next());  // {value: 1001, done: false}
   console.log(gen.next(3)); // {value: 1003, done: false}