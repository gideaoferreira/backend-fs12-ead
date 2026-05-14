const firstNamesMale = [
  "João", "Carlos", "Pedro", "Lucas", "Mateus",
  "Gabriel", "Rafael", "Felipe", "Bruno", "Thiago"
];

const firstNamesFemale = [
  "Maria", "Ana", "Juliana", "Fernanda", "Patricia",
  "Camila", "Larissa", "Amanda", "Beatriz", "Mariana"
];

const lastNames = [
  "Silva", "Souza", "Oliveira", "Santos",
  "Lima", "Costa", "Pereira", "Rodrigues",
  "Almeida", "Ferreira"
];

const statuses = ["active", "inactive", "block"];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate() {
  const start = new Date(1970, 0, 1);
  const end = new Date(2005, 0, 1);

  const date = new Date(
    start.getTime() +
      Math.random() * (end.getTime() - start.getTime())
  );

  return date.toISOString().split("T")[0];
}

export const users = Array.from({ length: 300 }).map((_, index) => {
  const gender = Math.random() > 0.5 ? "Masculino" : "Feminino";

  const name =
    gender === "Masculino"
      ? randomItem(firstNamesMale)
      : randomItem(firstNamesFemale);

  const lastName = randomItem(lastNames);

  return {
    name,
    lastName,
    email: `${name.toLowerCase()}.${lastName.toLowerCase()}${index}@hotmail.com`,
    birthDate: randomDate(),
    gender,
    status: randomItem(statuses)
  };
});