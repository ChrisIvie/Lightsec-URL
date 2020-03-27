var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    for(var i = 0; i < myObj.CVE_Items.length; i++) {
      var obj = myObj.CVE_Items[i];
      if (i === 20) { break; }
       //if (document.getElementById("loadMore").onclick) {continue;}
        
    
    //  continue; 
  
      var node = document.createElement("h4");  
      node.className = "card-title";
      cveNum = obj.cve.CVE_data_meta.ID;
      var textnode = document.createTextNode(cveNum);
      node.appendChild(textnode);
      document.getElementById("cve-num").appendChild(node)


      var node2 = document.createElement("span");
      node2.className = "badge badge-danger";
      sev = obj.impact.baseMetricV3.cvssV3.baseSeverity
      var textnode2 = document.createTextNode(sev);
      node2.appendChild(textnode2);
      document.getElementById("cve-num").appendChild(node2)

      var node3 = document.createElement("div")
      node3.className = "alert alert-primary";
      des = obj.cve.description.description_data[0].value
      var textnode3 = document.createTextNode(des);
      node3.appendChild(textnode3);
      document.getElementById("cve-num").appendChild(node3)



      //console.log(des);


      //des = obj.cve.description.description_data.value;
      //document.getElementById("cve-num").innerHTML = cveNum;
      

      //score = obj.impact.baseMetricV3.cvssV3.vectorString;

      //console.log(des)
      //console.log(cveNum)
      //console.log(score)


  }
    //var jclean = JSON.stringify(myObj.CVE_Items);
    //console.log(jclean);
    //console.log(myObj.CVE_Items[0]);
    //console.log(myObj.CVE_Items[0].cve.CVE_data_meta.ID);
    //console.log(myObj.CVE_Items[0].impact.baseMetricV3.cvssV3.baseSeverity);

    //console.log(myObj.CVE_Items[1]);
    //console.log(myObj.CVE_Items[1].cve.CVE_data_meta.ID);
    //console.log(myObj.CVE_Items[1].impact.baseMetricV3.cvssV3);

    //document.getElementById("cve-num").innerHTML = myObj.CVE_Items[0].cve.CVE_data_meta.ID;
    //document.getElementById("score").innerHTML = myObj.CVE_Items[0].impact.baseMetricV3.cvssV3.vectorString;
    //document.getElementById("description").innerHTML = myObj.CVE_Items[0].cve.description.description_data[0].value;





    //des = myObj.CVE_Items[0].cve.description.description_data[0].value
    //for (i in myObj.CVE_Items) {
      //x += "<h1>" + myObj.CVE_Items[i] + "</h1>";
     
    //}

    //for (x in myObj) {
    //document.getElementById("demo").innerHTML += myObj[x];
//}

  }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();