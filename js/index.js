

var firebaseConfig = {
          apiKey: "AIzaSyA3YltChWDcrQjZhgrv5O_df5VeA1CcVRo",
          authDomain: "emailaut-8374c.firebaseapp.com",
          databaseURL: "https://emailaut-8374c.firebaseio.com",
          projectId: "emailaut-8374c",
          storageBucket: "emailaut-8374c.appspot.com",
          messagingSenderId: "441619242876",
          appId: "1:441619242876:web:b77ee0cdc13ee5ee8ecef9"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
  }//end show
  // low api count
  function getcount()
  {
                var xhrhr = new XMLHttpRequest();
                 xhrhr.open("GET", "https://lowapi.herokuapp.com/count");
   
                 xhrhr.send()
  }
  getcount()
   //and low
   //get element 
    const selectElement = document.getElementById('cho');
  
    const lead=document.getElementById("ld")
    var bu=document.getElementById("btn")
//root intialise
  var root1="https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/2513799b-9d19-40ab-b66d-053d045afb4f/v1/environments/0d630b27-86da-4b56-b899-2945feb51293/collections/d704429d-0d6d-47f1-b090-c1c33786fa74/query?version=2018-12-03&deduplicate=false&highlight=true&passages=true&passages.count=5&highlight=true&natural_language_query=";
  var root="https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/0a066d2f-fa76-468e-8beb-c59dd3fa3c77/v1/environments/76fc9c9e-ddaf-4816-bdeb-fac8707fed58/collections/4ddc195e-ba79-4efe-b80f-be8baca0ccb2/query?version=2018-12-03&deduplicate=false&highlight=true&passages=true&passages.count=5&natural_language_query=";
  var index=0
  //  chang value handler
  selectElement.addEventListener('change', (event) => {
            root=event.target.value
             var x = document.getElementById("cho").selectedIndex;
            var y = document.getElementById("cho").options;
            index=x
            console.log(x)
            console.log(y[x].text)
            document.getElementById("title").innerHTML=y[x].text
  });
//handler query   
const queryString = window.location.search
var urlParams=null;
if(queryString!="")
{
    urlParams = new URLSearchParams(queryString);
    const word = urlParams.get('search');
	
    var st=document.getElementById("srt")
    if(word!=null)
    {
        st.value=word;
    serch()
    }
    
}
else
{
	var st=document.getElementById("srt")
	st.value="تنزيل ابناء البنت"
	serch()
}
//end handler query

  bu.addEventListener("click",serch)
  // clear function

  function rovove(res)
  {
                var child = res.lastElementChild; 
                while (child) { 
                     res.removeChild(child); 
              child = res.lastElementChild; 
} 
          }//delete child
//save search database
function save_search(val)
{
    let database = firebase.database();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
        let ref = database.ref('searchs');
        ref.push({searchfor:st.value,date:dateTime})  

}
//function save search in url 
function save_search_url(val)
{
    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search);
        searchParams.set("search",val);
        var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
        history.pushState(null, '', newRelativePathQuery);
    }
}
//main search function
function clean_alert()
{
    vir=document.getElementById("vir")
    vir.innerHTML=""
    vir.className=""
}
function alert(msg)
{
    vir=document.getElementById("vir")
    vir.innerHTML=msg
    ld.className=""
    vir.className ="alert alert-danger"
}


  function createhidediv(text)
  {
    var hid_div=document.createElement("Div")
    hid_div.innerHTML=text
    hid_div.style="display:none"
    hid_div.classList.add("white-space-pre");
    hid_div.border = " solid #0000FF"
    hid_div.id="hid"
    return hid_div
  }
  function creatbuttohid()
  {
    var but_to_hid=document.createElement('Button');
    var but_text=document.createTextNode("إظهار-اخفاء القرار");
    but_to_hid.className="btn btn-primary"
    but_to_hid.show=true
    but_to_hid.appendChild(but_text)
    return but_to_hid

  }
 
  function handel_button_hide_click(event)
  {
    var nepage=document.getElementById("dt")
    var childs=event.target.parentElement.children
    childs= Array.from(childs);

       for (i in childs)
       {
           if(childs[i].id=="hid")
           {
                               nepage.innerHTML=childs[i].innerHTML


           }
       }
       var page=document.getElementById("Page1")
   nepage.parentElement.style.display="block"
   page.style.display="none"

    
  }
  function creat_div_show(res)
  {
    var btn = document.createElement("Div"); 
    var hid_div=createhidediv(res.text)
        


         
    var but_to_hid=creatbuttohid()
    but_to_hid.addEventListener("click",handel_button_hide_click
         //end function
                                 )//end add event

         

    btn.innerHTML = res.highlight.text+"<br><br>"; 

    btn.appendChild(but_to_hid)// Insert text
    btn.appendChild(hid_div)
    return btn
  }

  function serch()
  {
      //mack search class
    ld.className="loader "
    //get value to search 
  var st=document.getElementById("srt")
  //in not null 
  if(st.value!="")
  {
    
    //save search
    save_search(st.value)
    save_search_url(st.value)
      //alert button romove
  
  var bout=document.getElementById("boutom")
  var res=document.getElementById("resp")
  var pes=document.getElementById("pesp")
  rovove(res)
  rovove(pes)
  
  
  var xhr = new XMLHttpRequest();
  //on return request 
  
  

xhr.onload = function(e) {
                             ld.className=""
     
                     if (this.readyState === 4) {
             
                      var json=JSON.parse(e.target.responseText);
              
              
                     if(index<2)
                    {
                         for(i=0;i<json.results.length;i++)
                         {
              
              
              
              
              
                        var btn = creat_div_show(json.results[i])
                        pes.appendChild(btn);  
              
                       }//end for
              }//end if
              else
              {
              var btn = document.createElement("Div");
              
              btn.innerHTML = json.hello; 
              res.appendChild(btn); 
              }
              
          }
      };
      
    xhr.open("GET", root+st.value);
    if(index==0)
        xhr.setRequestHeader("Authorization", "Basic " + btoa("apikey:qZTcH9krS6FERMAT1tCG4FhzEThQ_onGetY9OBkiKWKH"));
    if(index==1)
        xhr.setRequestHeader("Authorization", "Basic " + btoa("apikey:eE2buJm65mc_FtHzbhlV0M-sgrnp8cGuLrsrLCxZoPvo"));
  xhr.send()
  }//en if value
  else
  {
  alert("لم تقم بادخال اي شيء")
  }
  }
  
  

      
  