let sliceArray = function (array, size) {
  var result = [];
  for (var x = 0; x < Math.ceil(array.length / size); x++) {
    var start = x * size;
    var end = start + size;
    result.push(array.slice(start, end));
  }
  return result;
}
let dealarray = function (array) {

  let x = [...array]
  if (x.length == 0) {
    return "b/ff/533cf9617bd57fe1dfb05603bebcfpng.png"
  } else {
    var arr1 = [];
    for (let a = x.length - 4; a < x.length; a++) {
      arr1.push(x[a])
    }
    var abc = arr1.join("")
    if (abc == "jpeg") {
      x.push(".jpeg")
      x.splice(1, 0, "/")
      x.splice(4, 0, "/")
      var jpeg = x.join("")
      return jpeg
    }
    for (let a = x.length - 3; a < x.length; a++) {
      arr1.push(x[a])
    }
    if (abc = "png") {
      x.push(".png")
      x.splice(1, 0, "/")
      x.splice(4, 0, "/")
      var png = x.join("")
      return png
    }
  }
}

function dealjson(obj) {
  var arr = []
  var Jsonarr = []
  let object = {}
  for (var key in obj) {
    arr.push(obj[key]); //属性
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      object.name = arr[i]
      Jsonarr.push(object)
      object = {}
    } else {
      object.des = arr[i]
      object.id = i
    }
  }
  var one = Jsonarr.slice(0, 13)
  var two = Jsonarr.slice(13, 23)
  for (let j = 0; j < two.length; j++) {
    [two[j].des, two[j].name] = [two[j].name, two[j].des]
  }
  var three = one.concat(two)
  three.splice(12, 1)
  three.splice(4, 1)
  return three
}

function jump(index, localposition) {
  var X = localposition.childNodes[index].offsetTop
  var Y = localposition.scrollTop
  var timer1
  if (X > Y) {
    setTimeout(() => {
      var A = localposition.childNodes[index].offsetTop
      var B = localposition.scrollTop
      var C = A - B
      var totle = 0
      var setp = 10
      timer1 = setInterval(() => {
        totle++
        localposition.scrollTop += C / setp * totle
        if (localposition.scrollTop >= localposition.childNodes[index].offsetTop || totle >= setp) {
          localposition.scrollTop = localposition.childNodes[index].offsetTop
          clearInterval(timer1)
        }
      }, 20)
    }, 200)
  }
  else if (X < Y) {
    setTimeout(() => {
      var A = localposition.childNodes[index].offsetTop
      var B = localposition.scrollTop
      var C = A - B
      var totle = 0
      var setp = 10
      timer1 = setInterval(() => {
        totle++
        localposition.scrollTop += C / setp * totle
        if (localposition.scrollTop <= localposition.childNodes[index].offsetTop || totle >= setp) {
          localposition.scrollTop = localposition.childNodes[index].offsetTop
          clearInterval(timer1)
        }
      }, 20)
    }, 200)
  }
}



export default {sliceArray, dealarray, dealjson, jump};
