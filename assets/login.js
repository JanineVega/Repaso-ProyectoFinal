window.onload=function(){
  var correo=document.getElementById("correo").value;
  var password=document.getElementById("password").value;
  var objetoCoder = JSON.parse(localStorage.getItem("coderNew"));
  console.log(objetoCoder);
  console.log(objetoCoder.correo);
  console.log(objetoCoder.contrasena);
  document.getElementById("ingresar").addEventListener("click",function(){
    if(objetoCoder.correo==correo && objetoCoder.contrasena==password){
      window.location.href="coderInfo.html";
    }else{
      alert("felicidad");
      document.getElementById("correo").disabled = true;
      document.getElementById("password").disabled = true;
      ingresar.style.display="none";
      mostrar.style.display = "block";
    }
  });

  document.getElementById("ingresar2").addEventListener("click",function(){
    document.getElementById("correo").disabled = false;
    document.getElementById("password").disabled = false;
    ingresar.style.display="block";
    mostrar.style.display = "none";
  });
  document.getElementById("registrese").addEventListener("click",function(){
    window.location.href="registrar.html";

  });

};
