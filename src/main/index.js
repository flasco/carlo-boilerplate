function testConsole(str) {
  console.log(str);
}

class TestControl {
  test(str) {
    testConsole(str);
    return '这里是测试的返回语句';
  }
}

module.exports = TestControl;
