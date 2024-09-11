const conversionRates = {
    length: {
        "متر": { "كيلومتر": 0.001, "قدم": 3.28084, "بوصة": 39.3701, "ميل": 0.000621371 },
        "كيلومتر": { "متر": 1000, "قدم": 3280.84, "بوصة": 39370.1, "ميل": 0.621371 },
        "قدم": { "متر": 0.3048, "كيلومتر": 0.0003048, "بوصة": 12, "ميل": 0.000189394 },
        "بوصة": { "متر": 0.0254, "كيلومتر": 0.0000254, "قدم": 0.083, "ميل": 0.0000157828 },
        "ميل": { "متر": 1609.34, "كيلومتر": 1.60934, "قدم": 5280, "بوصة": 63360 }
    },
    volume: {
        "لتر": { "ملليلتر": 1000, "مترمكعب": 0.001, "جالون": 0.264172 },
        "ملليلتر": { "لتر": 0.001, "مترمكعب": 0.000001, "جالون": 0.000264172 },
        "مترمكعب": { "لتر": 1000, "ملليلتر": 1000000, "جالون": 264.172 },
        "جالون": { "لتر": 3.78541, "ملليلتر": 3785.41, "مترمكعب": 0.00378541 }
    },
    area: {
        "متر مربع": { "كيلومتر مربع": 0.000001, "فدان": 0.000247105, "قدم مربع": 10.7639, "قيراط": 0.0057, "هيكتار": 0.0001 },
        "كيلومتر مربع": { "متر مربع": 1000000, "فدان": 247.105, "قدم مربع": 10763910.4, "قيراط": 5713.63, "هيكتار": 100 },
        "فدان": { "متر مربع": 4046.86, "كيلومتر مربع": 0.00404686, "قدم مربع": 43560, "قيراط": 24, "هيكتار": 0.404686 },
        "قدم مربع": { "متر مربع": 0.092903, "كيلومتر مربع": 0.000000092903, "فدان": 0.000022957, "قيراط": 0.000025, "هيكتار": 0.0000092903 },
        "قيراط": { "متر مربع": 175, "كيلومتر مربع": 0.175, "فدان": 0.0416, "قدم مربع": 435.6, "هيكتار": 0.0167 },
        "هيكتار": { "متر مربع": 10000, "كيلومتر مربع": 0.01, "فدان": 2.5, "قدم مربع": 107639.10, "قيراط": 60 }
    },
    mass: {
        "كيلوغرام": { "غرام": 1000, "رطل": 2.20462, "طن": 0.001 },
        "غرام": { "كيلوغرام": 0.001, "رطل": 0.00220462, "طن": 0.000001 },
        "رطل": { "كيلوغرام": 0.453592, "غرام": 453.592, "طن": 0.000453 },
        "طن": { "كيلوغرام": 1000, "غرام": 1000000, "رطل": 2204.62 }
    },
    data: {
        "بت": { "بايت": 0.125, "كيلو بايت": 0.00012207031, "ميجا بايت": 0.00000011921, "جيجا بايت": 0.000000000116, "تيرا بايت": 0.000000000000114, "بيتا بايت": 0.000000000000000112, "إكسا بايت": 0.000000000000000000110, "زيتا بايت": 0.000000000000000000000108, "يوتا بايت": 0.000000000000000000000000106 },
        "بايت": { "بت": 8, "كيلو بايت": 0.001, "ميجا بايت": 0.000001, "جيجا بايت": 0.000000001, "تيرا بايت": 0.000000000001, "بيتا بايت": 0.000000000000001, "إكسا بايت": 0.000000000000000001, "زيتا بايت": 0.000000000000000000001, "يوتا بايت": 0.000000000000000000000001 },
        "كيلو بايت": { "بت": 8192, "بايت": 1024, "ميجا بايت": 0.001, "جيجا بايت": 0.000001, "تيرا بايت": 0.000000001, "بيتا بايت": 0.000000000001, "إكسا بايت": 0.000000000000001, "زيتا بايت": 0.000000000000000001, "يوتا بايت": 0.000000000000000000001 },
        "ميجا بايت": { "بت": 8388608, "بايت": 1048576, "كيلو بايت": 1024, "جيجا بايت": 0.001, "تيرا بايت": 0.000001, "بيتا بايت": 0.000000001, "إكسا بايت": 0.000000000001, "زيتا بايت": 0.000000000000001, "يوتا بايت": 0.000000000000000001 },
        "جيجا بايت": { "بت": 8589934592, "بايت": 1073741824, "كيلو بايت": 1048576, "ميجا بايت": 1024, "تيرا بايت": 0.001, "بيتا بايت": 0.000001, "إكسا بايت": 0.000000001, "زيتا بايت": 0.000000000001, "يوتا بايت": 0.000000000000001 },
        "تيرا بايت": { "بت": 8796093022208, "بايت": 1099511627776, "كيلو بايت": 1073741824, "ميجا بايت": 1048576, "جيجا بايت": 1024, "بيتا بايت": 0.001, "إكسا بايت": 0.000001, "زيتا بايت": 0.000000001, "يوتا بايت": 0.000000000001 },
        "بيتا بايت": { "بت": 9007199254740992, "بايت": 1125899906842624, "كيلو بايت": 1099511627776, "ميجا بايت": 1073741824, "جيجا بايت": 1048576, "تيرا بايت": 1024, "إكسا بايت": 0.001, "زيتا بايت": 0.000001, "يوتا بايت": 0.000000001 },
        "إكسا بايت": { "بت": 9223372036854775808, "بايت": 1152921504606846976, "كيلو بايت": 1125899906842624, "ميجا بايت": 1099511627776, "جيجا بايت": 1073741824, "تيرا بايت": 1048576, "بيتا بايت": 1024, "زيتا بايت": 0.001, "يوتا بايت": 0.000001 },
        "زيتا بايت": { "بت": 944473296573929042739228079, "بايت": 1180591620717411303424, "كيلو بايت": 1152921504606846976, "ميجا بايت": 1125899906842624, "جيجا بايت": 1099511627776, "تيرا بايت": 1073741824, "بيتا بايت": 1048576, "إكسا بايت": 1024, "يوتا بايت": 0.001 },
        "يوتا بايت": { "بت": 9671406556917033397649400, "بايت": 1208925819614629174706176, "كيلو بايت": 1180591620717411303424, "ميجا بايت": 1152921504606846976, "جيجا بايت": 1125899906842624, "تيرا بايت": 1099511627776, "بيتا بايت": 1073741824, "إكسا بايت": 1048576, "زيتا بايت": 1024 }
    },
    time:{
        "ثانية": {"دقيقة": 0.0166666667,"ساعة": 0.0002777778,"يوم": 0.0000115741,"أسبوع": 0.0000016534,"شهر": 0.0000000385,"سنة": 0.0000000317,"عقد": 0.00000000317,"قرن": 0.000000000317,"ألفية": 0.0000000000317
        },
        "دقيقة": {"ثانية": 60,"ساعة": 0.0166666667,"يوم": 0.0006944444,"أسبوع": 0.0000992063,"شهر": 0.0000231481,"سنة": 0.0000019013,"عقد": 0.0000001901,"قرن": 0.00000001901,"ألفية": 0.000000001901
        },
        "ساعة": {"ثانية": 3600,"دقيقة": 60,"يوم": 0.0416666667,"أسبوع": 0.0059523809,"شهر": 0.0013888889,"سنة": 0.0001141552,"عقد": 0.0000114155,"قرن": 0.0000011416,"ألفية": 0.00000011416
        },
        "يوم": {"ثانية": 86400,"دقيقة": 1440,"ساعة": 24,"أسبوع": 0.1428571429,"شهر": 0.0328767123,"سنة": 0.002739726,"عقد": 0.0002739726,"قرن": 0.0000273973,"ألفية": 0.0000027397
        },
        "أسبوع": {"ثانية": 604800,"دقيقة": 10080,"ساعة": 168,"يوم": 7,"شهر": 0.228,"سنة": 0.0191780822,"عقد": 0.0019178082,"قرن": 0.0001917808,"ألفية": 0.0000191781
        },
        "شهر": {"ثانية": 2592000,"دقيقة": 43200,"ساعة": 720,"يوم": 30,"أسبوع": 4.345,"سنة": 0.083,"عقد": 0.0083,"قرن": 0.00083,"ألفية": 0.000083
        },
        "سنة": {"ثانية": 31536000,"دقيقة": 525600,"ساعة": 8760,"يوم": 365,"أسبوع": 52.1428571429,"شهر": 12,"عقد": 0.1,"قرن": 0.01,"ألفية": 0.001
        },
        "عقد": {"ثانية": 315360000,"دقيقة": 5256000,"ساعة": 87600,"يوم": 3650,"أسبوع": 521.4285714286,"شهر": 120,"سنة": 10,"قرن": 0.1,"ألفية": 0.01
        },
        "قرن": {"ثانية": 3153600000,"دقيقة": 52560000,"ساعة": 876000,"يوم": 36500,"أسبوع": 5214.2857142857,"شهر": 1200,"سنة": 100,"عقد": 10,"ألفية": 0.1
        },
        "ألفية": {"ثانية": 31536000000,"دقيقة": 525600000,"ساعة": 8760000,"يوم": 365000,"أسبوع": 52142.8571428571,"شهر": 12000,"سنة": 1000,"عقد": 100,"قرن": 10
        }
    }
}


