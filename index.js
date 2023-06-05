// Function dom(id):
function dom(id) {
    return document.querySelector(id);
}

// Thêm số vào mảng:
var arrTotal = [];
dom('#btnThemSo').onclick = function () {
    var n = Number(dom('#soN').value);
    arrTotal.push(n);
    dom('#arrReturn').innerHTML = '>> ' + arrTotal;
}

// Bài 1:
dom('#btnBai1').onclick = function () {
    var sum = 0;
    for (var i = 0; i < arrTotal.length; i++) {
        if (arrTotal[i] > 0) {
            sum += arrTotal[i]
        }
    }
    dom('#output1').innerHTML = 'Tổng số dương là: ' + sum;
}

// Bài 2:
dom('#btnBai2').onclick = function () {
    var dem = 0;
    for (var i = 0; i < arrTotal.length; i++) {
        if (arrTotal[i] > 0) {
            dem += 1;
        }
    }
    dom('#output2').innerHTML = 'Có: ' + dem + ' số dương';
}

// Bài 3:
dom('#btnBai3').onclick = function () {
    var soMin = arrTotal[0];
    for (var i = 0; i < arrTotal.length; i++) {
        if (soMin > arrTotal[i]) {
            soMin = arrTotal[i];
        }
    }
    dom('#output3').innerHTML = 'Số nhỏ nhất là: ' + soMin;
}

// Bài 4:
dom('#btnBai4').onclick = function () {
    var arrSoDuong = [];
    for (var i = 0; i < arrTotal.length; i++) {
        if (arrTotal[i] > 0) {
            arrSoDuong.push(arrTotal[i]);
        }
    }
    var ketQua4 = '';
    if (arrSoDuong.length === 0) {
        ketQua4 = 'Không có số dương trong mảng';
    } else {
        var soDuong = arrSoDuong[0];
        for (var j = 0; j < arrSoDuong.length; j++) {
            if (soDuong > arrSoDuong[j]) {
                soDuong = arrSoDuong[j];
            }
        }
        ketQua4 = 'Số dương nhỏ nhất là: ' + soDuong;
    }
    dom('#output4').innerHTML = ketQua4;
}

// Bài 5:
dom('#btnBai5').onclick = function () {
    var soChan = -1;
    for (var i = 0; i < arrTotal.length; i++) {
        if (arrTotal[i] % 2 === 0) {
            soChan = arrTotal[i];
        }
    }
    dom('#output5').innerHTML = 'Số chẵn cuối cùng là: ' + soChan;
}

// Bài 6:
dom('#btnBai6').onclick = function () {
    var soViTri1 = Number(dom('#so1Bai6').value);
    var soViTri2 = Number(dom('#so2Bai6').value);
    var tam = arrTotal[soViTri1];
    arrTotal[soViTri1] = arrTotal[soViTri2];
    arrTotal[soViTri2] = tam;
    dom('#output6').innerHTML = arrTotal;
}

// Bài 7:
dom('#btnBai7').onclick = function () {
    dom('#output7').innerHTML = 'Mảng sau khi sắp xếp: ' + arrTotal.sort(function(a,b){
        return a -b;
    });
}

// Bài 8:

// Tạo hàm check số nguyên tố:
function checkSNT(iSo) {
    var soNT = true;
    if (iSo >= 2) {
        for (var i = 2; i <= Math.sqrt(iSo); i++) {
            if (iSo % i === 0) {
                soNT = false;
                break
            }
        }
    } else {
        soNT = false;
    }
    return soNT;
}

dom('#btnBai8').onclick = function () {
    var soNT = -1;
    for (var i = 0; i < arrTotal.length; i++) {
        var timSNT = checkSNT(arrTotal[i]);
        if (timSNT) {
            soNT = arrTotal[i];
            break;
        }
    }
    dom('#output8').innerHTML = 'Số nguyên tố đầu tiên là: ' + soNT;
}

// Bài 9:
var newArr = [];
dom('#btnThemSoBai9').onclick = function () {
    var n = Number(dom('#arrSoThuc').value);
    newArr.push(n);
    dom('#arrSoThucReturn').innerHTML = '>> ' + newArr;
}

dom('#btnBai9').onclick = function () {
    var dem = 0;
    for (var i = 0; i < newArr.length; i++) {
        if (Number.isInteger(newArr[i])) {
            dem += 1;
        }
    }
    dom('#output9').innerHTML = 'Có: ' + dem + ' số nguyên';
}

// Bài 10:
dom('#btnBai10').onclick = function () {
    var demSoDuong = 0;
    var demSoAm = 0;
    for (var i = 0; i < arrTotal.length; i++) {
        if (arrTotal[i] > 0) {
            demSoDuong += 1;
        } else if (arrTotal[i] < 0) {
            demSoAm += 1;
        }
    }

    var ketQua10 = '';
    if (demSoDuong > demSoAm) {
        ketQua10 = 'Số dương > Số âm';
    } else if (demSoDuong < demSoAm) {
        ketQua10 = 'Số âm > Số dương';
    } else {
        ketQua10 = 'Số dương = Số âm';
    }
    dom('#output10').innerHTML = ketQua10;
}