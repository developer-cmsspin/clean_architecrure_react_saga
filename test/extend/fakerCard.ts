import Card from "../../src/domain/home/model/card";
import { faker } from '@faker-js/faker';

export default class FakeCard{
    public static CreateCard():Card{
        let result = new Card();
        result.name = faker.name.firstName();
        result.type = faker.name.jobArea();
        result.attribute = faker.name.prefix();

        return result;
    }
}