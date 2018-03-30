/**
 *                ( 开始 -> 调用 alert(opt) )
 *                      |
 *                  [ 处理opt ]
 *                      |
 *                  [msgQueue.push(obj)]
 *                      |
 *        --------> < show > ->在显示 -> return
 *        |             |
 *        |         [制定弹窗 && show = true]
 *        |             |
 *        |         [msgQueue.shift()]
 *        |             |
 *        |         [弹窗 close && show = false]
 *        |             |
 *         -------------
 *
 * */





/**
 * (opt)--open<alert>-------------('confirm')--|
 *   |                                  |
 * alert                 ________ <A/>.close
 *         _____________/
 *         |
 * (opt)--*W---open<alert>---------('confirm')--|
 *   |                                  |
 * alert                            <A/>.close
 * */





/**
 * (opt)--open<alert>-------------('confirm')--|
 *   |                                  |
 * alert                 ________ <A/>.close
 *                 _____/
 *                 |
 *          <show> |
 *            ||   |
 * (opt)-.ps[]--*X |
 *   |             |
 * alert           |
 *                 |
 *                  -open<alert>---------('confirm')--|
 *                                            |
 *                                        <A/>.close
 * */
