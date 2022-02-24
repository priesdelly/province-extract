let provLst = [
  "กรุงเทพมหานคร",
  "สมุทรปราการ",
  "นนทบุรี",
  "ปทุมธานี",
  "พระนครศรีอยุธยา",
  "อ่างทอง",
  "ลพบุรี",
  "สิงห์บุรี",
  "ชัยนาท",
  "สระบุรี",
  "ชลบุรี",
  "ระยอง",
  "จันทบุรี",
  "ตราด",
  "ฉะเชิงเทรา",
  "ปราจีนบุรี",
  "นครนายก",
  "สระแก้ว",
  "นครราชสีมา",
  "บุรีรัมย์",
  "สุรินทร์",
  "ศรีสะเกษ",
  "อุบลราชธานี",
  "ยโสธร",
  "ชัยภูมิ",
  "อำนาจเจริญ",
  "บึงกาฬ",
  "หนองบัวลำภู",
  "ขอนแก่น",
  "อุดรธานี",
  "เลย",
  "หนองคาย",
  "มหาสารคาม",
  "ร้อยเอ็ด",
  "กาฬสินธุ์",
  "สกลนคร",
  "นครพนม",
  "มุกดาหาร",
  "เชียงใหม่",
  "ลำพูน",
  "ลำปาง",
  "อุตรดิตถ์",
  "แพร่",
  "น่าน",
  "พะเยา",
  "เชียงราย",
  "แม่ฮ่องสอน",
  "นครสวรรค์",
  "อุทัยธานี",
  "กำแพงเพชร",
  "ตาก",
  "สุโขทัย",
  "พิษณุโลก",
  "พิจิตร",
  "เพชรบูรณ์",
  "ราชบุรี",
  "กาญจนบุรี",
  "สุพรรณบุรี",
  "นครปฐม",
  "สมุทรสาคร",
  "สมุทรสงคราม",
  "เพชรบุรี",
  "ประจวบคีรีขันธ์",
  "นครศรีธรรมราช",
  "กระบี่",
  "พังงา",
  "ภูเก็ต",
  "สุราษฎร์ธานี",
  "ระนอง",
  "ชุมพร",
  "สงขลา",
  "สตูล",
  "ตรัง",
  "พัทลุง",
  "ปัตตานี",
  "ยะลา",
  "นราธิวาส",
  "กทม",
  "กรุงเทพฯ",
];

let result = [];


function compare(a, b) {
  if (a.weight < b.weight) {
    return 1;
  }
  if (a.weight > b.weight) {
    return -1;
  }
  return 0;
}

function render() { 
  let tbody = $("#table-body");
  $.each(result, (key, value) => {
    let text = `<tr>
                        <th scope="row">${value.raw}</th>
                        <td>${value.prov}</td> 
                    </tr>`;
    tbody.append(text);
  });
}

$(function () {
  $("#btnExtract").on("click", function (e) {
    e.preventDefault();

    $("#table-body tr").remove();
    result = [];

    let src = $("#src").val().split(/\r?\n/);
    $.each(src, (key, value) => {
      let prov = [];
      $.each(provLst, (pkey, pval) => {
        if (value.includes(pval)) {
          let pindex = value.indexOf(pval);
          prov.push({
            word: pval,
            weight: pindex,
          });
        }
      });
      prov.sort(compare);

      if (prov.length > 0) {
        result.push({
          raw: value,
          prov: prov[0].word,
        });
      } else {
        result.push({
          raw: value,
          prov: "",
        });
      }
    });

    render();
  });
});
