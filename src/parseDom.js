/**
 * 用来处理tokens和data的函数
 * 使得token能够读取data中的数据
 */
import lookup from './lookup';
import parseArray from './parseArray';

export default function parseDom(tokens, data) {
  let resultStr = '';

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    // 当token[0]为text时，则将resultStr转为token[1]的值
    if (token[0] == 'text') {
      resultStr += token[1];
      // 当token[0]为name时，则调用lookup函数将resultStr转为处理后寻找的值
    } else if (token[0] == 'name') {
      resultStr += lookup(data, token[1]);
      // 当token[0]为#时，则调用递归的函数
    } else if (token[0] == '#') {
      resultStr += parseArray(token, data)
    }
  }
  // 返回处理后数据以字符串形式返回
  return resultStr;
}