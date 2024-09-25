import { faker } from "@faker-js/faker/locale/fr";
import { Foot, Position, Prisma, PrismaClient, UserType } from "@prisma/client";
import { randomizer, selectRandomItems } from "../../src/lib/array";

export const seedUsers = async (prisma: PrismaClient) => {
  const users: Prisma.UserCreateInput[] = [];
  for (let i = 0; i < 20; i++) {
    const dbUser = await prisma.user.create({ data: userData() });
    users.push(dbUser);
  }

  return users;
};

const userData = (): Prisma.UserCreateInput => {
  const sexType = faker.person.sexType();
  const person = {
    firstName: faker.person.firstName(sexType),
    lastName: faker.person.lastName(sexType),
  };

  const regularUser = {
    ...person,
    ...{
      email: faker.internet.email(person),
      name: faker.person.fullName(person),
      image: faker.image.avatar(),
      localisation:
        faker.location.latitude() + "," + faker.location.longitude(),
      userType: randomizer([
        UserType.PLAYER,
        UserType.COACH,
        UserType.USER,
        UserType.RECRUITER,
      ]),
    },
  };

  return {
    ...regularUser,
    ...customDataUser(regularUser.userType, sexType),
  } satisfies Prisma.UserCreateInput;
};

function customDataUser(userType: UserType, sexType: String): any {
  switch (userType) {
    case UserType.PLAYER:
      return {
        biography: faker.lorem.paragraph(),
        foot: selectRandomItems([Foot.LEFT, Foot.RIGHT]),
        size: faker.number.int({ min: 150, max: 200 }),
        weight: faker.number.int({ min: 50, max: 100 }),
        license: faker.string.alphanumeric(10),
        birthday: faker.date.past(),
        gender: sexType,
        contract: faker.string.numeric(10),
        position: selectRandomItems([
          Position.GOALKEEPER,
          Position.ATTACKING_MIDFIELDER,
          Position.CENTRE_BACK,
          Position.LEFT_BACK,
          Position.RIGHT_BACK,
          Position.RIGHT_WINGER,
          Position.LEFT_WINGER,
          Position.STRIKER,
          Position.CENTRE_FORWARD,
          Position.CENTRE_MIDFIELDER,
          Position.DEFENSIVE_MIDFIELDER,
        ]),
      };
    case UserType.COACH:
    case UserType.RECRUITER:
      return {
        biography: faker.lorem.paragraph(),
      };
  }
}
