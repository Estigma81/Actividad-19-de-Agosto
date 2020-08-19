import "./styles.css";

document.getElementById("app").innerHTML = `
Carro, Santiago Ramírez 11-1 IEFO
`;
class Car {
  constructor(chasis, ruedas, frenos, aceleracion, transmision) {
    this.chasis = chasis;
    this.ruedas = ruedas;
    this.frenos = frenos;
    this.aceleracion = aceleracion;
    this.transmision = transmision;
  }
  Especificaciones() {
    console.log(
      `es un ${this.chasis}, sus ruedas son de estilo ${this.ruedas},sus frenos son ${this.frenos}, acelera de 0 a 100 en ${this.aceleracion} y es de transmisión ${this.transmision}`
    );
    return this;
  }
  Prender() {
    console.log(`El carro se está encendiendo`);
    console.log(`El carro se está calentando`);
    setTimeout(() => console.log(`El carro ya puede arrancar`), 4000);
    return this;
  }
  Acelerar() {
    console.log(`El carro mete el primer cambio`);
    setTimeout(() => console.log(`El carro mete el segundo cambio`), 8000);
    setTimeout(() => console.log(`El carro mete el tercer cambio`), 10000);
    setTimeout(() => console.log(`El carro mete el cuarto cambio`), 12000);
    return this;
  }
  Frenar() {
    setTimeout(
      () => console.log(`El conductor ve a un agente de tránsito`),
      14000
    );
    setTimeout(() => console.log(`El agente lo hace frenar`), 16000);
    return this;
  }
  Apagar() {
    setTimeout(() => console.log(`El conductor madrea al agente`), 20000);
    setTimeout(
      () =>
        console.log(`El agente lo hace bajar del vehículo y apaga el carro`),
      25000
    );
    setTimeout(() => console.log(`El carro está apagado`), 30000);
    return this;
  }
}
const Txl = new Car(
  "TXL 2020 prado",
  "Todoterreno",
  "ABS",
  "11 segundos de 0 a 100",
  "Manual"
);
console.log(Txl.Prender());
console.log(Txl.Acelerar());
console.log(Txl.Frenar());
console.log(Txl.Apagar());