function formatNumber(number) {
    if (Math.abs(number) >= 1e6 || Math.abs(number) < 1e-6) {
        return number.toExponential(4); // عرض الأرقام الكبيرة بصيغة علمية
    } else {
        return number.toFixed(4); // عرض الأرقام الصغيرة بشكل عادي
    }
}

// تخزين القيمة الحالية للوحدة التي تريد التحويل منها
let currentUnitFrom = null;




// أول حاجة  بنخد نوع الوحدة اللي هنحول منها (مثلاً طول، حجم، مساحة، الخ).
//(unitFrom) بنمسح كل الخيارات القديمة اللي في القائمة اللي بتختار منها الوحدة اللي هتحول منها .
// بعدين، بنضيف كل الوحدات الممكنة بناءً على نوع الوحدة اللي اخترناها.
//(unitTo) نفس الكلام بنعمله مع قائمة الوحدة اللي هتحول ليها .
// أخيراً، بنرجع الوحدة اللي كانت مختارة قبل كده، لو لسه موجودة، عشان تفضل ثابتة،
//  وإذا مفيش وحدة مختارة بنختار أول وحدة في القائمة.
function updateUnitOptions() {
    const unitTypeFrom = document.getElementById('unitTypeFrom').value;
    const unitFrom = document.getElementById('unitFrom');
    const selectedUnitFrom = unitFrom.value; // حفظ الوحدة المختارة حاليًا

    unitFrom.innerHTML = '';
    Object.keys(conversionRates[unitTypeFrom]).forEach(unit => {
        const option = document.createElement('option');
        option.value = unit;
        option.textContent = unit;
        unitFrom.appendChild(option);
    });

    const unitTypeTo = document.getElementById('unitTypeTo').value;
    const unitTo = document.getElementById('unitTo');
    unitTo.innerHTML = '';
    Object.keys(conversionRates[unitTypeTo]).forEach(unit => {
        const option = document.createElement('option');
        option.value = unit;
        option.textContent = unit;
        unitTo.appendChild(option);
    });

    // استعادة الوحدة التي تم اختيارها مسبقاً
    if (selectedUnitFrom && conversionRates[unitTypeFrom][selectedUnitFrom]) {
        unitFrom.value = selectedUnitFrom;
    } else {
        unitFrom.value = Object.keys(conversionRates[unitTypeFrom])[0];
    }
}



