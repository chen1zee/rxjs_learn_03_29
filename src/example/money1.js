/**
 * [1]
 *
 * (500) -> 立即 -> (500) -> done(500)
 *    ^               ^        |
 *    |               |        |
 *    boss            HR       worker
 * */
const HRHandler = r => r
const workerDone = r => console.log(`done ${r}`)
const bossPromise = r => {
  // ...process
  return new Promise(r)
}

bossPromise(500)
  .then(HRHandler)
  .then(workerDone)
