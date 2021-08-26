import Scanner from './Scanner'
import nestTokens from './nestTokens'

// 在这个函数内对字符串进行处理为token格式
export default function parseTemplateToToken(tempalteStr) {
  let tokens = [];
  // 实例化一个扫描器，构造函数提供一个参数，这个参数就是模板字符串（这个类就是针对模板字符串进行工作的）
  const scanner = new Scanner(tempalteStr);
  // 定义一个变量保存返回的值
  let words;
  // 遍历所有模板字符串，然后返回处理完的字符串
  while (!scanner.eos()) {
    // 调用scnner的scanUtil方法并保存为words
    words = scanner.scanUtil("{{")

    // 判断scanUtil不为空时以数组形式push进tokens的数组
    if (words != '') {
      tokens.push(["text", words])
    }

    scanner.scan("{{")

    // 调用scnner的scanUtil方法并保存为words
    words = scanner.scanUtil("}}")
    // 判断scanUtil不为空时以数组形式push进tokens的数组
    if (words != '') {
      // 判断words第一个字符为#或者/时，push为另外的形式
      if (words[0] == '#') {
        tokens.push(["#", words.substring(1)])
      } else if (words[0] == '/') {
        tokens.push(["/", words.substring(1)])
      } else {
        tokens.push(["name", words])
      }
    }

    scanner.scan("}}")
  }
  // console.log(tokens)
  return nestTokens(tokens);
}