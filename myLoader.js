module.exports = function(item) {
//loader가 불러올 파일이 item안에 문자열로 저장
  console.log('hello myLoader!!');

  return item.replace('console.log(', 'alert(');
};