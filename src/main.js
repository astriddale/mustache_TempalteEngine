import parseTemplateToToken from './parseTemplateToToken'
import parseDom from './parseDom'

window.mustache_TempalateEnhine = {
  // 渲染函数
  render(tempalteStr, data) {
    // 在这里调用字符串处理函数转换为token格式
    let tokens = parseTemplateToToken(tempalteStr);
    // 调用nestTokens函数对nestTokens和data进行处理返回一个真正可以进行渲染的模板字符串
    let domStr = parseDom(tokens, data)
    console.log(tokens)
    return domStr;
  }

}