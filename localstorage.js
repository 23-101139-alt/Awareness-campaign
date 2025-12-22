

if (!localStorage.getItem("localUsers")) {
  localStorage.setItem("localUsers", JSON.stringify([]));
}



// loginfuncitionnnn


const loginUsers = [
  { email: "male@gmail.com", 
    password: "123456", gender: "male" },
  { email: "female@gmail.com",
     password: "123456", gender: "female" }
];


if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(loginUsers));
}



// Language data
const langData = {
  EN: {
    engHeader: "En",
    arabHeader: "Ar",
    loginHeader: "Log in",
    list1Header: "Home",
    list2Header: "Statistics",
    list3Header: "Contact",
    list4Header: "Gallery",
    list5Header: "Messages",
    smallTextSec1: "Save Water Today for a Thirsty Tomorrow.",
    bigTextSec1: "Every Drop Counts!",
    paraSec1: "Water waste is becoming a serious issue, and many people don’t realize how quickly small daily habits can drain our limited resources. Every drop we save helps protect our future.",
    para2Sec1: "This campaign encourages everyone to use water wisely and make simple changes that truly matter. Together, we can reduce waste and keep our water supply safe for the next generations.",
    headerSec2: "Water Statistics",
    paraSec2: "Our water usage habits shape the world around us more than we realize. These statistics offer a quick look at how much water is lost every day—and how small changes in behavior can make a powerful difference.",
    cardsSec2: [
      {
        header: "Overuse Water",
        paragraph: "Most overuse happens because people aren’t aware of how much water everyday tasks actually consume. Awareness is the first step toward smarter, sustainable habits.",
        imgbg: "pic/pic21.png",
         number: "68%" ,
      },
      {
        header: "Water Shortage",
        paragraph: "Over the past decade, water availability in Egypt has steadily decreased due to population growth, climate change, and inefficient usage.",
        imgbg: "pic/pic23.png",
         number: "" 
      }
    ],
    title_box3_sec2: "Limited Water ",
    paragraph_box3_sec2: "Only a small portion of the world’s water is safe to drink. Protecting and conserving this limited resource is essential for communities and the environment.",
    headerSec4: "Take Action Today",
    paraSec4: "Every small step counts in saving water. By making simple changes in your daily life, you can help conserve this precious resource.",
    orange1:"Keep Water",
    orange2:"AquaCare",
     bighaeder_sec3:"Campaign in Action",
    cardsSec4: [
      { title: "Fix Leaks", paragraph: "Repair dripping taps and pipes.", img: "pic/pic31.png" },
      { title: "Turn Off & Save", paragraph: "Turning off taps and reduce shower time.", img: "pic/pic32.png" },
      { title: "Avoid Throwing Waste", paragraph: "Keep rivers and seas clean.", img: "pic/pic33.png" },
    ],
    haedersec4:"Take Action Today",
    CTAsec4:"View More Details",
    paragraphsec4:"Every small step counts in saving water. By making simple changes in your daily life, you can help conserve this precious resource .",
    sec5Content: [
      {
        header: "Did You Know?",
        parag1: "More than 2 billion people worldwide do not have access to safe and reliable drinking water services at their home.",
        bg1: "pic/pic36.png", bg2: "pic/pic37.png", bg3: "pic/pic38.png"
      },
      {
        header: "Water Fact",
        parag1: "Agriculture uses around 70 percent of the world’s freshwater supply, making it the largest consumer globally.",
        bg1: "pic/pic43.png", bg2: "pic/pic44.png", bg3: "pic/pic45.png"
      },
      {
        header: "Freshwater Reality",
        parag1: "Only a small fraction of Earth’s water is fresh and suitable for human use, making conservation essential.",
        bg1: "pic/pic46.png", bg2: "pic/pic47.png", bg3: "pic/pic48.png"
      },
      {
        header: "Water Insight",
        parag1: "Nearly one third of the world’s population lives in areas affected by water stress, where demand is close to or exceeds available supply.",
        bg1: "pic/pic49.png", bg2: "pic/pic50.png", bg3: "pic/pic51.png"
      },
      {
        header: "Quick Water Fact",
        parag1: "Producing everyday items like clothes and food requires large amounts of water, often far more than people realize in daily life.",
        bg1: "pic/pic52.png", bg2: "pic/pic53.png", bg3: "pic/pic54.png"
      },
      {
        header: "Water Truth",
        parag1: "Simple actions such as fixing leaks and reducing waste can save thousands of liters of water per household every year.",
        bg1: "pic/pic55.png", bg2: "pic/pic56.png", bg3: "pic/pic57.png"
      }
    ],
    hedaer_sec6:"Leave for us message",
    para_sec6:"Your voice matters. Share your questions or ideas and join us in creating a future where every drop is protected.",
    usernamee:"Your User Name",
    emaill:"Your Email",
    messagee:"Your Message",
    cta_messages:"Send Message",
     messagePlaceholder:
    "Hello, I would like to actively learn more about your water-saving campaign and how I can participate",
  namePlaceholder: "Salmayasser132",
 ctaaa_sec5: "New Fact",
para_footer: "Empowering communities worldwide to protect and preserve our most precious resource.",
list1_footer: "Explore",
list2_footer: "Home page",
list3_footer: "Gallery",
list4_footer: "Messages",
list5_footer: "Blogs",
list6_footer: "News",

list7_footer: "Legal",
list8_footer: "Terms & Conditions",
list9_footer: "Cookies",
list10_footer: "Privacy Policy",


verysmalltextfooter: "@2025,DropSaver,AllRightsReservedbyDropSaver",

messages_hedaer: "Contact Messages",

messages_title1:"User Name",
messages_title2:"Email",
messages_title3:"Messages",

hedaer_gallery:"Gallery",
para_gallery:"Discover highlights from our awareness campaign and see how our message came to life through real moments and real people.",
login_hedaerr:"Log In to Your Account",

login_form1:"Email Address:",
login_form2:"Password:",
login_form3:"forgot password",
login_form4:"Remember me",

cta_loginn:"Log in",
 successPopup: {
      title: "Message Sent",
      message: "Thank you for reaching out. Your message has been successfully sent, and we will get back to you as soon as possible.",
      button: "Continue Browsing"
    }


  },

  AR: {
    engHeader: "إنجليزي",
    arabHeader: "عربي",
    loginHeader: "تسجيل الدخول",
    list1Header: "الرئيسية",
    list2Header: "إحصائيات",
    list3Header: "اتصال",
    list4Header: "معرض",
    list5Header: "الرسائل",
    smallTextSec1: "وفر الماء اليوم من أجل غد عطشان.",
    bigTextSec1: "كل قطرة مهمة!",
    paraSec1: "الهدر في الماء أصبح مشكلة خطيرة، والعديد من الناس لا يدركون مدى سرعة استهلاك العادات اليومية الصغيرة لمواردنا المحدودة. كل قطرة نوفرها تحمي مستقبلنا.",
    para2Sec1: "تشجع هذه الحملة الجميع على استخدام المياه بحكمة وإجراء تغييرات بسيطة تحدث فرقاً حقيقياً. معاً، يمكننا تقليل الهدر والحفاظ على إمداداتنا المائية آمنة للأجيال القادمة.",
    headerSec2: "إحصائيات المياه",
    paraSec2: "عاداتنا في استخدام المياه تشكل العالم من حولنا أكثر مما ندرك. تقدم هذه الإحصائيات لمحة سريعة عن كمية المياه المهدرة يوميًا - وكيف يمكن للتغييرات الصغيرة في السلوك أن تحدث فرقًا كبيرًا.",
    cardsSec2: [
      {
        header: "استخدام المياه بشكل مفرط",
        paragraph: "يحدث معظم الإفراط في الاستخدام لأن الناس غير مدركين لكمية المياه التي تستهلكها المهام اليومية فعليًا. الوعي هو الخطوة الأولى نحو عادات أكثر ذكاءً واستدامة.",
        imgbg: "pic/pic21.png",
        number: "٦٨%" 
      },
      {
        header: "ندرة المياه",
        paragraph: "على مدى العقد الماضي، انخفض توافر المياه في مصر بشكل مستمر بسبب زيادة السكان وتغير المناخ والاستخدام غير الفعال.",
        imgbg: "pic/pic23.png",
        number: "" 
      }
    ],
    title_box3_sec2: "مياه محدودة ",
     paragraph_box3_sec2: "لا يُعدّ سوى جزء صغير من مياه العالم صالحاً للشرب. لذا، فإن حماية هذا المورد المحدود والحفاظ عليه أمرٌ ضروري للمجتمعات والبيئة.",
    orange1:"احتفظ بالمياه",
    orange2:"أكواكير",
 bighaeder_sec3:"الحملة في العمل",

    headerSec4: "اتخذ إجراء اليوم",
    paraSec4: "كل خطوة صغيرة مهمة في الحفاظ على المياه. من خلال إجراء تغييرات بسيطة في حياتك اليومية، يمكنك المساعدة في الحفاظ على هذه الموارد الثمينة.",
    cardsSec4: [
      { title: "إصلاح التسريبات", paragraph: "قم بإصلاح الصنابير والأنابيب المتسربة.", img: "pic/pic31.png" },
      { title: "أغلق ووفّر", paragraph: "أغلق الصنابير وقلّل وقت الاستحمام.", img: "pic/pic32.png" },
      { title: "تجنب رمي النفايات", paragraph: "حافظ على نظافة الأنهار والبحار.", img: "pic/pic33.png" },
    ],
    haedersec4:"اتخذ إجراءً اليوم",
    CTAsec4:"عرض المزيد من التفاصيل",
       paragraphsec4:"كل خطوة صغيرة تُحدث فرقاً في ترشيد استهلاك المياه. من خلال إجراء تغييرات بسيطة في حياتك اليومية، يمكنك المساهمة في الحفاظ على هذا المورد الثمين.",
    sec5Content: [
      {
        header: "هل تعلم؟",
        parag1: "أكثر من 2 مليار شخص حول العالم لا يحصلون على خدمات مياه صالحة للشرب وموثوقة في منازلهم.",
        bg1: "pic/pic36.png", bg2: "pic/pic37.png", bg3: "pic/pic38.png"
      },
      {
        header: "حقيقة المياه",
        parag1: "تستخدم الزراعة حوالي 70٪ من إمدادات المياه العذبة في العالم، مما يجعلها المستهلك الأكبر عالميًا.",
        bg1: "pic/pic43.png", bg2: "pic/pic44.png", bg3: "pic/pic45.png"
      },
      {
        header: "واقع المياه العذبة",
        parag1: "جزء صغير فقط من مياه الأرض عذبة وصالحة للاستخدام البشري، مما يجعل الحفظ أمرًا أساسيًا.",
        bg1: "pic/pic46.png", bg2: "pic/pic47.png", bg3: "pic/pic48.png"
      },
      {
        header: "رؤية المياه",
        parag1: "يعيش حوالي ثلث سكان العالم في مناطق تعاني من ضغط مائي، حيث يكون الطلب قريبًا أو أعلى من المعروض المتاح.",
        bg1: "pic/pic49.png", bg2: "pic/pic50.png", bg3: "pic/pic51.png"
      },
      {
        header: "حقيقة سريعة عن المياه",
        parag1: "إنتاج الأشياء اليومية مثل الملابس والطعام يتطلب كميات كبيرة من المياه، غالبًا أكثر بكثير مما يدركه الناس يوميًا.",
        bg1: "pic/pic52.png", bg2: "pic/pic53.png", bg3: "pic/pic54.png"
      },
      {
        header: "حقيقة المياه",
        parag1: "يمكن للأعمال البسيطة مثل إصلاح التسريبات وتقليل الهدر توفير آلاف اللترات من المياه لكل أسرة كل عام.",
        bg1: "pic/pic55.png", bg2: "pic/pic56.png", bg3: "pic/pic57.png"
      }
    ],
    hedaer_sec6:"اترك لنا رسالة",
     para_sec6:"صوتك مهم. شاركنا أسئلتك أو أفكارك وانضم إلينا في بناء مستقبل تُحفظ فيه كل قطرة ماء.",
    usernamee:"اسم المستخدم الخاص بك",
    emaill:"البريد الإلكتروني الخاص بك",
    messagee:"رسالتك",
    cta_messages:"أرسل رسالة",
 messagePlaceholder:
    "مرحبًا، أود معرفة المزيد عن حملة ترشيد المياه الخاصة بكم وكيف يمكنني المشاركة فيها",
  namePlaceholder: "سلمي ياسر ١٢٣",
 ctaaa_sec5: "حقيقة جديدة",
 para_footer: "تمكين المجتمعات في جميع أنحاء العالم لحماية والحفاظ على أثمن مواردنا.",
list1_footer: "يستكشف",
list2_footer: " الرئيسية",
list3_footer: "معرض",
list4_footer: "رسائل",
list5_footer: "مدونات",
list6_footer: "أخبار",

list7_footer: "قانوني",
list8_footer: "الشروط والأحكام",
list9_footer: "ملفات تعريف الارتباط",
list10_footer: "سياسة الخصوصية",
verysmalltextfooter: "© ٢٠٢٥، دروبسيف، جميع الحقوق محفوظة لدروبسيف",
messages_hedaer: "رسائل الاتصال",

messages_title1:"اسم المستخدم",
messages_title2:"بريد إلكتروني",
messages_title3:"رسائل",

hedaer_gallery:"معرض",
para_gallery:"تؤثر عاداتنا في استخدام المياه على العالم من حولنا أكثر مما نتصور. تقدم هذه الإحصائيات لمحة سريعة عن كمية المياه المفقودة يوميًا، وكيف يمكن لتغييرات بسيطة في السلوك أن تُحدث فرقًا كبيرًا.",
login_hedaerr:"سجل الدخول إلى حسابك",


login_form1:"عنوان البريد الإلكتروني:",
login_form2:"كلمة المرور:",
login_form3:"هل نسيت كلمة السر",
login_form4:"تذكرنى",

cta_loginn:"تسجيل الدخول",

 successPopup: {
      title: "تم إرسال الرسالة",
      message: "شكرًا لتواصلك معنا. تم إرسال رسالتك بنجاح وسنعاود التواصل معك في أقرب وقت ممكن.",
      button: "العودة للتصفح"
    }


  }
};


let currentLang = localStorage.getItem("language") || "EN";

localStorage.setItem("language", currentLang);















// if(localStorage.getItem('loaded')){

// }else{let loaded = true;
//   let title_eng='Every Drop Counts!';
//   let title_arabic='كل قطرة مهمة!';
//   let language= 'EN';

//   localStorage.setItem('loaded',loaded);
//     localStorage.setItem('title_eng',title_eng);
//    localStorage.setItem('title_arabic',title_arabic);
//     localStorage.setItem('language',language);
// }