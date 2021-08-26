export default class Scanner {
  constructor(tempalteStr) {
    this.tempalteStr = tempalteStr;
    // 指针
    this.pos = 0;
    // 第二个指针，指的是尾巴
    this.tail = tempalteStr;
  }


  scanUtil(stopStr) {
    // 进入循环之前对指针的值进行保存
    let start = this.pos;

    // 使用indexOf进行判断尾巴的开头是不是stopStr，不是就继续进行扫描并记录，是则返回
    // 这里做两层判断很重要，防止扫描到末尾陷入死循环
    while (!this.eos() && this.tail.indexOf(stopStr) != 0) {
      this.pos++;
      this.tail = this.tempalteStr.substring(this.pos, this.tempalteStr.length)
    }
    // 返回第一个字符到指针的字符串
    return this.tempalteStr.substring(start, this.pos)
  }

  scan(stopStr) {
    // 当尾巴字符串包含传入的字符串时，对当前pos跳过传入字符串的长度并且重置尾巴的值
    if (this.tail.indexOf(stopStr) == 0) {
      this.pos += stopStr.length;
      this.tail = this.tempalteStr.substring(this.pos, this.tempalteStr.length)
    }
  }

  // 表示指针有没有扫描到头的函数;eos:end of string表示没有到结束
  eos() {
    return this.pos >= this.tempalteStr.length;
  }
}