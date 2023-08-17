const describe_city = (city: string = "Lahore",country: string = "Pakistan"): void => {
  console.log(`${city} is in ${country}`);
};

describe_city("Karachi");
describe_city("Multan");
describe_city("Paris", "France");
