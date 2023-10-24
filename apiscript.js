// Function to fetch and display data from the API

async function fetchData() {
  const apiURL = 'http://controlforestal.pablocanales.info/api/despachos/search?token=dq02SQSq4oruM7SedTgwb4rEB7Bp9QZ4&order_by=fecha_ingreso&order_dir=desc&metros=true&desde=2023-03-01&hasta=2023-17-09';

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    let arreglox = [];
    let arr_despachos_semana = [];
    var date = new Date();

    if (response.ok) {
      const despachosList = document.getElementById('despachos-list');

      let first_day_of_the_week = new Date(date_today.setDate(date_today.getDate()
        - date_today.getDay()+1 ));
      first_day_of_the_week.setHours(00, 00, 1);
      let last_day_of_the_week = new Date(date_today.setDate(date_today.getDate()
        - date_today.getDay() + 7));
      last_day_of_the_week.setHours(23, 59, 59);


      let metros_lunes = 0;
      let metros_martes = 0;
      let metros_miercoles = 0;
      let metros_jueves = 0;
      let metros_viernes = 0;
      let metros_sabado = 0;
      let metros_domingo = 0;

      let metros_maihue = 0;
      let metros_colpo = 0;
      let metros_km10 = 0;
      let metros_aravena = 0;
      let metros_cherquenco = 0;
      let metros_lumber = 0;

      let iteracion = 0;

      let conttt = 0;
      data.forEach((despacho) => {
       
        arreglox.push(despacho.fecha_ingreso);
        let fecha = new Date(despacho.fecha_ingreso)
        
        if (( fecha >= first_day_of_the_week)&&(fecha <= last_day_of_the_week)){
          
          // console.log(despacho.numero_guia_despacho+' '+despacho.fecha_ingreso.toString().substring(0, 10 )+' '+despacho.destino+' '+despacho.total_metros);
          
          // if (despacho.destino.trim()=='Maihue'){
          //   conttt=conttt+despacho.total_metros;
          //   console.log('CONTT '+conttt)
          //   metros_maihue=metros_maihue+despacho.total_metros;
          //   console.log('MAIHUE');
  
          // }

          arr_despachos_semana.push(despacho);
          switch(fecha.getDay()){
            case 1: metros_lunes=metros_lunes+despacho.total_metros;
            break;
            case 2: metros_martes=metros_martes+despacho.total_metros;
            break;
            case 3: metros_miercoles=metros_miercoles+despacho.total_metros;
            break;
            case 4: metros_jueves=metros_jueves+despacho.total_metros;
            break;
            case 5: metros_viernes=metros_viernes+despacho.total_metros;
            break;
            case 6: metros_sabado=metros_sabado+despacho.total_metros;
            break;
            case 7: metros_domingo=metros_domingo+despacho.total_metros;
            break;
          }

          switch(despacho.destino.trim()){
            case 'Maihue': metros_maihue=metros_maihue+despacho.total_metros;
            break;
            case 'Km10': metros_km10=metros_km10+despacho.total_metros;
            break;
            case 'Colpo': metros_colpo=metros_colpo+despacho.total_metros;
            break;
            case 'Lumber': metros_lumber=metros_lumber+despacho.total_metros;
            break;
            case 'Aravena': metros_aravena=metros_aravena+despacho.total_metros;
            break;
            case 'Cherquenco': metros_cherquenco=metros_cherquenco+despacho.total_metros;
            break;
          }  

          

            // console.log('Lunes: '+metros_lunes);
            // console.log('Martes: '+metros_martes);
            // console.log('Miercoles: '+metros_miercoles);
            // console.log('Jueves: '+metros_jueves);
            // console.log('Viernes: '+metros_viernes);
            // console.log('Sabado: '+metros_sabado);
            // console.log('Domingo: '+metros_domingo);
          // console.log(arr_despachos_semana[iteracion]);
        } 


        /* TABLA DE ULTIMOS DESPACHOS */
        if (iteracion == 0) {
          let myElement1 = document.getElementById("desp_1_1");
          myElement1.innerHTML = despacho.numero_guia_despacho;
          let myElement2 = document.getElementById("desp_1_2");
          myElement2.innerHTML = despacho.numero_guia_sii;
          let myElement3 = document.getElementById("desp_1_3");
          myElement3.innerHTML = despacho.fecha_ingreso.toString().substring(0, 10 );
          let myElement4 = document.getElementById("desp_1_4");
          myElement4.innerHTML = despacho.destino;
          let myElement5 = document.getElementById("desp_1_5");
          myElement5.innerHTML = parseFloat(despacho.total_metros).toFixed(2);
          //myElement = document.getElementById("desp_1_2");
          //myElement.innerHTML = despacho.numero_guia_sii;
        }
        if (iteracion == 1) {
          let myElement1 = document.getElementById("desp_2_1");
          myElement1.innerHTML = despacho.numero_guia_despacho;
          let myElement2 = document.getElementById("desp_2_2");
          myElement2.innerHTML = despacho.numero_guia_sii;
          let myElement3 = document.getElementById("desp_2_3");
          myElement3.innerHTML = despacho.fecha_ingreso.toString().substring(0, 10 );
          let myElement4 = document.getElementById("desp_2_4");
          myElement4.innerHTML = despacho.destino;
          let myElement5 = document.getElementById("desp_2_5");
          myElement5.innerHTML = parseFloat(despacho.total_metros).toFixed(2);
        }
        if (iteracion == 2) {
          let myElement1 = document.getElementById("desp_3_1");
          myElement1.innerHTML = despacho.numero_guia_despacho;
          let myElement2 = document.getElementById("desp_3_2");
          myElement2.innerHTML = despacho.numero_guia_sii;
          let myElement3 = document.getElementById("desp_3_3");
          myElement3.innerHTML = despacho.fecha_ingreso.toString().substring(0, 10 );
          let myElement4 = document.getElementById("desp_3_4");
          myElement4.innerHTML = despacho.destino;
          let myElement5 = document.getElementById("desp_3_5");
          myElement5.innerHTML = parseFloat(despacho.total_metros).toFixed(2);
        }

        

        iteracion=iteracion+1;
        
     



        //console.log('Metros: ' + despacho.numero_guia_despacho)
        //console.log(`The first date of the week is: ${first_day_of_the_week}`);
        /*else{
          const listItem = document.createElement('li');
          switch(fecha.getDay()){
          case 1: diasemana="Lunes";
          if ((fecha >= first_day_of_the_week)&&(fecha <= last_day_of_the_week)){
            cont_lunes=cont_lunes+despacho.metros_duros;
            //console.log(cont_lunes);
            
          }   
                          
         
          case 3: diasemana="Miercoles"; break;
          case 4: diasemana="Jueves"; break;
          case 5: diasemana="Viernes"; break;
          case 6: diasemana="Sabado"; break;
          case 7: diasemana="Domingo"; break;
        }
         
        
        fecha=fecha.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});    
        listItem.textContent = `Guía: ${despacho.numero_guia_despacho}, Fecha: ${fecha} Metros: ${despacho.metros_duros}, Rodal: ${despacho.rodal}`;
        despachosList.appendChild(listItem);
            contador_m3=contador_m3 + 1} */
      
          }
      
      )
      
      console.log('Maihue: '+' '+metros_maihue);
      console.log('Km 10: '+' '+metros_km10);
      console.log('Colpo: '+' '+metros_colpo);
      console.log('Aravena: '+' '+metros_aravena);
      console.log('Lumber: '+' '+metros_lumber);
      console.log('Cherquenco: '+' '+metros_cherquenco);
      

      
    } else {
      console.error(`Error: ${response.status} - ${data.message}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchData function when the page loads
window.addEventListener('load', fetchData);

let date_today = new Date();


console.log(`The current day index of the week is: ${date_today.getDay()}`);


console.log(`The current date of the week is: ${date_today.getDate()}`);




//console.log(`The first date of the week is: ${first_day_of_the_week}`);
//console.log(`The last day of the week is: ${last_day_of_the_week}`);
