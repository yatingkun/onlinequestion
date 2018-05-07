var datalist = [{
  type: 1,
  title: '如果需要匹配包含文本的元素，用下面哪种方法来实现？',
  option1: 'text()',
  option2: 'contains()',
  option3: 'input()',
  option4: 'attr(name)',
  answer: 2,
  imageurl: {
    imageurlA: '',
    imageurlB: '',
    imageurlC: '',
    imageurlD: ''
  }
},
{
  type: 1,
  title: 'Number(null);代码将返回：',
  option1: 'Null',
  option2: '0',
  option3: 'undefined',
  option4: '1',
  answer: 2,
  imageurl: {
    imageurlA: '',
    imageurlB: '',
    imageurlC: '',
    imageurlD: ''
  }
},
{
  type: 1,
  title: '下面哪一个是JSON数据？',
  option1: '｛name:"xiaoming",age,"student"｝',
  option2: '｛"name":"xiaoming","age":"student"｝',
  option3: '｛"xiaoming","student"｝',
  option4: '["xiaoming","student"]',
  answer: 2, 
  imageurl: {
    imageurlA: '',
    imageurlB: '',
    imageurlC: '',
    imageurlD: ''
  }
},
{
  type: 1,
  title: 'angularjs1中的服务实质上是',
  option1: '网络服务',
  option2: '单例对象',
  option3: '接口对象',
  option4: '函数调用',
  answer: 2, 
  imageurl: {
    imageurlA: '',
    imageurlB: '',
    imageurlC: '',
    imageurlD: ''
  }
},
{
  type: 1,
  title: '下面关于块内声明函数的做法哪些是正确的？',
  option1: 'if (x) {  function foo() {}}',
  option2: 'if (x) {  var foo = function() {}}',
  option3: 'if (x) {  foo = function() {}}',
  option4: 'ECMAScript明确的规范了块内函数，javascript实现了这个规范',
  answer: 2, 
  imageurl: {
    imageurlA: '',
    imageurlB: '',
    imageurlC: '',
    imageurlD: ''
  }
},
{
  type: 1,
  title: '下列描述中，关于 js 函数定义方式，正确的是',
  option1: 'function add(a,b){return a+b;}函数表达式',
  option2: 'var add=new Function(‘a’,’b’,’return a+b’)函数表达式',
  option3: 'var add=function(a,b){return a+b;}函数声明',
  option4: 'var add=new Function(‘a’,’b’,’return a+b’);函数声明',
  answer: 3,
   imageurl: {
    imageurlA: '',
    imageurlB: '',
    imageurlC: '',
    imageurlD: ''
  }
},
{
  type: 1,
  title: '下面有关javascript系统方法的描述，错误的是？',
  option1: 'parseFloat方法：该方法将一个字符串转换成对应的小数',
  option2: 'isNaN方法：该方法用于检测参数是否为数值型，如果是，返回true，否则，返回false。',
  option3: 'escape方法： 该方法返回对一个字符串编码后的结果字符串',
  option4: 'eval方法：该方法将某个参数字符串作为一个JavaScript执行',
  answer: 2, imageurl: {
    imageurlA: '',
    imageurlB: '',
    imageurlC: '',
    imageurlD: ''
  }
},
{
  type: 1,
  title: '在前提：var arr =[1,3,2]下，下面哪个操作会返回一个数组，并且不是arr？',
  option1: 'arr.push(3)',
  option2: 'arr.reverse()',
  option3: '[].concat.call(arr,[])',
  option4: '[].sort.call(arr)',
  answer: 3, 
  imageurl: {
    imageurlA: '',
    imageurlB: '',
    imageurlC: '',
    imageurlD: ''
  }
},
{
  type: 1,
  title: '下列js可以让一个input的背景颜色变成红色的是？',
  option1: "inputElement.style.backgroundColor='red'",
  option2: "inputElement.backgroundColor ='red'",
  option3: "inputElement.style.backgroundColor = '#0000';",
  option4: "inputElement.backgroundColor = '#0000';",
  answer: 1,
   imageurl: {
    imageurlA: '',
    imageurlB: '',
    imageurlC: '',
    imageurlD: ''
  }
},
{
  type: 1,
  title: '下列正确定义函数的是',
  option1: 'function foo() {}',
  option2: 'Function foo() {}',
  option3: 'var foo = new Function() {}',
  option4: 'var foo = new function() {}',
  answer: 1, 
  imageurl: {
    imageurlA: '',
    imageurlB: '',
    imageurlC: '',
    imageurlD: ''
  }
},
{
  type: 2,
  title: '1==true的返回值是true，这句话是否正确？',
  option1: 'True',
  option2: 'False',
  answer: 1,
  imageurl: {
    imageurlA: '',
    imageurlB: ''  
  }
},
{
  type: 2,
  title: 'HTML文档的所有标签都是成对出现，如<h1>....<h1>',
  option1: 'True',
  option2: 'False',
  answer: 2,
  imageurl: {
    imageurlA: '',
    imageurlB: ''
  }
},
{
  type: 2,
  title: '使用专业化的网页制作工具能够提高HTML文档的制作效率',
  option1: 'True',
  option2: 'False',
  answer: 1,
  imageurl: {
    imageurlA: '',
    imageurlB: ''
  }
},
{
  type: 2,
  title: '在HTML文档中，可以将<title>元素嵌于<body>标签对之间',
  option1: 'True',
  option2: 'False',
  answer: 2,
  imageurl: {
    imageurlA: '',
    imageurlB: ''
  }
},
{
  type: 2,
  title: '在HTML文档中，只能用<p>标签标记段落。',
  option1: 'True',
  option2: 'False',
  answer: 2,
  imageurl: {
    imageurlA: '',
    imageurlB: ''
  }
}

];
module.exports = {
  textdata: datalist
}