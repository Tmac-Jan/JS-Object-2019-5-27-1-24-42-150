// 1. 编程程序，完成下列需求：
//   - 创建一个空对象，变量名为user；
//   - 添加一个name属性，并设置值为John；
//   - 添加一个surname属性，并设置其值为Mike；
//   - 将name属性的值改为Peter;
// - 删除user的name属性
var user = new Object();
user.name = 'John';
user.surname = 'Mike';
user.name='Peter';
delete  user.name;