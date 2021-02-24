	
	var form = document.getElementById("form")
		result  = document.getElementById("result");

function calculate()
{ 
    var str="";
    var name="";
    name = document.NumCalc.yname.value +'\xa0'+ document.NumCalc.mname.value    ; 
    calculate1(name); 
}

function calculate1(name)
{
     var arr1 = ['ا','ب','ت','ث','ج','ح','خ','د','ر','ز','ذ','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','ه','و','ي','ة','ى','ء','أ','ٱ','إ','ئ','ؤ','آ'];
     var arr2 = [1,2,400,500,3,8,600,4,200,7,700,60,300,90,800,9,900,70,1000,80,100,20,30,40,50,5,6,10,5,1,0,1,1,1,10,6,1];
     var str=name;
     var msg="";
     var num1=0;
     var mod1=0
     var flag =0;
     var n = str.length;
     var str1="";
                      
         for(var i=0; i<n; i++)
         {
           msg = str.charAt(i);
           for(var x=0; x<37; x++)
           {
           if(msg == arr1[x]) num1 = num1+ arr2[x];
           }
         }

  mod1 =   num1 % 12;
    str1="اسمك واسم امك الذي ادخلته هو : " + str + ", " + " حاصل الجمع بينهما هو "+num1+"."+"\n"+"الباقي من القسمة هو "+mod1+ " وبالتالي فان  " ; 

if(mod1== 0) str1 = str1+ "  وبالتالي فان البرج الباطني هو الحوت وكوكبك هوالمشتري  وعنصر برجك مائي."
if(mod1== 1) str1 = str1+ "برجك الباطني هو الحمل وكوكبك هو المريخ  وعنصر برجك ناري ."
if(mod1== 2) str1 = str1+ "برجك الباطني هو الثور وكوكبك هو الزهرة  وعنصر برجك ترابي ."
if(mod1== 3) str1 = str1+ "برجك الباطني هو الجوزاء وكوكبك هو عطارد  وعنصر برجك هوائي."
if(mod1== 4) str1 = str1+ "برجك الباطني هو السرطان وكوكبك هو القمر وعنصر برجك مائي."
if(mod1== 5) str1 = str1+ "برجك الباطني هو الأسد وكوكبك هو الشمس وعنصر برجك ناري."
if(mod1== 6) str1 = str1+ "برجك الباطني هو العذراء وكوكبك هو عطارد  وعنصر برجك ترابي."
if(mod1== 7) str1 = str1+ "برجك الباطني هو الميزان وكوكبك هو الزهرة  وعنصر برجك هوائي."
if(mod1== 8) str1 = str1+ "برجك الباطني هو العقرب وكوكبك هو المريخ  وعنصر برجك مائي."
if(mod1== 9) str1 = str1+ "برجك الباطني هو القوس وكوكبك هو المشتري  وعنصر برجك ناري. "
if(mod1== 10) str1 = str1+ "برجك الباطني هو الجدي وكوكبك هو زحل  وعنصر برجك ترابي."
if(mod1== 11) str1 = str1+ "برجك الباطني هو الدلو وكوكبك هو زحل  وعنصر برجك هوائي."
if(mod1== 12) str1 = str1+ "برجك الباطني هو الحوت وكوكبك هو المشتري  وعنصر برجك مائي."

     document.NumCalc.b14.value = str1;
	 document.NumCalc.b15.value = mod1;
	 document.NumCalc.b16.value = num1;
	
	var y = document.getElementById("textbox2").value;
   
	if (y == 0 || y == 12) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/pisces11.png">';document.getElementById("details").innerHTML = '<a href="go:brg12">لتعرف تفاصيل برج الحوت اضغط هنا</a>';}
	if (y == 1) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/aries410.png">';document.getElementById("details").innerHTML = '<a href="go:brg11">لتعرف تفاصيل برج الحمل اضغط هنا</a>';}
	if (y == 2) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/taurus11.png">';document.getElementById("details").innerHTML = '<a href="go:brg10">لتعرف تفاصيل برج الثور اضغط هنا</a>';}
	if (y == 3) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/gemini11.png">';document.getElementById("details").innerHTML = '<a href="go:brg9">لتعرف تفاصيل برج الجوزاء اضغط هنا</a>';}
	if (y == 4) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/cancer11.png">';document.getElementById("details").innerHTML = '<a href="go:brg8">لتعرف تفاصيل برج السرطان اضغط هنا</a>';}
	if (y == 5) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/lion410.png">';document.getElementById("details").innerHTML = '<a href="go:brg7">لتعرف تفاصيل برج الاسد اضغط هنا</a>';}
	if (y == 6) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/virgo410.png">';document.getElementById("details").innerHTML = '<a href="go:brg6">لتعرف تفاصيل برج العذراء اضغط هنا</a>';}
	if (y == 7) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/libra410.png">';document.getElementById("details").innerHTML = '<a href="go:brg5">لتعرف تفاصيل برج الميزان اضغط هنا</a>';}
	if (y == 8) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/scorpi11.png">';document.getElementById("details").innerHTML = '<a href="go:brg4">لتعرف تفاصيل برج العقرب اضغط هنا</a>';}
	if (y == 9) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/sagitt12.png">';document.getElementById("details").innerHTML = '<a href="go:brg3">لتعرف تفاصيل برج القوس اضغط هنا</a>';}
	if (y == 10) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/capric12.png">';document.getElementById("details").innerHTML = '<a href="go:brg2">لتعرف تفاصيل برج الجدي اضغط هنا</a>';}
	if (y == 11) {document.getElementById("logo").innerHTML = '<img src=\"https://i77.servimg.com/u/f77/18/98/87/51/aquari11.png">';document.getElementById("details").innerHTML = '<a href="go:brg1">لتعرف تفاصيل برج الدلو اضغط هنا</a>';}
  

}
