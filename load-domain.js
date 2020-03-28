$(document).ready(function() {
    //Var for getting domain results from domresult DIV
    var data = $.parseJSON($("#domResult").html());
     console.log(data);
     console.log(data.resource)
     console.log(data.positives)
     
     
    //Create card body
     var node = document.createElement("a");  
      node.className = "card-title";
      webtitle = data.resource;
      var textnode = document.createTextNode(webtitle);
      node.appendChild(textnode);
      document.getElementById("webDomain").appendChild(node)

      //Create Kaspersky result
      var node2 = document.createElement("a");  
      node2.className = "badge-info";
      scanResult = data.scans.Kaspersky.result;
      var textnode = document.createTextNode(scanResult);
      node2.appendChild(textnode);
      document.getElementById("scanResult").appendChild(node2)

      //Create card text for scan date
      var node3 = document.createElement("a");  
      node3.className = "card-text";
      scanResult = data.scan_date;
      var textnode = document.createTextNode(scanResult);
      node3.appendChild(textnode);
      document.getElementById("scanDate").appendChild(node3)

      //Create google result
      var node4 = document.createElement("span");  
      node4.className = "badge badge-dark";
      scanInfoGoogle = data.scans['Google Safebrowsing'].result;
      console.log(scanInfoGoogle)
      var textnode = document.createTextNode(scanInfoGoogle);
      node4.appendChild(textnode);
      document.getElementById("Scan-result-google").appendChild(node4)

      //Create BitDefender result
      var node5 = document.createElement("span");  
      node5.className = "badge badge-dark";
      scanInfoBit = data.scans.BitDefender.result;
      console.log(scanInfoBit)
      var textnode = document.createTextNode(scanInfoBit);
      node5.appendChild(textnode);
      document.getElementById("Scan-result-bit").appendChild(node5)

      // Create Sophos report
      var node6 = document.createElement("span");  
      node6.className = "badge badge-dark";
      scanInfosophos = data.scans.Sophos.result;
      console.log(scanInfosophos)
      var textnode = document.createTextNode(scanInfosophos);
      node6.appendChild(textnode);
      document.getElementById("Scan-result-sophos").appendChild(node6)

      document.getElementById("progress-total").innerHTML = data.total;

      console.log(scanResult)

      //Create graph for positives
      document.getElementById("progress-dan").style.width = data.positives + 25 + "px";
      console.log(data.postitives)
      
      document.getElementById("progress-dan").innerHTML = data.positives;
      document.getElementById("progress-total").style.width = data.total + "px";

});
