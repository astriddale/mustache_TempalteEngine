// 折叠tokens的函数，将传过来的数组以栈的思想折叠为多维数组
export default function nestTokens(tokens) {
  console.log(tokens)


  // 定义一个变量保存最后返回的值:结果数组
  let nestTokens = [];
  // 收集器，指向的nestTokens的内存地址，在switch中指向会改变
  let collector = nestTokens;
  // 栈：用来保存满足条件的token进入入栈出栈操作
  // 
  let sections = [];

  // 遍历当前tokens
  for (let i = 0; i < tokens.length; i++) {
    // 定义一个变量保存当前tokens[i]的值
    let token = tokens[i];

    switch (token[0]) {
      case '#':
        /**
         * 因为当第一次token[0]==‘#’时，将token的数据push进入collector指向的nestTokens了，
         * 所以当对token[2]创建新数组时，nestTokens里的token[2]就指向那个新数组，
         * 然后改变了collector的指向并且push新数据给新数组，
         * 所以nestTokens的数据会跟着新数组一起改变（即nestTokens一直在更新数据）
         */
        // 往指向的数组里添加当前的token
        collector.push(token);
        // 压栈（入栈）
        sections.push(token);
        // console.log("sections---", sections)
        // 给当前token下标为2的项创建一个新数组，以收集子元素
        token[2] = [];
        // console.log("nestTokens---", nestTokens)
        // 让收集器改变指向为token[2]
        collector = token[2];

        // console.log("####---", collector)
        // debugger
        break;
      case '/':
        // 出栈，pop方法会返回刚刚弹出的那项
        const sections_pop = sections.pop(token);
        collector = sections.length > 0 ? sections[sections.length - 1][2] : nestTokens;
        collector.push(token)
        // console.log("////---", collector)
        // debugger
        break;
      default:
        // 往指向的数组里添加当前的token
        collector.push(token)
        // console.log("defaule---", collector)
        // debugger
    }
  }
  // console.log(collector)
  return nestTokens;
}