/**
 * [1]
 *
 * (500) ->  -> (500 - 100) -> done(500)
 *    ^               ^        |
 *    |               |        |
 *    boss            HR       worker
 * */
const HRHandler = r => r - 100
const workerDone = r => console.log(`done ${r}`)
const bossPromise = r => {
  // ...process
  return new Promise(r)
}

bossPromise(500)
  .then(HRHandler)
  .then(workerDone)
