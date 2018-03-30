/**
 *
 * --(a1)--------(b1)------(c1)-----(d1)-------
 *      map(opt => reformOpt(opt))
 * --(a2)--------(b2)------(c2)-----(d2)-------
 *      a$: promise------interval.take1-|
 *      concatMap(a$)
 * --(a2)-*---------------------(b2)-|
 *     \                          \
 *      (p)----resolve----0-|      \
 *                                  (p)-------resolve----0-|
 *
 * --(a2)-------resolve----0-(b2)-------resolve----0-|
 *
 * */

/**
 * Observable.fromPromise: ------------------resolve()-|
 * interval(200).take(1)   ----0-|
 *
 *    promise$.concat(intervalOnce$)
 *
 * PromiseInterval$:       ------------------resolve()----0-|
 * */









/**
 * a$:          --(o)-(o)-(o)------(o)------(o)--|
 *
 *                [transforms]
 *
 * out$         --(o)-(P)------(c)----(o)-(P)--------------(c)----|
 *                     \        \  .2s
 *                      \        \
 *                      promise  resolve('close')
 * */
