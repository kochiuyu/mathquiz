// Version 1 is fixed so that the paper, key and shared quiz stay in sync.
const quizzes = {
  1: [
    {code:"1N1", prompt:["How many stars are there?","圖中有多少顆星星？"], figure:"stars", choices:["6","7","8"], answer:["7"], why:["Five stars and two more make seven.","5顆星星加2顆，共有7顆。"]},
    {code:"1N2", prompt:["Wai has 4 pencils. Mum gives her 3 more. How many pencils does Wai have now?","小慧有4枝鉛筆，媽媽再給她3枝。小慧現在有多少枝鉛筆？"], choices:["1","6","7"], answer:["7"], why:["4 + 3 = 7 pencils.","4 + 3 = 7（枝）"]},
    {code:"1S2", prompt:["Which shape is a triangle?","哪個圖形是三角形？"], figure:"shapes", choices:["A","B","C"], answer:["B"], why:["B has three straight sides.","B有三條直邊。"]}
  ],
  4: [
    {code:"4N3", prompt:["Select all the factors of 36 in the list.","選出以下所有36的因數。"], choices:["4","6","8","12"], multi:true, answer:["4","6","12"], why:["36 ÷ 4 = 9, 36 ÷ 6 = 6 and 36 ÷ 12 = 3. Dividing by 8 leaves a remainder.","36 ÷ 4 = 9，36 ÷ 6 = 6，36 ÷ 12 = 3。36除以8有餘數。"]},
    {code:"4M1", prompt:["A rectangular noticeboard is 90 cm long and 60 cm wide. How much tape goes around it once?","一塊長方形壁報板長90厘米、闊60厘米。沿四邊貼一圈需要多少厘米膠帶？"], figure:"board", fields:[["cm","厘米"]], answer:[300], why:["90 + 60 + 90 + 60 = 300 cm.","90 + 60 + 90 + 60 = 300（厘米）"]},
    {code:"4D1", prompt:["How many more books did Class A borrow than Class C?","A班比C班多借了多少本書？"], figure:"books", fields:[["books","本"]], answer:[10], why:["Class A borrowed 25 books and Class C borrowed 15. The difference is 25 − 15 = 10 books.","A班借了25本書，C班借了15本，相差25 − 15 = 10（本）。"]}
  ],
  6: [
    {code:"6N3", prompt:["A club has 40 members. Sixteen cycle to school. What percentage cycle to school?","一個學會有40名會員，其中16人踏單車上學。踏單車上學的會員佔百分之幾？"], fields:[["%","%"]], answer:[40], why:["16 ÷ 40 × 100% = 40%.","16 ÷ 40 × 100% = 40%。"]},
    {code:"6M4", prompt:["A ferry travels 18 km in 45 minutes. Express the time in hours, then find its average speed.","一艘渡輪在45分鐘內航行了18公里。先把時間換算為小時，再求平均速率。"], fields:[["hours","小時"],["km/h","公里每小時"]], answer:[0.75,24], why:["45 ÷ 60 = ¾ hour. Average speed = 18 ÷ ¾ = 24 km/h.","45 ÷ 60 = ¾（小時）。平均速率 = 18 ÷ ¾ = 24（公里每小時）。"]},
    {code:"6D1", prompt:["A pupil read 12, 18 and 15 pages over three days. How many pages per day on average?","一名學生在三天內分別閱讀了12、18和15頁。平均每天閱讀多少頁？"], fields:[["pages","頁"]], answer:[15], why:["(12 + 18 + 15) ÷ 3 = 45 ÷ 3 = 15 pages per day.","(12 + 18 + 15) ÷ 3 = 45 ÷ 3 = 15（頁）。"]}
  ]
};
// Version 4 corrects the P6 percentage curriculum label in new fixed output.
// The released version 1 questions and their paper/key files remain unchanged.
function fixedQuiz(year,version="1"){
  const items=quizzes[year]||[];
  return year===6 && version==="4" ? items.map((q,i)=>i===0?{...q,code:"6N4"}:q) : items;
}

