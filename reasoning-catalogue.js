/* Original optional reasoning activities; these are not additional EDB requirements. */
((root)=>{
 const rows=[
 ['tower',1,'1N2','Linked difference towers','相連差數塔','new','C001','NRICH — Find the Difference','https://nrich.maths.org/problems/find-difference'],
 ['shapes',1,'1S2','Different shapes, different reasons','不同圖形，不同理由','teacher','C002','Math Learning Center — Shapes in My Neighborhood','https://mathathome.mathlearningcenter.org/activity/1538'],
 ['digits',2,'2N2','Arrange digits near a target','排列數字接近目標','new','C003','NRICH — Dicey Operations','https://nrich.maths.org/games/dicey-operations'],
 ['sort',2,'2N1','Sort using two properties','按兩種性質分類','new','C004','NRICH — Carroll Diagrams','https://nrich.maths.org/problems/carroll-diagrams'],
 ['clues',3,'3N4','Recover a number chain','找出數鏈','new','C005','NRICH — Fifteen Cards','https://nrich.maths.org/problems/fifteen-cards'],
 ['whole',3,'3N5','Find the reference whole','找出參照整體','new','C006','Illustrative Mathematics — Naming the Whole for a Fraction','https://tasks.illustrativemathematics.org/content-standards/3/NF/A/1/tasks/833'],
 ['garden',4,'4M2','Design a fixed-perimeter garden','設計固定周界花圃','new','C007','NRICH — Changing Areas, Changing Perimeters','https://nrich.maths.org/problems/changing-areas-changing-perimeters'],
 ['chain',4,'4N3','Repair a factor–multiple chain','修補因數倍數鏈','new','C008','NRICH — Factors and Multiples Game','https://nrich.maths.org/games/factors-and-multiples-game'],
 ['operations',5,'5N3','Same fractions, different operations','相同分數，不同運算','new','C009','Illustrative Mathematics — To Multiply Or Not to Multiply, Variation 2','https://tasks.illustrativemathematics.org/content-standards/5/NF/A/tasks/2077'],
 ['cube',5,'5S2','Deduce cube-face relationships','推斷正方體面的關係','new','C010','NRICH — A Puzzling Cube','https://nrich.maths.org/problems/puzzling-cube'],
 ['mean',6,'6D1','Build data for a target mean','按指定平均數組成數據','extension','C011','NRICH — Hunting for Averages','https://nrich.maths.org/problems/hunting-averages'],
 ['match',6,'6N3','Match fractions, decimals and percentages','配對分數、小數及百分數','extension','C012','NRICH — Doughnut Percents','https://nrich.maths.org/problems/doughnut-percents']
 ];
 const topics=rows.map(([id,grade,unit,en,zh,kind,candidate,source,url])=>({id,grade,unit,label:[en,zh],kind,candidate,source,url}));
 root.MathQuizReasoningCatalogue=topics;
 if(typeof module!=='undefined')module.exports=topics;
})(typeof window!=='undefined'?window:globalThis);
