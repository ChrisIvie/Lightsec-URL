<!doctype html>

<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <meta charset="utf-8">


  <title>LightSec</title>

 <!---- <link rel="stylesheet" href="style.css"> -->

</head>
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#!">LightSec</a>
</nav>

<body>

    
<div class="container">
     <div class="row">
        <div class="col-xs-6">
        <form type="text" name="domain1" method="GET">
        <div class="shadow-sm p-3 mb-5 bg-light rounded" class="card">
        <div class="card-body">
          <h4 id="webDomain" class="card-title"></h4>
          <h6 class="card-subtitle mb-2 text-muted">
                         
            Results: <span id="scanResult" class="badge badge-info"></span></h6>
            Scan Date: <span id="scanDate" class="badge badge-dark"></span><br>


              <p>       
                  <i class="fas fa-info-circle"></i> Scans:<div class="progress">
              
              <div class="progress-bar bg-success" id="progress-total" style="width:">
              </div>
              <div id="progress-dan" class="progress-bar bg-danger" style="width:">
              </div>
              
            </div>
            </p>
            <input class="form-control" type="text" name="domain" placeholder="Domain">
            <br>
              <div class="card card-body">
              <ul id="Scan-result-google" class="list-group-item">
              <img src="img/google.png"  alt="Responsive image">

              <p class="sticky-top" class="font-weight-normal">Google safe browsing

                

              </ul>  
              <ul id="Scan-result-bit" class="list-group-item">
              <img src="img/bit.png"  alt="Responsive image">

              <p class="sticky-top" class="font-weight-normal">BitDefender
                

              </ul>  

              <ul id="Scan-result-sophos" class="list-group-item">
              <img src="img/sophos.png"  alt="Responsive image">

              <p class="sticky-top"  class="font-weight-normal">sophos
                

              </ul> 
              
            </div>
            
          
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Full Scan results
                </button>

                <div class="collapse" id="collapseExample">
              <div class="card card-body">
              <ul id="Scan-result-google" class="list-group-item">

                <p> Coming soon :) but here's the json!
                <div> <?php include('download.php') ?></div>



                

              </ul>  
            </div>

        </div>

        <button class="invisible" >loadResults()</button<>
      </form>
      </div>
      <div class="invisible" id="domResult"> <?php include('download.php') ?></div>
      
  </div>

    <div class="container">
    <div class="row">
        <div class="col-xs-6">
        <div id="daBox" class="shadow-sm p-3 mb-5 bg-light rounded" class="card">
            <div class="shadow-sm p-3 mb-5 bg-light rounded" class="card-body">
              <h4 class="card-title">Recent CVE's</h4>

              <h6 class="card-subtitle mb-2 text-muted">NVD database</h6>
              <div class="card">
                  <span class="border">
                  <div class="card">
                        <div class="card-body">
                      <ul  id="cve-num" class="list-group">
                     
                        </span>
                          
                          
                        </ul>
                  
          
                
              </p>


            
        

            </span>
                
                <p id="description"></p>
                <p id="score"></p>
        </div>
        </div>
    </div>
    </div>
    </div>
  </div>
</nav>

<script src="cve-load.js"></script>
<script src="load-domain.js"></script>
</body>
</html>