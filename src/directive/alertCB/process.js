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
