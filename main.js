class Veiculo {
    constructor(marca, modelo, ano){
        if( new.target === Veiculo){
            throw new Error("Não é possível instanciar a classe abstrata Veiculo diretamente.")
        }
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar(){
        throw new Error("Metodo 'acelerar' deve ser implementado pelas subclasses.");
    }

    frear(){
        throw new Error("Metodo 'frear' deve ser implementado pelas subclasses")
    }

    exibirInformacoes(){
        return `Marca:${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

class Carro extends Veiculo{
    constructor(marca,modelo,ano,cor){
        super(marca,modelo,ano);
        this.cor = cor;
    }

    acelerar(){
        console.log(`O carro ${this.modelo} está acelerando.`);
    }

    frear(){
        console.log(`O carro ${this.modelo} está freando`);
    }

    exibirInformacoes(){
        console.log(`${super.exibirInformacoes()}, Cor ${this.cor}`)
    }
}

class Moto extends Veiculo{
    constructor(marca,modelo,ano,cor){
        super(marca,modelo,ano);
        this.cor = cor;
    }

    acelerar(){
        console.log(`A moto ${this.moto} , está acelerando`);
    }

    frear(){
        console.log(`A moto ${this.moto} está freando`);
    }

    exibirInformacoes(){
        console.log(`${super.exibirInformacoes()}, Cor ${this.cor}`);
    }
}

const CarroDoJoao = new Carro('Fiat','Argo', '2022', 'Vermelho');
const MotoDaMaria = new Moto('Honda','XRE','2023', 'Preta');
const CarroDaJulya = new Carro('Volkswagen', 'Fusca', 1968, 'Azul');
console.log(CarroDoJoao.exibirInformacoes());
console.log(MotoDaMaria.exibirInformacoes());
console.log(CarroDaJulya.exibirInformacoes());

