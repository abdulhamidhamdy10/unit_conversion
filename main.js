const conversionRates = {
    length: {
        "متر": { "كيلومتر": 0.001, "قدم": 3.28084, "بوصة": 39.3701,"ميل": 0.000621371},
        "كيلومتر": { "متر": 1000, "قدم": 3280.84, "بوصة": 39370.1, "ميل": 0.621371 },
        "قدم": { "متر": 0.3048, "كيلومتر": 0.0003048, "بوصة": 12, "ميل": 0.000189394 },
        "بوصة": { "متر": 0.0254, "كيلومتر": 0.0000254, "قدم": 0.0833333, "ميل": 0.0000157828 },
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
        "كيلوغرام": { "غرام": 1000, "رطل": 2.20462, "أونصة": 35.274 },
        "غرام": { "كيلوغرام": 0.001, "رطل": 0.00220462, "أونصة": 0.035274 },
        "رطل": { "كيلوغرام": 0.453592, "غرام": 453.592, "أونصة": 16 },
        "أونصة": { "كيلوغرام": 0.0283495, "غرام": 28.3495, "رطل": 0.0625 }
    }
};

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

    if (isNaN(quantity)) {
        alert(' يعني ايه المغزى من انك متدخلش اي بيانات ومنتظر نتيجة ؟؟؟ لا والله بجد يعني ايه الفكرة عرفنا حضرتك !!؟؟ ما تدخل يسطا عدد عشان يتحول !!!');
        return;
    }

    const result = quantity * conversionRates[unitTypeFrom][unitFrom][unitTo];
    // document.getElementById('result').textContent = result.toFixed(2);
    document.getElementById('result').textContent = `${quantity} ${unitFrom} = ${result.toFixed(2)} ${unitTo}`;

}

// تحديث الخيارات عند تحميل الصفحة
updateUnitOptions();