// هنا بنضيف وظيفة للقوائم المنسدلة الخاصة بنوع الوحدة (اللي هتحول منها وإليها).
// لما المستخدم يغير نوع الوحدة في أي قائمة
// ،updateUnitOptions() هتشتغل دالة 
//  عشان تحدث القوائم بناءً على النوع الجديد.
document.getElementById('unitTypeFrom').addEventListener('change', updateUnitOptions);
document.getElementById('unitTypeTo').addEventListener('change', updateUnitOptions);




// بنخد نوع الوحدة اللي هتحول منها، نوع الوحدة اللي هتحول ليها
// ، الوحدة الحالية، والوحدة الهدف. وكمان الكمية اللي عايزين نحولها.
// بعدين بنتأكد إن الكمية المدخلة صحيحة (عدد وليس نص).
// نحسب النتيجة بناءً على معدل التحويل من الكمية اللي ادخلناها
//  ونظهر النتيجة على الصفحة بشكل مضبوط على رقمين بعد الفصلة.
function convert() {
    const unitTypeFrom = document.getElementById('unitTypeFrom').value;
    const unitTypeTo = document.getElementById('unitTypeTo').value;
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    const quantity = parseFloat(document.getElementById('quantity').value);

    if (isNaN(quantity)) {
        alert(' يعني ايه المغزى من انك متدخلش اي بيانات ومنتظر نتيجة ؟؟؟ لا والله بجد يعني ايه الفكرة عرفنا حضرتك !!؟؟ ما تدخل يسطا رقم عشان يتحول !!!');
        return;
    }

    if (unitFrom === unitTo) {
        alert(`يبني انت مضحك !!؟؟؟ هو حد قالك ان ${quantity} ${unitFrom}  هيساوي ١000 ${unitTo} ؟؟؟ مختار نفس الوحدة ليه يبني ؟؟ ما تغير يلااا الوحدة وحط وحدة مختلفة عن اللي دخلتها.... مبلم ليه !!!؟؟؟`);
        return;
    }

    if (unitTypeFrom !== unitTypeTo) {
        alert(`طيب بالله عليك يخي ازاي هتحول   ${unitFrom} ل ${unitTo} ؟؟  ليه بنتفلسف !!!! ولا انت بتختبرني يعني ؟؟؟ `);

        // alert('طيب بالله عليك يخي ازاي ');
        return;
        // إيقاف العملية إذا كانت الوحدات غير متطابقة
    }

     // Check if converting from smaller unit to larger unit
    //  const unitsFrom = Object.keys(conversionRates[unitTypeFrom]);
    //  const unitsTo = Object.keys(conversionRates[unitTypeFrom]);
 
    //  const unitFromIndex = unitsFrom.indexOf(unitFrom);
    //  const unitToIndex = unitsTo.indexOf(unitTo);


    //  const miniresult = quantity * conversionRates[unitTypeFrom][unitFrom][unitTo] ;
    //  if ( unitToIndex > unitFromIndex) {
    //      alert(`منطقيا مينفعش تحول (${unitFrom}) ل (${unitTo}) عشان انت كدة بتحول من صغير لكبير .... بس هريحك ال ${quantity} ${unitFrom} = ${parseFloat(miniresult.toPrecision(12))} ${unitTo}`);
    //      return;
    //  }

    const unitsFrom = Object.keys(conversionRates[unitTypeFrom]);
    const unitFromIndex = unitsFrom.indexOf(unitFrom);
    const unitToIndex = unitsFrom.indexOf(unitTo);

    if (unitToIndex > unitFromIndex) {
        const userConfirmed = confirm(`منطقيا مينفعش اللي انت بتعمله ده مينفعش تحول (${unitFrom}) ل (${unitTo}) عشان انت كدة بتحول من صغير لكبير .... بس هريحك  ... لو لسة  مُصِر عاللي في دماغك دوس ok لو ربنا هداك دوس cancel `);
        if (!userConfirmed) {
            return; // يلغي العملية إذا اختار المستخدم "Cancel"
        }
    }




    const result = quantity * conversionRates[unitTypeFrom][unitFrom][unitTo];
    // document.getElementById('result').textContent = result.toFixed(2);
    // document.getElementById('result').textContent = `${quantity} ${unitFrom} = ${result.toFixed(4)} ${unitTo}`;
    document.getElementById('result').textContent = `${quantity} ${unitFrom} = ${parseFloat(result.toPrecision(12))} ${unitTo}`;

}

// تحديث الخيارات عند تحميل الصفحة
updateUnitOptions();

