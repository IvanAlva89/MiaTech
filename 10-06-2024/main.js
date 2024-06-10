const listPersons = '[{"name":"John", "profession":"Astronautic"}, {"name":"Louis", "profession":"Engineer"}, {"name":"Mathew", "profession":"Writer"}]';

const parsePersons = JSON.parse(listPersons);

parsePersons.push({name: "Elisabetta", profession: "Housewife"});

console.log(JSON.stringify(parsePersons));
