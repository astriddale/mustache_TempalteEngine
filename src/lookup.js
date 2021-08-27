/*
用来处理复杂数据类型，使其可以读取如下例num的值
age:{
  num:23
}
*/
export default function lookup(data, ctt) {
  // console.log(ctt)
  // debugger
  // 判断传过来的数据格式是否存在‘.’
  // 做两层判断的原因是最里层的循环得数据格式有可能为‘.’，这时候就不能进行切割而是直接返回，所以ctt本身不能为‘.’
  if (ctt.indexOf('.') != -1 && ctt != '.') {
    // 设置一个临时变量保存data数据，用于周转，一层一层找下去（不会改变data数据格式）
    let temp = data;
    // 如果存在则转换为数组格式
    let arr = ctt.split('.');
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
      /**
       * 有n个点，数组=n，就寻找n层
       * 循环之前：temp=age:{num:23}
       * 第一次循环：temp = temp[age] = temp.age,
       * 第二次循环：temp = temp[age][num] = temp.age.num
       * 返回找到的temp
       */
      // 每找一层，就返回新的临时变量
      temp = temp[arr[i]]
    }
    return temp
  }
  // 如果传过来的数据格式没有找到‘.’，则直接返回data[ctt]
  return data[ctt]
}