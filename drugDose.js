var coll = document.getElementsByClassName("collapsible");
            var i;

            for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight){
                content.style.maxHeight = null;
                } else {
                content.style.maxHeight = content.scrollHeight + "px";
                } 
            });
            }

const weightForm = document.getElementById("weight-form");
const weightInput = document.getElementById("weight");
const magnesium = document.querySelector("#magnesium");
const adrenaline = document.querySelector("#adrenaline");
const amiodarone = document.querySelector("#amiodarone");
const defibrillation = document.querySelector("#defibrillation");
const atropine = document.querySelector("#atropine");
const adenosine = document.querySelector("#adenosine");
const cardioversion = document.querySelector("#cardioversion");
const calciumgluconate = document.querySelector("#calciumgluconate");
const fluid = document.querySelector("#fluid");
const glucose = document.querySelector("#glucose");
const bicarb = document.querySelector("#bicarb");

const adrenalinelast = document.querySelector("#adrenalinelast");
const lipidbolus = document.querySelector("#lipidbolus");
const lipidinfusion = document.querySelector("#lipidinfusion");
const lipidinfusionincr = document.querySelector("#lipidinfusionincr");
const lipidbolusrepeat = document.querySelector("#lipidbolusrepeat");
const lipidmax = document.querySelector("#lipidmax");

const dantinibolus = document.querySelector("#dantinibolus");
const dantrepbolus = document.querySelector("#dantrepbolus");
const danttotaldose = document.querySelector("#danttotaldose");
//let dantremainingdose = document.querySelector("#dantremainingdose");





function calculateDoses(event) {
  event.preventDefault();
  const weight = weightInput.value;
  if (weight > 0) {
    adrenaline.textContent = `${(weight * 10)/1000} mg`;
    amiodarone.textContent = `${5 * weight} mg`;
    defibrillation.textContent = `${4 * weight} j`;
    cardioversion.textContent = `${weight} j`;
    atropine.textContent = `${20 * weight} µg`;
    adenosine.textContent = `${(100 * weight)/1000} mg`;
    magnesium.textContent = `${(25 * weight)/1000} - ${(50*weight)/1000} g`;
    calciumgluconate.textContent = `${(weight/2)} ml`;
    fluid.textContent = `${(weight * 10)} ml`;
    glucose.textContent = `${(weight * 2)} ml`;
    bicarb.textContent = `${(weight)} ml`;
    
    adrenalinelast.textContent = `${(weight)} µg`;
    lipidbolus.textContent = `${(weight * 1.5)} ml`;
    lipidinfusion.textContent = `${(weight * 15)} ml/hr`;
    lipidinfusionincr.textContent = `${(weight * 30)} ml/hr`;
    lipidbolusrepeat.textContent = `${(weight * 1.5)} ml`;
    lipidmax.textContent = `${(weight * 10)} ml (VTBI)`;
    
    dantinibolus.textContent = `${(weight * 2.5)}`;
    dantrepbolus.textContent = `${(weight * 1)}`;
    danttotaldose.textContent = `${(weight * 10)}`;
    dantremainingdose.textContent = `${(weight * 10)}`;
  }
  document.getElementById("initial-bolus-btn").disabled = false;
}

let bodyWeight = 0;
            let initialBolus = 0;
            let repeatBoluses = 0;
            let totalDose = 0;
            let remainingDose = 0;
            
            function calculateDantrolene() {
              bodyWeight = document.getElementById("weight").value;
              initialBolus = bodyWeight * 2.5;
              repeatBoluses = bodyWeight * 1;
              totalDose = bodyWeight * 10; 
              remainingDose = totalDose;
            
              document.getElementById("initial-bolus").innerText = initialBolus.toFixed(2);
              document.getElementById("repeat-boluses").innerText = repeatBoluses.toFixed(2);
              document.getElementById("total-dose").innerText = totalDose.toFixed(2);
              document.getElementById("remaining-dose").innerText = remainingDose.toFixed(2);
            
              // Enable initial bolus button
              document.getElementById("initial-bolus-btn").disabled = false;
            }
            
            function subtractInitialBolus() {
              remainingDose -= initialBolus;
              document.getElementById("remaining-dose").innerText = remainingDose.toFixed(2);
            
              // Disable initial bolus button after it's been clicked
              document.getElementById("initial-bolus-btn").disabled = true;
              // Enable repeat bolus button after initial bolus has been administered
              document.getElementById("repeat-boluses-btn").disabled = false;
            }
            
            function subtractRepeatBolus() {
              remainingDose -= repeatBoluses;
              document.getElementById("remaining-dose").innerText = remainingDose.toFixed(2);
            }


weightForm.addEventListener("submit", calculateDoses);



