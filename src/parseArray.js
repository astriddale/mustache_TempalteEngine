/**
 * 用来处理扫描到‘#’的情况，处理复杂数组类型
 * 通过递归的思想，当扫描到#时进入此函数进行处理，根据数据长度进行遍历
 * 然后在遍历中调用parseDom进行扫描是否还存在#，存在则调用自身完成递归处理token和数据结合
 */
import lookup from "./lookup.js";
import parseDom from "./parseDom.js";


// 传入两个参数，一个token数组，一个为数据
export default function parseArray(token, data) {
  // console.log(token, data)
  // 定义一个变量保存处理完的字符串并返回
  let resultStr = '';
  // 对传过来的数据和数组进行lookup函数处理，返回处理后的数据
  let vData = lookup(data, token[1]);
  console.log(vData);

  for (let i = 0; i < vData.length; i++) {
    // 这里使用...扩展预算符来处理最后一层{{.}}的情况，将vData[i]里的参数依次放入一个数组当中，并且使整个vData[i]成为‘.’的属性
    // 所以当lookup函数读取到一层数据和‘.’时，直接会返回data[ctt]
    resultStr += parseDom(token[2], {
      ...vData[i],
      '.': vData[i]
    })
  }
  // console.log(vData[0])
  // console.log({
  //   ...vData[0],
  //   '.': vData[0]
  // })
  return resultStr;
}